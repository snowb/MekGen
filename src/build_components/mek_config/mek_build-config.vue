<template>
<!--- need side menu for selecting configurations saved to mek, pass by selectedData --->
  <div class="mek-inline-flex-row">
    <mek-side-menu title="Configs" format="full" :list="true" :sections="configuration_list"
      :collapsible="true" :clickable="true" @side-menu-clicked="load_config" 
      :selected-item="working_uuid"
    ></mek-side-menu>
    <div class="mek-inline-flex-col">
      <mek-sub-component-table name="Configuration" flow="dropdown-pkey" pkey="config"
        :items="configurationForms" :show-headers="true" :headers="headers"
        :selected-keys="selectedConfigPkey"
        @update-selected-data="select_config"
      ></mek-sub-component-table>
      <!--- frame component ? --->
      <mek-save-reset-component @save-reset-component="saveResetComponent"></mek-save-reset-component>
    </div>
  </div>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin";
export default 
{
  name:"mek-build-config",
  components:
  {
    "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    "mek-save-reset-component":()=>import(/* webpackChunkName: "mek-save-reset-component" */"@/app_components/universal/mek-save-reset-component.vue"),
    "mek-side-menu":()=>import(/* webpackChunkName: "mek_side-menu" */"@/app_components/mek_side_menu/mek_side-menu.vue"),
  },
  props:["selectedData"],
  mixins:[utility_mixin],
  data:()=>
  {
    let obj={};
    obj.configurationForms=
    [
      {config:"Humanoid",cost:0},
      {config:"Beast",cost:0},
      {config:"Avian",cost:0},
    ];
    obj.headers={config:"Form",cost:"Cost"}
    obj.selected_configuration={config:"Humanoid",cost:0};
    obj.working_configurations={};
    obj.working_uuid=null;
    return obj;
  },
  methods:
  {
    select_config(_config)
    {
      this.selected_configuration=JSON.parse(JSON.stringify(_config));
    },
    saveResetComponent(_action)
    {
      let uuid=this.working_uuid ? this.working_uuid : this.create_short_uuid();
      let temp_config={uuid:uuid,...this.selected_configuration}
      switch(_action)
      {
        case "save":
          this.working_configurations[uuid]=temp_config;
          this.working_uuid=uuid;
          this.$emit("saveSelectedData","config",this.working_configurations);
          break;
        case "reset":
          if(this.working_uuid!==null)
          {
            this.selected_configuration=temp_config;
            break;
          }
        // eslint-disable-next-line
        case "new":
          this.working_uuid=null;
          this.selected_configuration={config:"Humanoid",cost:0};
          break;
      }
    },
    load_config(_config)
    {
      switch(true)
      {
        case _config=="" && this.working_uuid===null:
          this.selected_configuration={config:"Humanoid",cost:0};
          break;
        case _config=="":
          this.selected_configuration=this.selectedData[this.working_uuid];
          break;
        default:
          this.selected_configuration=this.selectedData[_config];
          this.working_uuid=_config;
      }
    }
  },
  computed:
  {
    selectedConfigPkey()
    {
      if(this.selected_configuration.config===undefined)
      {
        return ["Humanoid"];
      }
      return [this.selected_configuration.config];
    },
    configuration_list()
    {
      this.working_configurations=JSON.parse(JSON.stringify(this.selectedData || {}));
      if(this.selectedData===undefined)
      {
        return {};
      }
      let obj=Object.keys(this.selectedData).reduce((_obj, _el)=>
      {
        _obj[_el]=this.selectedData[_el].config;
        return _obj;
      },{});
      return obj;
    }
  },
}
</script>

<style scoped>

</style>
