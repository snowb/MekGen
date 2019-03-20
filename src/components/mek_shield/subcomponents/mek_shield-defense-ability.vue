<template>
    <mek-sub-component-table
        :items="da_table"
        :headers="{da:'DA',cost:'Cost'}"
        name="Defense Ability" flow="row" :show-headers="true"
        :format="{cost:'multiplier'}"
        :selected-indices="selected_da_index"
        @update-selected-indices="select_da"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";

export default 
{
    name:"mek_shield_defense_ability",
    props:["defense_ability","cost"],
    mixins:[selected_item_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.da_table=
            [
                {da:-4,cost:0.6},
                {da:-3,cost:0.8},
                {da:-2,cost:1},
                {da:-1,cost:1.25},
                {da:0,cost:1.5},
            ];
        return obj;
    },
    methods:
    {
        select_da:function(_selected_da)
        {
            this.$emit("update-defense-ability",this.da_table[_selected_da]);
        }
    },
    computed:
    {
        selected_da_index:function()
        {
            let index=2;
            this.da_table.some(function(_val,_index)
            {
                if(_val.da==this.defense_ability)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.da_table[index].cost!==this.cost)
            {
                this.select_da(index);
            }
            return [index];
        }
    }
}
</script>
