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

import {feature_data_table, cleaned_feature}
    from "../../data_table_modules/mek_shield/mek_shield-feature-data-module";

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
            let new_selected_weakness_array=this.toggleFeature(this.selected_weakness_array,_selected_weakness);
            let cleaned_data=cleaned_feature(new_selected_weakness_array, this.pkey);
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
        toggleFeature(_feature_array,_feature)
        {
            let feature_array=JSON.parse(JSON.stringify(_feature_array));
            
            let remove_feature=feature_array.some((_val)=>
            {//if _feature matches already existing feature, flag for deletion
                return _val[this.pkey]==_feature[this.pkey];
            },this);

            if(remove_feature)
            {//if flagged for removal, filter out
                return feature_array.filter((_val)=>
                {
                    return _val[this.pkey]!=_feature[this.pkey];
                },this);
            }
            feature_array.push(_feature);
            //otherwise add feature and return
            return feature_array;
        }
    },
    computed:
    {
        weakness_table()
        {
            return feature_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.weaknessArray,this.pkey);
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
                this.$emit("update-weakness",cleaned_data.cleaned_array);
            }
            this.$set(this,"selected_weakness_array",cleaned_data.cleaned_array);
            return cleaned_data.key_list;
        }
    }
}
</script>