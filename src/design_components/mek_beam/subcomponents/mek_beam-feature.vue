<template>
    <mek-sub-component-table
        :items="filteredFeatureTable" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{feature:'Feature',cost:'Cost'}" :show-headers="true" :format="{cost:'multiplier'}"
        flow="pkey-col" name="Features"
        @update-selected-data="select_feature"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin";

import {feature_data_table, cleaned_feature, filter_data_table} 
    from "../../../data_table_modules/mek_beam/mek_beam-feature-data-module.js";

export default 
{
    name:"mek_beam_feature",
    props:["featureArray","burstValue"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.pkey="feature";
        obj.alerts=[];
        obj.suppressAlerts=false;
        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature)
        {//refactor to external feature array cleaner
            this.suppressAlerts=true;//suppress alerts, for exclusive switching
            let new_selected_feature_array=this.toggleFeature(this.selected_feature_array,_selected_feature);
            let cleaned_data=cleaned_feature(new_selected_feature_array, this.pkey);
            new_selected_feature_array=cleaned_data.cleaned_array;
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            this.$set(this,"selected_feature_array",new_selected_feature_array);
            this.$emit("update-feature",new_selected_feature_array);
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
        filteredFeatureTable()
        {
            filter_data_table(this.burstValue);
            return feature_data_table;
        },
        selected_keys()
        {
            this.burstValue;
            let cleaned_data=cleaned_feature(this.featureArray,this.pkey);
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
                this.$emit("update-feature",cleaned_data.cleaned_array);
            }
            this.$set(this,"selected_feature_array",cleaned_data.cleaned_array);
            this.suppressAlerts=false;
            return cleaned_data.key_list;
        }
    },
    watch:
    {
        "burstValue":function(_newval,_oldval)
        {//must track changes in burstValue to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>