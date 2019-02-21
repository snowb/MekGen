<template>
    <div class="outer-container">
    <span class="mek-inline-flex-row subsection_container" style="text-align:left;">
        <span class="padding-10px">
            <div>Quality Value: {{reflector.quality_value}}</div>
        </span>
        <span class="padding-10px">
            <div>Base Space: {{raw_space}}</div>
            <div>Space: {{space_cost}}</div>
            <div>Weight: {{round(weight,2)}} tons</div>                
        </span>
        <span class="padding-10px">
            <div>Base Cost: {{reflector.cost}}</div>
            <div style="font-weight:bold;">Total Cost: {{total_cost}}</div>
        </span>
    </span>
</div>
</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin.js";

export default
{
    name:"mek_shield_stats",
    mixins:[utility_mixin],
    props:["reflector",
        "base_cost",
        "space_cost",
        "weight",
        "total_cost",
        "surge_damage",
        "raw_space"
        ],
    data:function()
    {
        let obj={};
        return obj;
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
