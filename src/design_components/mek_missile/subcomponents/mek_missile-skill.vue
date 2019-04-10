<template>
    <mek-sub-component-table
        :items="skill_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{skill:'Skill',cost:'Cost'}" :show-headers="true"
        name="Smart Skill" flow="pkey-row" :format="{cost:'multiplier'}"
        @update-selected-data="select_skill"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin";

import {skill_data_table, cleaned_feature}
    from "../../../data_table_modules/mek_missile/mek_missile-skill-data-module.js";

export default
{
    name:"mek_missile_skill",
    props:["skill"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="skill";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_skill:function(_skill)
        {
            let data=JSON.parse(JSON.stringify(_skill));
            this.$emit("update-skill",data);
        },
    },
    computed:
    {
        skill_table()
        {
            return skill_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.skill);
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
                this.select_skill(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>