<template>
    <mek-sub-component-table
        :items="attack_factor_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{attack_factor:'AF',cost:'Cost'}"
        name="Attack Factor" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier',attack_factor:'nullzero'}"
        @update-selected-data="select_attack_factor"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import { attack_factor_data_table, cleaned_feature } 
    from "@/data_table_modules/mek_emw/mek_emw-attack-factor-data-module";

export default
{
    name:"mek_emw_attack_factor",
    props:["attackFactor"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/design_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="attack_factor";
        obj.suppresAlerts=false;
        return obj;
    },
    methods:
    {
        select_attack_factor:function(_attack_factor)
        {
            let data=JSON.parse(JSON.stringify(_attack_factor));
            this.$emit("update-attack-factor",data);
        },
    },
    computed:
    {
        attack_factor_table()
        {
            return attack_factor_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.attackFactor);
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
                this.select_attack_factor(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>