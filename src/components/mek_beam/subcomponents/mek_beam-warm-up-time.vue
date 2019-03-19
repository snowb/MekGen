<template>
    <mek-sub-component-table
        :items="warm_up_table"
        :headers="{time:'Turns',cost:'Cost'}"
        name="Warm Up Time" flow="row" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_warm_up_index"
        @update-selected-indices="select_warm_up_time"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name: "mek_warm_up_time",
    props:["warmUpTime"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.warm_up_table=
            [
                {time:0,cost:1.0},
                {time:1,cost:0.9},
                {time:2,cost:0.7},
                {time:3,cost:0.6},
            ];
        return obj;
    },
    methods:
    {
        select_warm_up_time:function(_range_mod_index)
        {
            this.$emit("update-warm-up-time",this.warm_up_table[_range_mod_index]);
        }
    },
    computed:
    {
        selected_warm_up_index:function()
        {
            let index=0;
            this.warmUpTime;
            this.warm_up_table.some((_val, _index)=>
            {
                if(_val.time==this.warmUpTime.time)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(this.warmUpTime.cost!=this.warm_up_table[index].cost)
            {
                this.select_warm_up_time(index);
            }
            return [index];
        }
    },
}
</script>