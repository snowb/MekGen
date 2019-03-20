<template>
    <mek-sub-component-table
        :items="reset_table"
        :headers="{time:'Rounds',cost:'Cost'}"
        name="Reset Time" flow="row" :show-headers="true"
        :format="{cost:'multiplier'}"
        :selected-indices="selected_reset_index"
        @update-selected-indices="select_reset"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";

export default 
{
    name:"mek_shield_reset_time",
    props:["resetTime"],
    mixins:[selected_item_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.reset_table=
            [
                {time:"X",cost:0.5},
                {time:3,cost:0.75},
                {time:2,cost:1.0},
                {time:1,cost:1.5},
                {time:0,cost:2.0}
            ];
        return obj;
    },
    methods:
    {
        select_reset:function(_selected_reset_obj)
        {
            this.$emit("update-reset-time",this.reset_table[_selected_reset_obj]);
        }
    },
    computed:
    {
        selected_reset_index:function()
        {
            let index=2;
            this.reset_table.some(function(_val,_index)
            {
                if(_val.time==this.resetTime.time)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.reset_table[index].cost!==this.resetTime.cost)
            {
                this.select_reset(index);
            }
            return [index];
        }
    }
}
</script>