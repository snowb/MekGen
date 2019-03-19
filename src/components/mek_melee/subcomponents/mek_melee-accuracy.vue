<template>
    <mek-sub-component-table
        :items="accuracy_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{accuracy:'WA',cost:'Cost'}"
        name="Accuracy" flow="pkey-row" :showHeaders="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_accuracy"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import {accuracy_data_table, accuracy_validate, has_feature, get_feature}
    from "../../data_table_modules/mek_melee/mek_melee-accuracy-data-module.js";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_melee_accuracy",
    props:["accuracy"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="accuracy";
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
            let default_data=get_feature(this.pkey,0);

            if(this.accuracy===undefined)
            {
                this.select_accuracy(default_data);
            }
            let json_data=JSON.stringify(this.accuracy);
            if(!has_feature(this.pkey,this.accuracy[this.pkey]))
            {
                this.addAlert("Mek_Melee-Accuracy: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_accuracy(default_data);
                return [default_data[this.pkey]];
            }
            else if(!accuracy_validate(this.accuracy))
            {
                this.addAlert("Mek_Melee-Accuracy: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_accuracy(get_feature(this.pkey,this.accuracy[this.pkey]));
            }
            return [this.accuracy[this.pkey]];
        }
    }
}
</script>
<style scoped>

</style>