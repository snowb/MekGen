<template>
    <mek-sub-component-table
        :items="turns_table"
        :headers="{turns:'Turns',cost:'Cost'}"
        name="Turns in Use" flow="row" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_turns_index"
        @update-selected-indices="select_turns"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_emw_turns_in_use",
    props:["turnsInUse"],
    mixins:[selected_item_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.turns_table=
            [
                {turns:1,cost:0.3},
                {turns:2,cost:0.4},
                {turns:3,cost:0.5},
                {turns:4,cost:0.6},
                {turns:5,cost:0.7},
                {turns:7,cost:0.8},
                {turns:10,cost:0.9},
                {turns:"X",cost:1.0}
            ];

        return obj;
    },
    methods:
    {
        select_turns:function(_selected_turns)
        {
            this.$emit("update-turns-in-use",this.turns_table[_selected_turns]);
        }
    },
    computed:
    {
        selected_turns_index:function()
        {
            let index=7;
            this.turns_table.some(function(_val,_index)
            {
                if(_val.turns==this.turnsInUse.turns)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.turns_table[index].cost!==this.turnsInUse.cost)
            {
                this.select_turns(index);
            }
            return [index];
        }
    }
}
</script>