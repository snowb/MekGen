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
        <mek-alert :floating="true" :persist="false" store-alert-property="alertMessages"></mek-alert>
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
    "mek-import-components":()=>import(/* webpackChunkName: "mek_import-component" */"./import_components/mek_import-component.vue"),
    "mek-export-components":()=>import(/* webpackChunkName: "mek_export-component" */"./export_components/mek_export-component.vue"),
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"./app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-alert":()=>import(/* webpackChunkName: "mek_alert" */"./app_components/universal/mek_alert.vue"),
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
    ];
    obj.currentAppTab="mek-design-components";
    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        if(_section!=="mek-import-components" && this.currentAppTab=="mek-import-components")
        {
            this.$store.commit("resetImportAlertMessages");
        }
        this.$store.commit("showTab",{prop:"currentAppTab",tab:_section});
        this.currentAppTab=_section;
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
