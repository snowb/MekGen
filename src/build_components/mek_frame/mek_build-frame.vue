<template>
  <div class="mek-inline-flex-col">
    {{selectedData}}
  </div>
</template>

<script>
export default
{
  name:"mek-build-frame",
  props:["selectedData"],
  components:
  {
      "mek-window":()=>import(/* webpackChunkName: "mek_window" */"@/app_components/universal/mek_window.vue"),
  },
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
