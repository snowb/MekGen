<template>
    <div id="app" style="display:inline-flex-col;">
        <mek-top-menu @focus-section="focusSection" :section="targetTypeTab" :section-list="sectionList"
            size="sm" color="d" color-offset="rgb"
        ></mek-top-menu>
        <span v-if="targetTypeTab!=''" class="mek-flex-row">
          <mek-component-menu></mek-component-menu>
          <mek-data-display></mek-data-display>
        </span>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: 'export-type-menu',
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"../../app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-component-menu":()=>import(/* webpackChunkName: "mek_component-menu" */"./mek_export-component-menu.vue"),
    "mek-data-display":()=>import(/* webpackChunkName: "mek_data-display" */"./mek_export-data-display.vue"),
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
        this.$store.commit("showTab",{prop:"currentTypeTab",tab:_section});
    }
  },
  computed:
  {
    sectionList()
    {
      return this.typeList(this.targetExportTab).map((_val)=>
      {
        let name=_val.charAt(0).toUpperCase()+_val.slice(1);
        return {id:_val,name:name};
      });
    },
    ...mapGetters(
        {
            targetTypeTab:'targetTypeTab',
            targetExportTab:'targetExportTab',
            typeList:'typeList',
            getComponentByType:'getComponentByType'
        })
  }
}
</script>

<style>
</style>
