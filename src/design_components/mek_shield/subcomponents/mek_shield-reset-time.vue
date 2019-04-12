<template>
    <mek-sub-component-table
        :items="reset_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{time:'Rounds',cost:'Cost'}"
        name="Reset Time" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_reset"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin.js";
import { reset_data_table, cleaned_feature } 
    from "@/data_table_modules/mek_shield/mek_shield-reset-time-data-module";

export default 
{
    name:"mek_shield_reset_time",
    props:["resetTime"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/design_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.pkey="time";
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_reset:function(_selected_reset_obj)
        {
            let data=JSON.parse(JSON.stringify(_selected_reset_obj))
            this.$emit("update-reset-time",data);
        }
    },
    computed:
    {
        reset_table()
        {
            return reset_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.resetTime);
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
                this.select_reset(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>