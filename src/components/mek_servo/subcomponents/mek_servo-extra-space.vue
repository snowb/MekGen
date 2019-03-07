<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container" @mousedown="$event.preventDefault()">
                <div class="subsection_header_small">Extra Space</div>
                <div>
                    <span @click="incrementProperty('kills')" style="vertical-align:middle;">
                        <v-icon name="plus-square"></v-icon>
                    </span>
                    Kills: {{new_kills}} | Space: {{checked_modifier.space}}
                    <span @click="incrementProperty('space')" style="vertical-align:middle;">
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
    name:"mek_servo_extra_space",
    mixins:[utility_mixin],
    props:["base_kills","space_modifier","kills_modifier"],
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
            this.selected_modifier.kills=_prop=="kills" ? this.selected_modifier.kills-1 : this.selected_modifier.kills+1;
            this.selected_modifier.space=_prop=="space" ? this.selected_modifier.space+2 : this.selected_modifier.space-2;

            switch(true)
            {
                case ((this.selected_modifier.kills*2) - this.selected_modifier.space)!==0:
                case this.selected_modifier.kills<0:
                case this.selected_modifier.space<0:
                case this.new_kills<0:
                    this.selected_modifier.kills=0;
                    this.selected_modifier.space=0;
                    break;
            }
            
            this.selectExtraSpace();
        }
    },
    computed:
    {
        checked_modifier()
        {
            this.selected_modifier.kills=this.kills_modifier;
            this.selected_modifier.space=this.space_modifier;
            switch(true)
            {
                case (this.kills_modifier*2 - this.space_modifier)!==0:
                case this.kills_modifier<0:
                case this.space_modifier<0:
                case this.new_damage<0:
                    this.selected_modifier.kills=0;
                    this.selected_modifier.space=0;
                    this.selectExtraSpace();
                    break;
            }
            return {kills:this.selected_modifier.kills,space:this.selected_modifier.space};
        },
        new_kills()
        {
            return this.base_kills - this.selected_modifier.kills;
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