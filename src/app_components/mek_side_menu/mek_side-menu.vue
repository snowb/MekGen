<template>
  <div :class="container">
    <div class="side_menu_header">{{title}}</div>
    <div v-for="(section_value, section_key, section_idx) in sections" 
      :key="'side-menu-section-'+section_key+'-'+section_idx"
    >
      <div v-if="typeof section_value==='object'">
        <div class="subsection_header" :class="subsection_header">{{section_key}}</div>
        <div v-for="(content_value, content_key, content_idx) in section_value"
          :key="'side-menu-content-'+content_key+'-'+content_idx"
          @click="emitClick(content_value)" :class="content"
        >
          {{content_key}}
        </div>
      </div>
    </div>
  </div>
  <!--- build side menu --->
  <!---div class="side_menu_container">
    <div class="side_menu_header">{{title}}</div>
    <div v-for="(section_key,section_value,section_index) in sections" :key="section_key+section_index+'-idx'">
      <div v-if="sections[section_key].length>0">
        <div class="type_header">{{section_key}}</div>
        <div class="servo_item" v-for="(subsection,index) in section_value" 
          :key="subsection+index+'-sm'" draggable="draggable"
        >
          {{subsection}}
        </div>
      </div>
    </div>
  </div--->
  <!--- original design side menu--->
  <!---span class="side_menu_container">
    <span v-if="Object.keys(sections).length==0">
      No Data
    </span>
    <div v-for="(section,section_key,section_idx) in sections"
      :key="'side-menu-'+section_key+'-'+section_idx"
    >
      <div class="side_menu_header">{{section_key}}</div>
      <div v-for="(subsection,subsection_key,subsection_idx) in section"
        :key="'side-menu-'+subsection_key+'-'+subsection_idx"
      >
        <div class="subsection_header">{{subsection_key}}</div>
        <div v-for="(_value,_key,_idx) in subsection"
          :key="'side-menu-'+_key+'-'+_idx" :data-text="_value"
          class="_value"
          @click="loadData(_key)"
        >
          {{_value}}
        </div>
      </div>
    </div>
  </span--->
</template>

<script>
// import {mapGetters} from 'vuex';

export default 
{
  name:"mek_frame_side_menu",
  props:["sections","format","title"],
  mixins:[],
  components:{},
  data:()=>
  {
    let obj={};
    return obj;
  },
  methods:
  {
    emitClick(_data)
    {
      this.$emit("side-menu-clicked",_data);
    },
    /* listComponentsByType(_type)
    {
      return this.componentList.reduce((_list, _el)=>
      {
        if(_el.selected_servo_type.type==_type)
        {
          _list.push(_el.component_name);
        }
        return _list;
      },[]);
    }, */
    loadData(_data)
      {
        //emit event that _data was clicked
        
        // this.$store.commit("showTab",{prop:"currentDesignTab",tab:"mek-"+this.getComponent(_uuid).component_type});
        // this.$store.commit("selectComponent",_uuid);
      }
  },
  computed:
  {
    /* ...mapGetters(
    {
      listByCategoryAndType:"listByCategoryAndType",
      getComponent:"getComponent"
    }),
    servoList()
    {
      return this.listByCategoryAndType("equipment","servo");
    },
    componentList()
    {
      let components=Object.keys(this.servoList).map((_el)=>
      {
        return this.getComponent(_el);
      },this);
      return components;
    } */
    container()
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
    subsection_header()
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
    content()
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
    }
  }
}
</script>

<style scoped>
.side_menu_container_full
{
  background-color: rgb(170,170,170);
  padding: 5px;
  margin: 5px;
  align-self: baseline;
  max-width:150px;
  /* display:inline-flex;
  flex-direction:column; */
  border-radius: 7px;
  height: 100%;
  -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
  /* margin-right: 10px;
  min-width: 105px;
  max-width: 105px;*/
  /* width: 100px; */
  min-width: 100px;
}
.side_menu_container_cut
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
    min-width: 105px;
    max-width: 105px;
    width: 105px;
}
.side_menu_header
{
  font-size: 110%;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 1px 0px #222;
  text-transform: capitalize;
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
  padding: 2px;
  border-radius: 7px;
  cursor: pointer;
}
.content_cut
{
    font-weight: normal;
    margin-left: 20px;
    background-color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
}
</style>
