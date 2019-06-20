<template>
    <mek-sub-component-table
        :items="type_table" :headers="{type:''}" :pkey="pkey" :selected-keys="selected_keys"
        name="Type" flow="pkey-col" :show-headers="false"
        @update-selected-data="select_type"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin.js";

import {locomotion_data_table, cleaned_feature} 
    from "@/data_table_modules/mek_locomotion/mek_locomotion-type-data-module.js";

export default 
{
    name:"mek_locomotion_type",
    props:["locomotionType"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/app_components/universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        obj.pkey="type";
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_type:function(_selected_type)
        {
            this.$emit("update-locomotion-type",JSON.parse(JSON.stringify(_selected_type)));
        }
    },
    computed:
    {
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.locomotionType);
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
                this.select_type(cleaned_data.data);
            }
            return cleaned_data.key_list;
        },
        type_table()
        {
            return locomotion_data_table;
        }
    }
}
</script>
<style scoped>

</style>
