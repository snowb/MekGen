<template>
    <mek-sub-component-table
        :items="energy_pool_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{cost:'Cost',power_available:'Power Available',max_power:'Maximum Power',damage_capacity:'DC'}"
        name="Energy Pool" flow="pkey-col" :showHeaders="true"
        @update-selected-data="select_energy_pool"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import  {energy_pool_data_table, energy_pool_validate, has_feature, get_feature}
    from "../../data_table_modules/mek_energy_pool-pool-data-module";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_energy_pool_pool",
    props:["energyPool"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.pkey="power_available";
        obj.alerts=[];
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
            let default_data=get_feature(this.pkey,0);

            if(this.energyPool===undefined)
            {
                this.select_energy_pool(default_data);
            }
            let json_data=JSON.stringify(this.energyPool);
            if(!has_feature(this.pkey,this.energyPool[this.pkey]))
            {
                this.addAlert("Mek_Energy_Pool-Pool: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_energy_pool(default_data);
                return [default_data[this.pkey]];
            }
            else if(!energy_pool_validate(this.energyPool))
            {
                this.addAlert("Mek_Energy_Pool-Pool: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_energy_pool(get_feature(this.pkey,this.energyPool[this.pkey]));
            }
            return [this.energyPool[this.pkey]];
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