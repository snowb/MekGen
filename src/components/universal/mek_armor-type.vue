<template>
    <mek-sub-component-table
        :items="armor_type_table" :selectedKeys="selected_keys" pkey="damage_coefficient"
        :headers="{type:'Type',damage_coefficient:'DC',cost:'Cost'}"
        name="Armor Type" flow="pkey-col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_armor_type"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import {armor_type_data_table, armor_type_validate, has_feature, get_feature} from "../data_table_modules/mek_armor-type-data-module.js"

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_armor_type",
    props:["armorType"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
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
            let key_list=[];
            let data=null;

            this.armor_type_table.some((_val)=>
            {
                if(_val.damage_coefficient==this.armorType.damage_coefficient)
                {
                    key_list.push(this.armorType.damage_coefficient);
                    data=_val;
                    return true;
                }
            },this);

            if(!armor_type_validate(this.armorType))
            {
                this.select_armor_type(data);
            }
            return key_list;
        }
    }
}
</script>