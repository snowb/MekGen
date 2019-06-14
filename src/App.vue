<template>
    <div id="app" class="app">
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetAppTab" :section-list="sectionList"
                color="dd0000" color-offset="rgb" size="lg"
            ></mek-top-menu>
            <span id="app-main">
                <component :is="targetAppTab" style="margin-top:5px;"></component>
            </span>
        </span>
        <mek-alert :floating="true" :persist="false" store-alert-property="alertMessages"></mek-alert>
        <mek-settings-container></mek-settings-container>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: 'app',
  metaInfo:
  {
      title:"Mekton Mek Generator",
      meta:
      [
          {name:"description", content:"Mekton Mek Generator App"},
          {name:"keywords", content:"mek,mekton,mz+,mz,mekton zeta,mecha,mech,anime"},
          {name:"author",content:"https://github.com/snowb"}
      ]
  },
  components:
  {
    "mek-design-components":()=>import(/* webpackChunkName: "mek_design-components" */"./design_components/mek_design-components.vue"),
    "mek-build-components":()=>import(/* webpackChunkName: "mek_build-components" */"./build_components/mek_build-components.vue"),
    "mek-import-components":()=>import(/* webpackChunkName: "mek_import-component" */"./import_components/mek_import-component.vue"),
    "mek-export-components":()=>import(/* webpackChunkName: "mek_export-component" */"./export_components/mek_export-component.vue"),
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"./app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-alert":()=>import(/* webpackChunkName: "mek_alert" */"./app_components/universal/mek_alert.vue"),
    "mek-settings-container":()=>import(/* webpackChunkName: "mek_settings-container" */"./app_components/settings/mek_settings-container.vue"),
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
html
{
    min-height:100%;
    min-width:100%;
    margin: 0;
    padding: 0;
}
body
{
    background-image:url('./assets/hexagon.svg');
    min-height:100%;
    min-width:100%;
    margin: 0;
    padding: 0;
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
.app
{
    display: inline-flex; 
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
