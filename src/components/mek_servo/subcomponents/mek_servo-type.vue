<template>
    <mek-sub-component-table
        :items="type_table" :headers="{type:''}" :pkey="pkey" :selected-keys="selected_keys"
        name="Type" flow="pkey-col" :show-headers="false"
        @update-selected-data="select_type"
    ></mek-sub-component-table>
</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin.js";
import alerts_mixin from "../../../mixins/alerts_mixin.js";

import {servo_data_table, cleaned_feature} 
    from "../../data_table_modules/mek_servo/mek_servo-type-data-module.js";

export default 
{
    name:"mek_servo_type",
    props:["servoType"],
    mixins:[utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue"),
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
            this.$emit("update-servo-type",JSON.parse(JSON.stringify(_selected_type)));
        }
    },
    computed:
    {
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.servoType);
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
                this.select_type(cleaned_data.data);
            }
            return cleaned_data.key_list;
        },
        type_table()
        {
            return servo_data_table;
        }
    }
}
</script>
<style scoped>

</style>
