<template>
    <mek-sub-component-table
        :items="portfolio_size_table" :selected-keys="selected_keys" :pkey="pkey"
        :headers="{size:'Portfolio Size',cost:'Cost'}" :format="{cost:'multiplier'}"
        name="Portfolio Size" flow="pkey-row" :show-headers="true"
        @update-selected-data="select_portfolio_size"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import {energy_pool_size_data_table, cleaned_feature}
    from "@/data_table_modules/mek_energy_pool/mek_energy_pool-size-data-module";

export default
{
    name:"mek_portfolio_size",
    props:["portfolioSize"],
    mixins:[alerts_mixin],
    components:
    {
         "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="size";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_portfolio_size:function(_portfolio_size)
        {
            let data=JSON.parse(JSON.stringify(_portfolio_size));
            data.size=_portfolio_size.size===Infinity?Infinity:_portfolio_size.size;
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
            let cleaned_data=cleaned_feature(this.pkey, this.portfolioSize);
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            if(cleaned_data.update)
            {
                this.$emit("alert-generated",true);
                this.select_portfolio_size(cleaned_data.data);
            }
            return cleaned_data.key_list;
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