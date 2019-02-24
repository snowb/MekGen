<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||emw_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <mek-emw-damage @update-damage="updateDamage" :damage="selected_damage"></mek-emw-damage>
            <mek-emw-accuracy 
                @update-accuracy="updateAccuracy" 
                :accuracy="selected_accuracy"
                :is-beam-shield="is_beam_shield"
                :is-variable-beam-shield="is_variable_beam_shield"
            ></mek-emw-accuracy>
        </div>
        <div class="mek-inline-flex-row">
            <div class="mek-inline-flex-col">
                <mek-emw-turns-in-use 
                    @update-turns-in-use="updateTurnsInUse" 
                    :turns-in-use="selected_turns_in_use"
                ></mek-emw-turns-in-use>
                <mek-emw-attack-factor 
                    @update-attack-factor="updateAttackFactor" 
                    :attack-factor="selected_attack_factor"
                ></mek-emw-attack-factor>
            </div>
            <mek-emw-feature style="align-self:baseline;"
                @update-feature="updateFeature"
                :feature-array="feature_array"
                :turns-in-use="selected_turns_in_use.turns!='X'"
            ></mek-emw-feature>
            <span class="mek-flex-col no-margin">
                <mek-space-efficiency
                    :space_efficiency="efficiencies.space"
                    :raw_space="raw_space"
                    @update-efficiencies="updateEfficiencies"
                ></mek-space-efficiency>
            </span>
        </div>
        <div class="mek-inline-flex-row">
            <mek-emw-stats :damage="selected_damage" :accuracy="selected_accuracy"
                :cost-multiplier="cost_multiplier" :feature-array="feature_array" :weight="weight"
                :space-cost="space_cost" :raw-space="raw_space" :total-cost="total_cost"
                :beam_shield="beam_shield" :damage_capacity="damage_capacity"
                :is-beam-shield="is_beam_shield" :is-variable-beam-shield="is_variable_beam_shield"
            ></mek-emw-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

import mek_emw_damage from "./subcomponents/mek_emw-damage.vue";
import mek_emw_accuracy from "./subcomponents/mek_emw-accuracy.vue";
import mek_emw_attack_factor from "./subcomponents/mek_emw-attack-factor.vue";
import mek_emw_turns_in_use from "./subcomponents/mek_emw-turns-in-use.vue";
import mek_emw_feature from "./subcomponents/mek_emw-feature.vue";
import mek_emw_stats from "./subcomponents/mek_emw-stats.vue";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";
export default
{
    name:"mek_emw",
    props:[],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-emw-damage":mek_emw_damage,
        "mek-emw-accuracy":mek_emw_accuracy,
        "mek-emw-attack-factor":mek_emw_attack_factor,
        "mek-emw-turns-in-use":mek_emw_turns_in_use,
        "mek-emw-feature":mek_emw_feature,
        "mek-emw-stats":mek_emw_stats,

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

        obj.selected_damage={damage:1,cost:1};
        obj.selected_accuracy={accuracy:1,cost:1};
        obj.selected_attack_factor={attack_factor:"X",cost:1};
        obj.selected_turns_in_use={turns:"X",cost:1};

        obj.damage_capacity=0.25;

        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.accuracy=1;
        obj.cost_multipliers.feature=1;
        obj.cost_multipliers.attack_factor=1;
        obj.cost_multipliers.turns_in_use=1;

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
            this.damage_capacity=_damage.damage/4;
        },
        updateAccuracy(_accuracy)
        {
            this.selected_accuracy.accuracy=_accuracy.accuracy;
            this.selected_accuracy.cost=_accuracy.cost;
            this.cost_multipliers.accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateAttackFactor(_attack_factor)
        {
            this.selected_attack_factor.attack_factor=_attack_factor.attack_factor;
            this.selected_attack_factor.cost=_attack_factor.cost;
            this.cost_multipliers.attack_factor=_attack_factor.cost;
            this.component_changed=true;
        },
        updateTurnsInUse(_turns)
        {
            this.selected_turns_in_use.turns=_turns.turns;
            this.selected_turns_in_use.cost=_turns.cost;
            this.cost_multipliers.turns_in_use=_turns.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            this.emw_name;
        },
        output_emw_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="emw";
            return_data.component_name=this.component_name===null?this.emw_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_damage=JSON.parse(JSON.stringify(this.selected_damage));
            return_data.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy));
            return_data.selected_turns_in_use=JSON.parse(JSON.stringify(this.selected_turns_in_use));
            return_data.selected_attack_factor=JSON.parse(JSON.stringify(this.selected_attack_factor));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));

            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.final_damage=this.final_damage;
            return_data.damage_capacity=this.selected_damage.damage;

            if(this.is_beam_shield)
            {
                return_data.beam_shield=JSON.parse(JSON.stringify(this.beam_shield));
            }

            this.$nextTick(()=>{this.component_changed=false;});

            return return_data;
        },
        ingest_emw_data(_emw_object)
        {
            this.original_component=JSON.stringify(_emw_object);//store a copy as a JSON object for 'reset' purposes
            if(_emw_object===null)
            {
                this.componentSaveReset("clear");
                this.$store.commit("alertMessage","EMW is not valid, resetting.");
            }

            for(let _property in _emw_object)
            {
                if(["weight","cost","cost_multiplier","final_damage","beam_shield"].includes(_property))
                {
                    continue;
                }
                if(typeof _emw_object[_property]==="object" && !Array.isArray(_emw_object[_property]))
                {
                    for(let _sub_property in _emw_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],_emw_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(_emw_object[_property]))
                {
                    this.$set(this,_property,_emw_object[_property]);
                }
                else
                {
                    this.$set(this,_property,_emw_object[_property]);
                }
                if(this.component_name==this.emw_name)
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
                    this.$store.commit('saveComponent',this.output_emw_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_emw_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.selected_damage.damage=1;
                    this.selected_accuracy.accuracy=1;
                    this.selected_attack_factor=0;
                    this.selected_turns_in_use=0;
                    this.$set(this,"feature_array",[]);
                    this.$store.commit("saveComponent",null);
                    break;
            }
        },
    },
    computed:
    {
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
                    && selectedComponent.component_type=="emw")
                {
                    this.ingest_emw_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
        is_beam_shield()
        {
            return this.feature_array.some((_val)=>
            {
                return /beam/gi.test(_val.feature);
            });
        },
        is_variable_beam_shield()
        {
            return this.feature_array.some((_val)=>
            {
                return /variable beam/gi.test(_val.feature);
            });
        },
        beam_shield()
        {
            if(this.is_beam_shield)
            {
                let obj={};
                obj.stopping_power=this.selected_damage.damage;
                obj.defense_accuracy=this.selected_accuracy.accuracy-2;
                obj.damage=this.selected_damage.damage/2;
                return obj;
            }
            return null;
        },
        emw_name()
        {
            let emw_name=this.selected_attack_factor.attack_factor!="X"?"Automated ":"";

            emw_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },emw_name);

            emw_name=this.is_beam_shield ? emw_name.replace(/ $/,"") : emw_name+"EMW";

            return emw_name;
        }
    }
};
</script>