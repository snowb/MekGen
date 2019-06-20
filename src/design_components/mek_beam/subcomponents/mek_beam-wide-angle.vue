<template>
    <mek-sub-component-table
        :items="wide_angle_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{angle:'Angle',cost:'Cost'}"
        name="Wide Angle" flow="pkey-row" :show-headers="true"
        :format="{angle:'wide-angle',cost:'multiplier'}"
        @update-selected-data="select_angle"
    ></mek-sub-component-table>
</template>

<script>
import alerts_mixin from "@/mixins/alerts_mixin";
import {wide_angle_data_table, cleaned_feature}
    from "@/data_table_modules/mek_beam/mek_beam-wide-angle-data-module.js";

export default 
{
    name: "mek_beam_wide_angle",
    props:["wideAngle"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    },
    data:function()
    {
        let obj={}
        obj.alerts=[];
        obj.pkey="angle";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_angle:function(_angle)
        {
            let data=JSON.parse(JSON.stringify(_angle))
            this.$emit("update-wide-angle",data);
        }
    },
    computed:
    {
        wide_angle_table()
        {
            return wide_angle_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.wideAngle);
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
                this.select_angle(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>