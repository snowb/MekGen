<template>
    <div id="app" style="display:inline-flex;">
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetAppTab" :section-list="sectionList"
                color="dd0000" color-offset="rgb" size="lg"
            ></mek-top-menu>
            <span id="app-main">
                <component :is="targetAppTab" style="margin-top:5px;"></component>
            </span>
        </span>
        <mek-alert></mek-alert>
    </div>
</template>
<script>
// eslint-disable-next-line
console.log("****\n"+
"Mekton Mek Generator\n"+
"Build Date-Time: "+process.env.VUE_APP_BUILD_DATE);
if(process.env.NODE_ENV=="production")
{
    // eslint-disable-next-line
    console.log("'Prod' Build Version: "+process.env.VUE_APP_VERSION);
}
else
{
    // eslint-disable-next-line
    console.log("Dev Commit Count: "+process.env.VUE_APP_COMMIT_COUNT);
}
// eslint-disable-next-line
console.log("****");

import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components:
  {
    "mek-design-components":()=>import(/* webpackChunkName: "mek_design-components" */"./design_components/mek_design-components.vue"),
    "mek-build-components":()=>import(/* webpackChunkName: "mek_build-components" */"./build_components/mek_build-components.vue"),
    "mek-import-components":()=>import(/* webpackChunkName: "mek_import-components" */"./import_components/mek_import-components.vue"),
    "mek-export-components":()=>import(/* webpackChunkName: "mek_export-components" */"./export_components/mek_export-components.vue"),
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"./app_components/mek_top_menu/mek_top-menu.vue"),
    //"mek-side-menu":()=>import(/* webpackChunkName: "side-menu" */"./design_components/mek_side_menu/mek_side-menu.vue"),
    "mek-alert":()=>import(/* webpackChunkName: "mek_alert" */"./app_components/universal/mek_alert.vue"),

    //"mek-servo":()=>import(/* webpackChunkName: "mek_servo-main" */"./design_components/mek_servo/mek_servo-main.vue"),
    //"mek-melee":()=>import(/* webpackChunkName: "mek_melee-main" */"./design_components/mek_melee/mek_melee-main.vue"),
    //"mek-projectile":()=>import(/* webpackChunkName: "mek_projectile-main" */"./design_components/mek_projectile/mek_projectile-main.vue"),
    //"mek-magazine":()=>import(/* webpackChunkName: "mek_magazine-main" */"./design_components/mek_magazine/mek_magazine-main.vue"),
    //"mek-missile":()=>import(/* webpackChunkName: "mek_missile-main" */"./design_components/mek_missile/mek_missile-main.vue"),
    //"mek-emw":()=>import(/* webpackChunkName: "mek_emw-main" */"./design_components/mek_emw/mek_emw-main.vue"),
    //"mek-beam":()=>import(/* webpackChunkName: "mek_beam-main" */"./design_components/mek_beam/mek_beam-main.vue"),
    //"mek-energy-pool":()=>import(/* webpackChunkName: "mek_energy_pool-main" */"./design_components/mek_energy_pool/mek_energy_pool-main.vue"),
    //"mek-shield":()=>import(/* webpackChunkName: "mek_shield-main" */"./design_components/mek_shield/mek_shield-main.vue"),
    //"mek-reflector":()=>import(/* webpackChunkName: "mek_reflector-main" */"./design_components/mek_reflector/mek_reflector-main.vue")
  },
  data:function()
  {
    let obj={};
    obj.sectionList=
    [
        {id:"mek-design-components",name:"Design"},
        {id:"mek-build-components",name:"Build"},
        {id:"mek-import-components",name:"Import"},
        {id:"mek-export-components",name:"Export"},
/*         {id:"mek-servo",name:"Servos"},
        {id:"mek-beam",name:"Beam Weapons"},
        {id:"mek-emw",name:"Energy Melee Weapons"},
        {id:"mek-melee",name:"Melee Weapons"},
        {id:"mek-missile",name:"Missiles"},
        {id:"mek-projectile",name:"Projectile Weapons"},
        {id:"mek-magazine",name:"Projectile Magazine"},
        {id:"mek-energy-pool",name:"Energy Pools"},
        {id:"mek-shield",name:"Shields"},
        {id:"mek-reflector",name:"Reflectors"}, */
    ];
    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        //this.$store.commit("showAppTab",_section);
        this.$store.commit("showTab",{prop:"currentAppTab",tab:_section});
    }
  },
  computed:
  {
    ...mapGetters(
        {
            targetAppTab:'targetAppTab'
        })
  }
}
</script>

<style>
*
{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body
{
    background-image:url('./assets/hexagon.svg');
}
.mek-flex-row
{
    display:flex; 
    flex-direction: row; 
    text-align: center;
    flex-wrap: wrap;
}
.mek-inline-flex-row
{
    display:inline-flex; 
    flex-direction: row; 
    text-align: center;
    flex-wrap: wrap;
}
.mek-flex-col
{
    display:flex; 
    flex-direction: column; 
    text-align: center;
    margin:5px;
}
.mek-inline-flex-col
{
    display:inline-flex; 
    flex-direction: column; 
    text-align: center;
}
</style>
