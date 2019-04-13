<template>
    <mek-sub-component-table
        :items="class_table" :headers="{name:'Nype',cost:'Cost',kills:'Kills'}" 
        :selected-keys="selected_keys" :pkey="pkey" :name="locomotionType+' Class'" 
        flow="pkey-col" :show-headers="true"
        @update-selected-data="select_class"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin.js";

import {locomotion_data_table, cleaned_feature, create_data_table}
    from "@/data_table_modules/mek_locomotion/mek_locomotion-class-data-module.js";

export default 
{
    name:"mek_locomotion_class",
    props:["locomotionClass","locomotionType"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/design_components/universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        obj.pkey="name";
        obj.alerts=[];
        obj.selected_class=null;
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_class:function(_selected_class)
        {
            let selected_class=JSON.parse(JSON.stringify(_selected_class));
            this.$set(this,"selected_class",selected_class);
            this.$emit("update-locomotion-class",selected_class);
        },
    },
    computed:
    {
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.locomotionClass);
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            if(cleaned_data.update)
            {
                this.$emit("alert-generated",true);
                this.select_class(cleaned_data.data);
            }
            return cleaned_data.key_list;
        },
        class_table()
        {
            create_data_table(this.locomotionType);
            return locomotion_data_table;
        }
    },
    watch:
    {
        "locomotionType":function(_newval,_oldval)
        {//must track changes in locomotionType to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>
<style scoped>

</style>
