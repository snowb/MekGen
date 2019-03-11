<template>
    <mek-sub-component-table
        :items="filteredAmmoArray"
        :headers="{type:'Type',cost:'Cost',effect:'Effect'}" :showHeaders="true"
        :format="{cost:'multiplier'}"
        name="Ammo Table" flow="col"
        :selectedIndices="selected_ammo_index_array"
        @update-selected-indices="select_ammo"
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
        return obj;
    },
    methods:
    {
        select_ammo:function(_ammo_index)
        {
            let select_feature_name=this.filteredAmmoArray[_ammo_index].type;
            let isExclusiveShock=this.is_exclusive_feature("shock_exclusive",select_feature_name);
            let isExclusiveBlast=this.is_exclusive_feature("blast_exclusive",select_feature_name);
            let featureClone=Object.assign({},this.filteredAmmoArray[_ammo_index]);

            let temp_selected_feature_array=this.selected_ammo_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val.type.toLowerCase()!=select_feature_name.toLowerCase();
            });

            let togglefeature=this.selected_ammo_array.some((_elem)=>
            {
                return _elem.type.toLowerCase()==select_feature_name.toLowerCase();
            },this);

            if(isExclusiveShock)
            {//filter out exclusive phalanx
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.shock_exclusive;
                })
            }
            if(isExclusiveBlast)
            {//filter out exclusive phalanx
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.blast_exclusive;
                })
            }

            if(!togglefeature)
            {
                temp_selected_feature_array.push(featureClone);
            }
            
            this.$set(this,"selected_ammo_array",temp_selected_feature_array);
            
            if(temp_selected_feature_array.length==0)
            {
                this.$set(this,"selected_ammo_array",[]);
            }

            this.$emit("update-ammo",this.selected_ammo_array);
        },
        find_feature_index:function(_feature)
        {
            let found_index;
            ammo_data_table.some(function(_val, _index)
            {
                if(_val.type.toLowerCase() == _feature.toLowerCase())
                {
                    found_index=_index;
                    return true;
                }
                return false;
            });

            return found_index;
        },
        is_exclusive_feature:function(_target_array,_feature)
        {
            return this[_target_array].some(function(_val)
            {
                if(_val.type.toLowerCase() == _feature.toLowerCase())
                {
                    return true;
                }
                return false;
            });
        }
    },
    computed:
    {
        selected_ammo_index_array:function()
        {
            let indices=[];
            this.ammoArray;
            if(this.ammoArray.length==0)
            {
                this.selected_ammo_array=[this.find_feature_index("High-Ex")];
            }
            if(this.ammoArray.length==1)
            {
                this.selected_ammo_array=[this.filteredAmmoArray[this.find_feature_index(this.ammoArray[0].type)]];
                return [this.find_feature_index(this.ammoArray[0].type)];
            }

            let hasExclusiveShock=false;
            let hasExclusiveBlast=false;
            let self=this;
            let feature_list=[];
            let update_index=null;

            this.selected_ammo_array=this.ammoArray.reduceRight(function(_prev, _val, _index)
            {
                let isShock=self.is_exclusive_feature("shock_exclusive",_val.type);
                let isBlast=self.is_exclusive_feature("blast_exclusive",_val.type);

                if(isShock && !hasExclusiveShock)
                {
                    _prev.push(_val);
                    hasExclusiveShock=true;
                    feature_list.push(_val.type.toLowerCase());
                }
                if(isBlast && !hasExclusiveBlast)
                {
                    _prev.push(_val);
                    hasExclusiveBlast=true;
                    feature_list.push(_val.type.toLowerCase());
                }

                if(!feature_list.includes(_val.type.toLowerCase()))
                {
                    _prev.push(_val);
                    feature_list.push(_val.type.toLowerCase());
                }
                update_index=!ammo_validate(_val) && update_index===null ? _index : update_index;
                //if invalid and update_index not set, set idndex

                return _prev;
            },[]);

            if(update_index)
            {
                this.select_ammo(update_index);
                return update_index;//early return as correction loop begins
            }

            indices=this.selected_ammo_array.reduce(function(_indices,_val)
            {
                _indices.push(self.find_feature_index(_val.type));
                return _indices;
            },[]);
            if(this.ammoArray.length!=this.selected_ammo_array.length)
            {
                this.$emit("update-ammo",this.selected_ammo_array);
            }

            return indices;
        },
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
        blast_exclusive(){return blast_exclusive;}
    }
}
</script>
<style scoped>

</style>