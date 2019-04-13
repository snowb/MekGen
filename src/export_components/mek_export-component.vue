<template>
    <div id="app" style="display:inline-flex-col;">
        <mek-top-menu @focus-section="focusExportSection" :section="targetExportTab" :section-list="exportSectionList"
        ></mek-top-menu>
        <div id="app" style="display:inline-flex-col;">
          <mek-top-menu @focus-section="focusTypeSection" :section="targetTypeTab" :section-list="typeSectionList"
              size="sm" color="d" color-offset="rgb"
          ></mek-top-menu>
          <span v-if="targetTypeTab!=''" class="mek-flex-row">
            <span class="menu_container">
              <span v-for="(id,key) in componentList" :key="key" class="component clickable_ecm"
                @click="selectComponent(key)" :class="selected(key)"
              >
                {{id}}
              </span>
              <span class="invisible_pad_ecm">{{invisiblePad}}</span>
            </span>
            <div class="json_container">
              {{displayedComponent}}
            </div>
          </span>
        </div>
    </div>
</template>
<script>

import {mapGetters} from 'vuex';

export default {
  name: 'export-component',
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"@/app_components/mek_top_menu/mek_top-menu.vue"),
  },
  data:function()
  {
    let obj={};
    obj.selectedKey=null;
    return obj;
  },
  methods:
  {
    focusExportSection:function(_section)
    {
        this.$store.commit("showTab",{prop:"currentExportTab",tab:_section});
    },
    focusTypeSection:function(_section)
    {
        this.$store.commit("showTab",{prop:"currentTypeTab",tab:_section});
    },
    selectComponent(_key)
    {
      this.selectedKey=_key;
      this.$store.commit("selectComponent",_key);
    },
    selected(_key)
    {
      return this.selectedKey==_key ? "selected_ecm" : "";
    },
    invisiblePad()
    {
      return this.invisible_pad(Object.values(this.componentList));
    },
  },
  computed:
  {
    exportSectionList()
    {
      return this.categoryList.map((_val)=>
      {
        let name=_val.charAt(0).toUpperCase()+_val.slice(1);
        return {id:_val,name:name};
      });
    },
    typeSectionList()
    {
      return this.typeList(this.targetExportTab).map((_val)=>
      {
        let name=_val.charAt(0).toUpperCase()+_val.slice(1);
        return {id:_val,name:name};
      });
    },
    componentList()
    {
      return this.getComponentByType(this.targetExportTab,this.targetTypeTab);
    },
    displayedComponent()
    {
      if(this.selectedComponent==""||this.selectedComponent===null||this.selectedComponent===undefined)
      {
        return "{}";
      }
      return JSON.stringify(this.selectedComponent);
    },
    ...mapGetters(
        {
            targetExportTab:'targetExportTab',
            categoryList:'categoryList',
            typeList:'typeList',
            targetTypeTab:'targetTypeTab',
            getComponentByType:'getComponentByType',
            selectedComponent:'selectedComponent'
        })
  }
}
</script>

<style scoped>
.menu_container
{
    white-space: nowrap;
    display:inline-flex;
    flex-direction:column;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    margin-right: 10px;
    text-align: left;
}
.component
{
    font-weight: bold;
    background-color: #aaa;
    white-space: nowrap;
    /* align-self: baseline; */
    margin: 2px 5px;
}
.clickable_ecm
{
    cursor: pointer;
}
.clickable_ecm:hover
{
    background-color: white;
    color: #222;
    border-radius: 7px;
    box-shadow: inset 1px 1px 1px 1px #222;
    padding: 2px 5px;
    margin: 0px;
}
.invisible_pad_ecm
{
    visibility:hidden;
    height:0px;
    line-height:0px;
    font-weight:bold;
}
.selected_ecm
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding: 2px 5px;
    margin: 0px;
}
.json_container
{
    align-self: baseline;
    display:inline-flex;
    flex-direction:column;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    margin-right: 10px;
    max-width: 75vw;
    overflow-wrap:break-word;
    word-break: break-all;
    text-align:left;
}
</style>
