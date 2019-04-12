<template>
    <mek-sub-component-table
        :items="turns_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{time:'Turns',cost:'Cost'}"
        name="Turns in Use" flow="pkey-row" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_turns"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin.js";
import { turns_data_table, cleaned_feature } 
    from "@/data_table_modules/mek_shield/mek_shield-turns-in-use-data-module";

export default 
{
    name:"mek_shield_turns_in_use",
    props:["turnsInUse"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/design_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.pkey="time";//must be cost as time can be Infinity
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_turns:function(_selected_turns)
        {
            let data=JSON.parse(JSON.stringify(_selected_turns));
            data.size=_selected_turns.size===Infinity?Infinity:_selected_turns.size;
            this.$emit("update-turns-in-use",data);
        }
    },
    computed:
    {
        turns_table()
        {
            return turns_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.turnsInUse);
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
                this.select_turns(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>