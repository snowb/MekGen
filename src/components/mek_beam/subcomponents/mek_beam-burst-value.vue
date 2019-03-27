<template>
    <mek-sub-component-table
        :items="burst_value_table"
        :headers="{burst_value:'BV',cost:'Cost'}" :show-headers="true"
        name="Burst Value" flow="row" :format="{cost:'multiplier'}"
        :selected-indices="burst_value_index"
        @update-selected-indices="select_burst_value"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_beam_burst_value",
    props:["burstValue"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.burst_value_table=
        [
            {burst_value:1,cost:1},
            {burst_value:2,cost:1.5},
            {burst_value:3,cost:2},
            {burst_value:4,cost:2.5},
            {burst_value:5,cost:3},
            {burst_value:6,cost:3.5},
            {burst_value:7,cost:4},
            {burst_value:8,cost:4.5},
            {burst_value:"__INFINITY__",cost:5},
        ]

        return obj;
    },
    methods:
    {
        select_burst_value:function(_burst_value_index)
        {
            this.$emit("update-burst-value",this.burst_value_table[_burst_value_index]);
        },
    },
    computed:
    {
        burst_value_index:function()
        {
            let index=0;
            this.burstValue;
            this.burst_value_table.some(function(_val,_index)
            {
                if(_val.burst_value==this.burstValue.burst_value)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.burst_value_table[index].cost!==this.burstValue.cost)
            {
                this.select_burst_value(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>