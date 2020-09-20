<template>
  <div class="mek-inline-flex-row">
    <mek-side-menu :sections="configurationList" @side-menu-clicked="selectConfig"
      title="Configs" list="true" format="full" :selected-item="selectedConfigurationUUID"
      clickable="true"
    ></mek-side-menu>
    <div class="mek-inline-flex-col">
      <mek-top-menu @focus-section="selectHardpoint" size="sm" color-offset="rgb" color="C5C5FF"
        :section="selectedHardpoint" :section-list="hardpointList" style="align-self:baseline;"
      ></mek-top-menu>
      <mek-frame-hardpoint :hardpoint="selectedHardpoint"></mek-frame-hardpoint>
    </div>
    <!---

    
    --->
    <!--mek-top-menu @focus-section="focusSection" size="sm" color-offset="rgb" color="C5C5FF"
      :section="selectedConfigurationUUID" :section-list="configurationList"
    ></mek-top-menu>
    <mek-window type="metallic" :title="capitalize(hardpoint)" size="sm" min-width="77"
      v-for="hardpoint in selectedConfigurationHardpoints" :key="selectedConfigurationUUID+'-'+hardpoint"
    >
      <div>
        {{hardpoint}}
      </div>
    </mek-window-->
  </div>
</template>

<script>
export default
{
  name:"mek-build-frame",
  props:["selectedData"],
  components:
  {
    "mek-frame-hardpoint":()=>import(/* webpackChunkName: "mek_build-frame-hardpont" */
      "@/build_components/mek_frame/mek_build-frame-hardpoint.vue"),
    
    "mek-top-menu":()=>import(/* webpackChunkName: "mek-top-menu" */
      "@/app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-side-menu":()=>import(/* webpackChunkName: "mek_side-menu" */
      "@/app_components/mek_side_menu/mek_side-menu.vue"),
    //"mek-window":()=>import(/* webpackChunkName: "mek_window" */
    //  "@/app_components/universal/mek_window.vue"),
  },
  mixins:[],
  data:()=>
  {
    let obj={};
    obj.targetConfiguration=null;
    obj.selectedHardpoint=null;
    obj.allHardpoints=["Head","Torso","Arm","Leg","Wind","Tail","Pod","Stowed"];
    obj.allHardpointsObject=
      [
        {id:"head",name:"Head"},
        {id:"torso",name:"Torso"},
        {id:"arm",name:"Arm"},
        {id:"leg",name:"Leg"},
        {id:"wing",name:"Wing"},
        {id:"tail",name:"Tail"},
        {id:"pod",name:"Pod"},
        {id:"stowed",name:"Stowed"}
      ];
    //need to append stuff for Metaform components
    return obj;
  },
  methods:
  {
    selectHardpoint(_hardpoint)
    {
      this.selectedHardpoint=_hardpoint;
    },
    capitalize(_string)
    {
      return _string.charAt(0).toUpperCase() + _string.slice(1);
    },
    selectConfig(_config_uuid)
    {
      //select config, setup top-menu
      this.targetConfiguration=_config_uuid;
    }
  },
  computed:
  {
    configurationList()
    {
      let configList={};
      for(let _config_uuid in this.selectedData)
      {
        let name=this.selectedData[_config_uuid].name || this.selectedData[_config_uuid].config;
        if(_config_uuid==this.baseConfigurationUUID)
        {
          name+=" (base)";
        }
        configList[_config_uuid]=name;
      }
      return configList
    },
    baseConfigurationUUID()
    {
      let base_config_uuid=null;
      Object.values(this.selectedData).some((_config)=>
      {
        if(_config.base_config)
        {
          base_config_uuid=_config.uuid;
          return true;
        }
      },this);
      return base_config_uuid;
    },
    selectedConfigurationUUID()
    {
      return this.targetConfiguration || this.baseConfigurationUUID;
    },
    selectedConfiguration()
    {
      return this.selectedData[this.selectedConfigurationUUID];
    },
    hardpointList()
    {
      if(this.selectedConfiguration.hardpoints[0]=="all")
      {
        return this.allHardpointsObject;
      }
      let capitalize=this.capitalize;
      let hardpointList=this.selectedConfiguration.hardpoints.concat(["stowed"]).map((_el)=>
      {
        return {id:_el,name:capitalize(_el)};
      });
      return hardpointList;
    }
  },
  watch:
  {
    selectedData:
    {
      immediate:true,
      handler()
      {
        if(this.targetConfiguration===null)
        {
          this.targetConfiguration=this.baseConfigurationUUID;
        }
        if(this.selectedHardpoint===null)
        {
          this.selectedHardpoint=this.hardpointList[0].id;
        }
      }
      
    }
  }
}
</script>

<style scoped>

</style>
