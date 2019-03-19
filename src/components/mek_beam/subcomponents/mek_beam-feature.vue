<template>
    <mek-sub-component-table
        :items="feature_table"
        :headers="{feature:'Feature',cost:'Cost'}"
        :showHeaders="true" :format="{cost:'multiplier'}"
        :selected-indices="selected_feature_index_array"
        @update-selected-indices="select_feature"
        name="Features"
        flow="col"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default 
{
    name:"mek_beam_feature",
    props:["featureArray","burstValue"],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.feature_table=
            [
                {feature:"Mag-Fed",cost:0.9},
                {feature:"Anti-Missile",cost:1,exclusive_anti_missile:true},
                {feature:"Variable Anti-Missile",cost:1.8,exclusive_anti_missile:true},
                {feature:"Anti-Personnel",cost:1.0,exclusive_personnel:true},
                {feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:true},
                {feature:"Anti-Missile & Personnel",cost:1.6,exclusive_personnel:true,exclusive_anti_missile:true},
                {feature:"All Purpose",cost:2.6,exclusive_personnel:true,exclusive_anti_missile:true},
                {feature:"Fragile",cost:1},
                {feature:"Long Range",cost:1.33},
                {feature:"Hydro",cost:0.2},
                {feature:"Mega-Beam",cost:10},
                {feature:"Disruptor",cost:2},

            ];

        obj.exclusive_anti_missile=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_anti_missile!=="undefined";});
        obj.exclusive_personnel=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_personnel!=="undefined";});

        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature_index)
        {
            this.burstValue;
            let select_feature_name=this.feature_table[_selected_feature_index].feature;
            let isExclusivePhalanx=this.is_exclusive_feature("exclusive_anti_missile",select_feature_name);
            let isExclusivePersonnel=this.is_exclusive_feature("exclusive_personnel",select_feature_name);
            let featureClone=Object.assign({},this.feature_table[_selected_feature_index]);

            let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val.feature.toLowerCase()!=select_feature_name.toLowerCase();
            });

            let togglefeature=this.selected_feature_array.some((_elem)=>
            {
                return _elem.feature.toLowerCase()==select_feature_name.toLowerCase();
            },this);

            if(isExclusivePhalanx && isExclusivePersonnel)
            {//filter out exclusive phalanx and personnel
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_anti_missile && !_val.exclusive_personnel;
                })
            }
            if(isExclusivePhalanx)
            {//filter out exclusive phalanx
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_anti_missile;
                })
            }
            if(isExclusivePersonnel)
            {//filter out exclusive personnel
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_personnel;
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
        }
    },
    computed:
    {
        selected_feature_index_array:function()
        {
            let indices=[];
            if(this.featureArray.length==0)
            {
                this.selected_feature_array=[];
            }
            if(this.featureArray.length==1)
            {
                this.selected_feature_array=[this.feature_table[this.find_feature_index(this.featureArray[0].feature)]];
                return [this.find_feature_index(this.featureArray[0].feature)];
            }

            let hasExclusivePhalanx=false;
            let hasExclusivePersonnel=false;
            let self=this;
            let feature_list=[];

            this.selected_feature_array=this.featureArray.reduceRight(function(_prev, _val)
            {
                let isPhalanx=self.is_exclusive_feature("exclusive_anti_missile",_val.feature);
                let isPersonnel=self.is_exclusive_feature("exclusive_personnel",_val.feature);
                if( isPhalanx && !hasExclusivePhalanx && isPersonnel && !hasExclusivePersonnel)
                {
                    _prev.push(_val);
                    hasExclusivePhalanx=true;
                    hasExclusivePersonnel=true;
                    feature_list.push(_val.feature.toLowerCase());
                }
                if(isPhalanx && !hasExclusivePhalanx)
                {
                    _prev.push(_val);
                    hasExclusivePhalanx=true;
                    feature_list.push(_val.feature.toLowerCase());
                }
                if(isPersonnel && !hasExclusivePersonnel)
                {
                    _prev.push(_val);
                    hasExclusivePersonnel=true;
                    feature_list.push(_val.feature.toLowerCase());
                }
                if(!feature_list.includes(_val.feature.toLowerCase()))
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
            this.burstValue;

            return indices;
        },
        flat_feature_array:function()
        {
            return this.feature_table.reduce(function(_array, _el)
            {
                _array.push(_el.feature);
                return _array;
            },[]);
        },
        /* filteredFeatureTable()
        {
            if(this.burstValue<=1)
            {
                return this.feature_table.filter((_val)=>
                {
                    return !this.is_exclusive_feature("exclusive_anti_missile",_val.feature);// || this.is_exclusive_feature("exclusive_personnel",_val.feature) ;
                },this);
            }
             return this.feature_table;
        }*/
    },
}
</script>