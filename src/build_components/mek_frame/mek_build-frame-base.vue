<template>
  <div class="mek-inline-flex-col">
    <mek-window title="Components">
      {{this.filterListServos("Head")}}<br>
      {{this.filterListServos("Arm")}}<br>
      {{this.filterListServos("Leg")}}<br>
      {{this.filterListServos("Torso")}}<br>
      {{this.filterListServos("Wing")}}<br>
      {{this.filterListServos("Tail")}}<br>
      {{this.filterListServos("Pod")}}<br>
    </mek-window>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default
{
  name:"mek-build-frame",
  components:
  {
      "mek-window":()=>import(/* webpackChunkName: "mek_window" */"@/app_components/universal/mek_window.vue"),
  },
  props:[],
  mixins:[],
  data:()=>
  {
    let obj={};
    return obj;
  },
  methods:
  {
    filterListServos(_filter)
    {
      return this.listServos.filter(_component=>
      {
        return _component.selected_servo_type.type==_filter;
      });
    },
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
