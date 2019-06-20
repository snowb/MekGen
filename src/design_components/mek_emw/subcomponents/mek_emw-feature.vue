<template>
    <mek-sub-component-table
        :items="feature_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{feature:'Feature',cost:'Cost'}"
        name="Features" flow="pkey-col" :show-headers="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_feature"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import {feature_data_table, cleaned_feature, filter_data_table}
    from "@/data_table_modules/mek_emw/mek_emw-feature-data-module";
export default 
{
    name:"mek_melee_feature",
    props:["featureArray","infiniteUse"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/app_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="feature";
        obj.suppressAlerts=false;
        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature)
        {
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
            this.publishAlerts();
            this.$set(this,"selected_feature_array",new_selected_feature_array);
            this.$emit("update-feature",new_selected_feature_array);
            this.suppressAlerts=false;
        },
        toggleFeature(_feature_array,_feature)
        {//consider moving to universal data module functions thing
            let feature_array=JSON.parse(JSON.stringify(_feature_array));
            
            let remove_feature=feature_array.some((_val)=>
            {//if _feature matches already existing feature, flag for deletion
                return _val[this.pkey]==_feature[this.pkey];
            },this);

            if(remove_feature)
            {//if flagged for removal, filter out
                let return_array=feature_array.filter((_val)=>
                {
                    return _val[this.pkey]!=_feature[this.pkey];
                },this);
                return return_array;
            }
            feature_array.push(_feature);
            //otherwise add feature and return
            return feature_array;
        }
    },
    computed:
    {
        feature_table()
        {
            filter_data_table(this.infiniteUse);
            return feature_data_table;
        },
        selected_keys()
        {
            this.infiniteUse;
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
                this.$emit("alert-generated",true);
                this.$emit("update-feature",cleaned_data.cleaned_array);
            }
            this.$set(this,"selected_feature_array",cleaned_data.cleaned_array);
            return cleaned_data.key_list;
        },
    },
    watch:
    {
        "infiniteUse":function(_newval,_oldval)
        {//must track changes in blastRadius to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>