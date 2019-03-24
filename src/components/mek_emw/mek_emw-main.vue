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
            <mek-emw-attack-factor 
                @update-attack-factor="updateAttackFactor" 
                :attack-factor="selected_attack_factor"
            ></mek-emw-attack-factor>
        </div>
        <div class="mek-inline-flex-row">
            <mek-emw-turns-in-use 
                @update-turns-in-use="updateTurnsInUse" 
                :turns-in-use="selected_turns_in_use"
            ></mek-emw-turns-in-use>
            <mek-emw-feature style="align-self:start;"
                @update-feature="updateFeature"
                :feature-array="feature_array"
                :turns-in-use="selected_turns_in_use.turns!=Infinity"
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
            <mek-component-stats :cols="4" :rows="3">
                <div slot="col1-row1">{{is_beam_shield && !is_variable_beam_shield?"Base":""}} Kills: {{selected_damage.damage}} K</div>
                <div slot="col1-row2" v-if="is_beam_shield">
                    <div>Beam Shield Kills: {{beam_shield.damage}} K</div>
                    <div>Stopping Power: {{beam_shield.stopping_power}} K</div>
                    <div>Defense Accuracy: {{beam_shield.defense_accuracy}}</div>
                </div>
                <div slot="col1-row3">Damage Capacity: {{damage_capacity}} K</div>

                <div slot="col2-row1">Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>

                <div slot="col3-row1">Base Space: {{raw_space}}</div>
                <div slot="col3-row2">Space: {{space_cost}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>

                <div slot="col4-row1">Base Cost: {{selected_damage.cost}}</div>
                <div slot="col4-row2">Multiplier: x{{cost_multiplier}}</div>
                <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";
import component_computed_mixin from "../../mixins/component_computed_mixin";
import component_methods_mixin from "../../mixins/component_methods_mixin";

export default
{
    name:"mek_emw",
    props:[],
    mixins:[selected_item_mixin, utility_mixin, component_computed_mixin, component_methods_mixin],
    components:
    {
        "mek-emw-damage":()=>import(/* webpackChunkName: "mek-emw-damage" */"./subcomponents/mek_emw-damage.vue"),
        "mek-emw-accuracy":()=>import(/* webpackChunkName: "mek-emw-accuracy" */"./subcomponents/mek_emw-accuracy.vue"),
        "mek-emw-attack-factor":()=>import(/* webpackChunkName: "mek-emw-attack-factor" */"./subcomponents/mek_emw-attack-factor.vue"),
        "mek-emw-turns-in-use":()=>import(/* webpackChunkName: "mek-emw-turns-in-use" */"./subcomponents/mek_emw-turns-in-use.vue"),
        "mek-emw-feature":()=>import(/* webpackChunkName: "mek-emw-feature" */"./subcomponents/mek_emw-feature.vue"),

        "mek-space-efficiency":()=>import(/* webpackChunkName: "mek-space-efficiency" */"../universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import(/* webpackChunkName: "mek_component-name" */"../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek_save-reset-component" */"../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"../universal/mek_component-stats.vue"),

    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="emw";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_damage={damage:1,cost:1};
        obj.selected_accuracy={accuracy:1,cost:1,defense_ability:-1};
        obj.selected_attack_factor={attack_factor:0,cost:1};
        obj.selected_turns_in_use={turns:Infinity,cost:1};

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
            this.$set(this.efficiencies,"space",_data);
            this.component_changed=true;
        },
        updateDamage(_damage)
        {
            this.$set(this,"selected_damage",_damage);
            this.component_changed=true;
            this.damage_capacity=_damage.damage/4;
        },
        updateAccuracy(_accuracy)
        {
            this.$set(this,"selected_accuracy",_accuracy);
            this.cost_multipliers.accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateAttackFactor(_attack_factor)
        {
            this.$set(this,"selected_attack_factor",_attack_factor);
            this.cost_multipliers.attack_factor=_attack_factor.cost;
            this.component_changed=true;
        },
        updateTurnsInUse(_turns)
        {
            this.$set(this,"selected_turns_in_use",_turns);
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
            return_data.selected_turns_in_use.turns=this.selected_turns_in_use.turns===Infinity?"Infinity":this.selected_turns_in_use.turns;

            return_data.selected_attack_factor=JSON.parse(JSON.stringify(this.selected_attack_factor));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));

            return_data.cost=this.cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.final_damage=this.final_damage;
            return_data.damage_capacity=this.selected_damage.damage;

            if(this.is_beam_shield)
            {
                return_data.beam_shield=JSON.parse(JSON.stringify(this.beam_shield));
            }

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="EMW is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.emw_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=false;});
        },
        componentSaveReset:function(_action)
        {
            let action=_action=="reset" && this.original_component==null?"clear":_action;
            switch(action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_emw_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.selected_damage.damage=1;
                    this.selected_accuracy.accuracy=1;
                    this.selected_attack_factor.attack_factor=0;
                    this.selected_turns_in_use.turns=0;
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
            return this.round(this.selected_damage.cost * this.cost_multiplier,2);
        },
        cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        weight:function()
        {
            return this.round((this.damage_capacity / 2),2);
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
            let emw_name=this.selected_attack_factor.attack_factor!=0?"Automated ":"";

            emw_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },emw_name);

            emw_name=this.is_beam_shield ? emw_name.replace(/ $/,"") : emw_name+"EMW";

            return emw_name;
        },
    }
};
</script>