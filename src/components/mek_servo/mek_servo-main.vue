<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||servo_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <span class="mek-inline-flex-row">
            <mek-servo-type :servo-type="selected_servo_type" @update-servo-type="updateServoType"
                style="align-self:flex-start;"
            ></mek-servo-type>
            <!--- ADD STO_PO FOR SPACE CONVERTER --->
            <mek-servo-class @update-servo-class="updateServoClass"
                :servo-type="selected_servo_type.type" :servo-class="selected_servo_class"
            ></mek-servo-class>
            <mek-armor :armor="selected_armor"
                @update-armor="updateArmor"
            ></mek-armor>
            <span class="mek-inline-flex.col">
                <mek-armor-type :armor-type="selected_armor_type" v-if="selected_armor.cost!=0"
                    @update-armor-type="updateArmorType"
                ></mek-armor-type>
                <mek-energy-absorbing-armor :absorption="selected_absorption" v-if="selected_armor.cost!=0"
                    @update-absorption="updateAbsorption"
                ></mek-energy-absorbing-armor>
            </span>
        </span>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="5">
                <div slot="col1-row1">Torso Kills: {{selected_servo_class.kills}}</div>
                <div slot="col1-row2" v-if="selected_armor.cost!=0">Base Armor Stopping Power: {{round(selected_armor.stopping_power,2)}}
                    <br>Final Stopping Power: {{round(final_stopping_power,2)}}
                </div>
                <div slot="col1-row3" v-if="selected_armor.cost!=0">Armor Type: {{selected_armor_type.type}}</div>
                <div slot="col1-row4" v-if="selected_armor.cost!=0" style="padding-left:10px;">Damage Coefficient: {{selected_armor_type.damage_coefficient}}</div>
                <div slot="col1-row5" v-if="selected_absorption.cost!=1">Absorption: {{selected_absorption.absorption*100}}%</div>

                <div slot="col2-row1" v-if="is_arm | is_leg">Damage Bonus: {{selected_servo_class.damage_bonus}}</div>
                <div slot="col2-row2" v-if="is_arm">Throw Range: {{selected_servo_class.throw_range}}</div>

                <div slot="col3-row1">Base Space: {{selected_servo_class.space}}</div>
                <div slot="col3-row2">Available Space: {{available_space}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>
                
                <div slot="col4-row1">Base Cost: {{base_cost}}</div>
                <div slot="col4-row2">Multiplier: x{{cost_multiplier}}</div>
                <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import servo_classes_mixin from "../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";
import component_methods_mixin from "../../mixins/component_methods_mixin";
import component_computed_mixin from "../../mixins/component_computed_mixin";

export default
{
    name:"mek_servo",
    props:[],
    mixins:
        [
            servo_classes_mixin, 
            selected_item_mixin, 
            utility_mixin, 
            component_methods_mixin, 
            component_computed_mixin
        ],
    components:
    {
        "mek-servo-type":()=>import("./subcomponents/mek_servo-type.vue"),
        "mek-servo-class":()=>import("./subcomponents/mek_servo-class.vue"),

        "mek-component-name":()=>import("../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import("../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import("../universal/mek_component-stats.vue"),

        "mek-armor":()=>import("../universal/mek_armor.vue"),
        "mek-armor-type":()=>import("../universal/mek_armor-type.vue"),
        "mek-energy-absorbing-armor":()=>import("../universal/mek_energy-absorbing-armor.vue")
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="servo";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_servo_type={type:"Torso"};
        obj.selected_servo_class={code:1,name:"Superlight",space:2,cost:2,kills:2};

        obj.cost_multipliers={};

        obj.selected_armor={name:"None",cost:0,stopping_power:0};
        
        obj.selected_armor_type={type:"Standard",damage_coefficient:1,cost:1};
        obj.cost_multipliers.armor_type=1;

        obj.selected_absorption={absorption:0,cost:1,armor_penalty:1};
        obj.cost_multipliers.absorption=1;

        obj.extra_space={};
        obj.extra_space.space=0;
        obj.extra_space.stopping_power=0;

        return obj;
    },
    methods:
    {
        updateServoType(_servo_type)
        {   
            this.component_type=_servo_type.type;
            this.$set(this,"selected_servo_type",_servo_type)
        },
        updateServoClass(_servo_class)
        {
            this.$set(this,"selected_servo_class",_servo_class)
        },
        updateArmor(_armor)
        {
            this.$set(this,"selected_armor",_armor)
        },
        updateArmorType(_armor_type)
        {
            this.$set(this,"selected_armor_type",JSON.parse(JSON.stringify(_armor_type)));
            this.cost_multipliers.armor_type=this.selected_armor_type.cost;
        },
        updateAbsorption(_absorption)
        {
            this.$set(this,"selected_absorption",JSON.parse(JSON.stringify(_absorption)));
            this.cost_multipliers.absorption=this.selected_absorption.cost;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Torso bad, resetting to 'standard' shield.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.shield_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=false;});
        },
        output_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="servo";
            return_data.component_name=this.component_name===null?this.servo_name:this.component_name;
            return_data.selected_servo_type=JSON.parse(JSON.stringify(this.selected_servo_type));
            return_data.selected_servo_class=JSON.parse(JSON.stringify(this.selected_servo_class));
            return_data.selected_armor=JSON.parse(JSON.stringify(this.selected_armor));
            return_data.selected_armor_type=JSON.parse(JSON.stringify(this.selected_armor_type));
            return_data.selected_absorption=JSON.parse(JSON.stringify(this.selected_absorption));
            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            
            return_data.cost=this.cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;

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
                    this.$store.commit('saveComponent',this.output_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.selected_servo_type.type="Torso";
                    this.$set(this,"selected_servo_class",{code:1,name:"Superlight",space:2,cost:2,kills:2})
                    this.$set(this,"selected_armor",{name:"None",cost:0,stopping_power:0});
                    this.$set(this,"selected_armor_type",{type:"Standard",damage_coefficient:1,cost:1});
                    this.cost_multipliers.armor_type=1;
                    this.$set(this,"selected_absorption",{absorption:0,cost:1,armor_penalty:1});
                    this.cost_multipliers.absorption=1;
                    this.$store.commit("saveComponent",null);
                    break;
            }
        }
    },
    computed:
    {
        servo_name()
        {
            return this.selected_servo_type.type;
        },
        base_cost()
        {
            return this.selected_servo_class.cost + this.selected_armor.cost;
        },
        cost()
        {
            return this.selected_servo_class.cost + (this.selected_armor.cost*this.cost_multiplier);
        },
        available_space()
        {
            return this.selected_servo_class.space - this.extra_space.space;
        },
        damage_capacity()
        {
            let servo_kills=this.selected_servo_class.kills;
            let extra_space_sp_loss=this.extra_space.stopping_power;
            return servo_kills + this.final_stopping_power - extra_space_sp_loss;
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
        }
    }
};
</script>