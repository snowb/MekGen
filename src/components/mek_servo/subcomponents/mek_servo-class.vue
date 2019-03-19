<template>
    <mek-sub-component-table
        :items="class_table" :headers="class_table_headers" :selectedKeys="selected_keys" :pkey="pkey"
        name="Servo Class" flow="pkey-col" :showHeaders="true"
        @update-selected-data="select_class"
    ></mek-sub-component-table>
</template>
<script>
import servo_classes_mixin from "../../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";
import alerts_mixin from "../../../mixins/alerts_mixin.js";

export default 
{
    name:"mek_servo_class",
    props:["servoClass","servoType","suppressAlerts"],
    mixins:[servo_classes_mixin, selected_item_mixin,utility_mixin,alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        obj.pkey="name";
        obj.alerts=[];
        obj.selected_class=null;
        return obj;
    },
    methods:
    {
        select_class:function(_selected_class)
        {
            let selected_class=JSON.parse(JSON.stringify(_selected_class));
            this.$set(this,"selected_class",selected_class);
            this.$emit("update-servo-class",selected_class);
        },
        get_feature(_pkey_value)
        {
            if(this.has_feature(_pkey_value))
            {
                let found_feature=null;
                this.class_table.some((_table_val)=>
                {
                    if(_table_val[this.pkey]==_pkey_value)
                    {
                        found_feature=_table_val;
                        return true;
                    }
                },this);
                return found_feature;
            }
        },
        has_feature(_pkey_value)
        {
            return this.class_table.some((_val)=>
            {
                return _val[this.pkey]==_pkey_value;
            },this);
        },
        class_validate(_data)
        {
            if(typeof _data==="undefined")
            {
                return false;
            }
            let valid=this.class_table.some((_val)=>
            {
                return _val.name==_data.name
                    && _val.id==_data.id
                    && _val.code==_data.code
                    && _val.cost==_data.cost
                    && _val.space==_data.space
                    && _val.damage_bonus==_data.damage_bonus
                    && _val.throw_range==_data.throw_range;
            });

            return valid;
        }
    },
    computed:
    {
        selected_keys()
        {
            let default_data=this.get_feature("Superlight");

            if(this.servoClass===undefined)
            {
                this.select_class(default_data);
            }
            let json_data=JSON.stringify(this.servoClass);
            if(!this.has_feature(this.servoClass[this.pkey]))
            {
                if(!this.suppressAlerts)
                {
                    this.addAlert("Mek_Servo-Class: "+json_data);
                    this.addAlert("**** Invalid data. Reseting to default. ****");
                    this.publishAlerts();
                }
                this.select_class(default_data);
                return [default_data[this.pkey]];
            }
            else if(!this.class_validate(this.servoClass))
            {
                if(!this.suppressAlerts)
                {
                    this.addAlert("Mek_Servo-Class: "+json_data);
                    this.addAlert("**** Invalid data. Reseting. ****");
                    this.publishAlerts();
                }               
                this.select_class(this.get_feature(this.servoClass[this.pkey]));
            }
            return [this.servoClass[this.pkey]];
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
        /*
            due to dependency on Servo Type, Class Table data must be computed locally
        */
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
