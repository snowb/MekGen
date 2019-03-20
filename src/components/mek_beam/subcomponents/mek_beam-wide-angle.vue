<template>
    <mek-sub-component-table
        :items="wide_angle_table"
        :headers="{angle:'Angle',cost:'Cost'}"
        name="Wide Angle" flow="row" :show-headers="true"
        :format="{angle:'wide-angle',cost:'multiplier'}"
        :selected-indices="selected_angle_index"
        @update-selected-indices="select_angle"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name: "mek_beam_wide_angle",
    props:["wideAngle"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.wide_angle_table=
            [
                {angle:0,cost:1},
                {angle:1,cost:2},
                {angle:60,cost:3},
                {angle:180,cost:5},
                {angle:300,cost:7},
                {angle:360,cost:9},
            ];
        return obj;
    },
    methods:
    {
        select_angle:function(_angle_index)
        {
            this.$emit("update-wide-angle",this.wide_angle_table[_angle_index]);
        }
    },
    computed:
    {
        selected_angle_index:function()
        {
            let index=0;
            this.angle;
            this.wide_angle_table.some((_val, _index)=>
            {
                if(_val.angle==this.wideAngle.angle)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(this.wideAngle.cost!=this.wide_angle_table[index].cost)
            {
                this.select_angle(index);
            }
            return [index];
        }
    }
}
</script>