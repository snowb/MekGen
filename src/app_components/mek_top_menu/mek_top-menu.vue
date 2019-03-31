<template>
    <span class="mek-inline-flex-row">
        <span v-for="(section,index) in sectionList" :key="index" :class="selectedItem('focusedSection',section.id,'top_menu_selected_item','top_menu_nonselected_item')"
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
    props:["section","sectionList"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
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
<style>
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
</style>