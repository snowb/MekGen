<template>
    <mek-sub-component-table
        :items="armor_table" :selectedKeys="selected_keys" pkey="cost"
        :headers="{name:'Name',stopping_power:'SP',cost:'Cost'}"
        name="Armor" flow="pkey-col" :showHeaders="true"
        @update-selected-data="select_armor"
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
            this.$emit("update-armor",JSON.parse(JSON.stringify(_selected_armor)));
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
        },
        selected_keys()
        {
            let key_list=[];
            let data=null;

            this.armor_table.some((_val, _index)=>
            {
                if(_val.cost==this.armor.cost)
                {
                    key_list.push(this.armor.cost);
                    data=_val;
                    return true;
                }
            },this);

            if(!armor_validate(this.armor))
            {
                this.select_armor(data);
            }
            return key_list;
        }
    }
}
</script>