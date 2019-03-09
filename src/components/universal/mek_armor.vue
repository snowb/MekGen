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
            
            let update=false;
            switch(true)
            {
                case this.armor.name!=this.armor_table[index].name:
                case this.armor.stopping_power!=this.armor_table[index].stopping_power:
                    update=true;
            }
            if(update)
            {
                this.select_armor(index);
            }
            return [index];
        },
        armor_table()
        {
            let armor_table=[{name:"None",cost:0,stopping_power:0}];

            let maxArmor=this.maxArmor;
            let new_armor_table=this.servo_classes.reduce((_newTable,_val)=>
            {
                if(_val.code<=maxArmor)
                {
                    _newTable.push({name: _val.name, cost: _val.code, stopping_power: _val.code});
                }
                return _newTable;
            },armor_table);
            return new_armor_table;
        }
    }
}
</script>