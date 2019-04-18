<template>
    <div id="app" style="display:inline-flex-col;">
        <span>
            <!--mek-top-menu @focus-section="focusSection" :section="targetBuildTab" :section-list="sectionList"></mek-top-menu>
            <span id="design-main">
                <component :is="targetDesignTab"></component>
            </span-->
            Build Component
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
    //"mek-top-menu":()=>import(/* webpackChunkName: "[request]" */"../app_components/mek_top_menu/mek_top-menu.vue"),
    //"mek-side-menu":()=>import(/* webpackChunkName: "[request]" */"./mek_side_menu/mek_side-menu.vue"),
    //"mek-alert":()=>import(/* webpackChunkName: "[request]" */"../app_components/universal/mek_alert.vue"),

    //"mek-servo":()=>import(/* webpackChunkName: "[request]" */"./mek_servo/mek_servo-main.vue"),
    //"mek-melee":()=>import(/* webpackChunkName: "[request]" */"./mek_melee/mek_melee-main.vue"),
    //"mek-projectile":()=>import(/* webpackChunkName: "[request]" */"./mek_projectile/mek_projectile-main.vue"),
    //"mek-magazine":()=>import(/* webpackChunkName: "[request]" */"./mek_magazine/mek_magazine-main.vue"),
    //"mek-missile":()=>import(/* webpackChunkName: "[request]" */"./mek_missile/mek_missile-main.vue"),
    //"mek-emw":()=>import(/* webpackChunkName: "[request]" */"./mek_emw/mek_emw-main.vue"),
    //"mek-beam":()=>import(/* webpackChunkName: "[request]" */"./mek_beam/mek_beam-main.vue"),
    //"mek-energy-pool":()=>import(/* webpackChunkName: "[request]" */"./mek_energy_pool/mek_energy_pool-main.vue"),
    //"mek-shield":()=>import(/* webpackChunkName: "[request]" */"./mek_shield/mek_shield-main.vue"),
    //"mek-reflector":()=>import(/* webpackChunkName: "[request]" */"./mek_reflector/mek_reflector-main.vue")
  },
  data:function()
  {
    let obj={};
    obj.sectionList=
    [
        {id:"mek-nothing",name:"Nothing"},
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
            targetDesignTab:'targetBuildTab'
        })
  }
}
</script>

<style>
</style>
