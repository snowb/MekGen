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
        obj.ammo_table=
        [
            {type:"Paintball",cost:0.5,effect:"Practice Rounds"},
            {type:"Foam",cost:0.5,effect:"Firefighting"},
            {type:"High-Ex",cost:1,effect:"Standard"},
            {type:"Tracer",cost:3,effect:"+1 to WA"},
            {type:"Kinetic",cost:3,effect:"More Knockback"},
            {type:"Tangler",cost:3,effect:"Grappling Attack"},
            {type:"Armor Piercing",cost:4,effect:"1/2 SP vs Armor"},
            {type:"Disruptor",cost:4,effect:"1/2 SP vs Energy"},
            {type:"Incendiary",cost:4,effect:"Flamethrower"},
            {type:"Shock (only)",cost:4,effect:"Stun Effect",shock_exclusive:true},
            {type:"Shock (add)",cost:6,effect:"Stun & Damage",shock_exclusive:true},
            {type:"Scattershot",cost:5,effect:"Shotgun Effect"},
            {type:"Blast I",cost:6,effect:"1-Hex Radius",blast_exclusive:true},
            {type:"Blast II",cost:8,effect:"2-Hex Radius",blast_exclusive:true},
            {type:"Blast III",cost:10,effect:"3-Hex Radius",blast_exclusive:true},
            {type:"Blast IV",cost:12,effect:"4-Hex Radius",blast_exclusive:true},
            {type:"Blast V",cost:14,effect:"5-Hex Radius",blast_exclusive:true},
            {type:"Nuclear",cost:1000,effect:"Atomic Ammo"},
        ];
        obj.shock_exclusive=obj.ammo_table.filter((_el)=>{return typeof _el.shock_exclusive!=="undefined";});
        obj.blast_exclusive=obj.ammo_table.filter((_el)=>{return typeof _el.blast_exclusive!=="undefined";});

        obj.selected_ammo_array=[];
        return obj;
    },
    methods:
    {
        select_ammo:function(_ammo_index)
        {
            let select_feature_name=this.ammo_table[_ammo_index].type;
            let isExclusiveShock=this.is_exclusive_feature("shock_exclusive",select_feature_name);
            let isExclusiveBlast=this.is_exclusive_feature("blast_exclusive",select_feature_name);
            let featureClone=Object.assign({},this.ammo_table[_ammo_index]);

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
            this.ammo_table.some(function(_val, _index)
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
        },
        exclusive_indices:function()
        {
            let foundIndices=this.selected_ammo_array.reduce(function(_indices,_val,_index)
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
        selected_ammo_index_array:function()
        {
            let indices=[];
            this.ammoArray;

            if(this.ammoArray.length==1)
            {
                this.selected_ammo_array=[this.filteredAmmoArray[this.find_feature_index(this.ammoArray[0].type)]];
                return [this.find_feature_index(this.ammoArray[0].type)];
            }

            let hasExclusiveShock=false;
            let hasExclusiveBlast=false;
            let self=this;
            let feature_list=[];

            this.selected_ammo_array=this.ammoArray.reduceRight(function(_prev, _val)
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
                return _prev;
            },[]);

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
                return this.ammo_table;
            }
            return this.ammo_table.filter((_elem)=>
            {
                return _elem.type.toLowerCase()!="nuclear";
            });
        }
    },
    watch:
    {
        "hasBlast":function(_newval,_oldval)
        {
            if(_newval && !_oldval)
            {
                let temp_selected_ammo_array=this.selected_ammo_array.filter((_val)=>
                {//filter out nuclear selected ammo if changing hasBlast from false to true 
                    return typeof _val!=="undefined" && _val.type.toLowerCase()!="nuclear";
                })
                this.$emit("update-ammo",temp_selected_ammo_array);
            }
        }
    }
}
</script>
<style scoped>

</style>