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

import {ammo_data_table, ammo_validate, shock_exclusive, blast_exclusive} from "../../data_table_modules/mek_ammo-list-data-module.js";

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
        return obj;
    },
    methods:
    {
        select_ammo:function(_selected_ammo)
        {//refactor to pkey selector

            let selected_pkey=_selected_ammo[this.pkey];
            let isExclusiveShock=this.is_exclusive_feature("shock_exclusive",selected_pkey);
            let isExclusiveBlast=this.is_exclusive_feature("blast_exclusive",selected_pkey);
            let featureClone=JSON.parse(JSON.stringify(_selected_ammo));

            let temp_selected_feature_array=this.selected_ammo_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val[this.pkey].toLowerCase()!=selected_pkey.toLowerCase();
            },this);

            let togglefeature=this.selected_ammo_array.some((_elem)=>
            {
                return _elem[this.pkey].toLowerCase()==selected_pkey.toLowerCase();
            },this);

            if(isExclusiveShock)
            {//filter out exclusive phalanx
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.shock_exclusive;
                });
            }
            if(isExclusiveBlast)
            {//filter out exclusive phalanx
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.blast_exclusive;
                });
            }

            if(!togglefeature)
            {
                temp_selected_feature_array.push(featureClone);
            }
            
            this.$set(this,"selected_ammo_array",JSON.parse(JSON.stringify(temp_selected_feature_array)));
            
            if(temp_selected_feature_array.length==0)
            {
                this.$set(this,"selected_ammo_array",[]);
            }

            this.$emit("update-ammo",JSON.parse(JSON.stringify(this.selected_ammo_array)));
        },
        get_feature(_pkey_value)
        {
            let found_feature=null;
            ammo_data_table.some((_val)=>
            {
                if(_val[this.pkey]==_pkey_value)
                {
                    found_feature=_val;
                    return true;
                }
            },this);
            return found_feature;
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
                let feature_clone=JSON.parse(JSON.stringify(this.get_feature("High-Ex")));
                this.$set(this,"selected_ammo_array",[feature_clone]);
                return ["High-Ex"];
            }
            if(this.ammoArray.length==1)
            {
                let pkey_value=this.ammoArray[0][this.pkey];
                let feature_clone=JSON.parse(JSON.stringify(this.get_feature(pkey_value)));

                if(!ammo_validate(this.ammoArray[0]))
                {
                    this.$emit("update-ammo",[feature_clone]);
                }
                this.$set(this,"selected_ammo_array",[feature_clone]);
                return [pkey_value];
            }

            let key_list=[];
            let hasExclusiveShock=false;
            let hasExclusiveBlast=false;
            let self=this;
            let update_data=false;

            let temp_selected_feature_array=this.ammoArray.reduceRight((_cleaned_array, _val)=>
            {
                let isShock=self.is_exclusive_feature("shock_exclusive",_val[self.pkey]);
                let isBlast=self.is_exclusive_feature("blast_exclusive",_val[self.pkey]);

                if(isShock && !hasExclusiveShock)
                {
                    _cleaned_array.push(_val);
                    hasExclusiveShock=true;
                    key_list.push(_val[self.pkey]);
                }
                if(isBlast && !hasExclusiveBlast)
                {
                    _cleaned_array.push(_val);
                    hasExclusiveBlast=true;
                    key_list.push(_val[self.pkey]);
                }

                if(!key_list.includes(_val[self.pkey]))
                {
                    _cleaned_array.push(_val);
                    key_list.push(_val[self.pkey]);
                }
                update_data=!ammo_validate(_val) && update_data===null ? _index : update_data;
                //if invalid and update_data not set, set data

                return _cleaned_array;
            },[]);

            if(update_data)
            {
                this.$emit("update-ammo",JSON.parse(JSON.stringify(temp_selected_feature_array)));
            }

            return key_list;
        }
    }
}
</script>
<style scoped>

</style>