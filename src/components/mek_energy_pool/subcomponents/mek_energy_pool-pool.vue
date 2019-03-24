<template>
    <mek-sub-component-table
        :items="energy_pool_table" :selected-keys="selected_keys" :pkey="pkey"
        :headers="{cost:'Cost',power_available:'Power Available',max_power:'Maximum Power',damage_capacity:'DC'}"
        name="Energy Pool" flow="pkey-col" :show-headers="true"
        @update-selected-data="select_energy_pool"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import  {energy_pool_data_table, cleaned_feature}
    from "../../data_table_modules/mek_energy_pool/mek_energy_pool-pool-data-module";

export default
{
    name:"mek_energy_pool_pool",
    props:["energyPool"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.pkey="power_available";
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_energy_pool:function(_energy_pool)
        {
            this.$emit("update-energy-pool", JSON.parse(JSON.stringify(_energy_pool)));
        },
    },
    computed:
    {
        energy_pool_table()
        {
            return energy_pool_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.energyPool);
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