<template>
    <mek-sub-component-table
        :items="portfolio_size_table" :selected-keys="selected_keys" :pkey="pkey"
        :headers="{size:'Portfolio Size',cost:'Cost'}"
        name="Portfolio Size" flow="pkey-row" :show-headers="true"
        @update-selected-data="select_portfolio_size"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import {energy_pool_size_data_table, energy_pool_size_validate, has_feature, get_feature}
    from "../../data_table_modules/mek_energy_pool/mek_energy_pool-size-data-module";

export default
{
    name:"mek_portfolio_size",
    props:["portfolioSize"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.selected_portfolio_size={damage:1,cost:1.5,range:4};
        obj.alerts=[];
        obj.pkey="cost";

        return obj;
    },
    methods:
    {
        select_portfolio_size:function(_portfolio_size)
        {
            let data=JSON.parse(JSON.stringify(_portfolio_size));
            let infinite_size=_portfolio_size.size===Infinity;
            if(infinite_size)
            {
                data.size=Infinity;
            }
            this.$emit("update-portfolio-size", data);
        },
    },
    computed:
    {
        portfolio_size_table()
        {
            return energy_pool_size_data_table;
        },
        selected_keys()
        {
            let default_data=get_feature(this.pkey,1);

            if(this.portfolioSize===undefined)
            {
                this.select_portfolio_size(default_data);
            }
            let json_data=JSON.stringify(this.portfolioSize);
            if(!has_feature(this.pkey,this.portfolioSize[this.pkey]))
            {
                this.addAlert("Mek_Energy_Pool-Size: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_portfolio_size(default_data);
                return [default_data[this.pkey]];
            }
            else if(!energy_pool_size_validate(this.portfolioSize))
            {
                this.addAlert("Mek_Energy_Pool-Size: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_portfolio_size(get_feature(this.pkey,this.portfolioSize[this.pkey]));
            }
            return [this.portfolioSize[this.pkey]];
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