<template>
    <mek-sub-component-table
        :items="attack_factor_table"
        :headers="{attack_factor:'AF',cost:'Cost'}"
        name="Attack Factor" flow="row" :showHeaders="true"
        :format="{cost:'multiplier',attack_factor:'nullzero'}"
        :selectedIndices="attack_factor_index"
        @update-selected-indices="select_attack_factor"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_emw_attack_factor",
    props:["attackFactor"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};

        obj.attack_factor_table=
        [
            {attack_factor:0,cost:1},
            {attack_factor:1,cost:1.5},
            {attack_factor:2,cost:2},
            {attack_factor:3,cost:2.5},
            {attack_factor:4,cost:3},
            {attack_factor:5,cost:3.5}
        ];

        return obj;
    },
    methods:
    {
        select_attack_factor:function(_attack_factor)
        {
            this.$emit("update-attack-factor",this.attack_factor_table[_attack_factor]);
        },
    },
    computed:
    {
        attack_factor_index:function()
        {
            let index=0;
            this.attackFactor;
            this.attack_factor_table.some(function(_val,_index)
            {
                if(_val.attack_factor==this.attackFactor.attack_factor)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.attack_factor_table[index].cost!==this.attackFactor.cost)
            {
                this.select_attack_factor(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>