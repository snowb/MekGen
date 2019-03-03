<template>
    <mek-sub-component-table
        :items="portfolio_size_table"
        :headers="{size:'Portfolio Size',cost:'Cost'}"
        name="Portfolio Size" flow="row" :showHeaders="true"
        :selectedIndices="portfolio_size_index"
        @update-selected-indices="select_portfolio_size"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_portfolio_size",
    props:["portfolioSize"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};

        obj.portfolio_size_table=
        [
            {size:1,cost:0.6},
            {size:2,cost:0.75},
            {size:3,cost:1},
            {size:4,cost:1.2},
            {size:5,cost:1.3},
            {size:7,cost:1.4},
            {size:10,cost:1.5},
            {size:Infinity,cost:2},
        ];

        obj.selected_portfolio_size={damage:1,cost:1.5,range:4};

        return obj;
    },
    methods:
    {
        select_portfolio_size:function(_portfolio_size_index)
        {
            this.$emit("update-portfolio-size", this.portfolio_size_table[_portfolio_size_index]);
        },
    },
    computed:
    {
        portfolio_size_index()
        {
            let portfolio_size_index=0;
            this.portfolio_size_table.some((_val,_index)=>
            {
                if(this.portfolioSize.cost==_val.cost)
                {
                    portfolio_size_index=_index;
                    return true;
                }
            });

            let update=false;
            switch(true)
            {
                case this.portfolioSize.power_available!=this.portfolio_size_table[portfolio_size_index].power_available:
                case this.portfolioSize.max_power!=this.portfolio_size_table[portfolio_size_index].max_power:
                case this.portfolioSize.damage_capacity!=this.portfolio_size_table[portfolio_size_index].damage_capacity:
                    update=true;       
            }
            if(update)
            {   
                this.select_portfolio_size(portfolio_size_index);
            }
            return [portfolio_size_index];
        }
    }
}
</script>
<style scoped>
th
{
    padding-left:10px;
    padding-right:10px;
}
#left
{
    padding-left: 0px;
}
#right
{
    padding-right: 0px;
}
</style>