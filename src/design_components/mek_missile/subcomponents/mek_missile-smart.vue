<template>
    <mek-sub-component-table
        :items="smart_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{smart:'Rounds',cost:'Cost'}" :show-headers="true"
        name="Smart" flow="pkey-row" :format="{cost:'multiplier',smart:'nullzero'}"
        @update-selected-data="select_smart"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import {smart_data_table, cleaned_feature}
    from "@/data_table_modules/mek_missile/mek_missile-smart-data-module.js";

export default
{
    name:"mek_missile_smart",
    props:["smart"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/design_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="smart";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_smart:function(_smart)
        {
            let data=JSON.parse(JSON.stringify(_smart));
            this.$emit("update-smart",data);
        },
    },
    computed:
    {
        smart_table()
        {
            return smart_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.smart);
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
                this.select_smart(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>