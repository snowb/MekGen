<template>
    <mek-sub-component-table
        :items="absorption_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{absorption:'Absorption',armor_penalty:'SP Reduction',cost:'Cost'}"
        name="Energy Absorption" flow="pkey-col" :showHeaders="true"
        :format="{absorption:'percent',armor_penalty:'percent',cost:'multiplier'}"
        @update-selected-data="select_absorption_type"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";
import alerts_mixin from "../../mixins/alerts_mixin.js";

import {ram_data_table, ram_validate, get_feature, cleaned_feature} 
    from "../data_table_modules/mek_armor/mek_energy_absorbing_armor-data-module.js";

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_energy_absorbing_armor",
    props:["absorption","hasArmor"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.pkey="absorption";
        obj.alerts=[];
        return obj;
    },
    methods:
    {
        select_absorption_type:function(_selected_absorption)
        {
            this.$emit("update-absorption",JSON.parse(JSON.stringify(_selected_absorption)));
        }
    },
    computed:
    {
        absorption_table()
        {
            return ram_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.absorption);
            if(cleaned_data.alerts.length>0)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            if(cleaned_data.update)
            {
                this.select_absorption_type(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>