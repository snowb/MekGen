<template>
    <mek-sub-component-table
        :items="binder_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{stopping_power_modifier:'-SP',space:'+Space',cost:'Cost'}"
        name="Binder" flow="pkey-row" :show-headers="true"
        :format="{stopping_power_modifier:'percent',cost:'multiplier'}"
        @update-selected-data="select_binder"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";
import alerts_mixin from "../../../mixins/alerts_mixin";
import { binder_data_table, cleaned_feature } 
    from '../../data_table_modules/mek_shield/mek_shield-binder-data-module';

export default 
{
    name: "mek_shield_binder",
    props:["binder","base_stopping_power"],
    mixins:[selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.alerts=[];
        obj.suppressAlerts=false;
        obj.pkey="stopping_power_modifier";
        return obj;
    },
    methods:
    {
        select_binder:function(_selected_binder_index)
        {
            let data=JSON.parse(JSON.stringify(_selected_binder_index))
            this.$emit("update-binder",data);
        },
    },
    computed:
    {
        binder_table()
        {
            return binder_data_table.map((_elem)=>
            {
                return {
                    stopping_power_modifier:_elem.stopping_power_modifier,
                    cost:_elem.cost,
                    space:this.round((this.base_stopping_power*_elem.stopping_power_modifier) * 2,1)
                }
            },this);
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.binder);
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
                this.select_binder(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>