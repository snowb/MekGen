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

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_energy_pool_feature",
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
                {feature:"Morphable",cost:1.25},
                {feature:"Fragile",cost:1},
            ];

        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature_index)
        {
            let select_feature_name=this.feature_table[_selected_feature_index].feature;
            let featureClone=Object.assign({},this.feature_table[_selected_feature_index]);

            let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val.feature.toLowerCase()!=select_feature_name.toLowerCase();
            });

            let togglefeature=this.selected_feature_array.some((_elem)=>
            {
                return _elem.feature.toLowerCase()==select_feature_name.toLowerCase();
            },this);

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

            let self=this;
            let feature_list=[];

            this.selected_feature_array=this.featureArray.reduceRight(function(_prev, _val)
            {
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
        /* flat_feature_array:function()
        {
            return this.feature_table.reduce(function(_array, _el)
            {
                _array.push(_el.feature);
                return _array;
            },[]);
        }, */
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