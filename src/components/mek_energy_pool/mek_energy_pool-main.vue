<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||energy_pool_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <mek-energy-pool-pool :energy-pool="selected_energy_pool"
            @update-energy-pool="updateEnergyPool"
        ></mek-energy-pool-pool>
        <div class="mek-inline-flex-row">
            <!--mek-missile-damage @update-damage="updateDamage" :damage="selected_damage"></mek-missile-damage>
            <mek-missile-pack-size :pack="selected_pack_size" @update-pack-size="updatePackSize"
                style="align-self:flex-end;"
            ></mek-missile-pack-size>
            <mek-missile-accuracy v-if="!is_mine"
                @update-accuracy="updateAccuracy" 
                :accuracy="selected_accuracy"
            ></mek-missile-accuracy>
            <div class="mek-inline-flex-row">
                <mek-missile-range-mod style="align-self:baseline;"
                    @update-range-mod="updateRangeMod"
                    :range-mod="selected_range_mod" :anti-missile="has_feature('countermissile')"
                    :base-range="selected_damage.range"
                ></mek-missile-range-mod>
                {{has_feature('countermissile')}}
                <div class="mek-inline-flex-col">
                    <mek-missile-smart :smart="selected_smart"
                        @update-smart="updateSmart"
                    ></mek-missile-smart>
                    <mek-missile-skill v-if="selected_smart.smart>0" :skill="selected_skill"
                        @update-skill="updateSkill"
                    ></mek-missile-skill>
                </div>
                <mek-missile-blast-radius :blast_radius="selected_blast_radius"
                    @update-blast-radius="updateBlastRadius"
                ></mek-missile-blast-radius>
                <mek-missile-feature style="align-self:baseline;"
                    @update-feature="updateFeature"
                    :feature-array="feature_array"
                    :blast-radius="selected_blast_radius.blast_radius"
                ></mek-missile-feature>
            </div-->
            <mek-space-efficiency style="align-self:baseline;"
                :space_efficiency="efficiencies.space"
                :raw_space="raw_space"
                @update-efficiencies="updateEfficiencies"
            ></mek-space-efficiency>          
        </div>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="5">
                <!--div slot="col1-row1">Kills: {{selected_damage.damage}} K</div>
                <div slot="col1-row2">Damage Capacity: {{damage_capacity}} K</div>
                <div slot="col1-row3">Final Range: {{selected_damage.range * selected_range_mod.range_mod}}</div>
                <div slot="col1-row4" v-if="has_duration">Duration: {{smoke_scatter_duration}} rounds</div-->

                <div slot="col3-row1">Base Space: {{raw_space}}</div>
                <div slot="col3-row2">Space: {{space_cost}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>

                <div slot="col4-row1">Base Cost: {{selected_energy_pool.cost}}</div>
                <div slot="col4-row2">Multiplier: x{{cost_multiplier}}</div>
                <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import servo_classes_mixin from "../../mixins/servo_classes_mixin";
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

import mek_energy_pool_pool from "./subcomponents/mek_energy_pool-pool.vue";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";
import mek_component_stats from "../universal/mek_component-stats.vue";

export default
{
    name:"mek_energy_pool",
    props:[],
    mixins:[servo_classes_mixin, selected_item_mixin, utility_mixin],
    components:
    {
        "mek-energy-pool-pool":mek_energy_pool_pool,
        //"mek-energy-pool-size":mek_energy_pool_size,
        //"mek-energy-pool-morphable":mek_energy_pool_morphable,

        "mek-space-efficiency":mek_space_efficiency,
        "mek-component-name":mek_component_name,
        "mek-save-reset-component":mek_save_reset_component,
        "mek-component-stats":mek_component_stats
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category=null;
        obj.component_type=null;
        obj.original_component=null;
        obj.component_changed=true;

        obj.damage_capacity=5;

        obj.selected_energy_pool={cost:10,power_available:0,max_power:50,damage_capacity:5};
        obj.selected_portfolio_size={size:3,cost:1};
        obj.selected_morphable=false;

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.portfolio_size=1;
        obj.cost_multipliers.morphable=1;

        return obj;
    },
    methods:
    {
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.component_changed=true;
        },
        updateEfficiencies(_data)
        {
            this.efficiencies.space.cost=_data.cost;
            this.efficiencies.space.modifier=_data.modifier;
            this.component_changed=true;
        },
        updateEnergyPool(_energy_pool)
        {
            this.selected_energy_pool.cost=_energy_pool.cost;
            this.selected_energy_pool.power_available=_energy_pool.power_available;
            this.selected_energy_pool.max_power=_energy_pool.max_power;
            this.selected_energy_pool.damage_capacity=_energy_pool.damage_capacity;
            this.component_changed=true;
            this.damage_capacity=_energy_pool.damage_capacity;
        },
        updatePortfolioSize(_size)
        {
            this.selected_portfolio_size.cost=_size.cost;
            this.selected_portfolio_size.size=_size.size;
            this.component_changed=true;
        },
        updateMorphable(_morphable)
        {
            this.selected_morphable=_morphable;
            this.component_changed=true;
        },
        componentSaveReset:function(_action)
        {
            switch(_action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.selected_energy_pool.cost=1;
                    this.selected_portfolio_size.size=3;
                    this.selected_morphablee=false;
                    this.$store.commit("saveComponent",null);
                    break;
            }
        },
        output_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="energy_pool";//specific equipment type
            return_data.component_name=this.component_name===null?this.energy_pool_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_energy_pool=JSON.parse(JSON.stringify(this.selected_energy_pool));
            return_data.selected_portfolio_size=JSON.parse(JSON.stringify(this.selected_portfolio_size));
            return_data.selected_morphable=this.selected_morphable

            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.damage_capacity=this.damage_capacity;

            this.$nextTick(()=>{this.component_changed=false;});

            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Energy Pool is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            this.$nextTick(()=>{this.component_changed=false;});
        },
    },
    computed:
    {
        raw_space()
        {
            //core cost prop
            return this.selected_energy_pool.cost * this.cost_multiplier;
        },
        space_cost:function()
        {
            return this.raw_space - this.efficiencies.space.modifier;
        },
        cost_multiplier()
        {
            let cost_multiplier=1;
            for(let multi in this.cost_multipliers)
            {
                cost_multiplier*=this.cost_multipliers[multi];
            }
            return cost_multiplier;
        },
        cost:function()
        {
            let subtotal_cost=this.selected_energy_pool.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        weight:function()
        {
            return (this.damage_capacity / 2);
        },
        newComponent()
        {
            let selectedComponent=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));
            
            if(typeof selectedComponent!=="undefined" && selectedComponent!==null)
            {
                if(selectedComponent.uuid!==this.uuid 
                    && selectedComponent.component_category=="equipment" 
                    && selectedComponent.component_type=="energy_pool")
                {//needs specific equipment type
                    this.ingest_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
        energy_pool_name()
        {
            /* method to dynamically generate appropriate 'default' equipment name
            let energy_pool_name=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";

            energy_pool_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },energy_pool_name);

            energy_pool_name=energy_pool_name+" "+this.selected_mount_type.mount_type+" Gun";

            return energy_pool_name; 
            */
           return "Energy Pool";
        }
    }
};
</script>