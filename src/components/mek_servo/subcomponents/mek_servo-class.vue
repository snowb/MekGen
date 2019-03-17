<template>
    <mek-sub-component-table
        :items="class_table" :headers="class_table_headers"
        name="Servo Class" flow="col" :showHeaders="true"
        :selectedIndices="class_index"
        @update-selected-indices="select_class"
    ></mek-sub-component-table>
</template>
<script>
import servo_classes_mixin from "../../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name:"mek_servo_class",
    props:["servoClass","servoType"],
    mixins:[servo_classes_mixin, selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        return obj;
    },
    methods:
    {
        select_class:function(_selected_class_index)
        {
            this.$emit("update-servo-class",JSON.parse(JSON.stringify(this.class_table[_selected_class_index])));
        }
    },
    computed:
    {
        class_index()
        {
            let index=0;

            this.class_table.some((_elem,_index)=>
            {
                if(_elem.code==this.servoClass.code)
                {
                    index=_index;
                    return true;
                }
            },this);

            let matchingDamageBonus=this.class_table[index].damage_bonus===undefined && this.servoClass.damage_bonus===undefined
                                    ? true
                                    : this.class_table[index].damage_bonus==this.servoClass.damage_bonus;
            let matchingThrow=this.class_table[index].throw_range===undefined && this.servoClass.throw_range===undefined
                                    ? true
                                    : this.class_table[index].throw_range==this.servoClass.throw_range;

            switch(true)
            {
                case this.servoClass.name!=this.class_table[index].name:
                case this.servoClass.cost!=this.class_table[index].cost:
                case this.servoClass.space!=this.class_table[index].space:
                case this.servoClass.kills!=this.class_table[index].kills:
                case !matchingDamageBonus:
                case !matchingThrow:
                    this.select_class(index);
            }

            return [index];
        },
        class_table_headers()
        {
            let isArm=this.servoType.toLowerCase()=="arm";
            let isLeg=this.servoType.toLowerCase()=="leg";

            let obj={};
            obj.name='Name';
            obj.cost='Cost';
            obj.space='Space';
            obj.kills='Kills';

            if(isArm || isLeg)
            {
                obj.damage_bonus="DMG+";
                if(isArm)
                {
                    obj.throw_range="Throw";
                }
            }
            return obj;
        },
        class_table()
        {
            let type_cost_multiplier=1;
            let type_space_multiplier=1;
            let type_kills_multiplier=1;
            let type_cost_modifier=0;
            let type_space_modifier=0;
            let type_kills_modifier=0;
            let isArm=false;
            let isLeg=false;

            switch(this.servoType.toLowerCase())
            {
                case "torso":
                    type_cost_multiplier=2;
                    type_space_multiplier=2;
                    type_kills_multiplier=2;
                    break;
                case "arm":
                    isArm=true;
                    break;
                case "leg":
                    isLeg=true;
                    break;
                case "pod":
                    type_space_multiplier=2;
                    type_kills_multiplier=0;
                    break;
                //case "head": //head, wing, tail are all just 1s
                //case "wing":
                //case "tail":
                //    break;
            }
            let new_class_table = this.servo_classes.map((_val)=>
            {
                let obj={};
                obj.code=_val.code;
                obj.id=_val.id; 
                obj.name=_val.name; 
                obj.cost=(_val.code*type_cost_multiplier)+type_cost_modifier;
                obj.space=(_val.code*type_space_multiplier)+type_space_modifier;
                obj.kills=(_val.code*type_kills_multiplier)+type_kills_modifier;
                if(isArm || isLeg)
                {
                    obj.damage_bonus=isLeg ? Math.ceil(obj.code/2)-1 : Math.ceil(obj.code/3)-1;
                    if(isArm)
                    {
                        obj.throw_range=Math.floor(obj.code/2)+1;
                    }
                }
                return obj;
            });
            return new_class_table;
        }
    }
}
</script>
<style scoped>

</style>
