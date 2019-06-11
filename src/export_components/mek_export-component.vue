<template>
    <div id="app" style="display:inline-flex-col;">
        <mek-top-menu @focus-section="focusExportSection" :section="targetExportTab" :section-list="exportSectionList"
        ></mek-top-menu>
        <div id="app" style="display:inline-flex-col;">
          <mek-top-menu @focus-section="focusTypeSection" :section="targetTypeTab" :section-list="typeSectionList"
              size="sm" color="d" color-offset="rgb"
          ></mek-top-menu>
          <span v-if="targetTypeTab!=''" class="mek-flex-row">
            <mek-side-menu @side-menu-clicked="selectComponent" :sections="componentList"
              format="full" list="true" clickable="true"
            ></mek-side-menu>
            <div class="json_parent_container">
              <span class="json_header">MekJSON</span>
              <div class="json_container">
                {{displayedComponent}}
              </div>
              <span class="json_header" v-show="displayedCompressedComponent!==''">Condensed MekJSON</span>
              <div class="json_container" v-show="displayedCompressedComponent!==''">
                {{displayedCompressedComponent}}
              </div>
            </div>
          </span>
        </div>
    </div>
</template>
<script>
import utility_mixin from "@/mixins/utility_mixin";
import {mapGetters} from 'vuex';
//import {compress} from './mek_json_compress';
import {condense} from '@/data_table_modules/import_export/json_condensor_functions';
//
export default {
  name: 'export-component',
  mixins:[utility_mixin],
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"@/app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-side-menu":()=>import(/* webpackChunkName: "mek_side-menu" */"@/app_components/mek_side_menu/mek_side-menu.vue"),
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
        return "Select an item to view";
      }
      return JSON.stringify(this.selectedComponent);
    },
    displayedCompressedComponent()
    {
      if(this.selectedComponent==""||this.selectedComponent===null||this.selectedComponent===undefined)
      {
        return "";
      }
      return JSON.stringify(condense(this.selectedComponent));
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
  max-width: 20vw;
}
.component
{
  font-weight: bold;
  background-color: #aaa;
  /* white-space: nowrap; */
  /* align-self: baseline; */
  margin: 2px 5px;
}
.clickable_ecm
{
  cursor: pointer;
  white-space: normal;
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
  white-space: normal;
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
  white-space: normal;
}
.json_parent_container
{
  align-self: baseline;
  display:inline-flex;
  flex-direction:column;
}
.json_header
{
  align-self:baseline;
  margin:10px 0px -2px 10px;
  padding: 5px;
  background-color: rgb(170, 170, 170);
  border-radius: 7px 7px 0px 0px;
  -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  font-weight: bold;
}
.json_container
{
  align-self: baseline;
  /* display:inline-flex;
  flex-direction:column */;
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
