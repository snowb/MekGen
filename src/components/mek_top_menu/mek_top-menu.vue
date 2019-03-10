<template>
    <span class="mek-inline-flex-row">
        <span v-for="(section,index) in sections" :key="index" :class="selectedItem('focusedSection',section.id,'top_menu_selected_item','top_menu_nonselected_item')"
            @click="focusSection(section.id)"
            class="clickable top_menu" >
            {{section.name}}
        </span>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";

export default
{
    name: "mek_top_menu",
    props:["section"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        obj.sections=[
            {id:"mek-servo",name:"Servos"},
            {id:"mek-beam",name:"Beam Weapons"},
            {id:"mek-emw",name:"Energy Melee Weapons"},
            {id:"mek-melee",name:"Melee Weapons"},
            {id:"mek-missile",name:"Missiles"},
            {id:"mek-projectile",name:"Projectile Weapons"},
            {id:"mek-magazine",name:"Projectile Magazine"},
            {id:"mek-energy-pool",name:"Energy Pools"},
            {id:"mek-shield",name:"Shields"},
            {id:"mek-reflector",name:"Reflectors"},
        ]
        return obj;
    },
    methods:
    {
        focusSection:function(_id)
        {
            this.$emit("focus-section",_id);
            this.$store.commit("clearComponent");
        }
    },
    computed:
    {
        focusedSection:function()
        {
            return this.section;
        }
    }
}
</script>