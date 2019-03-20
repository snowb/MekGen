<template>
    <mek-sub-component-table
        :items="filteredFeatureTable"
        :headers="{feature:'Feature',cost:'Cost'}"
        :show-headers="true" :format="{cost:'multiplier'}"
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
    props:["featureArray","blastRadius","smartMissile"],
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
                {feature:"Tunneling",cost:1.3},
                {feature:"Home On Jam",cost:2},
                {feature:"Fuse",cost:1.1},
                {feature:"Foam",cost:1.33},
                {feature:"Flare",cost:0.5},
                {feature:"Smoke",cost:0.5, exclusive_smoke_scatter:true},
                {feature:"Scatter",cost:0.5, exclusive_smoke_scatter:true},
                {feature:"Countermissile",cost:1, exclusive_counter:true},
                {feature:"Variable Countermissile",cost:1.8, exclusive_counter:true},
                {feature:"Smoke-Scatter",cost:1,exclusive_smoke:true, exclusive_smoke_scatter:true},
                {feature:"Nuclear",cost:1000},

            ];

        obj.exclusive_counter=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_counter!=="undefined";});
        obj.exclusive_smoke_scatter=obj.feature_table.filter((_el)=>{return typeof _el.exclusive_smoke_scatter!=="undefined";});

        obj.selected_feature_array=[];
        return obj;
    },
    methods:
    {
        select_feature:function(_selected_feature_index)
        {
            this.blastRadius;
            let select_feature_name=this.filteredFeatureTable[_selected_feature_index].feature;
            let isExclusiveCounter=this.is_exclusive_feature("exclusive_counter",select_feature_name);
            let isExclusiveSmokeScatter=this.is_exclusive_feature("exclusive_smoke_scatter",select_feature_name);
            let featureClone=Object.assign({},this.filteredFeatureTable[_selected_feature_index]);

            let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
            {//filter out matching feature (toggle)
                return _val.feature.toLowerCase()!=select_feature_name.toLowerCase();
            });

            let togglefeature=this.selected_feature_array.some((_elem)=>
            {
                return _elem.feature.toLowerCase()==select_feature_name.toLowerCase();
            },this);

            if(isExclusiveCounter)
            {//filter out exclusive counter
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_counter;
                })
            }
            if(isExclusiveSmokeScatter)
            {//filter out exclusive smoke
                temp_selected_feature_array=temp_selected_feature_array.filter((_val)=>
                {
                    return !_val.exclusive_smoke_scatter;
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

            let hasExclusiveCounter=false;
            let self=this;
            let feature_list=[];

            this.selected_feature_array=this.featureArray.reduceRight(function(_prev, _val)
            {
                let isCounter=self.is_exclusive_feature("exclusive_counter",_val.feature);
                if(isCounter && !hasExclusiveCounter)
                {
                    _prev.push(_val);
                    hasExclusiveCounter=true;
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
            this.blastRadius;

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
            return this.feature_table.filter((_val)=>
            {
                if(this.blastRadius==0 && ["nuclear","scatter","smoke","smoke-scatter"].includes(_val.feature.toLowerCase()))
                {//filter out some features if no blast radius
                    return false;
                }
                if(!this.smartMissile && _val.feature.toLowerCase()=="home on jam")
                {//filtered out home-on-jam for dumb missiles
                    return false;
                }
                return true;
            },this);
        }
    },
    watch:
    {
        "blastRadius":function(_newval,_oldval)
        {
            if(_newval<=0 && _oldval>0)
            {
                let temp_selected_feature_array=this.selected_feature_array.filter((_val)=>
                {//filter out phalanx selected features if changing from BV>1 to BV=1
                    return _val.feature.toLowerCase()!="nuclear";
                })
                this.$emit("update-feature",temp_selected_feature_array);
            }
        }
    }
}
</script>