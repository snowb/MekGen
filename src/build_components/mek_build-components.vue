<template>
    <div style="display:flex; margin-top:5px;">
        <mek-side-menu :sections="mekList" format="full" list="true" title="Meks" 
          :draggable="true" :collapsible="true" clickable="true"
          @side-menu-clicked="mek_select"
        ></mek-side-menu>
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetBuildTab" :section-list="sectionList"></mek-top-menu>
            <div id="build-main">
                <component :is="targetBuildTab" :selected-data="selected_data"></component>
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
  },
  data:function()
  {
    let obj={};
    obj.fullSectionList=
    [
      {id:"mek-build-general",name:"Mek"},
      //{id:"mek-build-frame",name:"Frame"},
    ];
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
      let mekList=this.listByCategoryAndType("mek","mek");
      return mekList;
    },
    sectionList()
    {
      if(this.selectedMek===null)
      {
        return [{id:"mek-build-general",name:"Mek"}];
      }
      return this.fullSectionList;
    },
    getSelectedMek()
    {//responsible for ingesting data from the store
      let selectedMek=JSON.parse(JSON.stringify(this.$store.getters.selectedMek));
      return selectedMek;
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
      }
      return returnObj;
    }
  }
}
</script>

<style>
</style>
