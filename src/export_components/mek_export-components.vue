<template>
    <div id="app" style="display:inline-flex-col;">
        <mek-top-menu @focus-section="focusSection" :section="targetImportTab" :section-list="sectionList"
        ></mek-top-menu>
        {{typeList("equipment")}}
    </div>
</template>
<script>

import {mapGetters} from 'vuex';

export default {
  name: 'export-components',
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"../app_components/mek_top_menu/mek_top-menu.vue"),
  },
  data:function()
  {
    let obj={};
    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        this.$store.commit("showTab",{prop:"currentExportTab",tab:_section});
    }
  },
  computed:
  {
    sectionList()
    {
      return this.categoryList.map((_val)=>
      {
        let name=_val.charAt(0).toUpperCase()+_val.slice(1);
        return {id:_val,name:name};
      });
    },
    ...mapGetters(
        {
            targetImportTab:'targetImportTab',
            componentList:'componentList',
            categoryList:'categoryList',
            typeList:'typeList',
        })
  }
}
</script>

<style>
</style>
