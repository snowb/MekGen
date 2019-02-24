<template>
    <span class="mek-inline-flex-col">
        <mek-component-name :new-component="newComponent" :component-name="component_name||shield_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <div class="mek-flex-col">
                <mekshield-type :type="type" @update-type="select_type"></mekshield-type>
                <mekshield-class :shield_class="shield_class" :type="type" :is_ablative="is_ablative" @update-class-code="select_class_code"></mekshield-class>
            </div>
            <span class="mek-flex-col no-margin">
                <mekshield-defense-ability
                    v-if="type.toLowerCase()=='standard'"
                    :defense_ability="defense_ability"
                    :cost="cost_multipliers.defense_ability" 
                    @update-defense-ability="select_da"></mekshield-defense-ability>
                <mekshield-binder
                    v-if="type.toLowerCase()=='standard' || type.toLowerCase()=='active'"
                    :binder="binder"
                    :base_stopping_power="shield_class.stopping_power"
                    @update-binder="select_binder"
                ></mekshield-binder>
                <mekshield-reset-time 
                    v-if="type.toLowerCase()=='reactive'"
                    :reset-time="reset_time"
                    @update-reset-time="select_reset"
                ></mekshield-reset-time>
                <mekshield-turns-in-use
                    v-if="type.toLowerCase()=='reactive'"
                    :turns-in-use="turns_in_use"
                    @update-turns-in-use="select_turns"
                ></mekshield-turns-in-use>
            </span>
            <span class="mek-flex-col no-margin">
                <mek-armor-type v-if="type.toLowerCase()=='standard' || type.toLowerCase()=='active'"
                        :armor-type="armor_type"
                        @update-armor-type="select_armor_type"
                    ></mek-armor-type>
                    <mek-energy-absorbing-armor
                        v-if="type.toLowerCase()=='standard' || type.toLowerCase()=='active'"
                        :absorption="absorption"
                        @update-absorption="select_absorption"
                    ></mek-energy-absorbing-armor>
            </span>
            <span class="mek-flex-col no-margin" v-if="type.toLowerCase()=='reactive'">
                <mekshield-weakness
                    @update-weakness="select_weakness"
                    :weakness-array="weakness_array"
                ></mekshield-weakness>
            </span>
            <span class="mek-flex-col no-margin">
                <mek-space-efficiency
                    :space_efficiency="efficiencies.space"
                    :raw_space="raw_space"
                    @update-efficiencies="updateEfficiencies"
                ></mek-space-efficiency>
            </span>
        </div>
        <div class="mek-inline-flex-row">
            <mek-shield-stats :shield_class="shield_class" :reset_time="reset_time"
                :turns_in_use="turns_in_use" :binder="binder" :defense_ability="defense_ability"
                :weakness_array="weakness_array" :type="type" :stopping_power="calculate_stopping_power()"
                :cost_multiplier="cost_multiplier" :space_cost="space_cost" :weight="weight"
                :total_cost="total_cost" :surge_damage="surge_damage" :raw_space="raw_space"
                :armor_type="armor_type" :absorption="absorption"
                >
            </mek-shield-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
            <!--mek-reset-component></mek-reset-component-->
        </div>
    </span>
</template>

<script>
//imports
import servo_classes_mixin from "../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";
import mek_shield_type from "./subcomponents/mek_shield-type.vue";
import mek_shield_class from "./subcomponents/mek_shield-class.vue";
import mek_shield_defense_ability from "./subcomponents/mek_shield-defense-ability.vue";
import mek_shield_binder from "./subcomponents/mek_shield-binder.vue";
import mek_shield_reset_time from "./subcomponents/mek_shield-reset-time.vue";
import mek_shield_turns_in_use from "./subcomponents/mek_shield-turns-in-use.vue";
import mek_shield_weakness from "./subcomponents/mek_shield-weakness.vue";
import mek_shield_stats from "./subcomponents/mek-shield-stats.vue";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";
import mek_armor_type from "../universal/mek_armor-type.vue";
import mek_energy_absorbing_armor from "../universal/mek_energy-absorbing-armor.vue";

export default
{
    name:"mek_shield",
    mixins:[servo_classes_mixin, selected_item_mixin, utility_mixin],
    components:
    {
        "mekshield-type":mek_shield_type,
        "mekshield-class":mek_shield_class,
        "mekshield-defense-ability":mek_shield_defense_ability,
        "mekshield-binder":mek_shield_binder,
        "mekshield-reset-time":mek_shield_reset_time,
        "mekshield-turns-in-use":mek_shield_turns_in_use,
        "mekshield-weakness":mek_shield_weakness,
        "mek-shield-stats":mek_shield_stats,
        "mek-space-efficiency":mek_space_efficiency,
        "mek-component-name":mek_component_name,
        "mek-save-reset-component":mek_save_reset_component,
        "mek-armor-type":mek_armor_type,
        "mek-energy-absorbing-armor":mek_energy_absorbing_armor
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.type="standard";
        obj.component_name=null;
        obj.component_category=null;
        obj.component_type=null;
        obj.original_component=null;
        obj.component_changed=true;

        obj.shield_class={};
        obj.shield_class.code=1;
        obj.shield_class.stopping_power=5;
        obj.shield_class.kills=null;
        obj.shield_class.cost=5;
        obj.shield_class.id="SL";
        obj.shield_class.name="Superlight";

        obj.defense_ability=-2;
        obj.cost_multipliers={};
        obj.cost_multipliers.defense_ability=1;
        
        obj.binder={};
        obj.binder.cost=1;
        obj.binder.space=0;
        obj.binder.stopping_power_modifier=0;
        obj.cost_multipliers.binder=1;

        obj.reset_time={};
        obj.reset_time.time=2;
        obj.reset_time.cost=1;
        obj.cost_multipliers.reset_time=1;
        
        obj.turns_in_use={};
        obj.turns_in_use.time="X";
        obj.turns_in_use.cost=1;
        obj.cost_multipliers.turns_in_use=1;

        obj.weakness_array=[];
        obj.weakness_array[0]={};
        obj.weakness_array[0].weakness="All";
        obj.weakness_array[0].monicker="Shield";
        obj.weakness_array[0].cost=1;
        obj.weakness_array[0].exclusive=false;
        obj.cost_multipliers.weakness=1;

        obj.efficiencies={};
        obj.efficiencies.space={modifier:0,cost:0};

        obj.armor_type={type:"Standard",damage_coefficient:1,cost:1};
        obj.cost_multipliers.armor_type=1;

        obj.absorption={absorption:0,cost:1,armor_penalty:1};
        obj.cost_multipliers.absorption=1;

        return obj;
    },
    methods:
    {
        select_type:function(_type)
        {
            if(this.type.toLowerCase()==_type.toLowerCase())
            {
                return;
            }
            this.component_changed=true;
            this.type=_type.toLowerCase();
            if(this.type==="reactive")
            {
                this.shield_class.cost=this.shield_class.stopping_power*3;

                this.defense_ability=null;
                this.cost_multipliers.defense_ability=1;

                this.$set(this,"binder",{stopping_power_modifier:0})
                this.cost_multipliers.binder=1;

                let reset_time=this.reset_time===null?{cost:1,time:2}:this.reset_time;
                this.$set(this,"reset_time",reset_time);
                this.cost_multipliers.reset_time=this.reset_time.cost;

                let turns_in_use=this.turns_in_use===null ? {time:"X",cost:1} : this.turns_in_use;
                this.$set(this,"turns_in_use",turns_in_use);
                this.cost_multipliers.turns_in_use=this.turns_in_use.cost;

                let weakness_array=this.weakness_array===null ? [{weakness:"All",monicker:"Shield",cost:1,exclusive:false}] : this.weakness_array;
                this.$set(this,"weakness_array",weakness_array);
                this.cost_multipliers.weakness=this.weakness_array.reduce(function(_sum,_val){return _sum*_val.cost},1);
            
                this.$set(this,"armor_type",null);
                this.cost_multipliers.armor_type=1;
                this.$set(this,"absorption",null);
                this.cost_multipliers.absorption=1;
            }
            else if(this.type==="active")
            {
                this.shield_class.cost=this.shield_class.stopping_power*1.5;

                this.defense_ability=null;
                this.cost_multipliers.defense_ability=1;

                if(typeof this.binder.space==="undefined")
                {//binder is never null, as stopping_power_modifier is always at least 0
                    this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0});
                    this.shield_name;
                }
                this.cost_multipliers.binder=this.binder.cost;
                
                this.reset_time=null
                this.cost_multipliers.reset_time=1;

                this.turns_in_use=null;
                this.cost_multipliers.turns_in_use=1;

                this.weakness_array=null;
                this.cost_multipliers.weakness=1;
                
                if(this.armor_type===null)
                {
                    this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1})
                    this.cost_multipliers.armor_type=1;
                }
                if(this.absorption===null)
                {
                    this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:1})
                    this.cost_multipliers.absorption=1;
                }
            }
            else if(this.type=="standard")
            {
                this.shield_class.cost=this.shield_class.stopping_power;

                this.defense_ability=this.defense_ability===null ? -2 : this.defense_ability;
                this.cost_multipliers.defense_ability=this.cost_multipliers.defense_ability===null ? 1 : this.cost_multipliers.defense_ability;
                
                if(this.binder===null)
                {
                    this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0});
                    this.shield_name;
                }
                this.cost_multipliers.binder=this.binder.cost;

                this.reset_time=null;
                this.cost_multipliers.reset_time=1;

                this.turns_in_use=null;
                this.cost_multipliers.turns_in_use=1;

                this.weakness_array=null;
                this.cost_multipliers.weakness=1;

                if(this.armor_type===null)
                {
                    this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1})
                    this.cost_multipliers.armor_type=1;
                }
                if(this.absorption===null)
                {
                    this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:1})
                    this.cost_multipliers.absorption=1;
                }
            }
            this.component_changed=true;
        },
        select_class_code:function(_class_code_obj)
        {
            this.shield_class.code=_class_code_obj.code;
            this.shield_class.stopping_power=_class_code_obj.stopping_power;
            this.shield_class.cost=_class_code_obj.cost;
            this.shield_class.id=_class_code_obj.id;
            this.shield_class.name=_class_code_obj.name;
            this.component_changed=true;
        },
        select_da:function(_da_obj)
        {
            this.defense_ability=_da_obj.da;
            this.cost_multipliers.defense_ability=_da_obj.cost;
            this.component_changed=true;
        },
        select_binder:function(_binder_obj)
        {
            this.binder.cost=_binder_obj.cost;
            this.binder.space=_binder_obj.space;
            this.binder.stopping_power_modifier=_binder_obj.stopping_power_modifier;
            this.cost_multipliers.binder=_binder_obj.cost;
            this.shield_name;
            this.component_changed=true;
        },
        select_reset:function(_reset_obj)
        {
            this.reset_time=_reset_obj;
            this.cost_multipliers.reset_time=_reset_obj.cost;
            this.component_changed=true;
        },
        select_turns:function(_turns_obj)
        {
            this.turns_in_use=_turns_obj;
            this.cost_multipliers.turns_in_use=_turns_obj.cost;
            this.component_changed=true;
        },
        select_weakness:function(_weakness_obj)
        {
            this.$set(this,"weakness_array",_weakness_obj);
            this.cost_multipliers.weakness=this.weakness_array.reduce(function(_cost_multi,_val)
            {
                _cost_multi*=_val.cost;
                return _cost_multi;
            },1);
            this.shield_class.kills=this.is_ablative ? this.calculate_stopping_power()*5 : null;
            this.component_changed=true;
        },
        select_armor_type(_armor_type)
        {
            this.$set(this,"armor_type",_armor_type);
            this.cost_multipliers.armor_type=this.armor_type.cost;
        },
        select_absorption(_absorption)
        {
            this.$set(this,"absorption",_absorption);
            this.cost_multipliers.absorption=this.absorption.cost;
        },
        updateComponentName:function(_name)
        {
            this.component_name=_name;
            this.component_changed=true;
        },
        calculate_stopping_power:function()
        {
            let sp_modifier=this.absorption!==null ? this.absorption.armor_penalty + this.binder.stopping_power_modifier : this.binder.stopping_power_modifier;
            return this.shield_class.stopping_power - (this.shield_class.stopping_power * sp_modifier);
        },
        weighted_stopping_power()
        {
            return this.shield_class.stopping_power - (this.shield_class.stopping_power * this.binder.stopping_power_modifier);
        },
        updateEfficiencies:function(_data)
        {
            this.efficiencies.space.cost=_data.cost;
            this.efficiencies.space.modifier=_data.modifier;
            this.component_changed=true
        },
        ingest_shield_data:function(_shield_object)
        {
            this.original_component=JSON.stringify(_shield_object);//store a copy as a JSON object for 'reset' purposes
            if(typeof _shield_object.type==="undefined")
            {
                this.componentSaveReset("clear");
                this.$store.commit("alertMessage","Shield Has No Type, resetting to 'standard' shield.");
            }
            else
            {
                this.select_type(_shield_object.type);
            }

            for(let _property in _shield_object)
            {
                if(["weight","cost_multiplier","ablative","cost","surge_damage"].includes(_property))
                {
                    continue;
                }
                if(typeof _shield_object[_property]==="object" && !Array.isArray(_shield_object[_property]))
                {
                    for(let _sub_property in _shield_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],_shield_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(_shield_object[_property]))
                {
                    this.$set(this,_property,_shield_object[_property]);
                }
                else
                {
                    this.$set(this,_property,_shield_object[_property]);
                }
                if(this.component_name==this.shield_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                    this.shield_name;
                }
            }
            this.$nextTick(()=>{this.component_changed=false;});
        },
        output_shield_data:function()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="shield";
            return_data.component_name=this.component_name===null?this.shield_name:this.component_name;
            return_data.type=this.type;
            return_data.shield_class=JSON.parse(JSON.stringify(this.shield_class));
            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));
            
            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.ablative=this.is_ablative;
            return_data.weight=this.weight;

            switch(this.type.toLowerCase())
            {
                case "standard":
                    return_data.defense_ability=JSON.parse(JSON.stringify(this.defense_ability));
                    // eslint-disable-next-line
                case "active":
                    return_data.binder=JSON.parse(JSON.stringify(this.binder));
                    return_data.armor_type=JSON.parse(JSON.stringify(this.armor_type));
                    return_data.absorption=JSON.parse(JSON.stringify(this.absorption));
                    break;
                case "reactive":
                    return_data.reset_time=JSON.parse(JSON.stringify(this.reset_time));
                    return_data.turns_in_use=JSON.parse(JSON.stringify(this.turns_in_use));
                    return_data.weakness_array=JSON.parse(JSON.stringify(this.weakness_array));
                    return_data.surge_damage=this.surge_damage;
                    break;
            }
            this.$nextTick(()=>{this.component_changed=false;});
            return return_data;
        },
        componentSaveReset:function(_action)
        {
            switch(_action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_shield_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_shield_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.select_type("standard");
                    this.shield_class.code=1;
                    this.defense_ability=-2;
                    this.binder.stopping_power_modifier=0;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.shield_name;//must call to force recompute
                    this.$store.commit("saveComponent",null);
                    break;
            }
        }
    },
    computed:
    {
        is_ablative:function()
        {
            if(this.weakness_array===null)
            {
                this.shield_class.kills=null;
                return false;
            }
            let isAblative=this.weakness_array.some(function(_val)
            {
                if(_val.weakness.toLowerCase()=="ablative")
                {
                    return true;
                }
                return false;
            },this);

            return isAblative;
        },
        surge_damage:function()
        {
            if(this.weakness_array===null)
            {
                return false;
            }
            let isSurge=this.weakness_array.some(function(_val)
            {
                if(_val.weakness.toLowerCase()=="surge")
                {
                    return true;
                }
                return false;
            });
            return isSurge ? this.shield_class.stopping_power : null;
        },
        cost_multiplier:function()
        {
            let multiplier=1;
            multiplier*=this.cost_multipliers.defense_ability;
            multiplier*=this.cost_multipliers.binder;
            multiplier*=this.cost_multipliers.reset_time;
            multiplier*=this.cost_multipliers.turns_in_use;
            multiplier*=this.cost_multipliers.weakness;

            return this.round(multiplier,2);
        },
        space_cost:function()
        {
            if(this.type.toLowerCase()=="standard")
            {
                return 1 - this.efficiencies.space.modifier;
            }
            let base_cost=this.shield_class.cost * this.cost_multiplier;
            if(this.type.toLowerCase()=="active")
            {
                return this.round((base_cost/2)-this.efficiencies.space.modifier, 2);
            }
            else if(this.type.toLowerCase()=="reactive")
            {
                return this.round((base_cost - this.efficiencies.space.modifier), 2);
            }
            return undefined;
        },
        raw_space:function()
        {
            if(this.type.toLowerCase()=="standard")
            {
                return 1;
            }
            let base_cost=this.shield_class.cost * this.cost_multiplier;
            if(this.type.toLowerCase()=="active")
            {
                return this.round(base_cost/2, 2);
            }
            else if(this.type.toLowerCase()=="reactive")
            {
                return base_cost;
            }
            return undefined;
        },
        total_cost:function()
        {
            let subtotal_cost=this.shield_class.cost * this.cost_multiplier;
            subtotal_cost *= this.cost_multipliers.armor_type;
            subtotal_cost *= this.cost_multipliers.absorption;
            //special consideration for armor types and energy absorbing as they do not increase space, only cost
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        weight:function()
        {
            //must apply special consideration for armor types and RAM armor as they impact SP but not modify the Weight
            return this.weighted_stopping_power(this.shield_class.code)/2;//(this.calculate_stopping_power(this.shield_class.code) / 2);
        },
        shield_name:function()
        {
            let fullname="";
            if(this.type.toLowerCase()=="standard" && this.defense_ability!==null)
            {
                fullname=["Huge","Large","Medium","Small","Tiny"][this.defense_ability*-1];
            }
            fullname+=" "+this.shield_class.name;
            if(this.type.toLowerCase()=="standard" || this.type.toLowerCase()=="active")
            {
                this.binder;
                fullname+=this.type.toLowerCase()=="active"?" Active":"";
                fullname+=this.absorption!==null&&this.absorption.absorption>0?" Absorbing":"";
                fullname+=this.armor_type!==null&&this.armor_type.type.toLowerCase()!="standard" ? " "+this.armor_type.type : "";
                fullname+=this.binder!==null&&this.binder.space>0?" Binder":" Shield";
            }
            else if(this.type.toLowerCase()=="reactive")
            {
                fullname+=" Reactive";
                let exclusive_name="";
                let partialname=this.weakness_array.reduce(function(_name,_el)
                {
                    if(_el.exclusive)
                    {
                        exclusive_name=_el.monicker;
                    }
                    else
                    {
                        _name+=" "+_el.monicker;
                    }
                    return _name;
                },"");
                fullname+=" "+exclusive_name+" "+partialname;
            }
            fullname=fullname.replace(/\s+/g," ");
            return fullname;
        },
        newComponent()
        {
            let selectedComponent=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));
            
            if(typeof selectedComponent!=="undefined" && selectedComponent!==null)
            {
                if(selectedComponent.uuid!==this.uuid 
                    && selectedComponent.component_category=="equipment" 
                    && selectedComponent.component_type=="shield")
                {
                    this.ingest_shield_data(selectedComponent);
                }
                return false;
            }
            return true;
        }
    }
}
</script>