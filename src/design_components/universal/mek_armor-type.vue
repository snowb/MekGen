<template>
    <mek-sub-component-table
        :items="armor_type_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{type:'Type',damage_coefficient:'DC',cost:'Cost'}"
        name="Armor Type" flow="pkey-col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_armor_type"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "@/mixins/selected_item_mixin.js";
import utility_mixin from "@/mixins/utility_mixin.js";
import alerts_mixin from "@/mixins/alerts_mixin.js";

import {armor_type_data_table, cleaned_feature} 
    from "@/data_table_modules/mek_armor/mek_armor-type-data-module.js"

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_armor_type",
    props:["armorType"],
    mixins:[selected_item_mixin,utility_mixin, alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.pkey="damage_coefficient";
        obj.alert=[];
        return obj;
    },
    methods:
    {
        select_armor_type:function(_selected_armor_type)
        {
            this.$emit("update-armor-type",JSON.parse(JSON.stringify(_selected_armor_type)));
        }
    },
    computed:
    {
        armor_type_table()
        {
            return armor_type_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.armorType);
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
                this.$emit("alert-generated",true);
                this.select_armor_type(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>