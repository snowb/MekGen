<template>
    <span class="mek-flex-col">
        <div class="metallic_background_mer">
            <div class="subsection_container_mer" @mousedown="$event.preventDefault()">
                <div class="subsection_header_mer">Entangle&nbsp;Range</div>
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
import alerts_mixin from "@/mixins/alerts_mixin.js";

import {cleaned_feature}
    from "@/data_table_modules/mek_melee/mek_melee-entangle-range-data-module.js";

import 'vue-awesome/icons/plus-square';
import Icon from 'vue-awesome/components/Icon';

export default
{
    name:"mek_melee_entangle_range",
    mixins:[alerts_mixin],
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
                this.$emit("alert-generated",true);
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
.metallic_background_mer
{
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%);
    height: 100%;
    width: 100%;
    padding:5px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 0px 2px, #fff 0px 0px 5px 2px;
    padding-top:34px;
}
.subsection_container_mer
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.subsection_header_mer
{
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    top: -32px;
    font-family: Arial Black, sans-serif;
    font-size: 110%;
    border: 1px solid black;
    padding: 2px 10px;
    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset, rgba(0,0,0,0.5) 1px 1px 1px 3px inset;
    color: #ddd;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    background-color: rgba(0,0,0,0.2);
    white-space: nowrap;
}
</style>