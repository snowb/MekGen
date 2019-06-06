<template>
  <div class="mek-inline-flex-col">
    <mek-window title="Mek-Window">
      some data stuff here
    </mek-window>
    <mek-window title="Mek-Window2">
      other data stuff here
    </mek-window>
  </div>
</template>

<script>
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

  },
  computed:
  {

  }
}
</script>

<style scoped>

</style>
