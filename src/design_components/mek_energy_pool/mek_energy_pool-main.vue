<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||energy_pool_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <mek-energy-pool-pool :energy-pool="selected_energy_pool" style="align-self:flex-start;"
                @update-energy-pool="updateEnergyPool" @alert-generated="handleAlert"
            ></mek-energy-pool-pool>
            <div class="mek-inline-flex-col">
                <mek-energy-pool-size :portfolio-size="selected_portfolio_size"
                    @update-portfolio-size="updatePortfolioSize" @alert-generated="handleAlert"
                ></mek-energy-pool-size>
                <mek-energy-pool-feature style="align-self:flex-start;"
                    @update-feature="updateFeature" @alert-generated="handleAlert"
                    :feature-array="feature_array"
                ></mek-energy-pool-feature>
            </div>
            <mek-space-efficiency style="align-self:flex-start;"
                :space_efficiency="efficiencies.space"
                :raw_space="raw_space"
                @update-efficiencies="updateEfficiencies"
            ></mek-space-efficiency>          
        </div>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="5">
                <div slot="col1-row1">Portfolio Size: {{infinite_size ? "Infinite" : selected_portfolio_size.size}}</div>
                <div slot="col1-row2">Damage Capacity: {{damage_capacity}} K</div>

                <div slot="col2-row1">Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>

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
import utility_mixin from "@/mixins/utility_mixin";
import component_computed_mixin from "@/mixins/component_computed_mixin";
import component_methods_mixin from "@/mixins/component_methods_mixin";

export default
{
    name:"mek_energy_pool",
    props:[],
    mixins:[utility_mixin, component_computed_mixin, component_methods_mixin],
    components:
    {
        "mek-energy-pool-pool":()=>import(/* webpackChunkName: "mek-energy-pool-pool" */"./subcomponents/mek_energy_pool-pool.vue"),
        "mek-energy-pool-size":()=>import(/* webpackChunkName: "mek-energy-pool-size" */"./subcomponents/mek_energy_pool-size.vue"),
        "mek-energy-pool-feature":()=>import(/* webpackChunkName: "mek-energy-pool-feature" */"./subcomponents/mek_energy_pool-feature.vue"),

        "mek-space-efficiency":()=>import(/* webpackChunkName: "mek-space-efficiency" */"@/design_components/universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import(/* webpackChunkName: "mek_component-name" */"@/design_components/universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek_save-reset-component" */"@/design_components/universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"../universal/mek_component-stats.vue"),

    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="energy-pool";
        obj.original_component=null;
        obj.component_changed=true;

        obj.damage_capacity=5;

        obj.selected_energy_pool={cost:10,power_available:0,max_power:50,damage_capacity:5};
        obj.selected_portfolio_size={size:3,cost:1};
        obj.selected_morphable=false;

        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.portfolio_size=1;
        obj.cost_multipliers.feature=1;

        obj.hasAlert=false;

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
            this.$set(this.efficiencies,"space",_data);
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
            this.cost_multipliers.portfolio_size=_size.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            this.energy_pool_name;
            this.damage_capacity=this.fragile ? 1 : this.selected_energy_pool.damage_capacity;
        },
        componentSaveReset:function(_action)
        {
            let action=_action=="reset" && this.original_component==null?"clear":_action;
            switch(action)
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
                    this.$set(this,"selected_energy_pool",{cost:10,power_available:0,max_power:50,damage_capacity:5});
                    this.$set(this,"feature_array",[]);
                    this.$set(this,"selected_portfolio_size",{size:3,cost:1});
                    this.selected_morphable=false;
                    this.cost_multipliers.portfolio_size=1;
                    this.cost_multipliers.feature=1;
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
            return_data.component_type="energy-pool";//specific equipment type
            return_data.component_name=this.component_name===null?this.energy_pool_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_energy_pool=JSON.parse(JSON.stringify(this.selected_energy_pool));
            return_data.selected_portfolio_size=JSON.parse(JSON.stringify(this.selected_portfolio_size));
            return_data.selected_portfolio_size.size=this.selected_portfolio_size.size===Infinity?"Infinity":this.selected_portfolio_size.size;
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));

            return_data.selected_morphable=this.selected_morphable

            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.damage_capacity=this.damage_capacity;

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Energy Pool is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.energy_pool_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=this.hasAlert;});
            this.selected_portfolio_size.size=this.selected_portfolio_size.size=="Infinity"
                    ?Infinity:this.selected_portfolio_size.size;
        },
        handleAlert(_alert_status)
        {
            this.hasAlert=_alert_status;
        }
    },
    computed:
    {
        raw_space()
        {
            //core cost prop
            return this.round(this.selected_energy_pool.cost * this.cost_multiplier,2);
        },
        cost:function()
        {
            let subtotal_cost=this.selected_energy_pool.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        energy_pool_name()
        {
            let energy_pool_name="";
            energy_pool_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },energy_pool_name);

            //energy_pool_name+=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";
            energy_pool_name+=this.infinite_size?"Infinite-Portfolio ":"Portfolio-"+this.selected_portfolio_size.size+" ";

            return energy_pool_name+" Energy Pool"; 
        },
        fragile()
        {
            return this.feature_array.some(function(_val)
            {
                if(_val.feature.toLowerCase()=="fragile")
                {
                    return true;
                }
            });
        },
        infinite_size()
        {
            return this.selected_portfolio_size.size===Infinity || this.selected_portfolio_size.size==="__INFINITY__";
        }
    }
};
</script>