<template>
    <span class="mek-inline-flex-col">
        <mek-component-name :new-component="newComponent" :component-name="component_name||shield_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <div class="mek-flex-col">
                <mek-shield-type :type="type" @update-type="select_type"></mek-shield-type>
                <mek-shield-class :shield_class="shield_class" :type="type.name" :is_ablative="is_ablative" @update-class-code="select_class_code"></mek-shield-class>
            </div>
            <span class="mek-flex-col no-margin">
                <mek-shield-defense-ability
                    v-if="type.name.toLowerCase()=='standard'"
                    :defense_ability="defense_ability"
                    :cost="cost_multipliers.defense_ability" 
                    @update-defense-ability="select_da"></mek-shield-defense-ability>
                <mek-shield-binder
                    v-if="type.name.toLowerCase()=='standard' || type.name.toLowerCase()=='active'"
                    :binder="binder"
                    :base_stopping_power="shield_class.stopping_power"
                    @update-binder="select_binder"
                ></mek-shield-binder>
                <mek-shield-reset-time 
                    v-if="type.name.toLowerCase()=='reactive'"
                    :reset-time="reset_time"
                    @update-reset-time="select_reset"
                ></mek-shield-reset-time>
                <mek-shield-turns-in-use
                    v-if="type.name.toLowerCase()=='reactive'"
                    :turns-in-use="turns_in_use"
                    @update-turns-in-use="select_turns"
                ></mek-shield-turns-in-use>
            </span>
            <span class="mek-flex-col no-margin">
                <mek-armor-type v-if="type.name.toLowerCase()=='standard' || type.name.toLowerCase()=='active'"
                    :armor-type="armor_type"
                    @update-armor-type="select_armor_type"
                ></mek-armor-type>
                <mek-energy-absorbing-armor
                    v-if="type.name.toLowerCase()=='standard' || type.name.toLowerCase()=='active'"
                    :absorption="absorption"
                    @update-absorption="select_absorption"
                ></mek-energy-absorbing-armor>
            </span>
            <span class="mek-flex-col no-margin" v-if="type.name.toLowerCase()=='reactive'">
                <mek-shield-weakness
                    @update-weakness="select_weakness"
                    :weakness-array="weakness_array"
                ></mek-shield-weakness>
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
            <mek-component-stats :cols="4" :rows="5">
                <div slot="col1-row1" v-if="is_ablative">Kills: {{shield_class.kills}}</div>
                <div slot="col1-row1" v-else>Base Stopping Power: {{round(shield_class.stopping_power,2)}}
                    <br>Final Stopping Power: {{round(calculate_stopping_power(),2)}}
                </div>
                <div slot="col1-row2" v-if="armor_type.damage_coefficient!=1">Armor Type: {{armor_type.type}}</div>
                <div slot="col1-row3" v-if="armor_type.damage_coefficient!=1" style="padding-left:10px;">Damage Coefficient: {{armor_type.damage_coefficient}}</div>
                <div slot="col1-row4" v-if="absorption.absorption!=0">Absorption: {{absorption.absorption*100}}%</div>
                <div slot="col2-row1" v-if="type.name.toLowerCase()=='standard' || type.name.toLowerCase()=='active'">Binder Space: {{round(binder.space,3)}}</div>
                <div slot="col2-row1" v-if="type.name.toLowerCase()=='reactive'">Weakness(es):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>
                <div slot="col2-row2" v-if="type.name.toLowerCase()=='reactive'">Reset Time: {{reset_time.time}}</div>
                <div slot="col2-row3" v-if="type.name.toLowerCase()=='reactive'">Turns in Use: {{turns_in_use.time}}</div>
                <div slot="col2-row4" v-if="type.name.toLowerCase()=='reactive'">Surge Damage: {{surge_damage}}</div>
                <div slot="col3-row1">Base Space: {{raw_space}}</div>
                <div slot="col3-row2">Space: {{space_cost}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>
                <div slot="col4-row1">Base Cost: {{shield_class.cost}}</div>
                <div slot="col4-row1">Multiplier: x{{cost_multiplier}}</div>
                <div slot="col4-row1" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
//imports
import utility_mixin from "../../mixins/utility_mixin.js";
import component_methods_mixin from "../../mixins/component_methods_mixin";
import component_computed_mixin from "../../mixins/component_computed_mixin";

export default
{
    name:"mek_shield",
    mixins:
        [
            utility_mixin, 
            component_methods_mixin, 
            component_computed_mixin
        ],
    components:
    {
        "mek-shield-type":()=>import(/* webpackChunkName: "mek-shield-type" */"./subcomponents/mek_shield-type.vue"),
        "mek-shield-class":()=>import(/* webpackChunkName: "mek-shield-class" */"./subcomponents/mek_shield-class.vue"),
        "mek-shield-defense-ability":()=>import(/* webpackChunkName: "mek-shield-defense-ability" */"./subcomponents/mek_shield-defense-ability.vue"),
        "mek-shield-binder":()=>import(/* webpackChunkName: "mek-shield-binder" */"./subcomponents/mek_shield-binder.vue"),
        "mek-shield-reset-time":()=>import(/* webpackChunkName: "mek-shield-reset-time" */"./subcomponents/mek_shield-reset-time.vue"),
        "mek-shield-turns-in-use":()=>import(/* webpackChunkName: "mek-shield-turns-in-use" */"./subcomponents/mek_shield-turns-in-use.vue"),
        "mek-shield-weakness":()=>import(/* webpackChunkName: "mek-shield-weakness" */"./subcomponents/mek_shield-weakness.vue"),
        
        "mek-space-efficiency":()=>import(/* webpackChunkName: "mek-space-efficiency" */"../universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import(/* webpackChunkName: "mek_component-name" */"../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek_save-reset-component" */"../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"../universal/mek_component-stats.vue"),

        "mek-armor-type":()=>import("../universal/mek_armor-type.vue"),
        "mek-energy-absorbing-armor":()=>import("../universal/mek_energy-absorbing-armor.vue")
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.type={name:"Standard"};
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="shield";
        obj.original_component=null;
        obj.component_changed=true;

        obj.shield_class={code:1,stopping_power:5,kills:25,cost:5,id:"SL",name:"Superlight"};

        obj.defense_ability={da:-2,cost:1};
        obj.cost_multipliers={};
        obj.cost_multipliers.defense_ability=1;
        
        obj.binder={cost:1,space:0,stopping_power_modifier:0};
        obj.cost_multipliers.binder=1;

        obj.reset_time={time:2,cost:1};
        obj.cost_multipliers.reset_time=1;
        
        obj.turns_in_use={time:"__INFINITY__",cost:1};
        obj.cost_multipliers.turns_in_use=1;

        obj.weakness_array=[{weakness:"All",monicker:"Shield",cost:1,exclusive:false}];
        obj.cost_multipliers.weakness=1;

        obj.efficiencies={};
        obj.efficiencies.space={modifier:0,cost:0};

        obj.armor_type={type:"Standard",damage_coefficient:1,cost:1};
        obj.cost_multipliers.armor_type=1;

        obj.absorption={absorption:0,cost:1,armor_penalty:0};
        obj.cost_multipliers.absorption=1;

        return obj;
    },
    methods:
    {
        select_type:function(_type)
        {
            if(this.type.name.toLowerCase()==_type.name.toLowerCase())
            {
                return;
            }
            this.component_changed=true;
            this.$set(this,"type",_type);
            let type=_type.name.toLowerCase();
            if(type==="reactive")
            {
                this.shield_class.cost=this.shield_class.stopping_power*3;

                this.$set(this,"defense_ability",{da:-2,cost:1});
                this.cost_multipliers.defense_ability=1;

                this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0});
                this.cost_multipliers.binder=1;

                this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1});
                this.cost_multipliers.armor_type=1;
                this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:0});
                this.cost_multipliers.absorption=1;
            }
            else if(type==="active")
            {
                this.shield_class.cost=this.shield_class.stopping_power*1.5;

                this.$set(this,"defense_ability",{da:-2,cost:1});
                this.cost_multipliers.defense_ability=1;
                
                this.$set(this,"reset_time",{cost:1,time:2});
                this.cost_multipliers.reset_time=1;

                this.$set(this,"turns_in_use",{time:"__INFINITY__",cost:1});
                this.cost_multipliers.turns_in_use=1;

                this.$set(this,"weakness_array",[{weakness:"All",monicker:"Shield",cost:1,exclusive:false}]);
                this.cost_multipliers.weakness=1;
            }
            else if(type=="standard")
            {
                this.shield_class.cost=this.shield_class.stopping_power;

                this.$set(this,"reset_time",{cost:1,time:2});
                this.cost_multipliers.reset_time=1;

                this.$set(this,"turns_in_use",{time:"__INFINITY__",cost:1});
                this.cost_multipliers.turns_in_use=1;

                this.$set(this,"weakness_array",[{weakness:"All",monicker:"Shield",cost:1,exclusive:false}]);
                this.cost_multipliers.weakness=1;
            }
            this.component_changed=true;
        },
        select_class_code:function(_shield_class_obj)
        {
            this.$set(this,"shield_class",_shield_class_obj);
            this.component_changed=true;
        },
        select_da:function(_da_obj)
        {
            this.$set(this,"defense_ability",_da_obj);
            this.cost_multipliers.defense_ability=_da_obj.cost;
            this.component_changed=true;
        },
        select_binder:function(_binder_obj)
        {
            this.$set(this,"binder",_binder_obj);
            this.cost_multipliers.binder=_binder_obj.cost;
            this.shield_name;
            this.component_changed=true;
        },
        select_reset:function(_reset_obj)
        {
            this.$set(this,"reset_time",_reset_obj);
            this.cost_multipliers.reset_time=_reset_obj.cost;
            this.component_changed=true;
        },
        select_turns:function(_turns_obj)
        {
            this.$set(this,"turns_in_use",_turns_obj);
            this.turns_in_use.time=this.turns_in_use.time===null?Infinity:this.turns_in_use.time;
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
            let sp_modifier=this.absorption!=0 ? this.absorption.armor_penalty + this.binder.stopping_power_modifier : this.binder.stopping_power_modifier;
            return this.shield_class.stopping_power - (this.shield_class.stopping_power * sp_modifier);
        },
        weighted_stopping_power()
        {
            return this.shield_class.stopping_power - (this.shield_class.stopping_power * this.binder.stopping_power_modifier);
        },
        updateEfficiencies:function(_data)
        {
            this.$set(this.efficiencies,"space",_data);
            this.component_changed=true
        },
        ingest_data:function(_data_object)
        {
            let alertMessage="Shield Has No Type, resetting to 'standard' shield.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.shield_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
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
            return_data.type=JSON.parse(JSON.stringify(this.type));
            return_data.shield_class=JSON.parse(JSON.stringify(this.shield_class));
            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));
            
            return_data.cost=this.cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.is_ablative=this.is_ablative;
            return_data.weight=this.weight;

            switch(this.type.name.toLowerCase())
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
                    return_data.turns_in_use.time=return_data.turns_in_use.time===null?"Infinity":return_data.turns_in_use.time;
                    return_data.weakness_array=JSON.parse(JSON.stringify(this.weakness_array));
                    return_data.surge_damage=this.surge_damage;
                    break;
            }
            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return return_data;
        },
        componentSaveReset:function(_action)
        {
            let action=_action=="reset" && this.original_component==null?"clear":_action;
            switch(action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_shield_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.select_type({name:"Standard"});
                    this.$set(this,"shield_class",{code:1,stopping_power:5,kills:25,cost:5,id:"SL",name:"Superlight"});
                    this.$set(this,"defense_ability",{da:-2,cost:1});
                    this.cost_multipliers.defense_ability=1;
                    this.$set(this,"binder",{cost:1,space:0,stopping_power_modifier:0});
                    this.cost_multipliers.binder=1;
                    this.efficiencies.space.modifier=0;
                    this.$set(this,"armor_type",{type:"Standard",damage_coefficient:1,cost:1});
                    this.cost_multipliers.armor_type=1;
                    this.$set(this,"absorption",{absorption:0,cost:1,armor_penalty:0});
                    this.cost_multipliers.absorption=1;
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
            if(this.weakness_array===null || this.weakness_array.length==0)
            {
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
            if(this.weakness_array===null || this.weakness_array.length==0)
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
        raw_space:function()
        {
            if(this.type.name.toLowerCase()=="standard")
            {
                return 1;
            }
            let base_cost=this.shield_class.cost * this.cost_multiplier;
            if(this.type.name.toLowerCase()=="active")
            {
                return this.round(base_cost/2, 2);
            }
            else if(this.type.name.toLowerCase()=="reactive")
            {
                return this.round(base_cost,2);
            }
            return undefined;
        },
        cost:function()
        {
            let subtotal_cost=this.shield_class.cost * this.cost_multiplier;
            subtotal_cost *= this.cost_multipliers.armor_type;
            subtotal_cost *= this.cost_multipliers.absorption;
            //special consideration for armor types and energy absorbing as they do not increase space, only cost
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        damage_capacity()
        {
            return this.round(this.weighted_stopping_power(this.shield_class.code)/2,2);
        },
        shield_name:function()
        {
            let fullname="";
            if(this.type.name.toLowerCase()=="standard")
            {
                fullname=["Huge","Large","Medium","Small","Tiny"][this.defense_ability.da*-1];
            }
            fullname+=" "+this.shield_class.name;
            if(this.type.name.toLowerCase()=="standard" || this.type.name.toLowerCase()=="active")
            {
                this.binder;
                fullname+=this.type.name.toLowerCase()=="active"?" Active":"";
                fullname+=this.absorption!==null&&this.absorption.absorption>0?" Absorbing":"";
                fullname+=this.armor_type!==null&&this.armor_type.type.toLowerCase()!="standard" ? " "+this.armor_type.type : "";
                fullname+=this.binder!==null&&this.binder.space>0?" Binder":" Shield";
            }
            else if(this.type.name.toLowerCase()=="reactive")
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
    }
}
</script>