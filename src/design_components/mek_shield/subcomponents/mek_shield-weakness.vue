<template>
    <mek-sub-component-table
        :items="weakness_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{weakness:'Weakness',monicker:'Monicker',cost:'Cost'}"
        name="Weakness" flow="pkey-col" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_weakness"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin";

import {weakness_data_table, cleaned_weakness}
    from "../../../data_table_modules/mek_shield/mek_shield-weakness-data-module";

export default 
{
    name:"mek_shield_weakness",
    props:["weaknessArray"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="weakness";
        obj.suppressAlerts=false;
        obj.selected_weakness_array=[{weakness:"All",monicker:"Shield",cost:1.0}];
        return obj;
    },
    methods:
    {
        select_weakness:function(_selected_weakness)
        {
            this.suppressAlerts=true;//suppress alerts, for exclusive switching
            let new_selected_weakness_array=this.toggleWeakness(this.selected_weakness_array,_selected_weakness);
            let cleaned_data=cleaned_weakness(new_selected_weakness_array, this.pkey);
            new_selected_weakness_array=cleaned_data.cleaned_array;
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            this.$set(this,"selected_weakness_array",new_selected_weakness_array);
            this.$emit("update-weakness",new_selected_weakness_array);
            this.suppressAlerts=false;
        },
        toggleWeakness(_weakness_array,_weakness)
        {
            let weakness_array=JSON.parse(JSON.stringify(_weakness_array));
            
            let remove_weakness=weakness_array.some((_val)=>
            {//if _weakness matches already existing weakness, flag for deletion
                return _val[this.pkey]==_weakness[this.pkey];
            },this);

            if(remove_weakness)
            {//if flagged for removal, filter out
                return weakness_array.filter((_val)=>
                {
                    return _val[this.pkey]!=_weakness[this.pkey];
                },this);
            }
            weakness_array.push(_weakness);
            //otherwise add weakness and return
            return weakness_array;
        }
    },
    computed:
    {
        weakness_table()
        {
            return weakness_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_weakness(this.weaknessArray,this.pkey);
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
                this.$emit("update-weakness",cleaned_data.cleaned_array);
            }
            this.$set(this,"selected_weakness_array",cleaned_data.cleaned_array);
            return cleaned_data.key_list;
        }
    }
}
</script>