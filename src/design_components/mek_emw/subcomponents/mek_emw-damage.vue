<template>
    <mek-sub-component-table
        :items="damage_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{damage:'Damage',cost:'Cost'}"
        name="Damage" flow="pkey-row" :show-headers="true"
        @update-selected-data="select_damage"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import { damage_data_table, cleaned_feature, create_damage_data_table } 
    from "@/data_table_modules/mek_emw/mek_emw-damage-data-module";

export default
{
    name:"mek_emw_damage",
    props:["damage","nvBeamShield"],
    mixins:[alerts_mixin],
    components:
    {
         "mek-sub-component-table":()=>import(/* webpackChunkName: "mek_sub-component-table" */"@/app_components/universal/mek_sub-component-table.vue"),
    },
    data:function()
    {
        let obj={};
        obj.pkey="cost";
        obj.alerts=[];
        obj.suppressAlerts=false;
        obj.updateDamge=false;
        return obj;
    },
    methods:
    {
        select_damage:function(_damage)
        {
            let data=JSON.parse(JSON.stringify(_damage));
            this.$emit("update-damage",data);
        },
    },
    computed:
    {
        damage_table()
        {
            create_damage_data_table(this.nvBeamShield);
            return damage_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.damage);
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            if(cleaned_data.update || this.updateDamge)
            {
                this.$emit("alert-generated",true);
                this.select_damage(cleaned_data.data);
            }
            this.updateDamge=false;
            return cleaned_data.key_list;
        }
    },
    watch:
    {
        "nvBeamShield":function(_newval,_oldval)
        {//must track changes in blastRadius to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
                this.updateDamge=true;
            }
        }
    }
}
</script>
<style scoped>
th
{
    padding-left:10px;
    padding-right:10px;
}
#left
{
    padding-left: 0px;
}
#right
{
    padding-right: 0px;
}
</style>