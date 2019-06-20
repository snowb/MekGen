<template>
<!--- need side menu for selecting configurations saved to mek, pass by selectedData --->
  <div class="mek-inline-flex-col">
    <mek-sub-component-table name="Configuration" flow="dropdown-pkey" pkey="config"
      :items="configurationForms" :show-headers="true" :headers="headers"
      :selected-keys="selectedConfigKey"
      @update-selected-data="select_config"
    ></mek-sub-component-table>
  </div>
  <!--- need save-reset component --->
</template>

<script>
export default 
{
  name:"mek-build-config",
  components:
  {
    "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    "mek-save-reset-component":()=>import(/* webpackChunkName: "mek-save-reset-component" */"@/app_components/universal/mek-save-reset-component.vue"),

  },
  props:["selectedData"],
  mixins:[],
  data:()=>
  {
    let obj={};
    obj.configurationForms=
    [
      {config:"Humanoid",cost:0},
      {config:"Beast",cost:0},
      {config:"Avian",cost:0},
    ];
    obj.headers={config:"Form",cost:"Cost"}
    obj.selected_configuration={config:"Humanoid",cost:0};
    return obj;
  },
  methods:
  {
    select_config(_config)
    {
      this.selected_configuration=JSON.parse(JSON.stringify(_config));
    }
  },
  computed:
  {
    selectedConfigKey()
    {
      return [this.selected_configuration.config];
    }
  }
}
</script>

<style scoped>

</style>
