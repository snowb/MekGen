Vue.component("mektop-menu",
{
    props:["section"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        obj.sections=[
            {id:"mek_servo",name:"Servos"},
            {id:"mek_beam",name:"Beam Weapons"},
            {id:"mek_emw",name:"Energy Melee Weapons"},
            {id:"mek_melee",name:"Melee Weapons"},
            {id:"mek_missiles",name:"Missiles"},
            {id:"mek_projectile",name:"Projectile Weapons"},
            {id:"mek_energy_pool",name:"Energy Pools"},
            {id:"mek_shield",name:"Shields"}
        ]
        return obj;
    },
    methods:
    {
        focusSection:function(_id)
        {
            this.$emit("focus-section",_id);
            this.$store.clearComponent();
        }
    },
    computed:
    {
        focusedSection:function()
        {
            return this.section;
        }
    },
    template:
    `
    <span class="mek-flex-row">
        <span v-for="section,index in sections" :key="index" :class="selectedItem('focusedSection',section.id,'top_menu_selected_item','top_menu_nonselected_item')"
            @click="focusSection(section.id)"
            class="clickable top_menu" >
            {{section.name}}
        </span>
    </span>
    `
});
