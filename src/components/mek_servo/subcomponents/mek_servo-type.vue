<template>
    <mek-sub-component-table
        :items="type_table" :headers="{type:''}"
        name="Servo" flow="col" :showHeaders="false"
        :selectedIndices="type_index"
        @update-selected-indices="select_type"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name:"mek_servo_type",
    props:["servoType"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        obj.type_table=
        [
            {type:"Torso"},
            {type:"Head"},
            {type:"Arm"},
            {type:"Leg"},
            {type:"Wing/Tail"},
            {type:"Pod"},
        ];

        return obj;
    },
    methods:
    {
        select_type:function(_selected_type_index)
        {
            this.$emit("update-servo-type",this.type_table[_selected_type_index]);
        }
    },
    computed:
    {
        type_index()
        {
            let index=0;
            this.type_table.some((_elem,_index)=>
            {
                if(_elem.type.toLowerCase()==this.servoType.type.toLowerCase())
                {
                    index=_index;
                    return true;
                }
            },this);

            return [index];
        }
    }
}
</script>
<style scoped>

</style>
