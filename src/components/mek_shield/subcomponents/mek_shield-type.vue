<template>
    <mek-sub-component-table
        :items="type_table" :headers="{name:''}" :pkey="pkey" :selected-keys="selected_keys"
        name="Type" flow="pkey-col" :show-headers="false"
        @update-selected-data="select_type"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin.js";
import { type_data_table, cleaned_feature } 
    from '../../data_table_modules/mek_shield/mek_shield-type-data-module';

export default 
{
    name:"mek_shield_type",
    props:["type"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.pkey="name";
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_type:function(_selected_type)
        {
            let data=JSON.parse(JSON.stringify(_selected_type))
            this.$emit("update-type",data);
        }
    },
    computed:
    {
        type_table()
        {
            return type_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.type);
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
                this.select_type(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
