<template>
    <mek-sub-component-table
        :items="absorption_table"
        :headers="{absorption:'Absorption',armor_penalty:'SP Reduction',cost:'Cost'}"
        name="Energy Absorption" flow="col" :showHeaders="true"
        :format="{absorption:'percent',armor_penalty:'percent',cost:'multiplier'}"
        :selectedIndices="selected_absorption_index"
        @update-selected-indices="select_absorption_type"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_energy_absorbing_armor",
    props:["absorption"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.absorption_table=
            [
                {absorption:0,cost:1.0,armor_penalty:0},
                {absorption:0.2,cost:1.5,armor_penalty:0},
                {absorption:0.25,cost:1.8,armor_penalty:0.2},
                {absorption:0.33,cost:2.2,armor_penalty:0.25},
                {absorption:0.5,cost:2.5,armor_penalty:0.33},
            ];
        return obj;
    },
    methods:
    {
        select_absorption_type:function(_selected_absorption)
        {
            this.$emit("update-absorption",this.absorption_table[_selected_absorption]);
        }
    },
    computed:
    {
        selected_absorption_index:function()
        {
            let index=0;

            this.absorption_table.some((_val, _index)=>
            {
                if(_val.absorption==this.absorption.absorption)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            let update=false;
            switch(true)
            {
                case this.absorption.cost!=this.absorption_table[index].cost:
                case this.absorption.armor_penalty!=this.absorption_table[index].armor_penalty:
                    update=true;
            }
            if(update)
            {
                this.select_absorption_type(index);
            }
            return [index];
        }
    }
}
</script>