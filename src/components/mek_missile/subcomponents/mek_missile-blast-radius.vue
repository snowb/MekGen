<template>
    <mek-sub-component-table
        :items="blast_radius_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{blast_radius:'Radius (hex)',cost:'Cost'}" :show-headers="true"
        name="Blast Radius" flow="pkey-col" :format="{cost:'multiplier'}"
        @update-selected-data="select_blast_radius"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "../../../mixins/alerts_mixin";

import {blast_radius_data_table, cleaned_feature}
    from "../../data_table_modules/mek_missile/mek_missile-blast-radius-data-module.js";

export default
{
    name:"mek_missile_blast_radius",
    props:["blast_radius"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="blast_radius";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_blast_radius:function(_blast_radius)
        {
            let data=JSON.parse(JSON.stringify(_blast_radius));
            this.$emit("update-accuracy",data);
        },
    },
    computed:
    {
        blast_radius_table()
        {
            return blast_radius_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.blast_radius);
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
                this.select_blast_radius(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>