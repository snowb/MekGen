<template>
  <div class="mek-inline-flex-col">
    <!---mek-window type="metallic">
      {{hardpoint}}<br>
      {{filterListServos(hardpoint)}}
    </mek-window--->
    <mek-sub-component-table :items="filterListServos(hardpoint)" :headers="headers"
      :selected-keys="selectedServo" :key="'mbfh-'+filterListServos(hardpoint).length"
      show-headers="true" @update-mouse-over="updateMouseOver" @update-selected-data="updateSelectedServo"
      flow="dropdown-pkey" pkey="master_uuid" max-width="400"
    >
    </mek-sub-component-table>
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
      "mek-window":()=>import(/* webpackChunkName: "mek_window" */"@/app_components/universal/mek_window.vue"),
      "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
  },
  mixins:[],
  data:()=>
  {
    let obj={};
    //obj.headers={class:"Class",kills:"Kills",space:"Space",armor:"Armor",sp:"SP",dc:"DC",ram:"RAM"};
    obj.headers={name:"Name"};
    obj.selectedServo=["none"];
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
        return _component.selected_servo_type.type.toLowerCase()==_filter.toLowerCase();
      });

      let componentTableServos=filteredServos.map((_el)=>
      {
        let obj={};
        /* obj.class=_el.selected_servo_class.id;
        obj.kills=_el.total_kills;
        obj.space=_el.available_space;
        obj.armor=_el.selected_armor.name;
        obj.sp=_el.selected_armor.stopping_power;
        obj.armor=_el.selected_armor_type.type;
        obj.dc=_el.selected_armor_type.damage_coefficient;
        obj.ram=_el.selected_absorption.absorption; */
        obj.name=_el.component_name;
        obj.master_uuid=_el.uuid;
        return obj;
      });
      //componentTableServos.unshift({class:"None",kills:"-",space:"-",armor:"-",sp:"-",dc:"-",ram:"-",master_uuid:"none"});
      componentTableServos.unshift({name:"None",master_uuid:"none"});
      return componentTableServos;
    },
    updateMouseOver(_pkey)
    {
      //nothing yet, need to create a mek-window to display servo info
    },
    updateSelectedServo(_pkey)
    {
      this.selectedServo=[_pkey.master_uuid];
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
  }
}
</script>

<style scoped>

</style>
