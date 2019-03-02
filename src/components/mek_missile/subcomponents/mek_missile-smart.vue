<template>
    <mek-sub-component-table
        :items="smart_table"
        :headers="{smart:'Rounds',cost:'Cost'}" :showHeaders="true"
        name="Smart" flow="row" :format="{cost:'multiplier'}"
        :selectedIndices="smart_index"
        @update-selected-indices="select_smart"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_missile_smart",
    props:["smart"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};

        obj.smart_table=
        [
            {smart:0,cost:1},
            {smart:1,cost:2.5},
            {smart:2,cost:3},
            {smart:3,cost:3.5},
            {smart:4,cost:4},
        ];
        return obj;
    },
    methods:
    {
        select_smart:function(_smart_index)
        {
            this.$emit("update-smart",this.smart_table[_smart_index]);
        },
    },
    computed:
    {
        smart_index:function()
        {
            let index=0;
            this.smart;
            this.smart_table.some(function(_val,_index)
            {
                if(_val.smart==this.smart.smart)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);

            if(this.smart_table[index].cost!==this.smart.cost)
            {
                this.select_smart(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>