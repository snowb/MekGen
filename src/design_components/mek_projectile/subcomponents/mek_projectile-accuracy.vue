<template>
    <mek-sub-component-table
        :items="accuracy_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{accuracy:'WA',cost:'Cost'}" :show-headers="true"
        name="Accuracy" flow="pkey-row" :format="{cost:'multiplier'}"
        @update-selected-data="select_accuracy"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin";

import {accuracy_data_table, cleaned_feature}
    from "../../../data_table_modules/mek_projectile/mek_projectile-accuracy-data-module.js";

export default
{
    name:"mek_projectile_accuracy",
    props:["accuracy"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="accuracy";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_accuracy:function(_accuracy)
        {
            let data=JSON.parse(JSON.stringify(_accuracy));
            this.$emit("update-accuracy",data);
        },
    },
    computed:
    {
        accuracy_table()
        {
            return accuracy_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.accuracy);
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
                this.select_accuracy(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>