<template>
    <mek-sub-component-table
        :items="filteredAmmoArray" :selected-keys="selected_keys" :pkey="pkey"
        :headers="{type:'Type',cost:'Cost',effect:'Effect'}" :show-headers="true"
        :format="{cost:'multiplier'}" name="Ammo Table" flow="pkey-col"
        @update-selected-data="select_ammo"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import {feature_data_table, cleaned_feature, filter_data_table} 
    from "@/data_table_modules/mek_magazine/mek_ammo-list-data-module.js";

export default
{
    name:"mek_magazine_ammo_list",
    props:["ammoArray","hasBlast"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/app_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.selected_ammo_array=[];
        obj.pkey="type";
        obj.alerts=[];
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_ammo:function(_selected_ammo)
        {//refactor to external ammo array cleaner
            this.suppressAlerts=true;//suppress alerts, for exclusive switching
            let new_selected_ammo_array=this.toggleFeature(this.selected_ammo_array,_selected_ammo);
            let cleaned_data=cleaned_feature(new_selected_ammo_array, this.pkey);
            new_selected_ammo_array=cleaned_data.cleaned_array;
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            this.$set(this,"selected_ammo_array",new_selected_ammo_array);
            this.$emit("update-ammo",new_selected_ammo_array);
            this.suppressAlerts=false;
        },
        toggleFeature(_feature_array,_feature)
        {
            let feature_array=JSON.parse(JSON.stringify(_feature_array));
            
            let remove_feature=feature_array.some((_val)=>
            {//if _feature matches already existing feature, flag for deletion
                return _val[this.pkey]==_feature[this.pkey];
            },this);

            if(remove_feature)
            {//if flagged for removal, filter out
                return feature_array.filter((_val)=>
                {
                    return _val[this.pkey]!=_feature[this.pkey];
                },this);
            }
            feature_array.push(_feature);
            //otherwise add feature and return
            return feature_array;
        }
    },
    computed:
    {
        filteredAmmoArray()
        {
            filter_data_table(this.hasBlast);
            return feature_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.ammoArray,this.pkey);
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
                this.$emit("update-ammo",cleaned_data.cleaned_array);
            }
            this.$set(this,"selected_ammo_array",cleaned_data.cleaned_array);
            return cleaned_data.key_list;
        }
    },
    watch:
    {
        "hasBlast":function(_newval,_oldval)
        {//must track changes in hasBlast to disable alerts for removed features on cleaned_feat
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