<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||servo_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <span class="mek-inline-flex-row" style="width:100%;">
            <mek-servo-type :servo-type="selected_servo_type" @update-servo-type="updateServoType"
            ></mek-servo-type>
            <mek-servo-class @update-servo-class="updateServoClass"
                :servo-type="selected_servo_type.type" :servo-class="selected_servo_class"
            ></mek-servo-class>
            <mek-armor :armor="selected_armor"
                @update-armor="updateArmor"
            ></mek-armor>
            <mek-armor-type :armor-type="selected_armor_type"
                @update-armor-type="updateArmorType"
            ></mek-armor-type>
            <mek-energy-absorbing-armor :absorption="selected_absorption"
                @update-absorption="updateAbsorption"
            ></mek-energy-absorbing-armor>
        </span>
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

        "mek-space-efficiency":()=>import("../universal/mek-space-efficiency.vue"),
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
        obj.type="standard";
        obj.component_name=null;
        obj.component_category="servo";
        obj.component_type="";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_servo_type={type:"Torso"};
        obj.selected_servo_class={code:1};

        obj.cost_multipliers={};

        obj.selected_armor={cost:1};
        
        obj.selected_armor_type={type:"Standard",damage_coefficient:1,cost:1};
        obj.cost_multipliers.armor_type=1;

        obj.selected_absorption={absorption:0,cost:1,armor_penalty:1};
        obj.cost_multipliers.absorption=1;

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
    },
    computed:
    {
        servo_name()
        {
            return this.selected_servo_type.type;
        }
    }
};
</script>