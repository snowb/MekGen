<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Features</div>
                <table style="margin:auto;">
                    <tr style="font-weight:bold; border-bottom:1px solid black;">
                        <td>Feature</td>
                        <td>Cost</td>
                    </tr>
                    <tr><td colspan=2 style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(feature,index) in filteredFeatureTable" :key="'emw-feature-'+index"
                        class="clickable"
                        :class="selectedItemMultiple('selected_feature_index_array',index,'selected_item')"
                        @click="select_feature(feature.feature)"
                    >
                        <td>{{feature.feature}}</td>
                        <td>x{{feature.cost}}</td>
                    </tr>
                    <tr style="visibility:hidden;height:0px;line-height:0px;">
                        <td>{{invisible_pad(flat_feature_array)}}</td>
                        <td>WWW</td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default 
{
    name:"mek_melee_feature",
    props:["featureArray","turnsInUse"],
    mixins:[selected_item_mixin, utility_mixin],
    data:function()
    {
        let obj={};
        obj.feature_table=
            [
                {feature:"Rechargeable",cost:1.1},
                {feature:"Thrown",cost:1.2},
                {feature:"Quick",cost:2},
                {feature:"Hyper",cost:7.5},
                {feature:"Beam Shield",cost:1.5,exclusive_beam_shield:true},
                {feature:"Variable Beam Shield",cost:2,exclusive_beam_shield:true}

            ];

        obj.exclusive_beam=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_beam_shield!=="undefined";});

        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature)
        {
            let isExclusiveBeam=this.is_exclusive_feature("exclusive_beam",_selected_feature);
            let feature_index=this.find_feature_index(_selected_feature);
            let featureClone=Object.assign({},this.filteredFeatureTable[feature_index]);

            let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val.feature.toLowerCase()!=_selected_feature.toLowerCase();
            });

            let togglefeature=temp_selected_feature_array.length!=this.selected_feature_array.length;

            if(isExclusiveBeam)
            {
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_beam_shield
                })
            }

            this.$set(this,"selected_feature_array",temp_selected_feature_array);

            if(!togglefeature)
            {
                this.selected_feature_array.push(featureClone);
            }
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
        }
    },
    computed:
    {
        selected_feature_index_array:function()
        {
            let indices=[];

            if(this.featureArray.length==1)
            {
                this.selected_feature_array=[this.filteredFeatureTable[this.find_feature_index(this.featureArray[0].feature)]];
                return [this.find_feature_index(this.featureArray[0].feature)];
            }
            
            let hasExclusiveBeam=false;
            let self=this;
            let feature_list=[];
            this.selected_feature_array=this.featureArray.reduceRight(function(_prev, _val)
            {
                if(self.is_exclusive_feature("exclusive_beam",_val.feature))
                {
                    if(!hasExclusiveBeam)
                    {
                        _prev.push(_val);
                        hasExclusiveBeam=true;
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
        },
        filteredFeatureTable()
        {
            if(!this.turnsInUse)
            {
                return this.feature_table.filter((_val)=>
                {
                    return _val.feature!="Rechargeable";
                });
            }
            return this.feature_table;
        }
    }
}
</script>