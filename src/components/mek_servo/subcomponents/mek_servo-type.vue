<template>
    <mek-sub-component-table
        :items="type_table" :headers="{type:''}" :pkey="pkey" :selected-keys="selected_keys"
        name="Type" flow="pkey-col" :show-headers="false"
        @update-selected-data="select_type"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";
import {servo_data_table, servo_type_validate, has_feature, get_feature} 
    from "../../data_table_modules/mek_servo/mek_servo-type-data-module.js";

export default 
{
    name:"mek_servo_type",
    props:["servoType"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        obj.pkey="type";
        return obj;
    },
    methods:
    {
        select_type:function(_selected_type)
        {
            this.$emit("update-servo-type",JSON.parse(JSON.stringify(_selected_type)));
        }
    },
    computed:
    {
        type_index()
        {
            let index=0;
            this.type_table.some((_elem,_index)=>
            {
                if(_elem.type.toLowerCase()==this.servoType.type.toLowerCase())
                {
                    index=_index;
                    return true;
                }
            },this);

            return [index];
        },
        selected_keys()
        {
            let default_data=get_feature(this.pkey,"Torso");
            if(this.servoType===undefined)
            {
                this.select_type(default_data);
            }

            let json_data=JSON.stringify(this.servoType);
            if(!has_feature(this.pkey,this.servoType[this.pkey]))
            {
                this.addAlert("Mek_Servo-Type: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_type(default_data);
                return [default_data[this.pkey]];
            }
            else if(!servo_type_validate(this.servoType))
            {
                this.addAlert("Mek_Servo-Type: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_type(get_feature(this.pkey,this.servoType[this.pkey]));
            }
            return [this.servoType[this.pkey]];
        },
        type_table()
        {
            return servo_data_table;
        }
    }
}
</script>
<style scoped>

</style>
