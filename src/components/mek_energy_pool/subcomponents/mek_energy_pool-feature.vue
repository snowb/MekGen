<template>
    <mek-sub-component-table
        :items="feature_table" :pkey="pkey" :selectedKeys="selected_keys"
        :headers="{feature:'Feature',cost:'Cost'}"
        :showHeaders="true" :format="{cost:'multiplier'}"
        @update-selected-data="select_feature"
        name="Features" flow="pkey-col"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import {feature_data_table, feature_validate, has_feature, get_feature}
    from "../../data_table_modules/mek_energy_pool/mek_energy_pool-feature-data-module";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_energy_pool_feature",
    props:["featureArray"],
    mixins:[selected_item_mixin, utility_mixin, alerts_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.selected_feature_array=[];
        obj.pkey="feature";
        obj.alerts=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature)
        {
            let new_selected_feature_array=this.toggleFeature(this.selected_feature_array,_selected_feature);
            new_selected_feature_array=this.cleanFeatureArray(new_selected_feature_array).cleaned_array;
            this.publishAlerts();
            this.$set(this,"selected_feature_array",new_selected_feature_array);
            this.$emit("update-feature",new_selected_feature_array);
        },
        cleanFeatureArray(_feature_array)
        {//takes feature_array, returns cleaned array removing multiple exclusive values
            let self=this;
            let update=false;
            let key_list=[];
            if(_feature_array.length==0)
            {
                return {cleaned_array:[],update:update,key_list:key_list};
            }

            let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
            {
                if(_val[self.pkey]===undefined)
                {//if feature with pkey doesn't exist in data table, ignore
                    self.addAlert("Mek_Energy_Pool-Feature: "+JSON.stringify(_val));
                    self.addAlert("**** Missing primary key. Ignoring. ****");
                    return _cleaned_array;
                }
                let clean_feature=_val;
                if(!feature_validate(_val))
                {//invalid data
                    self.addAlert("Mek_Energy_Pool-Feature: "+JSON.stringify(_val))
                    self.addAlert("**** Invalid data, attempting to reset. ****")
                    clean_feature=this.get_feature(self.pkey,_val[self.pkey]);
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
                if(!key_list.includes(_val[self.pkey]))
                {
                    _cleaned_array.push(_val);
                    key_list.push(_val[self.pkey]);
                }
                return _cleaned_array;
            },[]);
            temp_selected_feature_array=temp_selected_feature_array.reverse();
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
                return feature_array.filter((_val)=>
                {
                    return _val[this.pkey]!=_feature[this.pkey];
                },this);
            }
            feature_array.push(_feature);
            //otherwise add feature and return
            return feature_array;
        },
    },
    computed:
    {
        feature_table()
        {
            return feature_data_table;
        },
        selected_keys()
        {
            /* if(this.featureArray.length==0)
            {
                return [];
            }
            if(this.featureArray.length==1)
            {
                let pkey_value=this.featureArray[0][this.pkey];
                if(pkey_value===undefined || !has_feature(this.pkey,pkey_value))
                {
                    let json_data=JSON.stringify(this.featureArray[0]);
                    this.addAlert("Mek_Energy_Pool-Feature: "+json_data);
                    this.addAlert("**** Invalid data. Reseting to default. ****");
                    this.publishAlerts();
                    this.select_ammo([]);
                    return [];
                }
                else if(has_feature(this.pkey,pkey_value) && !feature_validate(this.featureArray[0]))
                {
                    let json_data=JSON.stringify(get_feature(this.pkey,pkey_value));
                    let feature_clone=JSON.parse(json_data);
                    this.addAlert("Mek_Energy_Pool-Feature: "+json_data);
                    this.addAlert("**** Invalid data. Reseting. ****");
                    this.publishAlerts();
                    this.select_ammo(feature_clone);
                }
                
                return [pkey_value];
            } */

            let cleaned_array=this.cleanFeatureArray(this.featureArray);
            this.publishAlerts();

            if(cleaned_array.update)
            {
                this.$set(this,"selected_feature_array",cleaned_array.cleaned_array);
                this.$emit("update-feature",cleaned_array.cleaned_array);
            }

            return cleaned_array.key_list;
        }
    },
}
</script>