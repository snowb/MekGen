<template>
  <div style="height: auto;">
    <div :class="container_class" v-if="!collapsed">
      <div v-if="!list" style="margin-right:5px;max-width:119px; overflow:hidden; text-overflow: ellipsis;">
        <div class="side_menu_header">{{title}}</div>
        <div v-for="(section_value, section_key, section_idx) in sections" 
          :key="'side-menu-section-'+section_key+'-'+section_idx"
        >
          <div v-if="displaySection(section_value)">
            <div class="subsection_header" :class="subsection_header_class">{{section_key}}</div>
            <div v-for="(item_value, item_key, item_idx) in section_value"
              :key="'side-menu-content-'+item_key+'-'+item_idx" class="bottom_spacing item"
              @click="emitClick(item_key)" :class="[content_class,selectedItem==item_key?'selected_class':'']" :data-text="item_value"
              :draggable="draggable"
            >
              {{item_value}}
            </div>
          </div>
        </div>
      </div>
      <div v-else style="margin-right:5px;">
        <div v-if="title!==undefined" class="side_menu_header" style="margin-bottom:5px;">{{title}}</div>
        <div v-if="sections===undefined || Object.keys(sections).length==0" class="no-data">No Data</div>
        <div v-for="(item_value, item_key, item_idx) in sections"
          :key="'side-menu-content-'+item_key+'-'+item_idx" class="bottom_spacing list item"
          @click="emitClick(item_key)" :class="[content_class,selectedItem==item_key?'selected_class':'']" :data-text="item_value"
          :draggable="draggable"
        >
          {{item_value}}
        </div>
      </div>
      <div @click="collapsed=!collapsed" class="collapse_bar" title="collapse" v-if="collapsible">&nbsp;</div>
    </div>
    <div @click="collapsed=!collapsed" class="expand_bar" v-else title="expand">&nbsp;</div>
  </div>
</template>

<script>

export default 
{
  name:"mek_frame_side_menu",
  props:["sections","format","title","draggable","list","clickable","collapsible","selectedItem"],
  mixins:[],
  components:{},
  data:()=>
  {
    let obj={};
    obj.collapsed=false;
    return obj;
  },
  methods:
  {
    emitClick(_data)
    {
      if(this.clickable)
      {
        this.$emit("side-menu-clicked",_data);
      }
    },
    displaySection(_section)
    {
      return typeof _section==="object" && Object.keys(_section).length>0;
    }
  },
  computed:
  {
    container_class()
    {
      switch(true)
      {
        case this.format===undefined:
        case this.format===null:
        case this.format=="cut":
          return "side_menu_container_cut";
        default:
          return "side_menu_container_full";
      }
    },
    subsection_header_class()
    {
      switch(true)
      {
        case this.format===undefined:
        case this.format===null:
        case this.format=="cut":
          return "subsection_header_cut";
      }
      return "";
    },
    content_class()
    {
      switch(true)
      {
        case this.format===undefined:
        case this.format===null:
        case this.format=="cut":
          return "content_cut";
        default:
          return "content_full";
      }
    },
  },
  watch:
  {
    sections(_old, _new)
    {
      this.emitClick("");
    }
  }
}
</script>

<style scoped>
.collapse_bar
{
  width: 10px;
  background-color: #777;
  border-radius: 7px 0px 0px 7px;
  margin-right: 1px;
  box-shadow: inset 0px 0px 3px #fff;
  border: 1px solid black;
  cursor: pointer;
  background-image: url("../../assets/collapse_pips.svg");
}
.expand_bar
{
  width: 10px;
  margin: 5px;
  background-color: #777;
  border-radius: 7px;
  box-shadow: inset 0px 0px 3px #fff;
  border: 1px solid black;
  cursor: pointer;
  height: 35px;
  background-image: url("../../assets/expand_pips.svg");
}
.side_menu_container_full
{
  background-color: rgb(170,170,170);
  padding: 5px 0px 5px 5px;
  margin: 1px 5px 5px 5px;
  align-self: baseline;
  max-width:150px;
  border-radius: 7px;
  /* height: 100%; */
  -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  /* min-width: 100px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.side_menu_container_cut
{
  white-space: nowrap;
  /* display:inline-flex; */
  flex-direction:column;
  border-radius: 7px;
  padding: 5px 0px 5px 5px;
  background-color: rgb(170, 170, 170);
  /* height: 100%; */
  -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  margin: 1px 5px 5px 5px;
  min-width: 100px;
  max-width: 150px;/* 119px */
  /* width: 119px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.side_menu_header
{
  font-size: 110%;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 1px 0px #222;
  text-transform: capitalize;
  max-width: 150px;
}
.subsection_header
{
  font-weight: bold;
  margin-left: 10px;
  margin-top: 5px;
  text-transform: capitalize;
}
.subsection_header_cut
{
  overflow: hidden;
}
.content_full
{
  border: thin solid black;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
  text-transform: capitalize;
}
.content_full:hover
{
  background-color: white;
  color: #222;
  border-radius: 7px;
  box-shadow: inset 1px 1px 1px 0px #222;
}
.content_cut
{
    font-weight: normal;
    margin-left: 20px;
    background-color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
}
.content_cut:hover
{   
    color: transparent;
}
.content_cut:hover::after
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
    text-transform: capitalize;
}
.bottom_spacing
{
  margin-bottom: 3px;
}
.bottom_spacing:last-child
{
  margin-bottom: 0px;
}
.list
{
  font-weight: bold;
}
.no-data
{
  padding: 5px;
}
.item
{
  text-align: start;
}
.selected_class
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
}
</style>
