<template>
    <div id="app" style="display:inline-flex;">
        <mek-side-menu></mek-side-menu>
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetDesignTab" :section-list="sectionList"></mek-top-menu>
            <span id="design-main">
                <component :is="targetDesignTab"></component>
            </span>
        </span>
        <!--mek-alert></mek-alert-->
    </div>
</template>
<script>

import {mapGetters} from 'vuex';

export default {
  name: 'design',
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"../app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-side-menu":()=>import(/* webpackChunkName: "side-menu" */"./mek_side_menu/mek_side-menu.vue"),
    //"mek-alert":()=>import(/* webpackChunkName: "mek_alert" */"../app_components/universal/mek_alert.vue"),

    "mek-servo":()=>import(/* webpackChunkName: "mek_servo-main" */"./mek_servo/mek_servo-main.vue"),
    "mek-melee":()=>import(/* webpackChunkName: "mek_melee-main" */"./mek_melee/mek_melee-main.vue"),
    "mek-projectile":()=>import(/* webpackChunkName: "mek_projectile-main" */"./mek_projectile/mek_projectile-main.vue"),
    "mek-magazine":()=>import(/* webpackChunkName: "mek_magazine-main" */"./mek_magazine/mek_magazine-main.vue"),
    "mek-missile":()=>import(/* webpackChunkName: "mek_missile-main" */"./mek_missile/mek_missile-main.vue"),
    "mek-emw":()=>import(/* webpackChunkName: "mek_emw-main" */"./mek_emw/mek_emw-main.vue"),
    "mek-beam":()=>import(/* webpackChunkName: "mek_beam-main" */"./mek_beam/mek_beam-main.vue"),
    "mek-energy-pool":()=>import(/* webpackChunkName: "mek_energy_pool-main" */"./mek_energy_pool/mek_energy_pool-main.vue"),
    "mek-shield":()=>import(/* webpackChunkName: "mek_shield-main" */"./mek_shield/mek_shield-main.vue"),
    "mek-reflector":()=>import(/* webpackChunkName: "mek_reflector-main" */"./mek_reflector/mek_reflector-main.vue")
  },
  data:function()
  {
    let obj={};
    obj.sectionList=
    [
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
    ];
    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        this.$store.commit("showTab",{prop:"currentDesignTab",tab:_section});
    }
  },
  computed:
  {
    ...mapGetters(
        {
            targetDesignTab:'targetDesignTab'
        })
  }
}
</script>

<style>
/**
.clickable
{
    cursor: pointer;
}
.clickable:hover
{
    background-color: white;
    color: #222;
    border-radius: 7px;
    box-shadow: inset 1px 1px 1px 1px #222;
}
.top_menu.clickable:hover
{
    background-color: #222;
    color: #fff;
    border-radius: 30px;
    box-shadow: inset 1px 1px 1px 1px #fff;
}
tr.clickable:hover td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.clickable:hover td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.metallic_background
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
    padding-top:43px;
}
.metallic_background_small
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
.subsection_container
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}*/
/*.top_menu_selected_item
{*/
    /*background-color: #fff !important;*/
/*    background-image: linear-gradient(70deg, 
        rgb(255, 180, 0) 0%,
        rgb(255, 255, 0) 49%,
        rgb(255, 255, 0) 51%,
        rgb(255, 160, 0) 100%);
    color: #222 !important;
    font-weight:bold;
    border-radius: 30px;
    box-shadow: inset 0px 0px 1px 1px #222 !important;
    font-size:110%;
}
.top_menu_nonselected_item
{
    background-color: rgba(0, 0, 0, 0.7);
    color: #e2e2e2;
    font-weight:bold;
    border-radius: 30px;
    box-shadow: inset -1px -1px 1px 1px white;
    font-size:110%;
}
.non_selected_item
{
    background-color: #aaa !important;
    color: #222 !important;
    font-weight: bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px #222 !important;
}
.selected_item
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding-top: 2px;
    padding-bottom: 2px;
}
.selected_item_top
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding: 2px 5px;
    border-bottom: none;
}
.selected_item_bottom
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding: 2px 5px;
    border-top: none;
}
.selected_item_mid
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding: 2px 5px;
    border-top: none;
}
tr.selected_item td
{
    padding-top: 2px;
    padding-bottom: 2px;
}
tr.selected_item td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    padding-left:10px;
}
tr.selected_item td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    padding-right:10px;
}
.head_column
{
    padding:2px 5px; 
    font-weight:bold;
    text-align:right;
    border-right:1px solid black;
    margin-right:5px;
}

.section_header
{
    display:inline-block;
    font-weight: bold;
    font-size: 25px;
    border:1px solid black;
    border-radius: 7px;
    padding:5px 20px;
    font-family: Arial Black, sans-serif;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    color: #eee;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    */
    /*background-color: rgba(34,34,34,1);*/
    /*background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%)
}*/
/* .subsection_header
{
    font-weight: bold;
    font-size: 20px;
    
} */
/*.subsection_header
{
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    top: -40px;
    font-family: Arial Black, sans-serif;
    font-size: 150%;
    border: 1px solid black;
    padding: 0px 10px 2px 10px;
    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset, rgba(0,0,0,0.5) 1px 1px 1px 3px inset;
    color: #ddd;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    background-color: rgba(0,0,0,0.2);
    white-space: nowrap;
}
.subsection_header_small
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
table
{
    border-collapse: collapse;
}
table > tr, tr > td
{
    padding: 0px;
}
.td-left
{
    padding-left:5px;
    padding-right:1px;
}
.td-right
{
    padding-right:5px;
    padding-left:1px;
    text-align:left;
}
.no-margin
{
    margin: 0px;
}
*/
</style>
