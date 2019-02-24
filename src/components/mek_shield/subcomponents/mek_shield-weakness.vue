<template>
    <!--span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Weakness</div>
                <table style="margin:auto;">
                    <tr style="font-weight:bold; border-bottom:1px solid black;">
                        <td>Weakness</td>
                        <td>Monicker</td>
                        <td>Cost</td>
                    </tr>
                    <tr><td colspan=3 style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(weakness,index) in weakness_table" :key="'shield-weakness-'+index"
                        class="clickable"
                        :class="selectedItemMultiple('selected_weakness_index_array',index,'selected_item')"
                        @click="select_weakness(weakness.weakness)"
                    >
                        <td>{{weakness.weakness}}</td>
                        <td>{{weakness.monicker}}</td>
                        <td>x{{weakness.cost}}</td>
                    </tr>
                    <tr style="visibility:hidden;height:0px;line-height:0px;">
                        <td>{{invisible_pad(flat_weakness_array)}}</td>
                        <td>{{invisible_pad(flat_monicker_array)}}</td>
                        <td>WWW</td>
                    </tr>
                </table>
            </div>
        </div>
    </span-->
    <mek-sub-component-table
        :items="weakness_table"
        :headers="{weakness:'Weakness',monicker:'Monicker',cost:'Cost'}"
        name="Features" flow="col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_weakness_index_array"
        @update-selected-indices="select_weakness"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_shield_weakness",
    props:["weaknessArray"],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        obj.weakness_table=
            [
                {weakness:"All",monicker:"Shield",cost:1.0},
                {weakness:"Ablative",monicker:"Screen",cost:1.0},
                {weakness:"Energy Only",monicker:"Interference",cost:0.75,exclusive:true},
                {weakness:"Matter Only",monicker:"Kinetic",cost:0.75,exclusive:true},
                {weakness:"Ranged Only",monicker:"Swashbuckling",cost:0.75,exclusive:true},
                {weakness:"Enclosing",monicker:"Mirror",cost:0.5},
                {weakness:"Surge",monicker:"Surge",cost:2.5}
            ];
 
        obj.exclusive_weaknesses=obj.weakness_table.filter((_el)=>{return typeof _el.exclusive!=="undefined"});

        obj.selected_weakness_array=[{weakness:"All",monicker:"Shield",cost:1.0}];
        return obj;
    },
    methods:
    {
        select_weakness:function(_selected_weakness)
        {
            let select_weakness_name=this.weakness_table[_selected_weakness].weakness;
            let isAllWeakness=select_weakness_name.toLowerCase()=="all";
            let currentIsAll=this.selected_weakness_array[0].weakness.toLowerCase()=="all";
            let weakness_index=this.find_weakness_index(select_weakness_name);
            let weaknessClone=Object.assign({},this.weakness_table[weakness_index]);
            if(isAllWeakness || currentIsAll)
            {
                this.$set(this,"selected_weakness_array",[weaknessClone]);
            }
            else
            {
                let isExclusive=this.is_exclusive_weakness(select_weakness_name);

                let temp_selected_weakness_array=this.selected_weakness_array.filter((_val)=>
                {//filter out matching weaknesses (toggle)
                    return _val.weakness.toLowerCase()!=select_weakness_name.toLowerCase();
                });

                let togglefeature=this.selected_weakness_array.some((_elem)=>
                {
                    return _elem.weakness.toLowerCase()==select_weakness_name.toLowerCase();
                },this);

                temp_selected_weakness_array=isExclusive ? temp_selected_weakness_array.filter((_val)=>{return typeof _val.exclusive==="undefined"}) : temp_selected_weakness_array;
                //if selected weakness is exclusive, filter out other exclusives

                this.$set(this,"selected_weakness_array",temp_selected_weakness_array);

                if(!togglefeature)
                {
                    this.selected_weakness_array.push(weaknessClone);
                }
                if(temp_selected_weakness_array.length==0)
                {
                    let allIndex=this.find_weakness_index("All");
                    weaknessClone=Object.assign({},this.weakness_table[allIndex]);
                    this.$set(this,"selected_weakness_array",[weaknessClone]);
                }
            }
            this.$emit("update-weakness",this.selected_weakness_array);
        },
        find_weakness_index:function(_weakness)
        {
            let found_index;
            this.weakness_table.some(function(_val, _index)
            {
                if(_val.weakness.toLowerCase() == _weakness.toLowerCase())
                {
                    found_index=_index;
                    return true;
                }
                return false;
            });

            return found_index;
        },
        is_exclusive_weakness:function(_weakness)
        {
            return this.exclusive_weaknesses.some(function(_val)
            {
                if(_val.weakness.toLowerCase() == _weakness.toLowerCase())
                {
                    return true;
                }
                return false;
            });
        },
        exclusive_indices:function()
        {
            let foundIndices=this.selected_weakness_array.reduce(function(_indices,_val,_index)
            {
                if(_val.exclusive)
                {
                    _indices.push(_index);
                }
                return _indices;
            },[]);
            return foundIndices;
        },
        is_all_weakness_index:function(_index)
        {
            return this.weakness_table[_index].weakness.toLowerCase()=="all";
        }
    },
    computed:
    {
        selected_weakness_index_array:function()
        {
            let indices=[];

            if(this.weaknessArray.length==1)
            {
                this.selected_weakness_array=[this.weakness_table[this.find_weakness_index(this.weaknessArray[0].weakness)]];
                return [this.find_weakness_index(this.weaknessArray[0].weakness)];
            }
            
            let hasExclusive=false;
            let self=this;
            let weakness_list=[];
            this.selected_weakness_array=this.weaknessArray.reduceRight(function(_prev, _val)
            {
                if(_val.weakness.toLowerCase()=="all")
                {
                    return [_val];
                }
                if(self.is_exclusive_weakness(_val.weakness))
                {
                    if(!hasExclusive)
                    {
                        _prev.push(_val);
                        hasExclusive=true;
                        weakness_list.push(_val.weakness.toLowerCase());
                    }
                }
                else if(!weakness_list.includes(_val.weakness.toLowerCase()))
                {
                    _prev.push(_val);
                    weakness_list.push(_val.weakness.toLowerCase());
                }
                return _prev;
            },[]);

            indices=this.selected_weakness_array.reduce(function(_indices,_val)
            {
                _indices.push(self.find_weakness_index(_val.weakness));
                return _indices;
            },[]);
            if(this.weaknessArray.length!=this.selected_weakness_array.length)
            {
                this.$emit("update-weakness",this.selected_weakness_array);
            }

            return indices;
        },
        flat_weakness_array:function()
        {
            return this.weakness_table.reduce(function(_array, _el)
            {
                _array.push(_el.weakness);
                return _array;
            },[]);
        },
        flat_monicker_array:function()
        {
            return this.weakness_table.reduce(function(_array, _el)
            {
                _array.push(_el.monicker);
                return _array;
            },[]);
        }
    }
}
</script>