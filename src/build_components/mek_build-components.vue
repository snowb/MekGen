<template>
    <div style="display:flex; margin-top:5px;">
        <mek-side-menu :sections="mekList" format="full" :list="true" title="Meks" 
          :draggable="true" :collapsible="true" :clickable="true" :selected-item="selected_uuid"
          @side-menu-clicked="mek_select" :key="sideMenuKey"
        ></mek-side-menu>
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetBuildTab" :section-list="sectionList"></mek-top-menu>
            <div id="build-main">
                <component :is="targetBuildTab" :selected-data="selected_data" 
                  @saveSelectedData="saveSelectedData" @resetSelectedData="resetSelectedData"
                  @deleteSelectedData="deleteSelectedData"
                ></component>
            </div>
        </span>
        <!--mek-alert></mek-alert-->
    </div>
</template>
<script>

import {mapGetters} from 'vuex';

export default {
  name: 'build',
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek-top-menu" */"@/app_components/mek_top_menu/mek_top-menu.vue"),
    //"mek-alert":()=>import(/* webpackChunkName: "[request]" */"../app_components/universal/mek_alert.vue"),
    "mek-side-menu":()=>import(/* webpackChunkName: "mek_side-menu" */"@/app_components/mek_side_menu/mek_side-menu.vue"),

    "mek-build-frame":()=>import(/* webpackChunkName: "mek_build-frame" */"@/build_components/mek_frame/mek_build-frame.vue"),
    "mek-build-general":()=>import(/* webpackChunkName: "mek_build-general" */"@/build_components/mek_general/mek_build-general.vue"),
    "mek-build-config":()=>import(/* webpackChunkName: "mek_build-config" */"@/build_components/mek_config/mek_build-config.vue"),
  },
  data:function()
  {
    let obj={};
    obj.fullSectionList=
    [
      {id:"mek-build-general",name:"Mek"},
      {id:"mek-build-config",name:"Config"},
      {id:"mek-build-frame",name:"Frame"},
    ];
    obj.originalMek={};
    obj.workingMek={};
    obj.selected_uuid=null;
    obj.sideMenuKey="msm-"+Math.random()+"-key";
    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        this.$store.commit("showTab",{prop:"currentBuildTab",tab:_section});
    },
    mek_select(_uuid)
    {
      this.$store.commit('selectMek',_uuid);
      this.selected_uuid=_uuid;
      this.$store.commit("showTab",{prop:"currentBuildTab",tab:"mek-build-general"});
    },
    saveSelectedData(_type, _data)
    {
      let clonedData=JSON.parse(JSON.stringify(_data));
      switch(_type)
      {
        case "general":
          for(let prop in clonedData)
          {
            if(typeof clonedData[prop]!=="object" && !Array.isArray(clonedData[prop]))
            {
              this.$set(this.workingMek,prop,clonedData[prop]);
            } 
          }
          this.mek_select(this.workingMek.uuid);
          break;
        case "config":
          this.$set(this.workingMek,"configurations",clonedData);
          break;
      }
      this.$store.commit('saveComponent',this.workingMek);
      this.selected_uuid=this.workingMek.uuid;
      this.sideMenuKey="mdc-msm-"+Math.random()+"-key";
    },
    resetSelectedData()
    {
      this.workingMek={};
      this.originalMek={};
      this.selected_uuid=null;
      this.$store.commit('saveComponent',null);
    },
    deleteSelectedData(_component)
    {
      this.$store.commit("deleteComponent",_component);
      this.sideMenuKey="mbc-msm-"+Math.random()+"-key";
      this.selected_uuid=null;
    }
  },
  computed:
  {
    ...mapGetters(
    {
      targetBuildTab:'targetBuildTab',
      listByCategoryAndType:"listByCategoryAndType",
      getComponent:"getComponent",
      selectedMek:"selectedMek"
    }),
    mekList()
    {
      this.sideMenuKey;
      let mekList=this.listByCategoryAndType("mek","mek");
      return mekList;
    },
    sectionList()
    { 
      let sectionList=[{id:"mek-build-general",name:"Mek"}];
      if(this.workingMek===null)
      {
        return sectionList;
      }
      if(this.workingMek.uuid!==undefined)
      {
        sectionList.push({id:"mek-build-config",name:"Config"});
        if(this.workingMek.configurations!==undefined && Object.keys(this.workingMek.configurations).length>0)
        {
          sectionList.push({id:"mek-build-frame",name:"Frame"});
        }
      }
      return sectionList;
    },
    getSelectedMek()
    {//responsible for ingesting data from the store)
      this.originalMek=JSON.parse(JSON.stringify(this.$store.getters.selectedMek)) || {};
      this.workingMek=this.originalMek;
      return this.originalMek;
    },
    selected_data()
    {
      if(this.getSelectedMek===null || this.getSelectedMek===undefined)
      {
        return null;
      }
      let returnObj={};
      switch(this.targetBuildTab)
      {
        case "mek-build-general":
          for(let prop in this.getSelectedMek)
          {
            if(typeof this.getSelectedMek[prop]!=="object" && !Array.isArray(this.getSelectedMek[prop]))
            {
              returnObj[prop]=this.getSelectedMek[prop];
            }
          }
          break;
        case "mek-build-config":
        case "mek-build-frame":
          returnObj=this.getSelectedMek.configurations;
          break;
      }
      return returnObj;
    }
  },
  beforeDestroy()
  {
    this.$store.commit('saveComponent',null);
    this.$store.commit("showTab",{prop:"currentBuildTab",tab:"mek-build-general"});
  }
}
</script>

<style>
</style>
