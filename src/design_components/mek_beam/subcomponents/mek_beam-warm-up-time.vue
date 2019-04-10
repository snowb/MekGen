<template>
    <mek-sub-component-table
        :items="warm_up_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{time:'Turns',cost:'Cost'}"
        name="Warm Up Time" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_warm_up_time"
    ></mek-sub-component-table>
</template>

<script>
import alerts_mixin from "../../../mixins/alerts_mixin";
import {warm_up_data_table, cleaned_feature}
    from "../../../data_table_modules/mek_beam/mek_beam-warm-up-data-module.js";

export default 
{
    name: "mek_warm_up_time",
    props:["warmUpTime"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.alerts=[];
        obj.pkey="time";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_warm_up_time:function(_warm_up)
        {
            let data=JSON.parse(JSON.stringify(_warm_up))
            this.$emit("update-warm-up-time",data);
        }
    },
    computed:
    {
        warm_up_table()
        {
            return warm_up_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.warmUpTime);
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
                this.select_warm_up_time(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    },
}
</script>