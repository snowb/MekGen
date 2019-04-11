<template>
    <div id="app" style="display:inline-flex-col;">
        <span>
            <!--mek-top-menu @focus-section="focusSection" :section="targetBuildTab" :section-list="sectionList"></mek-top-menu>
            <span id="design-main">
                <component :is="targetDesignTab"></component>
            </span-->
            Ingest Component
        </span>
        <!--mek-alert></mek-alert-->
    </div>
</template>
<script>

import {mapGetters} from 'vuex';

export default {
  name: 'import-components',
  components:
  {
    //"mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"../app_components/mek_top_menu/mek_top-menu.vue"),
    //"mek-side-menu":()=>import(/* webpackChunkName: "side-menu" */"./mek_side_menu/mek_side-menu.vue"),
    //"mek-alert":()=>import(/* webpackChunkName: "mek_alert" */"../app_components/universal/mek_alert.vue"),

    //"mek-servo":()=>import(/* webpackChunkName: "mek_servo-main" */"./mek_servo/mek_servo-main.vue"),
    //"mek-melee":()=>import(/* webpackChunkName: "mek_melee-main" */"./mek_melee/mek_melee-main.vue"),
    //"mek-projectile":()=>import(/* webpackChunkName: "mek_projectile-main" */"./mek_projectile/mek_projectile-main.vue"),
    //"mek-magazine":()=>import(/* webpackChunkName: "mek_magazine-main" */"./mek_magazine/mek_magazine-main.vue"),
    //"mek-missile":()=>import(/* webpackChunkName: "mek_missile-main" */"./mek_missile/mek_missile-main.vue"),
    //"mek-emw":()=>import(/* webpackChunkName: "mek_emw-main" */"./mek_emw/mek_emw-main.vue"),
    //"mek-beam":()=>import(/* webpackChunkName: "mek_beam-main" */"./mek_beam/mek_beam-main.vue"),
    //"mek-energy-pool":()=>import(/* webpackChunkName: "mek_energy_pool-main" */"./mek_energy_pool/mek_energy_pool-main.vue"),
    //"mek-shield":()=>import(/* webpackChunkName: "mek_shield-main" */"./mek_shield/mek_shield-main.vue"),
    //"mek-reflector":()=>import(/* webpackChunkName: "mek_reflector-main" */"./mek_reflector/mek_reflector-main.vue")
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
        this.$store.commit("showTab",{prop:"currentImportTab",tab:_section});
    }
  },
  computed:
  {
    ...mapGetters(
        {
            targetDesignTab:'targetIngestTab'
        })
  }
}
</script>

<style>
</style>
