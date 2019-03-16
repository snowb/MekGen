<template>
    <mek-sub-component-table
        :items="filteredAmmoArray" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{type:'Type',cost:'Cost',effect:'Effect'}" :showHeaders="true"
        :format="{cost:'multiplier'}" name="Ammo Table" flow="pkey-col"
        @update-selected-data="select_ammo"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import {ammo_data_table, ammo_validate, has_feature, get_feature, shock_exclusive, blast_exclusive} from "../../data_table_modules/mek_ammo-list-data-module.js";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_magazine_ammo_list",
    props:["ammoArray","hasBlast"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.selected_ammo_array=[];
        obj.pkey="type";
        obj.alerts=[];
        return obj;
    },
    methods:
    {
        select_ammo:function(_selected_ammo)
        {//refactor to external ammo array cleaner
            let new_selected_ammo_array=this.toggleFeature(this.selected_ammo_array,_selected_ammo);
            new_selected_ammo_array=this.cleanFeatureArray(new_selected_ammo_array).cleaned_array;
            this.publishAlerts();
            this.$set(this,"selected_ammo_array",new_selected_ammo_array);
            this.$emit("update-ammo",new_selected_ammo_array);
        },
        cleanFeatureArray(_feature_array)
        {//takes feature_array, returns cleaned array removing multiple exclusive values
            let hasExclusiveShock=false;
            let hasExclusiveBlast=false;
            let self=this;
            let update=false;
            let key_list=[];

            let temp_selected_feature_array=_feature_array.reduceRight((_cleaned_array, _val)=>
            {
                if(_val[self.pkey]===undefined)
                {//if feature with pkey doesn't exist in data table, ignore
                    self.addAlert("Mek_Magazine: "+JSON.stringify(_val));
                    self.addAlert("**** Missing primary key. Ignoring. ****");
                    return _cleaned_array;
                }
                let clean_feature=_val;
                if(!ammo_validate(_val))
                {//invalid data
                    self.addAlert("Mek_Magazine: "+JSON.stringify(_val))
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
                let isBlast=self.is_exclusive_feature("blast_exclusive",_val[self.pkey]);

                if(isShock && !hasExclusiveShock)
                {
                    _cleaned_array.push(_val);
                    hasExclusiveShock=true;
                    key_list.push(_val[self.pkey]);
                    return _cleaned_array;
                }
                else if(isShock && hasExclusiveShock)
                {
                    self.addAlert("Mek_Magazine: "+_val);
                    self.addAlert("**** Duplicate exclusive shock data. Ignoring. ****");
                    update=true;
                    return _cleaned_array;
                }

                if(isBlast && !hasExclusiveBlast)
                {
                    _cleaned_array.push(_val);
                    hasExclusiveBlast=true;
                    key_list.push(_val[self.pkey]);
                    return _cleaned_array;
                }
                else if(isBlast && hasExclusiveBlast)
                {
                    self.addAlert("Mek_Magazine: "+_val);
                    self.addAlert("**** Duplicate exclusive blast radius data. Ignoring. ****");
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
            temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
            {
                return _val[this.pkey].toLowerCase()!="nuclear" 
                    || (hasExclusiveBlast && _val[this.pkey].toLowerCase()=="nuclear");
                //filter out nuclear if blast-radius isn't a feature
            },this).reverse();
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
        addAlert(_alert_string)
        {
            this.alerts.push(_alert_string);
        },
        publishAlerts()
        {
            if(this.alerts.length>0)
            {   
                this.$store.commit("alertMessage",this.alerts);
            }
            this.$set(this,"alerts",[]);
        },
        is_exclusive_feature:function(_target_array,_feature)
        {
            return this[_target_array].some(function(_val)
            {
                if(_val[this.pkey].toLowerCase() == _feature.toLowerCase())
                {
                    return true;
                }
                return false;
            },this);
        }
    },
    computed:
    {
        filteredAmmoArray()
        {
            if(this.hasBlast)
            {
                return ammo_data_table;
            }
            return ammo_data_table.filter((_elem)=>
            {
                return _elem.type.toLowerCase()!="nuclear";
            });
        },
        shock_exclusive(){return shock_exclusive;},
        blast_exclusive(){return blast_exclusive;},
        selected_keys()
        {
            if(this.ammoArray.length==0)
            {
                let feature_clone=JSON.parse(JSON.stringify(get_feature(this.pkey,"High-Ex")));
                //this.$set(this,"selected_ammo_array",[feature_clone]);
                this.select_ammo(feature_clone);
                return ["High-Ex"];
            }
            if(this.ammoArray.length==1)
            {
                let pkey_value=this.ammoArray[0][this.pkey];
                if(pkey_value===undefined || !has_feature(this.pkey,pkey_value))
                {
                    let json_data=JSON.stringify(this.ammoArray[0]);
                    this.addAlert("Mek_Magazine: "+json_data);
                    this.addAlert("**** Invalid data. Reseting to default. ****");
                    this.publishAlerts();
                    let default_data=JSON.parse(JSON.stringify(get_feature(this.pkey,"High-Ex")));
                    this.select_ammo(default_data);
                    return ["High-Ex"];
                }
                else if(has_feature(this.pkey,pkey_value) && !ammo_validate(this.ammoArray[0]))
                {
                    let json_data=JSON.stringify(get_feature(this.pkey,pkey_value));
                    let feature_clone=JSON.parse(json_data);
                    this.addAlert("Mek_Magazine: "+json_data);
                    this.addAlert("**** Invalid data. Reseting. ****");
                    this.publishAlerts();
                    this.select_ammo(feature_clone);
                }
                return [pkey_value];
            }

            let cleaned_array=this.cleanFeatureArray(this.ammoArray);

            if(cleaned_array.update)
            {
                this.$set(this,"selected_ammo_array",cleaned_array.cleaned_array);
                this.$emit("update-ammo",cleaned_array.cleaned_array);
            }

            return cleaned_array.key_list;
        }
    }
}
</script>
<style scoped>

</style>