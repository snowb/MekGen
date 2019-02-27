<template>
    <div class="outer-container">
        <span class="mek-inline-flex-row subsection_container1">
            <span v-for="(col) in cols" class="padding-10px" :key="'outercol-'+col">
                <slot v-for="(row) in rows" :name="'col'+col+'-row'+row"></slot>
            </span>
        </span>
    </div>
</template>
<script>
import utility_mixin from "../../mixins/utility_mixin.js";

export default
{
    name:"mek_component_stats",
    mixins:[utility_mixin],
    props:["cols","rows"],
    data:function()
    {
        let obj={};
        return obj;
    },
    methods:
    {
    },
    computed:
    {
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
.subsection_container1
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    text-align: left;
}
</style>