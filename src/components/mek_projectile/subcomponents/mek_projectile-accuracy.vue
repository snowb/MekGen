<template>
    <mek-sub-component-table
        :items="accuracy_table"
        :headers="{accuracy:'WA',cost:'Cost'}" :showHeaders="true"
        name="Accuracy" flow="row" :format="{cost:'multiplier'}"
        :selectedIndices="accuracy_index"
        @update-selected-indices="select_accuracy"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_projectile_accuracy",
    props:["accuracy"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};

        obj.accuracy_table=
        [
            {accuracy:-2,cost:0.6},
            {accuracy:-1,cost:0.8},
            {accuracy:0,cost:1.0},
            {accuracy:1,cost:1.5},
            {accuracy:2,cost:2.0},
        ];
        return obj;
    },
    methods:
    {
        select_accuracy:function(_accuracy_index)
        {
            this.$emit("update-accuracy",this.accuracy_table[_accuracy_index]);
        },
    },
    computed:
    {
        accuracy_index:function()
        {
            let index=2;
            this.accuracy;
            this.accuracy_table.some(function(_val,_index)
            {
                if(_val.accuracy==this.accuracy.accuracy)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);

            if(this.accuracy_table[index].cost!==this.accuracy.cost)
            {
                this.select_accuracy(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>