<template>
<div class="outer-container">
    <span class="mek-inline-flex-row subsection_container" style="text-align:left;">
        <span class="padding-10px">
            <div>{{isBeamShield && !isVariableBeamShield?"Base":""}} Kills: {{damage.damage}} K</div>
            <div v-if="isBeamShield">
                <div>Beam Shield Kills: {{beam_shield.damage}} K</div>
                <div>Stopping Power: {{beam_shield.stopping_power}} K</div>
                <div>Defense Accuracy: {{beam_shield.defense_accuracy}}</div>
            </div>
            <div>Damage Capacity: {{damage_capacity}} K</div>
        </span>
        <span class="padding-10px">
            <div>Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>
        </span>
        <span class="padding-10px">
            <div>Base Space: {{rawSpace}}</div>
            <div>Space: {{spaceCost}}</div>
            <div>Weight: {{round(weight,2)}} tons</div>                
        </span>
        <span class="padding-10px">
            <div>Base Cost: {{damage.cost}}</div>
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
    name:"mek_emw_stats",
    mixins:[utility_mixin],
    props:["damage",
        "accuracy",
        "featureArray",
        "baseCost",
        "costMultiplier",
        "spaceCost",
        "weight",
        "totalCost",
        "rawSpace",
        "beam_shield",
        "damage_capacity",
        "isBeamShield",
        "isVariableBeamShield"
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
        feature_list:function()
        {
            return this.featureArray.reduce(function(_string, _val, _index)
            {
                _string+=_index>0 ? ", " : "";
                _string+=_val.feature;
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