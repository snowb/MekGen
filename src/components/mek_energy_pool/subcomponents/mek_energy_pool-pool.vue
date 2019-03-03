<template>
    <mek-sub-component-table
        :items="energy_pool_table"
        :headers="{cost:'Cost',power_available:'Power Available',max_power:'Maximum Power',damage_capacity:'DC'}"
        name="Energy Pool" flow="col" :showHeaders="true"
        :selectedIndices="energy_pool_index"
        @update-selected-indices="select_energy_pool"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_beam_damage",
    props:["energyPool"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};

        obj.energy_pool_table=
        [
            {cost:10,power_available:0,max_power:50,damage_capacity:5},
            {cost:10,power_available:5,max_power:25,damage_capacity:4},
            {cost:20,power_available:10,max_power:40,damage_capacity:7},
            {cost:30,power_available:15,max_power:45,damage_capacity:8},
            {cost:40,power_available:20,max_power:50,damage_capacity:10},
            {cost:50,power_available:25,max_power:55,damage_capacity:11},
            {cost:60,power_available:30,max_power:60,damage_capacity:13},
        ];

        obj.selected_energy_pool={damage:1,cost:1.5,range:4};

        return obj;
    },
    methods:
    {
        select_energy_pool:function(_energy_pool_index)
        {
            this.$emit("update-energy-pool", this.energy_pool_table[_energy_pool_index]);
        },
    },
    computed:
    {
        energy_pool_index()
        {
            let energy_pool_index=0;
            this.energy_pool_table.some((_val,_index)=>
            {
                if(this.energyPool.cost==_val.cost)
                {
                    energy_pool_index=_index;
                    return true;
                }
            });

            let update=false;
            switch(true)
            {
                case this.energyPool.power_available!=this.energy_pool_table[energy_pool_index].power_available:
                case this.energyPool.max_power!=this.energy_pool_table[energy_pool_index].max_power:
                case this.energyPool.damage_capacity!=this.energy_pool_table[energy_pool_index].damage_capacity:
                    update=true;       
            }
            if(update)
            {   
                this.select_energy_pool(energy_pool_index);
            }
            return [energy_pool_index];
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