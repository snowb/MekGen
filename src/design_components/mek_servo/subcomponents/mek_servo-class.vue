<template>
    <mek-sub-component-table
        :items="class_table" :headers="class_table_headers" :selected-keys="selected_keys" :pkey="pkey"
        name="Servo Class" flow="pkey-col" :show-headers="true"
        @update-selected-data="select_class"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin.js";

import {create_class_data_table, class_data_table, cleaned_feature} 
    from "@/data_table_modules/mek_servo/mek_servo-class-data-module.js";

export default 
{
    name:"mek_servo_class",
    props:["servoClass","servoType"],
    mixins:[alerts_mixin],
    components:
    {
         "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    },
    data:()=>
    {
        let obj={};
        obj.pkey="name";
        obj.alerts=[];
        obj.selected_class=null;
        obj.suppressAlerts=false;
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
    },
    computed:
    {
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.servoClass);
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            if(cleaned_data.update)
            {
                this.$emit("alert-generated",true);
                this.select_class(cleaned_data.data);
            }
            return cleaned_data.key_list;
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
            create_class_data_table(this.servoType);
            return class_data_table;
        }
    },
    watch:
    {
        "servoType":function(_newval,_oldval)
        {//must track changes in servoType to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>
<style scoped>

</style>
