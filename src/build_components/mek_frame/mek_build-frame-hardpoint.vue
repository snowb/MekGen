<template>
  <div class="mek-inline-flex-col">
    <div class="mek-inline-flex-row" :key="'mbfh-'+hardpoint+'-'+index+'-'+selectedServo"
      v-for="(selectedServo,index) in selectedServoList[hardpoint]"
    >
      <mek-sub-component-table :items="filterListServos(hardpoint)" :headers="headers"
        :selected-keys="selectedServo" show-headers="true" flow="dropdown-pkey" 
        pkey="master_uuid" max-width="400"
        @update-mouse-over="updateMouseOver" @update-selected-data="updateSelectedServo(index,$event)"
      ></mek-sub-component-table>
      <!---mek-top-menu :section-list="servoButtonList" size="sm" direction="col" style="align-self:center;"
      >
      **** Need to determine want this or something else
      </mek-top-menu--->
    </div>
    <div class="add_servo_button" @click="addServo" v-if="showAddServoButton">Add {{hardpoint}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default
{
  name:"mek-build-frame-hardpoint",
  props:["hardpoint"],
  components:
  {
      // "mek-window":()=>import(/* webpackChunkName: "mek_window" */
      //   "@/app_components/universal/mek_window.vue"),
      // "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */
      //   "@/app_components/universal/mek_sub-component-table.vue"),
      // "mek-top-menu":()=>import(/* webpackChunkName: "mek-top-menu" */
      //   "@/app_components/mek_top_menu/mek_top-menu.vue"),
  },
  mixins:[],
  data:()=>
  {
    let obj={};
    obj.headers={name:"Name"};
    obj.selectedServoList={};
    obj.servoButtonList=
    [
      {id:"save",name:"Save"},
      {id:"edit",name:"Modify Servo"},
      {id:"delete",name:"Delete"},
    ];
    return obj;
  },
  methods:
  {
    filterListServos(_filter)
    {
      if(_filter===null)
      {
        return [];
      }
      let filteredServos=this.listServos.filter(_component=>
      {
        return _filter=="stowed" || _component.selected_servo_type.type.toLowerCase()==_filter.toLowerCase();
      });

      if(_filter=="stowed")
      {
        filteredServos=filteredServos.sort((_a,_b)=>
        {
          //sort servos by Torso, Head, Arm, Leg, Wing, Tail, Pod, Stowed
          _a;
          _b;
        });
      }

      let componentTableServos=filteredServos.map((_el)=>
      {
        let obj={};
        obj.name=_el.component_name;
        obj.master_uuid=_el.uuid;
        return obj;
      });
      componentTableServos.unshift({name:"None",master_uuid:"none"});
      return componentTableServos;
    },
    updateMouseOver(_pkey)
    {
      //nothing yet, need to create a mek-window to display servo info
      _pkey;
    },
    updateSelectedServo(_index,_event)
    {
      this.$set(this.selectedServoList[this.hardpoint],_index,_event.master_uuid);
    },
    addServo()
    {
      if(!Array.isArray(this.selectedServoList[this.hardpoint]))
      {
        this.$set(this.selectedServoList,this.hardpoint,[]);
      }
      this.selectedServoList[this.hardpoint].push("none");
    }
  },
  computed:
  {
    ...mapGetters(
    {
      listByCategoryAndType:"listByCategoryAndType",
      getComponent:"getComponent",
      getMultipleComponents:"getMultipleComponents",
    }),
    listServos()
    {
      let servo_keys=Object.keys(this.listByCategoryAndType("equipment","servo"));
      return this.getMultipleComponents(servo_keys);
    },
    showAddServoButton()
    {
      if(this.hardpoint=='torso' && this.selectedServoList.torso && this.selectedServoList.torso.length>=1)
      {
        return false;
      }
      return true;
    }
  }
}
</script>

<style scoped>
.add_servo_button
{
  font-size: 120%;
  font-weight: bold;
  margin: 10px;
  color: rgba(0,0,0,0.5);
  background-color: rgba(255,255,255,0.5);
  border-radius: 7px;
  border: 1px solid rgba(0,0,0,0.5);
  text-transform: capitalize;
  cursor: pointer;
}
.add_servo_button:hover
{
  color: rgba(0,0,0,1);
  background-color: rgba(255,255,255,1);
  border: 1px solid rgba(0,0,0,1);
}
</style>
