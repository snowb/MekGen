<template>
    <mek-sub-component-table
        :items="class_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="headers"
        name="Class" flow="pkey-col" :show-headers="true"
        @update-selected-data="select_class"
    ></mek-sub-component-table>
</template>
<script>
import servo_classes_mixin from "@/mixins/servo_classes_mixin.js";
import alerts_mixin from "@/mixins/alerts_mixin.js";
import { class_data_table, cleaned_feature, create_class_data_table } 
    from "@/data_table_modules/mek_shield/mek_shield-class-data-module";

export default 
{
    name:"mek_shield_class",
    props:["type","shield_class","is_ablative"],
    mixins:[servo_classes_mixin,alerts_mixin],
    components:
    {
         "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_class:function(_class_data)
        {
            let data=JSON.parse(JSON.stringify(_class_data));
            this.$emit("update-class-code",data);
        }
    },
    computed:
    {
        class_table()
        {
            create_class_data_table(this.type);
            return class_data_table;
        },
        headers()
        {
            if(this.is_ablative)
            {
                return {name:'Name',kills:'Kills',cost:'Cost'};
            }
            return {name:'Name',stopping_power:'SP',cost:'Cost'};
        },
        pkey()
        {
            return this.is_ablative ? "kills" : "stopping_power";
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.shield_class);
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
        }
    },
    watch:
    {
        "type":function(_newval,_oldval)
        {//must track changes in type to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>
<style scoped>
#no-pad
{
    padding-right:0px;
}
</style>
