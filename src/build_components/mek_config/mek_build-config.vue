<template>
<!--- need side menu for selecting configurations saved to mek, pass by selectedData --->
  <div class="mek-inline-flex-row">
    <mek-side-menu title="Configs" format="full" :list="true" :sections="configuration_list"
      :collapsible="true" :clickable="true" @side-menu-clicked="load_config" 
      :selected-item="working_uuid"
    ></mek-side-menu>
    <div class="mek-inline-flex-col">
      <mek-component-name :new-component="newComponent" :component-name="component_name||selected_configuration.config"
        :component-changed="component_changed"
        @update-component-name="updateComponentName"
      ></mek-component-name>
      <mek-sub-component-table name="Configuration" flow="dropdown-pkey" pkey="config"
        :items="configurationForms" :show-headers="true" :headers="headers"
        :selected-keys="selectedConfigPkey"
        @update-selected-data="select_config"
      ></mek-sub-component-table>
      <!--- frame component ? --->
      <mek-save-reset-component @save-reset-component="saveResetComponent"
        :activeButtons="activeButtons"
      ></mek-save-reset-component>
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
    "mek-component-name":()=>import(/* webpackChunkName: "mek-component-name" */"@/app_components/universal/mek-component-name.vue"),
    "mek-side-menu":()=>import(/* webpackChunkName: "mek_side-menu" */"@/app_components/mek_side_menu/mek_side-menu.vue"),
  },
  props:["selectedData"],
  mixins:[utility_mixin],
  data:()=>
  {
    let obj={};
    obj.configurationForms=
    [//wildly incomplete
    //needs to be in its own data module
    //with a separate data module for modifiers
      //for use with custom configs
      {config:"Humanoid",cost:0, modifiers:
        {
          hardpoints:["all"],
          propulsion:["all"],
          flight_without_propulsion:false,
          no_hands:false
        }
      },
      {config:"Tank",cost:0, modifiers:
        {
          maneuver_value:-1,
          armor_stopping_power:+2,
          propulsion:["wheels","treads","ges","gravitics"],
          hardpoints:["torso","head","pod","binder"],
          no_hands:true,
          flight_without_propulsion:false
        }
      },
      {config:"Avian",cost:0, modifiers:
        {
          maneuver_value: -1,
          melee_damage: +2,
          flight_movement_allowance: +6,
          land_movement_alloance: +0,
          propulsion:["legs","ges","thrusters","gravitics"],
          hardpoints:["all"],
          no_hands:true,
          flight_without_propulsion:true
        }
      },
    ];
    obj.headers={config:"Form",cost:"Cost"}
    obj.selected_configuration=obj.configurationForms[0];
    obj.working_configurations={};
    obj.component_name=null;
    obj.working_uuid=null;

    obj.component_changed=true;
    obj.newComponent=true;
    return obj;
  },
  methods:
  {
    updateComponentName(_name)
    {
      this.component_name=_name;
      this.component_changed=true;
    },
    select_config(_config)
    {
      let name=this.selected_configuration.name;
      this.selected_configuration=JSON.parse(JSON.stringify(_config));
      this.selected_configuration.name=name;
      this.component_changed=true;
    },
    saveResetComponent(_action)
    {
      let uuid=this.working_uuid ? this.working_uuid : this.create_short_uuid();
      let temp_config={uuid:uuid,...this.selected_configuration}
      temp_config.name=this.component_name;
      switch(_action)
      {
        case "save":
          this.working_configurations[uuid]=temp_config;
          this.working_uuid=uuid;
          this.$emit("saveSelectedData","config",this.working_configurations);
          this.newComponent=false;
          this.component_changed=false;
          break;
        case "reset":
          if(this.working_uuid)
          {
            this.selected_configuration=temp_config;
            break;
          }
        // eslint-disable-next-line
        case "delete":
          if(this.working_uuid)
          {
            delete this.working_configurations[uuid];
            this.$emit("saveSelectedData","config",this.working_configurations);
          }
        // eslint-disable-next-line
        case "new":
          this.working_uuid=null;
          this.selected_configuration=this.configurationForms[0];
          this.newComponent=true;
          this.component_changed=true;
          break;
      }
    },
    load_config(_config)
    {
      switch(true)
      {
        case _config=="" && this.working_uuid===null:
          this.selected_configuration=this.configurationForms[0];
          break;
        case _config=="":
          this.selected_configuration=this.selectedData[this.working_uuid];
          break;
        default:
          this.selected_configuration=this.selectedData[_config];
          this.working_uuid=_config;
          this.newComponent=false;
          this.component_changed=false;
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
      this.working_uuid=null;
      this.selected_configuration=this.configurationForms[0];
      this.component_changed=true;
      this.newComponent=true;
      this.working_configurations=JSON.parse(JSON.stringify(this.selectedData || {}));
      if(this.selectedData===undefined)
      {
        return {};
      }
      let obj=Object.keys(this.selectedData).reduce((_obj, _el)=>
      {
        _obj[_el]=this.selectedData[_el].name ? this.selectedData[_el].name : this.selectedData[_el].config;
        return _obj;
      },{});
      if(this.working_uuid===null)
      {
        this.working_uuid=Object.keys(this.selectedData)[0];
        this.selected_configuration=this.selectedData[this.working_uuid];
        this.component_changed=false;
        this.newComponent=false;
      }
      return obj;
    },
    activeButtons()
    {
      return "save,reset,new"+(this.working_uuid!==null?",delete":"");
    }
  },
}
</script>

<style scoped>

</style>
