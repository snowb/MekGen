<template>
    <mek-sub-component-table
        :items="da_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{da:'DA',cost:'Cost'}"
        name="Defense Ability" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_da"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin.js";
import { da_data_table, cleaned_feature } 
    from "../../../data_table_modules/mek_shield/mek_shield-defense-ability-data-module";

export default 
{
    name:"mek_shield_defense_ability",
    props:["defense_ability","cost"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="da";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_da:function(_selected_da)
        {
            let data=JSON.parse(JSON.stringify(_selected_da))
            this.$emit("update-defense-ability",data);
        }
    },
    computed:
    {
        da_table()
        {
            return da_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.defense_ability);
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
                this.select_da(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
