<template>
    <mek-sub-component-table
        :items="feature_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{feature:'Feature',cost:'Cost'}"
        name="Features" flow="pkey-col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        @update-selected-data="select_feature"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import {feature_data_table, feature_validate, has_feature, get_feature, shock_exclusive, throw_exclusive}
    from "../../data_table_modules/mek_melee/mek_melee-feature-data-module";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_melee_feature",
    props:["featureArray"],
    mixins:[selected_item_mixin, utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="feature";
        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature)
        {
            let suppress_alerts=true;//suppress alerts, for exclusive switching
            let new_selected_feature_array=this.toggleFeature(this.selected_feature_array,_selected_feature);
            new_selected_feature_array=this.cleanFeatureArray(new_selected_feature_array, suppress_alerts).cleaned_array;
            this.publishAlerts();
            this.$set(this,"selected_feature_array",new_selected_feature_array);
            this.$emit("update-feature",new_selected_feature_array);
        },
        cleanFeatureArray(_feature_array, _suppress_alerts)
        {//takes feature_array, returns cleaned array removing multiple exclusive values
            let hasExclusiveShock=false;
            let hasExclusiveThrow=false;
            let self=this;
            let update=false;
            let key_list=[];

            let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
            {
                if(_val[self.pkey]===undefined)
                {//if feature with pkey doesn't exist in data table, ignore
                    self.addAlert("Mek_Melee-Feature: "+JSON.stringify(_val));
                    self.addAlert("**** Missing primary key. Ignoring. ****");
                    return _cleaned_array;
                }
                let clean_feature=_val;
                if(!feature_validate(_val))
                {//invalid data
                    self.addAlert("Mek_Melee-Feature: "+JSON.stringify(_val))
                    self.addAlert("**** Invalid data, attempting to reset. ****")
                    clean_feature=get_feature(self.pkey,_val[self.pkey]);
                    update=true;
                    //attempt to set to corrected feature
                }
                if(clean_feature===null)
                {//no matching feature
                    self.addAlert("**** Unable to reset. No matching data. ****")
                    update=true;
                    return _cleaned_array;
                    //ignore element
                }
                let isShock=self.is_exclusive_feature("shock_exclusive",_val[self.pkey]);
                let isThrow=self.is_exclusive_feature("throw_exclusive",_val[self.pkey]);

                if(isShock && !hasExclusiveShock)
                {
                    _cleaned_array.push(_val);
                    hasExclusiveShock=true;
                    key_list.push(_val[self.pkey]);
                    return _cleaned_array;
                }
                else if(isShock && hasExclusiveShock)
                {
                    if(!_suppress_alerts)
                    {
                        self.addAlert("Mek_Melee-Feature: "+_val);
                        self.addAlert("**** Duplicate exclusive shock data. Ignoring. ****");
                    }
                    update=true;
                    return _cleaned_array;
                }

                if(isThrow && !hasExclusiveThrow)
                {
                    _cleaned_array.push(_val);
                    hasExclusiveThrow=true;
                    key_list.push(_val[self.pkey]);
                    return _cleaned_array;
                }
                else if(isThrow && hasExclusiveThrow)
                {
                    if(!_suppress_alerts)
                    {
                        self.addAlert("Mek_Melee-Feature: "+_val);
                        self.addAlert("**** Duplicate exclusive blast radius data. Ignoring. ****");
                    }
                    update=true;
                    return _cleaned_array;
                }

                if(!key_list.includes(_val[self.pkey]))
                {
                    _cleaned_array.push(_val);
                    key_list.push(_val[self.pkey]);
                }
                return _cleaned_array;
            },[]);
            temp_selected_feature_array.reverse();
  
            return {cleaned_array:temp_selected_feature_array,update:update,key_list:key_list};
            //returns an object with the pruned feature array, whether it was updated, and the key_list
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
                let return_array=feature_array.filter((_val)=>
                {
                    return _val[this.pkey]!=_feature[this.pkey];
                },this);
                return return_array;
            }
            feature_array.push(_feature);
            //otherwise add feature and return
            return feature_array;
        },
        is_exclusive_feature:function(_target_array,_feature)
        {
            return this[_target_array].some(function(_val)
            {
                if(_val.feature.toLowerCase() == _feature.toLowerCase())
                {
                    return true;
                }
                return false;
            });
        }
    },
    computed:
    {
        feature_table()
        {
            return feature_data_table;
        },
        shock_exclusive(){return shock_exclusive;},
        throw_exclusive(){return throw_exclusive;},
        selected_keys()
        {
            let cleaned_array=this.cleanFeatureArray(this.featureArray);
            this.publishAlerts();
            if(cleaned_array.update)
            {
                this.$emit("update-feature",cleaned_array.cleaned_array);
            }
            this.$set(this,"selected_feature_array",cleaned_array.cleaned_array);
            return cleaned_array.key_list;
        },
    }
}
</script>