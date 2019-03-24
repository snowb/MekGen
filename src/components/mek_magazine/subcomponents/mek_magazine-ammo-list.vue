<template>
    <mek-sub-component-table
        :items="filteredAmmoArray" :selected-keys="selected_keys" :pkey="pkey"
        :headers="{type:'Type',cost:'Cost',effect:'Effect'}" :show-headers="true"
        :format="{cost:'multiplier'}" name="Ammo Table" flow="pkey-col"
        @update-selected-data="select_ammo"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";
import alerts_mixin from "../../../mixins/alerts_mixin";

import {ammo_data_table, ammo_validate, get_feature, shock_exclusive, blast_exclusive, cleaned_feature} 
    from "../../data_table_modules/mek_magazine/mek_ammo-list-data-module.js";

export default
{
    name:"mek_magazine_ammo_list",
    props:["ammoArray","hasBlast"],
    mixins:[selected_item_mixin,utility_mixin, alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
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
            this.publishAlerts();
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
        },
        is_exclusive_feature:function(_target_array,_feature)
        {
            return this[_target_array].some(function(_val)
            {
                if(_val[this.pkey].toLowerCase() == _feature.toLowerCase())
                {
                    return true;
                }
                return false;
            },this);
        }
    },
    computed:
    {
        filteredAmmoArray()
        {
            if(this.hasBlast)
            {
                return ammo_data_table;
            }
            return ammo_data_table.filter((_elem)=>
            {
                return _elem.type.toLowerCase()!="nuclear";
            });
        },
        shock_exclusive(){return shock_exclusive;},
        blast_exclusive(){return blast_exclusive;},
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
                this.$emit("update-ammo",cleaned_data.cleaned_array);
            }
            this.$set(this,"selected_ammo_array",cleaned_data.cleaned_array);
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>