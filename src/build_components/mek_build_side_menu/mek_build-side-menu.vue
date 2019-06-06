<template>
  <div class="side_menu_container">
    <div v-for="(type,index) in servo_type_list" :key="type+index+'-idx'">
      <div v-if="listComponentsByType(type).length>0">
        <div class="type_header">{{type}}</div>
        <div class="servo_item" v-for="(servo,index) in listComponentsByType(type)" 
          :key="servo+index+'-sm'" draggable="draggable"
        >
          {{servo}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default 
{
  name:"mek_build_side_menu",
  props:[],
  mixins:[],
  components:{},
  data:()=>
  {
    let obj={};
    obj.servo_type_list=["Torso","Head","Arm","Leg","Pod","Wing","Tail"];
    return obj;
  },
  methods:
  {
    listComponentsByType(_type)
    {
      return this.componentList.reduce((_list, _el)=>
      {
        if(_el.selected_servo_type.type==_type)
        {
          _list.push(_el.component_name);
        }
        return _list;
      },[]);
    }
  },
  computed:
  {
    ...mapGetters(
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
    }
  }
}
</script>

<style scoped>
.side_menu_container
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
.servo_item
{
  border: thin solid black;
  padding: 5px;
  font-weight: bold;
  border-radius: 7px;
  cursor: pointer;
}
.type_header
{
  font-size: 110%;
  font-weight: bold;
  text-decoration: underline;
}
</style>
