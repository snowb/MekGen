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

import 'vue-awesome/icons/plus-square';
import Icon from 'vue-awesome/components/Icon';

export default
{
    name:"mek_melee_entangle_range",
    mixins:[utility_mixin],
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
            this.selected_modifier.range=_prop=="range" ? this.selected_modifier.range+1 : this.selected_modifier.range-1;
            this.selected_modifier.damage=_prop=="damage" ? this.selected_modifier.damage-1 : this.selected_modifier.damage+1;

            switch(true)
            {
                case (this.selected_modifier.range - this.selected_modifier.damage)!==0:
                case this.selected_modifier.range<0:
                case this.selected_modifier.damage<0:
                case this.new_damage<0:
                    this.selected_modifier.range=0;
                    this.selected_modifier.damage=0;
                    break;
            }
            this.selectDamageAndRange();
        }
    },
    computed:
    {
        checked_modifier()
        {
            this.selected_modifier.range=this.range_modifier;
            this.selected_modifier.damage=this.damage_modifier;
            switch(true)
            {
                case (this.range_modifier - this.damage_modifier)!==0:
                case this.range_modifier<0:
                case this.damage_modifier<0:
                case this.new_damage<0:
                    this.selected_modifier.range=0;
                    this.selected_modifier.damage=0;
                    this.selectDamageAndRange();
                    break;
            }
            return {range:this.selected_modifier.range,damage:this.selected_modifier.damage};
        },
        new_damage()
        {
            return this.base_damage - this.selected_modifier.damage;
        }
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