<template>
    <mek-sub-component-table
        :items="burst_value_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{burst_value:'BV',cost:'Cost'}" :show-headers="true"
        name="Burst Value" flow="pkey-row" :format="{cost:'multiplier'}"
        @update-selected-data="select_burst_value"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import {burst_value_data_table, cleaned_feature}
    from "@/data_table_modules/mek_beam/mek_beam-burst-value-data-module.js";

export default
{
    name:"mek_beam_burst_value",
    props:["burstValue"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/app_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="burst_value";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_burst_value:function(_burst_value)
        {
            let data=JSON.parse(JSON.stringify(_burst_value));
            this.$emit("update-burst-value",data);
        },
    },
    computed:
    {
        burst_value_table()
        {
            return burst_value_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.burstValue);
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
                this.select_burst_value(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>