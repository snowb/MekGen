<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||servo_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <span class="mek-inline-flex-row">
            <span class="mek-inline-flex-col">
                <mek-servo-type :servo-type="selected_servo_type" 
                    @update-servo-type="updateServoType" @alert-generated="handleAlert"
                    style="align-self:flex-start;"
                ></mek-servo-type>
                <mek-servo-kills-space-trade style="align-self:baseline;"
                    :base_kills="selected_servo_class.kills" :kills_modifier="kills_space_trade.kills_modifier" 
                    :space_modifier="kills_space_trade.space_modifier" :base_space="selected_servo_class.space"
                    @update-extra-space="updateExtraSpace" @alert-generated="handleAlert"
                ></mek-servo-kills-space-trade>
                <!--- ADD KILLS FOR SPACE CONVERTER --->
                <!--- add reinforcing component --->
            </span>
            <mek-servo-class @update-servo-class="updateServoClass" @alert-generated="handleAlert"
                :servo-type="selected_servo_type.type" :servo-class="selected_servo_class"
            ></mek-servo-class>
            <mek-armor :armor="selected_armor"  :max-armor="selected_servo_class.code+2"
                @update-armor="updateArmor" @alert-generated="handleAlert"
            ></mek-armor>
            <span class="mek-inline-flex-col">
                <mek-armor-type :armor-type="selected_armor_type" v-if="selected_armor.cost!=0"
                    @update-armor-type="updateArmorType" @alert-generated="handleAlert"
                ></mek-armor-type>
                <mek-armor-ram :absorption="selected_absorption" v-if="selected_armor.cost!=0"
                    @update-absorption="updateAbsorption" @alert-generated="handleAlert"
                ></mek-armor-ram>
            </span>
        </span>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="6">
                <div slot="col1-row1">Base Kills: {{selected_servo_class.kills}}</div>
                <div slot="col1-row2">Total Kills: {{total_kills}}</div>
                <div slot="col1-row3" v-if="selected_armor.cost!=0">Base Armor Stopping Power: {{round(selected_armor.stopping_power,2)}}
                    <br>Final Stopping Power: {{round(final_stopping_power,2)}}
                </div>
                <div slot="col1-row4" v-if="selected_armor.cost!=0">Armor Type: {{selected_armor_type.type}}</div>
                <div slot="col1-row5" v-if="selected_armor.cost!=0" style="padding-left:10px;">Damage Coefficient: {{selected_armor_type.damage_coefficient}}</div>
                <div slot="col1-row6" v-if="selected_absorption.cost!=1">Absorption: {{selected_absorption.absorption*100}}%</div>

                <div slot="col2-row1" v-if="is_arm | is_leg">Damage Bonus: {{selected_servo_class.damage_bonus}}</div>
                <div slot="col2-row2" v-if="is_arm">Throw Range: {{selected_servo_class.throw_range}}</div>

                <div slot="col3-row1">Base Space: {{selected_servo_class.space}}</div>
                <div slot="col3-row2">Available Space: {{available_space}}</div>
                <div slot="col3-row3">Weight: {{weight}} tons</div>
                
                <div slot="col4-row1">Base Cost: {{base_cost}}</div>
                <div slot="col4-row2">Multiplier: x{{armor_cost_multiplier}}</div>
                <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset" :active-buttons="activeButtons"
            ></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin.js";
import component_methods_mixin from "@/mixins/component_methods_mixin";
import component_computed_mixin from "@/mixins/component_computed_mixin";

export default
{
    name:"mek_servo",
    props:[],
    mixins:
        [
            utility_mixin, 
            component_methods_mixin, 
            component_computed_mixin
        ],
    components:
    {
        "mek-servo-type":()=>import(/* webpackChunkName: "mek_servo-type" */"./subcomponents/mek_servo-type.vue"),
        "mek-servo-class":()=>import(/* webpackChunkName: "mek_servo-class" */"./subcomponents/mek_servo-class.vue"),
        "mek-servo-kills-space-trade":()=>import(/* webpackChunkName: "mek_servo-kills-space-trade" */"./subcomponents/mek_servo-kills-space-trade.vue"),

        "mek-component-name":()=>import(/* webpackChunkName: "mek-component-name" */"@/app_components/universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek-save-reset-component" */"@/app_components/universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"@/design_components/universal/mek_component-stats.vue"),

        "mek-armor":()=>import(/* webpackChunkName: "mek_armor" */"@/design_components/universal/mek_armor.vue"),
        "mek-armor-type":()=>import(/* webpackChunkName: "mek_armor-type" */"@/design_components/universal/mek_armor-type.vue"),
        "mek-armor-ram":()=>import(/* webpackChunkName: "mek_armor-RAM" */"@/design_components/universal/mek_armor-RAM.vue"),
        
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.custom_component_name=false;
        obj.component_category="equipment";
        obj.component_type="servo";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_servo_type={type:"Torso"};
        obj.selected_servo_class={code:1,name:"Superlight",space:2,cost:2,kills:2,id:"SL"};

        obj.cost_multipliers={};

        obj.selected_armor={name:"None",cost:0,stopping_power:0,code:0};
        obj.cost_multipliers.armor={};
        
        obj.selected_armor_type={type:"Standard",damage_coefficient:1,cost:1};
        obj.cost_multipliers.armor.selected_armor_type=1;

        obj.selected_absorption={absorption:0,cost:1,armor_penalty:0};
        obj.cost_multipliers.armor.selected_absorption=1;

        obj.kills_space_trade={};
        obj.kills_space_trade.space_modifier=0;
        obj.kills_space_trade.kills_modifier=0;
        obj.kills_space_trade.space=2;
        obj.kills_space_trade.kills=2;
        obj.kills_space_trade.cost=0;

        obj.hasAlert=false;

        return obj;
    },
    methods:
    {
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.custom_component_name=true;
            this.component_changed=true;
        },
        updateServoType(_servo_type)
        {   
            this.component_type=_servo_type.type;
            this.$set(this,"selected_servo_type",_servo_type);
            this.component_changed=true;
        },
        updateServoClass(_servo_class)
        {
            this.$set(this,"selected_servo_class",_servo_class);
            this.component_changed=true;
        },
        updateArmor(_armor)
        {
            this.$set(this,"selected_armor",_armor);
            this.component_changed=true;
            if(_armor.stopping_power==0)
            {//reset RAM and Armor type on selecting No-Armor
                this.updateAbsorption({absorption:0,cost:1,armor_penalty:0});
                this.updateArmorType({type:"Standard",damage_coefficient:1,cost:1});
            }
        },
        updateArmorType(_armor_type)
        {
            this.$set(this,"selected_armor_type",JSON.parse(JSON.stringify(_armor_type)));
            this.cost_multipliers.armor.selected_armor_type=this.selected_armor_type.cost;
            this.component_changed=true;
        },
        updateAbsorption(_absorption)
        {
            this.$set(this,"selected_absorption",JSON.parse(JSON.stringify(_absorption)));
            this.cost_multipliers.armor.selected_absorption=this.selected_absorption.cost;
            this.component_changed=true;
        },
        updateExtraSpace(_kills_space_trade)
        {
            this.kills_space_trade.space_modifier=_kills_space_trade.space_modifier;
            this.kills_space_trade.kills_modifier=_kills_space_trade.kills_modifier;
            this.kills_space_trade.space=_kills_space_trade.space;
            this.kills_space_trade.kills=_kills_space_trade.kills;
            this.kills_space_trade.cost=_kills_space_trade.cost;
            this.component_changed=true;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Torso bad, resetting to 'standard' shield.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(!this.custom_component_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=this.hasAlert});
        },
        output_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="servo";
            return_data.component_name=this.component_name===null?this.servo_name:this.component_name;
            return_data.custom_component_name=this.custom_component_name;

            return_data.selected_servo_type=this.selected_servo_type;
            return_data.selected_servo_class=this.selected_servo_class;
            return_data.selected_armor=this.selected_armor;
            return_data.selected_armor_type=this.selected_armor_type;
            return_data.selected_absorption=this.selected_absorption;
            return_data.cost_multipliers=this.cost_multipliers;
            return_data.kills_space_trade=this.kills_space_trade;
            
            return_data.cost=this.cost;
            return_data.armor_cost_multiplier=this.armor_cost_multiplier;
            return_data.weight=this.weight;
            return_data.total_kills=this.total_kills;
            return_data.available_space=this.available_space;

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return JSON.parse(this.original_component);
        },
        componentSaveReset:function(_action)
        {
            let action=_action=="reset" && this.original_component==null?"new":_action;
            switch(action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_data(JSON.parse(this.original_component));
                        break;
                    }
                    // eslint-disable-next-line
                case "delete":
                    if(this.uuid)
                    {
                        this.$store.commit("deleteComponent",
                            {
                                category:this.component_category,
                                type:this.component_type,
                                uuid:this.uuid
                            });
                        this.uuid=null;
                        this.$emit("updateMSMKey");
                    }
                    // eslint-disable-next-line
                case "new":
                    this.uuid=null;
                    this.$set(this,"selected_servo_type",{type:"Torso"});
                    this.$set(this,"selected_servo_class",{code:1,name:"Superlight",space:2,cost:2,kills:2,id:"SL"})
                    this.$set(this,"selected_armor",{name:"None",cost:0,stopping_power:0,code:0});
                    this.$set(this,"selected_armor_type",{type:"Standard",damage_coefficient:1,cost:1});
                    this.cost_multipliers.armor.armor_type=1;
                    this.$set(this,"selected_absorption",{absorption:0,cost:1,armor_penalty:0});
                    this.cost_multipliers.armor.absorption=1;
                    this.$set(this,"kills_space_trade",{space_modifier:0,kills_modifier:0,cost:0});
                    this.component_name=null;
                    this.$store.commit("saveComponent",null);
                    break;
            }
        },
        handleAlert(_alert_status)
        {
            this.hasAlert=_alert_status;
        }
    },
    computed:
    {
        servo_name()
        {
            let type=this.selected_servo_type.type;
            let servo_class=this.selected_servo_class.name;
            let reinforced=this.kills_space_trade.kills_modifier>0 ? " Reinforced " : "";
            let armor_type=this.selected_armor_type.type;
            let armor=this.selected_armor.cost>0 && this.selected_armor_type.cost==1 ? " Armored " :
                        this.selected_armor.cost>0 && this.selected_armor_type.cost!=1 ? " "+armor_type+"-Armored " :
                        "";
            let absorbing=this.selected_absorption.cost>1 ? " Absorbing ":"";
            let additional=reinforced!=""||this.selected_armor.cost>0 ? " - " : "";
            let name=type+" "+servo_class+" Servo"+additional+reinforced+absorbing+armor;
            name=name.trim();
            name=name.replace(/\s+/gi," ");
            return name;
        },
        base_cost()
        {
            return this.selected_servo_class.cost + this.selected_armor.cost + this.kills_space_trade.cost;
        },
        cost()
        {
            let cost=this.selected_servo_class.cost + (this.selected_armor.cost*this.armor_cost_multiplier) + this.kills_space_trade.cost;
            return this.round(cost,2);
        }
        ,
        available_space()
        {
            return this.selected_servo_class.space + this.kills_space_trade.space_modifier;
        },
        damage_capacity()
        {
            let servo_kills=this.selected_servo_class.kills;
            let kills_space_trade_sp_loss=this.kills_space_trade.kills_modifier;
            return servo_kills + this.final_stopping_power + kills_space_trade_sp_loss;
        },
        total_kills()
        {
            return this.selected_servo_class.kills + this.kills_space_trade.kills_modifier;
        },
        weight()
        {
            return this.round(this.damage_capacity/2,2);
        },
        final_stopping_power()
        {
            return this.selected_armor.stopping_power-(this.selected_armor.stopping_power*this.selected_absorption.armor_penalty);
        },
        is_arm()
        {
            return this.selected_servo_type.type.toLowerCase()=="arm";
        },
        is_leg()
        {
            return this.selected_servo_type.type.toLowerCase()=="leg";
        },
        armor_cost_multiplier()
        {
            let cost_multiplier=1;
            for(let multi in this.cost_multipliers.armor)
            {
                cost_multiplier*=this.cost_multipliers.armor[multi];
            }
            return this.round(cost_multiplier,2);
        },
        activeButtons()
        {
            return "save,reset,new"+(this.uuid!==null?",delete":"");
        }
    }
};
</script>