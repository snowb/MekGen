<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||melee_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <mek-melee-damage @update-damage="updateDamage" :damage="selected_damage"
            ></mek-melee-damage>
            <mek-melee-accuracy @update-accuracy="updateAccuracy" :accuracy="selected_accuracy"
            ></mek-melee-accuracy>
        </div>
        <div class="mek-inline-flex-row">
            <mek-melee-feature
                    @update-feature="updateFeature" 
                    :feature-array="feature_array"
            ></mek-melee-feature>
            <mek-melee-entangle-range v-if="isEntangle" style="align-self:start"
                :base_damage="selected_damage.damage" :range_modifier="entangle.range_modifier" :damage_modifier="entangle.damage_modifier"
                @update-damage-and-range="updateDamageAndRange"
            ></mek-melee-entangle-range>
            <mek-space-efficiency style="align-self:start;"
                :space_efficiency="efficiencies.space"
                :raw_space="raw_space"
                @update-efficiencies="updateEfficiencies"
            ></mek-space-efficiency>
        </div>
        <div class="mek-inline-flex-row">
            <mek-melee-stats :damage="selected_damage" :accuracy="selected_accuracy"
                :cost-multiplier="cost_multiplier" :feature-array="feature_array" :weight="weight"
                :space-cost="space_cost" :raw-space="raw_space" :total-cost="total_cost"
                :damage-modifier="entangle.damage_modifier" :range-modifier="entangle.range_modifier"
            ></mek-melee-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

import mek_melee_damage from "./subcomponents/mek_melee-damage.vue";
import mek_melee_accuracy from "./subcomponents/mek_melee-accuracy.vue";
import mek_melee_feature from "./subcomponents/mek_melee-feature.vue";
import mek_melee_stats from "./subcomponents/mek_melee-stats.vue";
import mek_melee_entangle_range from "./subcomponents/mek_melee-entangle-range.vue";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";

export default
{
    name:"mek_melee",
    props:[""],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-melee-damage":mek_melee_damage,
        "mek-melee-accuracy":mek_melee_accuracy,
        "mek-melee-feature":mek_melee_feature,
        "mek-melee-stats":mek_melee_stats,
        "mek-melee-entangle-range":mek_melee_entangle_range,

        "mek-space-efficiency":mek_space_efficiency,
        "mek-component-name":mek_component_name,
        "mek-save-reset-component":mek_save_reset_component
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category=null;
        obj.component_type=null;
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_damage={damage:1,cost:0.5};
        obj.selected_accuracy={accuracy:0,cost:1};

        obj.damage_capacity=1;

        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.accuracy=1;
        obj.cost_multipliers.feature=1;

        obj.entangle={};
        obj.entangle.range_modifier=0;
        obj.entangle.damage_modifier=0;

        return obj;
    },
    methods:
    {
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.component_changed=true;
        },
        updateEfficiencies(_data)
        {
            this.efficiencies.space.cost=_data.cost;
            this.efficiencies.space.modifier=_data.modifier;
            this.component_changed=true;
        },
        updateDamage(_damage)
        {
            this.selected_damage.damage=_damage.damage;
            this.selected_damage.cost=_damage.cost;
            this.component_changed=true;
            this.damage_capacity=_damage.damage;
        },
        updateAccuracy(_accuracy)
        {
            this.selected_accuracy.accuracy=_accuracy.accuracy;
            this.selected_accuracy.cost=_accuracy.cost;
            this.cost_multipliers.accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            if(!this.isEntangle)
            {
                this.entangle.range_modifier=0;
                this.entangle.damage_modifier=0;
            }

            this.melee_name;
        },
        updateDamageAndRange(_modifier)
        {
            this.entangle.range_modifier=_modifier.range;
            this.entangle.damage_modifier=_modifier.damage;
        },
        output_melee_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="melee";
            return_data.component_name=this.component_name===null?this.melee_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_damage=JSON.parse(JSON.stringify(this.selected_damage));
            return_data.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));

            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.final_damage=this.final_damage;
            return_data.damage_capacity=this.selected_damage.damage;

            if(this.isEntangle)
            {
                return_data.entangle={};
                return_data.entangle.damage_modifier=this.entangle.damage_modifier;
                return_data.entangle.range_modifier=this.entangle.range_modifier;
            }

            this.$nextTick(()=>{this.component_changed=false;});

            return return_data;
        },
        ingest_melee_data(_melee_object)
        {
            this.original_component=JSON.stringify(_melee_object);//store a copy as a JSON object for 'reset' purposes
            if(_melee_object===null)
            {
                this.componentSaveReset("clear");
                this.$store.commit("alertMessage","Melee is not valid, resetting.");
            }

            for(let _property in _melee_object)
            {
                if(["weight","cost","cost_multiplier","final_damage"].includes(_property))
                {
                    continue;
                }
                if(typeof _melee_object[_property]==="object" && !Array.isArray(_melee_object[_property]))
                {
                    for(let _sub_property in _melee_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],_melee_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(_melee_object[_property]))
                {
                    this.$set(this,_property,_melee_object[_property]);
                }
                else
                {
                    this.$set(this,_property,_melee_object[_property]);
                }
                if(this.component_name==this.melee_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            }
            this.$nextTick(()=>{this.component_changed=false;});
        },
        componentSaveReset:function(_action)
        {
            switch(_action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_melee_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_melee_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.entangle.damage_modifier=0;
                    this.entangle.range_modifier=0;
                    this.selected_damage.damage=1;
                    this.selected_accuracy.accuracy=0;
                    this.$set(this,"feature_array",[]);
                    this.$store.commit("saveComponent",null);
                    break;
            }
        },
    },
    computed:
    {
        final_damage()
        {
            return this.selected_damage.damage - this.entangle.damage_modifier;
        },
        raw_space()
        {
            return this.selected_damage.cost * this.cost_multiplier;
        },
        space_cost:function()
        {
            return this.raw_space - this.efficiencies.space.modifier;
        },
        cost_multiplier()
        {
            let cost_multiplier=1;
            for(let multi in this.cost_multipliers)
            {
                cost_multiplier*=this.cost_multipliers[multi];
            }
            return cost_multiplier;
        },
        total_cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        weight:function()
        {
            return (this.damage_capacity / 2);
        },
        newComponent()
        {
            let selectedComponent=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));
            
            if(typeof selectedComponent!=="undefined" && selectedComponent!==null)
            {
                if(selectedComponent.uuid!==this.uuid 
                    && selectedComponent.component_category=="equipment" 
                    && selectedComponent.component_type=="melee")
                {
                    this.ingest_melee_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
        isEntangle()
        {
            return this.feature_array.some((_val)=>
            {
                return _val.feature.toLowerCase()=="entangle";
            });
        },
        melee_name()
        {
            let name=this.feature_array.reduce((_name,_val)=>
            {
                _name+=_val.name+" ";
                return _name;
            },"");
            return name+"Melee";
        }
    }
};
</script>