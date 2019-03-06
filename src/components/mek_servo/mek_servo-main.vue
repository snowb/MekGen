<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <span class="mek-inline-flex-row" style="width:100%;">
            <mek-servo-type :servo-type="selected_servo_type" @update-servo-type="updateServoType"
            ></mek-servo-type>
            <mek-servo-class @update-servo-class="updateServoClass"
                :servo-type="selected_servo_type.type" :servo-class="selected_servo_class"
            ></mek-servo-class>
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
        }
    }
};
</script>