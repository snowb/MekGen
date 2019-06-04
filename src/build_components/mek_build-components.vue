<template>
    <div style="">
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetBuildTab" :section-list="sectionList"></mek-top-menu>
            <span id="build-main">
                <component :is="targetBuildTab"></component>
            </span>
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
    "mek-top-menu":()=>import(/* webpackChunkName: "[request]" */"../app_components/mek_top_menu/mek_top-menu.vue"),
    //"mek-side-menu":()=>import(/* webpackChunkName: "[request]" */"./mek_side_menu/mek_side-menu.vue"),
    //"mek-alert":()=>import(/* webpackChunkName: "[request]" */"../app_components/universal/mek_alert.vue"),
    
    "mek-build-frame":()=>import(/* webpackChunkName: "mek_build-frame" */"@/build_components/mek_frame/mek_build-frame.vue"),
  },
  data:function()
  {
    let obj={};
    obj.sectionList=
    [
        {id:"mek-build-frame",name:"Frame"},
    ];
    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        this.$store.commit("showTab",{prop:"currentBuildTab",tab:_section});
    }
  },
  computed:
  {
    ...mapGetters(
        {
            targetBuildTab:'targetBuildTab'
        })
  }
}
</script>

<style>
</style>
