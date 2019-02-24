<template>
    <mek-sub-component-table
        :items="turns_table"
        :headers="{time:'Turns',cost:'Cost'}"
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
    name:"mek_shield_turns_in_use",
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
                {time:1,cost:0.3},
                {time:2,cost:0.4},
                {time:3,cost:0.5},
                {time:4,cost:0.6},
                {time:5,cost:0.7},
                {time:7,cost:0.8},
                {time:10,cost:0.9},
                {time:"X",cost:1.0}
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
                if(_val.time==this.turnsInUse.time)
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