<template>
    <div id="app" style="display:inline-flex;">
        <mek-side-menu></mek-side-menu>
        <span>
            <mek-top-menu @focus-section="focusSection" :section="targetTab"></mek-top-menu>
            <span id="main">
                <component :is="targetTab"></component>
            </span>
        </span>
        <mek-alert></mek-alert>
    </div>
</template>

<script>
import mek_top_menu from "./components/mek_top_menu/mek-top-menu.vue";
import mek_side_menu from "./components/mek_side_menu/mek-side-menu.vue";
import mek_alert from "./components/universal/mek_alert.vue";

import mek_servo from "./components/mek_servo/mek_servo-main.vue";
import mek_melee from "./components/mek_melee/mek_melee-main.vue";
import mek_projectile from "./components/mek_projectile/mek_projectile-main.vue";
import mek_magazine from "./components/mek_magazine/mek_magazine-main.vue";
import mek_missile from "./components/mek_missile/mek_missile-main.vue";
import mek_emw from "./components/mek_emw/mek_emw-main.vue";
import mek_beam from "./components/mek_beam/mek_beam-main.vue";
import mek_energy_pool from "./components/mek_energy_pool/mek_energy_pool-main.vue";
import mek_shield from "./components/mek_shield/mek_shield-main.vue";
import mek_reflector from "./components/mek_reflector/mek_reflector-main.vue";

import {mapGetters} from 'vuex';

export default {
  name: 'app',
  components:
  {
    "mek-top-menu":mek_top_menu,
    "mek-side-menu":mek_side_menu,
    "mek-alert":mek_alert,

    "mek-servo":mek_servo,
    "mek-melee":mek_melee,
    "mek-projectile":mek_projectile,
    "mek-magazine":mek_magazine,
    "mek-missile":mek_missile,
    "mek-emw":mek_emw,
    "mek-beam":mek_beam,
    "mek-energy-pool":mek_energy_pool,
    "mek-shield":mek_shield,
    "mek-reflector":mek_reflector
  },
  data:function()
  {
    let obj={};

    return obj;
  },
  methods:
  {
    focusSection:function(_section)
    {
        this.$store.commit("showTab",_section);
    }
  },
  computed:
  {
    ...mapGetters(
        {
            targetTab:'targetTab'
        })
  }
}
</script>

<style>
*
{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body
{
    background-image:url('./assets/hexagon.svg');
}
.mek-flex-row
{
    display:flex; 
    flex-direction: row; 
    text-align: center;
    flex-wrap: wrap;
}
.mek-inline-flex-row
{
    display:inline-flex; 
    flex-direction: row; 
    text-align: center;
    flex-wrap: wrap;
}
.top_menu
{
    padding: 10px;
    border: 1px solid #222;
    font-weight: bold;
}
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
}
.top_menu_selected_item
{
    /*background-color: #fff !important;*/
    background-image: linear-gradient(70deg, 
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
.mek-flex-col
{
    display:flex; 
    flex-direction: column; 
    text-align: center;
    margin:5px;
}
.mek-inline-flex-col
{
    display:inline-flex; 
    flex-direction: column; 
    text-align: center;
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
    /*background-color: rgba(34,34,34,1);*/
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%)
}
/* .subsection_header
{
    font-weight: bold;
    font-size: 20px;
    
} */
.subsection_header
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

</style>
