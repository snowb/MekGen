<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container" @mousedown="$event.preventDefault()">
                <div class="subsection_header_small">Entangle&nbsp;Range</div>
                <div>
                    <span @click="incrementProperty('damage')" style="vertical-align:middle;">
                        <v-icon name="plus-square"></v-icon>
                    </span>
                    Damage: {{new_damage}} | Range: {{checked_modifier.range}}
                    <span @click="incrementProperty('range')" style="vertical-align:middle;">
                        <v-icon name="plus-square"></v-icon>
                    </span>
                </div>
            </div>
        </div>
    </span>

</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin.js";
import alerts_mixin from "../../../mixins/alerts_mixin.js";

import {cleaned_feature}
    from "../../../data_table_modules/mek_melee/mek_melee-entangle-range-data-module.js";

import 'vue-awesome/icons/plus-square';
import Icon from 'vue-awesome/components/Icon';

export default
{
    name:"mek_melee_entangle_range",
    mixins:[utility_mixin,alerts_mixin],
    props:["base_damage","range_modifier","damage_modifier"],
    components:
    {
        "v-icon":Icon
    },
    data:function()
    {
        let obj={};
        obj.selected_modifier={};
        obj.selected_modifier.range=0;
        obj.selected_modifier.damage=0;
        obj.suppressAlerts=false;
        obj.alerts=[];
        obj.new_damage=0;
        return obj;
    },
    methods:
    {
        selectDamageAndRange()
        {
            this.$emit("update-damage-and-range",this.selected_modifier);
        },
        incrementProperty(_prop)
        {
            let new_range_mod=_prop=="range" ? this.selected_modifier.range+1 : this.selected_modifier.range-1;
            let new_damage_mod=_prop=="damage" ? this.selected_modifier.damage-1 : this.selected_modifier.damage+1;

            let cleaned_data=cleaned_feature(this.base_damage,new_range_mod,new_damage_mod);
            /* let json_data=JSON.stringify({range_mod:new_range_mod,damage_mod:new_damage_mod});
            if(validated.update)
            {
                this.addAlert("Mek_Melee-Entangle-Range: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
            } */
            this.selected_modifier.range=cleaned_data.range_mod;
            this.selected_modifier.damage=cleaned_data.damage_mod;
            this.new_damage=cleaned_data.damage;

            this.selectDamageAndRange();
        }
    },
    computed:
    {
        checked_modifier()
        {
            let cleaned_data=cleaned_feature(this.base_damage,this.range_modifier,this.damage_modifier);
            this.selected_modifier.range=cleaned_data.range_mod;
            this.selected_modifier.damage=cleaned_data.damage_mod;
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
                this.selectDamageAndRange();
            }
            
            this.new_damage=cleaned_data.damage;
            return {range:this.selected_modifier.range,damage:this.selected_modifier.damage};
        },
        /* new_damage()
        {
            return this.base_damage - this.selected_modifier.damage;
        } */
    }
}
</script>
<style scoped>
.padding-10px
{
    padding-right:10px; 
    padding-left:10px;
}
.outer-container
{
    align-self:flex-start;
    margin:5px;
    font-size:120%;
    color:#222;
}

</style>