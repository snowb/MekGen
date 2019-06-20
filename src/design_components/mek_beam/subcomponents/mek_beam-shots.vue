<template>
    <mek-sub-component-table
        :items="shots_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{shots:'Shots',cost:'Cost'}"
        name="Shots" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_shots"
    ></mek-sub-component-table>
</template>

<script>
import alerts_mixin from "@/mixins/alerts_mixin";
import {shots_data_table, cleaned_feature, filter_shots_data_table}
    from "@/data_table_modules/mek_beam/mek_beam-shots-data-module.js";

export default 
{
    name: "mek_beam_shots",
    props:["shots","magFed"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    },
    data:function()
    {
        let obj={}
        obj.alerts=[];
        obj.pkey="shots";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_shots:function(_shots)
        {
            let data=JSON.parse(JSON.stringify(_shots));        
            this.$emit("update-shots",data);
        }
    },
    computed:
    {
        shots_table()
        {
            filter_shots_data_table(this.magFed);
            return shots_data_table;
        },
        selected_keys()
        {
            this.magFed;
            let cleaned_data=cleaned_feature(this.pkey, this.shots);
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
                this.select_shots(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    },
    watch:
    {
        magFed(_newval,_oldval)
        {
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>