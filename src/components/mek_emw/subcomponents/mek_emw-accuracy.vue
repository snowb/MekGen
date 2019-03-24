<template>
    <mek-sub-component-table
        :items="accuracy_table" :headers="headers"
        name="Accuracy" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier'}" :pkey="pkey" :selected-keys="selected_keys"
        @update-selected-data="select_accuracy"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import { accuracy_data_table, cleaned_feature } 
    from '../../data_table_modules/mek_emw/mek_emw-accuracy-data-module';

export default
{
    name:"mek_emw_accuracy",
    props:["accuracy","isBeamShield","isVariableBeamShield"],
    mixins:[selected_item_mixin,utility_mixin],
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
            let data=JSON.parse(JSON.stringify(_accuracy))
            this.$emit("update-accuracy",data);
        },
    },
    computed:
    {
        headers()
        {
            if(this.isVariableBeamShield)
            {
                return {accuracy:'WA',defense_ability:'DA',cost:'Cost'}
            }
            else if(this.isBeamShield)
            {
                return {defense_ability:'DA',cost:'Cost'}
            }
            return {accuracy:'WA',cost:'Cost'};
        },
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