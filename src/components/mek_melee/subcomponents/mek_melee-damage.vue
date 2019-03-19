<template>
    <mek-sub-component-table
        :items="damage_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{damage:'Damage',cost:'Cost'}"
        name="Damage" flow="pkey-row" :showHeaders="true"
        @update-selected-data="select_damage"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import {damage_data_table, damage_validate, has_feature, get_feature}
    from "../../data_table_modules/mek_melee/mek_melee-damage-data-module.js";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_melee_damage",
    props:["damage"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="damage";
        return obj;
    },
    methods:
    {
        select_damage:function(_damage)
        {
            let data=JSON.parse(JSON.stringify(_damage));
            this.$emit("update-damage",data);
        },
    },
    computed:
    {
        damage_table()
        {
            return damage_data_table;
        },
        selected_keys()
        {
            let default_data=get_feature(this.pkey,0);

            if(this.damage===undefined)
            {
                this.select_damage(default_data);
            }
            let json_data=JSON.stringify(this.damage);
            if(!has_feature(this.pkey,this.damage[this.pkey]))
            {
                this.addAlert("Mek_Melee-Damage: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_damage(default_data);
                return [default_data[this.pkey]];
            }
            else if(!damage_validate(this.damage))
            {
                this.addAlert("Mek_Melee-Damage: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_damage(get_feature(this.pkey,this.damage[this.pkey]));
            }
            return [this.damage[this.pkey]];
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