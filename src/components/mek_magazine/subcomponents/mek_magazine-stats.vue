<template>
<div class="outer-container">
    <span class="mek-inline-flex-row subsection_container" style="text-align:left;">
        <span class="padding-10px">
            <div>Shots: {{shots}}</div>
            <div>Ammo Type(s):<div style="max-width:150px;margin-left:10px;">{{ammo_list}}</div></div>
        </span>
        <span class="padding-10px">
            <div>Space: {{spaceCost}}</div>
            <div>Weight: {{round(weight,2)}} tons</div>                
        </span>
        <span class="padding-10px">
            <div>Base Cost: {{cost}}</div>
            <div>Multiplier: x{{costMultiplier}}</div>
            <div style="font-weight:bold;">Total Cost: {{totalCost}}</div>
        </span>
    </span>
</div>
</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin.js";

export default
{
    name:"mek_magazine_stats",
    mixins:[utility_mixin],
    props:["cost",
        "ammoList",
        "weight",
        "spaceCost",
        "costMultiplier",
        "totalCost",
        "shots"
        ],
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
        ammo_list:function()
        {
            return this.ammoList.reduce(function(_string, _val, _index)
            {
                _string+=_index>0 ? ", " : "";
                _string+=_val.type;
                return _string;
            },"");
        },
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