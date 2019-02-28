<template>
    <mek-sub-component-table
        :items="shots_table"
        :headers="{shots:'Shots',cost:'Cost'}"
        name="Shots" flow="row" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_shots_index"
        @update-selected-indices="select_shots"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name: "mek_beam_shots",
    props:["shots"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.shots_table=
            [
                {shots:0,cost:0.33},
                {shots:1,cost:0.5},
                {shots:2,cost:0.6},
                {shots:3,cost:0.7},
                {shots:5,cost:0.8},
                {shots:10,cost:0.9},
                {shots:Infinity,cost:1}
            ];
        return obj;
    },
    methods:
    {
        select_shots:function(_shots_index)
        {
            this.$emit("update-shots",this.shots_table[_shots_index]);
        }
    },
    computed:
    {
        selected_shots_index:function()
        {
            let index=0;
            this.shots;
            this.shots_table.some((_val, _index)=>
            {
                if(_val.shots==this.shots.shots)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(this.shots.cost!=this.shots_table[index].cost)
            {
                this.select_shots(index);
            }
            return [index];
        }
    }
}
</script>