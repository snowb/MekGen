<template>
    <mek-sub-component-table
        :items="filteredFeatureTable"
        :headers="{feature:'Feature',cost:'Cost'}" :show-headers="true" :format="{cost:'multiplier'}"
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
    name:"mek_projectile_feature",
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
                {feature:"Long Range",cost:1.33},
                {feature:"Hypervelocity",cost:1.25},
                {feature:"Phalanx",cost:0.5,exclusive_phalanx:true},
                {feature:"Variable Phalanx",cost:1.4,exclusive_phalanx:true},
                {feature:"Anti-Personnel",cost:1.0,exclusive_personnel:true},
                {feature:"Variable Anti-Personnel",cost:1.8,exclusive_personnel:true},
                {feature:"Anti-Personnel Phalanx",cost:1.6,exclusive_personnel:true,exclusive_phalanx:true},
                {feature:"All Purpose",cost:2.6,exclusive_personnel:true,exclusive_phalanx:true}

            ];

        obj.exclusive_phalanx=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_phalanx!=="undefined";});
        obj.exclusive_personnel=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_personnel!=="undefined";});

        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature_index)
        {
            this.burstValue;
            let select_feature_name=this.filteredFeatureTable[_selected_feature_index].feature;
            let isExclusivePhalanx=this.is_exclusive_feature("exclusive_phalanx",select_feature_name);
            let isExclusivePersonnel=this.is_exclusive_feature("exclusive_personnel",select_feature_name);
            let featureClone=Object.assign({},this.filteredFeatureTable[_selected_feature_index]);

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
                    return !_val.exclusive_phalanx && !_val.exclusive_personnel;
                })
            }
            if(isExclusivePhalanx)
            {//filter out exclusive phalanx
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_phalanx;
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
            this.filteredFeatureTable.some(function(_val, _index)
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
                this.selected_feature_array=[this.filteredFeatureTable[this.find_feature_index(this.featureArray[0].feature)]];
                return [this.find_feature_index(this.featureArray[0].feature)];
            }

            let hasExclusivePhalanx=false;
            let hasExclusivePersonnel=false;
            let self=this;
            let feature_list=[];

            this.selected_feature_array=this.featureArray.reduceRight(function(_prev, _val)
            {
                let isPhalanx=self.is_exclusive_feature("exclusive_phalanx",_val.feature);
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
        filteredFeatureTable()
        {
            if(this.burstValue<=1)
            {
                return this.feature_table.filter((_val)=>
                {
                    return !this.is_exclusive_feature("exclusive_phalanx",_val.feature);// || this.is_exclusive_feature("exclusive_personnel",_val.feature) ;
                },this);
            }
            return this.feature_table;
        }
    },
    watch:
    {
        "burstValue":function(_newval,_oldval)
        {
            if(_newval<=1 && _oldval>1)
            {
                let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
                {//filter out phalanx selected features if changing from BV>1 to BV=1
                    return !_val.exclusive_phalanx;
                })
                this.$emit("update-feature",temp_selected_feature_array);
            }
        }
    }
}
</script>