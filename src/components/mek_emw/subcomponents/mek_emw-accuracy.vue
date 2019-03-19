<template>
    <mek-sub-component-table
        :items="accuracy_table"
        :headers="headers"
        name="Accuracy" flow="row" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="accuracy_index"
        @update-selected-indices="select_accuracy"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_emw_accuracy",
    props:["accuracy","isBeamShield","isVariableBeamShield"],
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
            {accuracy:-2,cost:0.6,defense_ability:-4},
            {accuracy:-1,cost:0.8,defense_ability:-3},
            {accuracy:0,cost:0.9,defense_ability:-2},
            {accuracy:1,cost:1,defense_ability:-1},
            {accuracy:2,cost:1.5,defense_ability:0},
            {accuracy:3,cost:2,defense_ability:1}
        ];

        return obj;
    },
    methods:
    {
        select_accuracy:function(_accuracy)
        {
            this.$emit("update-accuracy",this.accuracy_table[_accuracy]);
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
            if(this.accuracy_table[index].cost!==this.cost)
            {
                this.select_accuracy(index);
            }
            return [index];
        },
        headers()
        {
            if(this.isVariableBeamShield)
            {
                return {accuracy:'WA',defense_ability:'DA',cost:'Cost'}
            }
            else if(this.isBeamShield)
            {
                return {defense_ability:'DA',cost:'Cost'}
            }
            return {accuracy:'WA',cost:'Cost'};
        }
    }
}
</script>
<style scoped>

</style>