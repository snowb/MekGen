<template>
    <mek-sub-component-table
        :items="feature_table"
        :headers="{feature:'Feature',cost:'Cost'}"
        name="Features" flow="col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_feature_index_array"
        @update-selected-indices="select_feature"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_melee_feature",
    props:["featureArray"],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.feature_table=
            [
                {feature:"Handy",cost:1.5,name:"Handy"},
                {feature:"Quick",cost:2,name:"Quick"},
                {feature:"Clumsy",cost:0.5,name:"Clumsy"},
                {feature:"Armor Piercing",cost:2,name:"AP"},
                {feature:"Entangle",cost:1.25,name:"Entangling"},
                {feature:"Thrown",cost:1.2,exclusive_throw:true,name:"Thrown"},
                {feature:"Returning",cost:1.5,exclusive_throw:true,name:"Returning"},
                {feature:"Disruptor",cost:2,name:"Disrupting"},
                {feature:"Shock (only)",cost:2,exclusive:false,exclusive_shock:true,name:"Shock"},
                {feature:"Shock (added)",cost:3,exclusive:false,exclusive_shock:true,name:"Shocking"},
            ];
        obj.exclusive_feature=obj.feature_table.reduce(function(_array,_val)
        {
            if(_val.exclusive)
            {
                _array.push(_val);
            }
            return _array;
        },[]);
        obj.exclusive_shock=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_shock!=="undefined";});
        obj.exclusive_throw=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_throw!=="undefined";});

        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature_index)
        {
            let select_feature_name=this.feature_table[_selected_feature_index].feature;
            let isExclusiveThrow=this.is_exclusive_feature("exclusive_throw",select_feature_name);
            let isExclusiveShock=this.is_exclusive_feature("exclusive_shock",select_feature_name);
            let featureClone=Object.assign({},this.feature_table[_selected_feature_index]);

            let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val.feature.toLowerCase()!=select_feature_name.toLowerCase();
            });

            let togglefeature=this.selected_feature_array.some((_elem)=>
            {
                return _elem.feature.toLowerCase()==select_feature_name.toLowerCase();
            },this);

            if(isExclusiveThrow)
            {
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_throw
                })
            }
            if(isExclusiveShock)
            {
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_shock
                })
            }

            if(!togglefeature)
            {
                temp_selected_feature_array.push(featureClone);
            }
            
            this.$set(this,"selected_feature_array",temp_selected_feature_array);

            if(temp_selected_feature_array.length==0)
            {
                this.$set(this,"selected_feature_array",[]);
            }

            this.$emit("update-feature",this.selected_feature_array);
        },
        find_feature_index:function(_feature)
        {
            let found_index;
            this.feature_table.some(function(_val, _index)
            {
                if(_val.feature.toLowerCase() == _feature.toLowerCase())
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
                if(_val.feature.toLowerCase() == _feature.toLowerCase())
                {
                    return true;
                }
                return false;
            });
        },
        exclusive_indices:function()
        {
            let foundIndices=this.selected_feature_array.reduce(function(_indices,_val,_index)
            {
                if(_val.exclusive)
                {
                    _indices.push(_index);
                }
                return _indices;
            },[]);
            return foundIndices;
        },
        is_all_feature_index:function(_index)
        {
            return this.feature_table[_index].feature.toLowerCase()=="all";
        }
    },
    computed:
    {
        selected_feature_index_array:function()
        {
            let indices=[];

            if(this.featureArray.length==1)
            {
                this.selected_feature_array=[this.feature_table[this.find_feature_index(this.featureArray[0].feature)]];
                return [this.find_feature_index(this.featureArray[0].feature)];
            }
            
            let hasExclusiveThrow=false;
            let hasExclusiveShock=false;
            let self=this;
            let feature_list=[];
            this.selected_feature_array=this.featureArray.reduceRight(function(_prev, _val)
            {
                if(self.is_exclusive_feature("exclusive_throw",_val.feature))
                {
                    if(!hasExclusiveThrow)
                    {
                        _prev.push(_val);
                        hasExclusiveThrow=true;
                        feature_list.push(_val.feature.toLowerCase());
                    }
                }
                else if(self.is_exclusive_feature("exclusive_shock",_val.feature))
                {
                    if(!hasExclusiveShock)
                    {
                        _prev.push(_val);
                        hasExclusiveShock=true;
                        feature_list.push(_val.feature.toLowerCase());
                    }
                }
                else if(!feature_list.includes(_val.feature.toLowerCase()))
                {
                    _prev.push(_val);
                    feature_list.push(_val.feature.toLowerCase());
                }
                return _prev;
            },[]);

            indices=this.selected_feature_array.reduce(function(_indices,_val)
            {
                _indices.push(self.find_feature_index(_val.feature));
                return _indices;
            },[]);
            if(this.featureArray.length!=this.selected_feature_array.length)
            {
                this.$emit("update-feature",this.selected_feature_array);
            }

            return indices;
        },
        flat_feature_array:function()
        {
            return this.feature_table.reduce(function(_array, _el)
            {
                _array.push(_el.feature);
                return _array;
            },[]);
        }
    }
}
</script>