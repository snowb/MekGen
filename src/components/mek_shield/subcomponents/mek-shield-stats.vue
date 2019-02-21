<template>
<div class="outer-container">
    <span class="mek-inline-flex-row subsection_container" style="text-align:left;">
        <span class="padding-10px">
            <div v-if="shield_class.kills!==null">Kills: {{shield_class.kills}}</div>

            <div v-else>Base Stopping Power: {{round(shield_class.stopping_power,2)}}
                <br>Final Stopping Power: {{round(stopping_power,2)}}
            </div>
            <div v-if="armor_type!==null">Armor Type: {{armor_type.type}}</div>
            <div v-if="armor_type!==null" style="padding-left:10px;">Damage Coefficient: {{armor_type.damage_coefficient}}</div>
            <div v-if="absorption!==null">Absorption: {{absorption.absorption*100}}%</div>
        </span>
        <span class="padding-10px">
            <div v-if="type.toLowerCase()=='standard' || type.toLowerCase()=='active'">Binder Space: {{round(binder.space,3)}}</div>
            <div v-if="type.toLowerCase()=='reactive'">Weakness(es):<div style="max-width:150px;margin-left:10px;">{{weakness_list}}</div></div>
            <div v-if="type.toLowerCase()=='reactive'">Reset Time: {{reset_time.time}}</div>
            <div v-if="type.toLowerCase()=='reactive'">Turns in Use: {{turns_in_use.time}}</div>
            <div v-if="type.toLowerCase()=='reactive'">Surge Damage: {{surge_damage}}</div>
        </span>
        <span class="padding-10px">
            <div>Base Space: {{raw_space}}</div>
            <div>Space: {{space_cost}}</div>
            <div>Weight: {{round(weight,2)}} tons</div>                
        </span>
        <span class="padding-10px">
            <div>Base Cost: {{shield_class.cost}}</div>
            <div>Multiplier: x{{cost_multiplier}}</div>
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
    props:["shield_class",
        "type",
        "binder",
        "weakness_array",
        "reset_time",
        "turns_in_use",
        "defense_ability",
        "stopping_power",
        "base_cost",
        "cost_multiplier",
        "space_cost",
        "weight",
        "total_cost",
        "surge_damage",
        "raw_space",
        "armor_type",
        "absorption"
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
        weakness_list:function()
        {
            return this.weakness_array.reduce(function(_string, _val, _index)
            {
                _string+=_index>0 ? ", " : "";
                _string+=_val.weakness;
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