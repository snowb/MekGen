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
      <mek-save-reset-component
        @save-reset-component="saveResetComponent"
        :activeButtons="activeButtons"
      ></mek-save-reset-component>
    </div>
  </div>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin";
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
    obj.configurationFormsList =
    [
      //wildly incomplete
      //needs to be in its own data module
      //with a separate data module for modifiers
      //for use with custom configs
      {
        config: "Humanoid",
        cost: 0.375,
        hardpoints: ["all"],
        propulsion: ["all"],
        flight_without_propulsion: false,
        no_hands: false,
        modifiers: {
        }
      },
      {
        config: "Tank",
        cost: 0.3,
        propulsion: ["wheels", "treads", "ges", "gravitics"],
          hardpoints: ["torso", "head", "pod", "binder"],
        no_hands: true,
        flight_without_propulsion: false,
        modifiers: {
          maneuver_value: -1,
          armor_stopping_power: +2,
        }
      },
      {
        config: "Avian",
        cost: 0.35,
        propulsion: ["legs", "ges", "thrusters", "gravitics"],
        hardpoints: ["all"],
        no_hands: true,
        flight_without_propulsion: true,
        modifiers:
        {
          maneuver_value: -1,
          melee_damage: +2,
          flight_movement_allowance: +6,
          land_movement_alloance: +0,
        }
      },
      {
        config: "Fighter/Corvette",
        cost: 0.3,
        propulsion: ["ges", "thrusters", "gravitics"],
        hardpoints: ["torso", "pod", "head", "wings", "binder"],
        no_hands: true,
        flight_without_propulsion: false,
        modifiers:
        {
          maneuver_value: -2,
          flight_movement_allowance: "x2",
          minimum_flight_movement_alloance: 4,
          land_movement_alloance: +0,
        }
      }
    ];
    obj.headers = { config: "Form", cost: "Cost" };
    obj.selected_configuration = null;//JSON.parse(JSON.stringify(obj.configurationFormsList[0]));
    obj.working_configurations = {};
    obj.component_name = null;
    obj.working_uuid = null;

    obj.component_changed = true;
    obj.newComponent = true;
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
          this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationForms[0])));
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
          //this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationFormsList[0])));
          this.$set(this,"selected_configuration",null);
          break;
        case _config == "":
          this.$set(this,"selected_configuration",this.selectedData[this.working_uuid]);
          break;
        default:
          this.$set(this,"selected_configuration",this.selectedData[_config]);
          this.working_uuid = _config;
          this.newComponent = false;
          this.component_changed = false;
      }
    },
    configCompare(_config1, _config2)
    {
      let config1=_config1.config;
      let config2=_config2.config;

      switch(true)
      {
        case config1==config2:
          return 0;
        case config1=="Humanoid":
          return 1;
        case config2=="Humanoid":
          return -1;
      }

      let hardpoints1=_config1.hardpoints;
      let hardpoints2=_config2.hardpoints;
      switch(true)
      {
        case hardpoints1[0]=="all" && hardpoints2[0]=="all":
          return 0;
        case hardpoints1[0]=="all":
        case hardpoints1.length > hardpoints2.length:
          return 1;
        case hardpoints2[0]=="all":
        case hardpoints1.length < hardpoints2.length:
          return -1;
      }
 
      return this.hardpointCompare(hardpoints1,hardpoints2);
    },
    hardpointCompare(_hardpoints1, _hardpoints2)
    {
      let filtered=_hardpoints1.filter(_hardpoint =>
      {
        return !_hardpoints2.includes(_hardpoint);
      });

      return filtered.length>0 ? 1 : 0;
    },
    adjustBaseConfig(_current_base_config)
    {//scans overall working configs, adjusts base_config config as needed
      let new_base_config=null;
      for(let _config in this.working_configurations)
      {
        if(this.configCompare(_current_base_config,this.working_configurations[_config])==-1)
        {
          new_base_config=this.working_configurations[_config].uuid;
          break;
        }
      }
      if(new_base_config!==null)
      {
        delete _current_base_config.base_config;
        this.working_configurations[new_base_config].base_config=true;
      }
    }
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
      let base_form =
        this.selectedData === undefined || Object.keys(this.selectedData).length == 0
          ? "Humanoid"
          : this.selectedData[this.base_config_key].config; //selectedData is an object of objects, need to flag one as 'base'
      let base_hardpoints = this.selectedData === undefined || Object.keys(this.selectedData).length == 0
          ? ["all"]
          : this.working_configurations[this.base_config_key].hardpoints; //selectedData is an object of objects, need to flag one as 'base'
      let isBaseConfig=this.selected_configuration && this.selected_configuration.base_config
          ? true : false ;
      if (base_form == "Humanoid" || isBaseConfig)
      {
        return this.configurationFormsList;
      }
      
      if (base_hardpoints[0] == "all")
      {
        return this.configurationFormsList.slice(1);
      }
      let return_obj = this.configurationFormsList.reduce((_newConfigList, _config) =>
      {
        if([-1,0].includes(this.hardpointCompare(base_hardpoints,_config.hardpoints)))
        {
          _newConfigList.push(_config);
        }
        return _newConfigList;
      }, []);
      return return_obj;
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
    activeButtons()
    {
      return "save,reset,new" + (this.working_uuid !== null ? ",delete" : "");
    },
    computedComponentName()
    {
      let name= this.component_name!==null ? this.component_name 
              : this.selected_configuration!==null ? this.selected_configuration.config
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
      handler: function(_new) 
      {
        let working_configs = JSON.parse( JSON.stringify(this.selectedData || {}) );
        this.$set(this,"working_configurations",working_configs);
        if (_new === undefined || Object.keys(_new).length == 0)
        {
          this.$set(this,"selected_configuration",JSON.parse(JSON.stringify(this.configurationFormsList[0])));
          this.working_uuid = null;
          this.component_changed = true;
          this.newComponent = true;
          this.$set(this.selected_configuration, "base_config", true);
        }
        else if(Object.keys(_new).length>1)
        {
          let base_config_uuid=Object.keys(this.working_configurations)[0];
          for(let _config in this.working_configurations)
          {
            if(this.working_configurations[_config].base_config)
            {
              base_config_uuid=this.working_configurations[_config].uuid;
              break;
            }
          }
          this.adjustBaseConfig(this.working_configurations[base_config_uuid]);
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
