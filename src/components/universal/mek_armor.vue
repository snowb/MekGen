<template>
    <mek-sub-component-table
        :items="armor_table"
        :headers="{name:'Name',stopping_power:'SP',cost:'Cost'}"
        name="Armor" flow="col" :showHeaders="true"
        :selectedIndices="selected_armor_index"
        @update-selected-indices="select_armor"
    ></mek-sub-component-table>
</template>

<script>
import servo_classes_mixin from "../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import {armor_data_table, armor_validate} from "../data_table_modules/mek_armor-data-module.js";

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_armor",
    props:["armor","maxArmor"],
    mixins:[servo_classes_mixin, selected_item_mixin,utility_mixin],
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
        select_armor:function(_selected_armor)
        {
            this.$emit("update-armor",this.armor_table[_selected_armor]);
        }
    },
    computed:
    {
        selected_armor_index:function()
        {
            let index=1;

            this.armor_table.some((_val, _index)=>
            {
                if(_val.cost==this.armor.cost)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(!armor_validate(this.armor))
            {
                this.select_armor(index);
            }

            return [index];
        },
        armor_table()
        {
            let new_armor_table=armor_data_table.filter((_val)=>
            {
                return _val.code<=this.maxArmor;
            },this);
            return new_armor_table;
        }
    }
}
</script>