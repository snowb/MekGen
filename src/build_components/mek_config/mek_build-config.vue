<template>
  <!--- need side menu for selecting configurations saved to mek, pass by selectedData --->
  <div class="mek-inline-flex-row">
    <mek-side-menu
      title="Configs" format="full"
      :list="true" :sections="configuration_list" :collapsible="true"
      :clickable="true" :selected-item="working_uuid"
      @side-menu-clicked="load_config"
    ></mek-side-menu>
    <div class="mek-inline-flex-col">
      <mek-component-name
        :new-component="newComponent" :component-name="computedComponentName" 
        :component-changed="component_changed"
        @update-component-name="updateComponentName"
      ></mek-component-name>
      <mek-sub-component-table
        name="Configuration" flow="dropdown-pkey" pkey="config"
        :items="configurationForms" :show-headers="true" :headers="headers"
        :selected-keys="selectedConfigPkey" :key="'msc-'+configurationForms.length"
        @update-selected-data="select_config"
      ></mek-sub-component-table>
      <!--- frame component ? --->
      <mek-save-reset-component style="align-self:baseline;"
        @save-reset-component="saveResetComponent"
        :activeButtons="activeButtons"
      ></mek-save-reset-component>
    </div>
  </div>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin";
import {configurationsList, filteredConfigurationsList, updateConfigurationsList, updateBaseConfiguration}
  from "@/data_table_modules/build_config/mek_build-config-module";

export default {
  name: "mek-build-config",
  components: {
    "mek-sub-component-table": () =>
      import(/* webpackChunkName: "mek_sub-component-table" */ "@/app_components/universal/mek_sub-component-table.vue"),
    "mek-save-reset-component": () =>
      import(/* webpackChunkName: "mek-save-reset-component" */ "@/app_components/universal/mek-save-reset-component.vue"),
    "mek-component-name": () =>
      import(/* webpackChunkName: "mek-component-name" */ "@/app_components/universal/mek-component-name.vue"),
    "mek-side-menu": () =>
      import(/* webpackChunkName: "mek_side-menu" */ "@/app_components/mek_side_menu/mek_side-menu.vue")
  },
  props: ["selectedData"],
  mixins: [utility_mixin],
  data: () => {
    let obj = {};
    obj.configurationFormsList = configurationsList;
    obj.headers = { config: "Form", cost: "Cost" };
    obj.selected_configuration = JSON.parse(JSON.stringify(filteredConfigurationsList[0]));
    obj.working_configurations = {};
    obj.component_name = null;
    obj.working_uuid = null;

    obj.component_changed = false;
    obj.newComponent = false;
    return obj;
  },
  methods:
  {
    updateComponentName(_name)
    {
      this.component_name = _name;
      this.component_changed = true;
    },
    /**
     * 
     * needs fix
     * 
     * adding additional configs with multiple servos
     * then changing base_config to one with elss servos
     * generates error as additional configs are invalid
     * 
     * need to either change 'more servos' config to base_config
     * or delete invalid configs
     * 
     */
    select_config(_config)
    {
      let name = this.selected_configuration ? this.selected_configuration.name : null;
      let base_config=this.selected_configuration ? this.selected_configuration.base_config : false;
      //let config = this.selected_configuration ? this.selected_configuration.config : null;
      this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(_config)));
      this.selected_configuration.name = name;
      if(base_config)
      {
        this.selected_configuration.base_config = true;
        if(_config.config!=this.selected_configuration.config)
        {
          updateConfigurationsList(this.selected_configuration);
        }
      }
      this.component_changed = true;
    },
    saveResetComponent(_action)
    {
      let uuid = this.working_uuid
        ? this.working_uuid
        : this.create_short_uuid();
      let temp_config = { uuid: uuid, ...this.selected_configuration };
      if(Object.keys(this.working_configurations).length==0)
      {
        temp_config.base_config=true;
      }
      temp_config.name = this.component_name;
      switch (_action) {
        case "save":
          this.working_configurations[uuid] = temp_config;
          this.working_uuid = uuid;
          this.$emit("saveSelectedData", "config", this.working_configurations);
          this.newComponent = false;
          this.component_changed = false;
          break;
        case "reset":
          if (this.working_uuid) {
            this.$set(this,"selected_configuration",temp_config);
            break;
          }
        // eslint-disable-next-line
        case "delete":
          if (this.working_uuid) {
            //this.$delete(this,"working_configurations",uuid);
            delete this.working_configurations[uuid];
            this.$emit(
              "saveSelectedData",
              "config",
              this.working_configurations
            );
          }
        // eslint-disable-next-line
        case "new":
          this.working_uuid = null;
          this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.filtered_configuration_list[0])));
          //this.$set(this,"selected_configuration",null);
          this.newComponent = true;
          this.component_changed = true;
          break;
      }
    },
    load_config(_config)
    {
      switch (true) {
        case _config == "" && this.working_uuid === null:
          this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.filtered_configuration_list[0])));
          //this.$set(this,"selected_configuration",null);
          break;
        case _config == "":
          this.$set(this,"selected_configuration",this.working_configurations[this.working_uuid]);
          break;
        default:
          this.$set(this,"selected_configuration",this.working_configurations[_config]);
          this.working_uuid = _config;
          this.newComponent = false;
          this.component_changed = false;
      }
    },
  },
  computed: 
  {
    selectedConfigPkey()
    {
      let pkey= this.selectedData===undefined ? ["Humanoid"]
              : this.selected_configuration!==null ? [this.selected_configuration.config]
              : this.configurationForms.length>0 ? [this.configurationForms[0].config]
              : ["Humanoid"];
      return pkey;
    },
    configuration_list()
    {
      if (
        this.selectedData === undefined ||
        Object.keys(this.selectedData).length == 0
      ) {
        return {};
      }
      let obj = Object.keys(this.working_configurations).reduce((_obj, _el) => {
        _obj[_el] = this.working_configurations[_el].name
          ? this.working_configurations[_el].name
          : this.working_configurations[_el].config;
        _obj[_el] += this.working_configurations[_el].base_config ? " (Base)": "";
        return _obj;
      }, {});
      if (this.working_uuid === null && Object.keys(this.working_configurations).length==0) {
        //triggering on 'new' ... 
        this.working_uuid = Object.keys(this.working_configurations)[0];
        this.$set(this,"selected_configuration",this.working_configurations[this.working_uuid]);
        this.component_changed = false;
        this.newComponent = false;
      }
      return obj;
    },
    configurationForms()
    {
      switch(true)
      {
        case this.selectedData === undefined:
        case Object.keys(this.selectedData).length == 0:
        case this.selected_configuration && this.selected_configuration.base_config:
          return configurationsList;
      }
      return filteredConfigurationsList;
    },
    base_config_key()
    {
      if (
        this.selectedData === undefined ||
        Object.keys(this.selectedData).length == 0
      ) {
        return null;
      }
      let first_config_key = Object.keys(this.working_configurations)[0];
      let base_config_key = null;
      for (let config in this.working_configurations) {
        if (this.working_configurations[config].base_config) {
          base_config_key = config;
        }
      }
      return base_config_key === null ? first_config_key : base_config_key;
    },
    base_configuration()
    {
      if(this.base_config_key===null)
      {
        return null;
      }
      return this.working_configurations[this.base_config_key];
    },
    filtered_configuration_list()
    {
      return filteredConfigurationsList;
    },
    activeButtons()
    {
      return "save,reset,new" + (this.working_uuid !== null ? ",delete" : "");
    },
    computedComponentName()
    {
      let name= this.component_name!==null ? this.component_name 
              : this.selected_configuration!==null && this.selected_configuration!==undefined ? this.selected_configuration.config
              : this.configurationForms.length>0 ? this.configurationForms[0].config
              : "dunno" ;
      return name;
    }
  },
  watch:
  {
    selectedData:
    {
      immediate: true,
      handler(_new) 
      {
        let working_configs = JSON.parse( JSON.stringify(this.selectedData || {}) );
        this.$set(this,"working_configurations",working_configs);
        let config_count=_new ? Object.keys(_new).length : 0;
        if (_new === undefined || config_count == 0 || _new===null)
        {
          this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationForms[0])));
          this.working_uuid = null;
          this.component_changed = true;
          this.newComponent = true;
          this.$set(this.selected_configuration, "base_config", true);
        }
        else
        {
          let updated_configs=updateBaseConfiguration(working_configs);
          working_configs=updated_configs.configurations;
          updateConfigurationsList(working_configs[updated_configs.base_config_uuid]);
          this.working_uuid=updated_configs.base_config_uuid;
          this.load_config(updated_configs.base_config_uuid);
        }        
      }
    },
    /* selected_configuration:
    {
      deep: true,
      immediate: true,
      handler: function(_new, _old) {
        console.log("new", JSON.stringify(_new), "old", JSON.stringify(_old));
      }
    } */
  }
};
</script>

<style scoped>
</style>
