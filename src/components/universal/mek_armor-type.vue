<template>
    <mek-sub-component-table
        :items="armor_type_table"
        :headers="{type:'Type',damage_coefficient:'DC',cost:'Cost'}"
        name="Armor Type" flow="col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_armor_type_index"
        @update-selected-indices="select_armor_type"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import {armor_type_data_table, armor_type_validate} from "../data_table_modules/mek_armor-type-data-module.js"

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
            this.$emit("update-armor-type",this.armor_type_table[_selected_armor_type]);
        }
    },
    computed:
    {
        selected_armor_type_index:function()
        {
            let index=1;

            this.armor_type_table.some((_val, _index)=>
            {
                if(_val.type.toLowerCase()==this.armorType.type.toLowerCase())
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(!armor_type_validate(this.armorType))
            {
                this.select_armor_type(index);
            }
            return [index];
        },
        armor_type_table()
        {
            return armor_type_data_table;
        }
    }
}
</script>