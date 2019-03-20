<template>
    <mek-sub-component-table
        :items="armor_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{name:'Name',stopping_power:'SP',cost:'Cost'}"
        name="Armor" flow="pkey-col" :showHeaders="true"
        @update-selected-data="select_armor"
    ></mek-sub-component-table>
</template>

<script>
import alerts_mixin from "../../mixins/alerts_mixin";
import servo_classes_mixin from "../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import {armor_data_table, armor_validate, get_feature, cleaned_feature} 
    from "../data_table_modules/mek_armor/mek_armor-data-module.js";

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_armor",
    props:["armor","maxArmor"],
    mixins:[servo_classes_mixin, selected_item_mixin,utility_mixin, alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.pkey="stopping_power";
        obj.alerts=[];
        return obj;
    },
    methods:
    {
        select_armor:function(_selected_armor)
        {
            this.$emit("update-armor",JSON.parse(JSON.stringify(_selected_armor)));
        }
    },
    computed:
    {
        armor_table()
        {
            let new_armor_table=armor_data_table.filter((_val)=>
            {
                return _val.code<=this.maxArmor;
            },this);
            return new_armor_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.armor, this.armor_table);
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
                this.select_armor(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>