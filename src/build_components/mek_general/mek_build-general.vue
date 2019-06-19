<template>
<span class="mek-inline-flex-col" style="width:100%;">
    <mek-component-name :new-component="ingest_mek" :component-name="component_name||mek_name"
      :component-changed="component_changed"
      @update-component-name="updateComponentName"
    ></mek-component-name>
    <mek-save-reset-component @save-reset-component="componentSaveReset"
    style="align-self:start;"></mek-save-reset-component>
  </span>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin";
import component_computed_mixin from "@/mixins/component_computed_mixin";
import component_methods_mixin from "@/mixins/component_methods_mixin";

export default 
{
  name:"mek_build-general",
  props:["selectedData"],
  mixins:[utility_mixin, component_computed_mixin, component_methods_mixin],
  components:
  {
    "mek-save-reset-component":()=>import(/* webpackChunkName: "mek-save-reset-component" */"@/app_components/universal/mek-save-reset-component.vue"),
    "mek-component-name":()=>import(/* webpackChunkName: "mek-component-name" */"@/design_components/universal/mek-component-name.vue"),
  },
  data:()=>
  {
    let obj={};
    obj.uuid=null;
    obj.component_name=null;
    obj.custom_component_name=false;
    obj.component_category="mek";
    obj.component_type="mek";
    obj.original_component=null;
    obj.component_changed=true;

    obj.alerts=[];
    obj.hasAlert=false;
    return obj;
  },
  methods:
  {
    updateComponentName(_name)
    {
      if(_name!=this.component_name)
      {
        this.component_name=_name;
        this.custom_component_name=true;
        this.component_changed=true;
      }
    },
    componentSaveReset:function(_action)
    {
      let action=_action=="reset" && this.original_component==null?"new":_action;
      switch(action)
      {
        case "save":
          this.$emit("saveSelectedData","general",this.output_data());
          break;
        case "reset":
          if(this.original_component!==null)
          {
            this.ingest_data(JSON.parse(this.original_component));
            break;
          }
          // eslint-disable-next-line
        case "new":
          this.uuid=null;
          this.component_name=null;
          this.$emit("resetSelectedData");
          break;
      }
    },
    output_data()
    {
      let return_data={};
      this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
      return_data.uuid=this.uuid;
      return_data.component_category="mek";
      return_data.component_type="mek";//specific equipment type
      return_data.component_name=this.custom_component_name?this.component_name:this.mek_name;
      return_data.custom_component_name=this.custom_component_name;
      this.$nextTick(()=>{this.component_changed=false;});
      this.original_component=JSON.stringify(return_data);
      return JSON.parse(this.original_component);
    },
    ingest_data(_data_object)
    {
      let alertMessage="Mek is not valid, resetting.";
      this.universal_ingest_data(_data_object,alertMessage);
      if(!this.custom_component_name)
      {//reset component_name if component generated
        this.$set(this,"component_name",null);
      }
      this.$nextTick(()=>{this.component_changed=this.hasAlert;});
    },
    handleAlert(_alert_status)
    {
      this.hasAlert=_alert_status;
    }
  },
  computed:
  {
    mek_name()
    {
      return this.custom_component_name ? this.component_name : "Unnamed Mek";
    },
    ingest_mek()
    {
      if(this.selectedData!==null)
      {
        if(this.selectedData.uuid!==this.uuid 
          && this.selectedData.component_category==this.component_category
          && this.selectedData.component_type==this.component_type)
        {
          this.ingest_data(this.selectedData);
        }
        return false;
      }
      return true;
    },
  },
}
</script>

<style scoped>

</style>
