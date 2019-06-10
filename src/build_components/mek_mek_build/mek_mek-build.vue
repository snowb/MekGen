<template>
<span class="mek-inline-flex-col" style="width:100%;">
    <mek-component-name :new-component="newComponent" :component-name="component_name||servo_name"
      :component-changed="component_changed"
      @update-component-name="updateComponentName"
    ></mek-component-name>
    <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
  </span>
</template>

<script>
export default 
{
  name:"mek_mek-build",
  props:[],
  mixins:[],
  components:
  {

  },
  data:()=>
  {
    let obj={};
    return obj;
  }
}
</script>

<style scoped>

</style>
