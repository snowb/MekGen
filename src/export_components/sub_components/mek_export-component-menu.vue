<template>
    <span class="menu_container">
      <span v-for="(id,key) in componentList" :key="key" class="component clickable_ecm"
        @click="selectComponent(key)" :class="selected(key)"
      >
        {{id}}
      </span>
      <span class="invisible_pad_ecm">{{invisiblePad}}</span>
    </span>
</template>
<script>
import {mapGetters} from 'vuex';
import utility_mixin from "../../mixins/utility_mixin";

export default {
  name: 'export-component-menu',
  mixins:[utility_mixin],
  components:
  {
  },
  data:function()
  {
    let obj={};
    obj.selectedKey=null;
    return obj;
  },
  methods:
  {
    selectComponent(_key)
    {
      this.selectedKey=_key;
      this.$store.commit("selectComponent",_key);
    },
    selected(_key)
    {
      return this.selectedKey==_key ? "selected_ecm" : "";
    }
  },
  computed:
  {
    componentList()
    {
      return this.getComponentByType(this.targetExportTab,this.targetTypeTab);
    },
    invisiblePad()
    {
      return this.invisible_pad(Object.values(this.componentList));
    },
    ...mapGetters(
        {
            targetTypeTab:'targetTypeTab',
            targetExportTab:'targetExportTab',
            getComponentByType:'getComponentByType',
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
}
/* .side_menu_header
{
    font-weight: bold;
    font-size: 110%;
    box-shadow: 0px 1px 0px #222;
    text-transform: capitalize;
}
.equipment_header
{
    margin-top:5px;
    text-transform: capitalize;
    font-weight: bold;
    margin-left: 10px;
    overflow: hidden;
}
.equipment
{
    font-weight: normal;
    margin-left: 20px;
    background-color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.equipment:hover
{   
    color: transparent;
}
.equipment:hover::after
{
    content:attr(data-text);
    position:absolute;
    left: auto;
    top: auto;
    overflow: visible;
    color: #222;
    background-color: #aaa;
    display: block;
    padding-right: 5px;
    margin-top:-1.1rem;
    border-radius: 0px 7px 7px 0px;
    box-shadow: 1px 1px 1px #000, 1px -1px 1px #000;
    z-index: 1000;
} */
</style>
