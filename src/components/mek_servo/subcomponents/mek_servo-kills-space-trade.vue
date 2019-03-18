<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small1">
            <div class="subsection_container1" @mousedown="$event.preventDefault()">
                <div class="subsection_header_small1">{{title}}</div>
                <div class="subsection_hidden_header">{{title}}</div>
                <div>
                    <span @click="incrementProperty('kills')" style="vertical-align:middle;">
                        <v-icon name="plus-square"></v-icon>
                    </span><!-- modified to include new_space, compile and check -->
                    Kills: {{checked_modifiers.kills}} | Space{{checked_modifiers.space>1?'s':''}}: {{checked_modifiers.space}}
                    <span @click="incrementProperty('space')" style="vertical-align:middle;">
                        <v-icon name="plus-square"></v-icon>
                        <!-- ADD COST DISPLAY -->
                    </span>
                </div>
            </div>
        </div>
    </span>

</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin.js";
import alerts_mixin from "../../../mixins/alerts_mixin.js";

import 'vue-awesome/icons/plus-square';
import Icon from 'vue-awesome/components/Icon';

export default
{
    name:"mek_servo_kills_space_trade",
    mixins:[utility_mixin,alerts_mixin],
    props:["base_kills","space_modifier","kills_modifier","base_space"],
    components:
    {
        "v-icon":Icon
    },
    data:function()
    {
        let obj={};
        obj.selected_modifier={};
        obj.selected_modifier.kills=0;
        obj.selected_modifier.space=0;
        obj.selected_modifier.cost=0;
        obj.alerts=[];
        return obj;
    },
    methods:
    {
        selectExtraSpace()
        {
            this.$emit("update-extra-space",this.selected_modifier);
        },
        incrementProperty(_prop)
        {
            let prevKills=this.selected_modifier.kills;
            let prevSpace=this.selected_modifier.space;
            this.selected_modifier.kills=_prop=="kills" ? this.selected_modifier.kills+1 : this.selected_modifier.kills-1;
            this.selected_modifier.space=_prop=="space" ? this.selected_modifier.space+2 : this.selected_modifier.space-2;

            switch(true)
            {
                case this.new_kills<=0:
                case this.new_space<0:
                    this.selected_modifier.kills=prevKills;
                    this.selected_modifier.space=prevSpace;
                    break;
                case ((this.selected_modifier.kills*2) + this.selected_modifier.space)!==0:
                    this.selected_modifier.kills=0;
                    this.selected_modifier.space=0;
                    this.selected_modifier.cost=0;
                    break;
            }
            
            this.selected_modifier.cost=this.selected_modifier.kills>0 ? this.selected_modifier.kills*2 : 0;

            this.selectExtraSpace();
        }
    },
    computed:
    {
        checked_modifiers()
        {
            this.selected_modifier.kills=this.kills_modifier;
            this.selected_modifier.space=this.space_modifier;
            switch(true)
            {
                case this.new_kills<=0:
                case this.new_space<0:
                case ((this.selected_modifier.kills*2) + this.selected_modifier.space)!==0:
                    this.addAlert("Mek_Servo-Kills-Space-Trade: Invalid values, reseting to 0.");
                    this.selected_modifier.kills=0;
                    this.selected_modifier.space=0;
                    this.selected_modifier.cost=0;
                    break;
            }

            let kills=this.base_kills + this.kills_modifier;
            let space=this.base_space + this.space_modifier;
            return {kills:kills, space:space};
        },
        new_kills()
        {
            return this.base_kills + this.selected_modifier.kills;
        },
        new_space()
        {
            return this.base_space + this.selected_modifier.space;
        },
        title()
        {
            switch(true)
            {
                case this.selected_modifier.kills<0:
                    return "Extra Space";
                case this.selected_modifier.kills>0:
                    return "Reinforced Servo"
            }
            return "Kill/Space Trade";
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
.subsection_header_small1
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
.subsection_hidden_header
{
    font-weight: bold;
    font-family: Arial Black, sans-serif;
    font-size: 110%;
    white-space: nowrap;
    visibility: hidden;
    line-height: 0px;
    height:0px;
}
.subsection_container1
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.metallic_background_small1
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
</style>