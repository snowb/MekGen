<template>
    <mek-sub-component-table
        :items="damage_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{damage:'Damage',cost:'Cost',range:'Range'}"
        name="Damage" flow="pkey-row" :show-headers="true"
        @update-selected-data="select_damage"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin";

import {damage_data_table, cleaned_feature}
    from "../../../data_table_modules/mek_beam/mek_beam-damage-data-module.js";

export default
{
    name:"mek_beam_damage",
    props:["damage"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="damage";
        obj.suppressAlerts=false;
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
            let cleaned_data=cleaned_feature(this.pkey, this.damage);
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
                this.select_damage(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>