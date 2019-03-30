<template>
        <span class="mek-inline-flex-col" style="width:100%;" v-if="mounted">
            <mek-component-name :new-component="newComponent" :component-name="component_name||beam_name"
                :component-changed="component_changed"
                @update-component-name="updateComponentName"
            ></mek-component-name>
            <div class="mek-inline-flex-row">
                <mek-beam-damage @update-damage="updateDamage" :damage="selected_damage"></mek-beam-damage>
                <mek-beam-accuracy 
                    @update-accuracy="updateAccuracy" 
                    :accuracy="selected_accuracy"
                ></mek-beam-accuracy>
            </div>
            <div class="mek-inline-flex-row">
                <div class="mek-flex-col no-margin">
                    <mek-beam-burst-value 
                        @update-burst-value="updateBurstValue" 
                        :burst-value="selected_burst_value"
                    ></mek-beam-burst-value>
                    <mek-beam-shots 
                        @update-shots="updateShots" 
                        :shots="selected_shots" :mag-fed="mag_fed"
                    ></mek-beam-shots>
                </div>
                <mek-beam-range-mod style="align-self:start;"
                    @update-range-mod="updateRangeMod"
                    :range-mod="selected_range_mod" :anti-missile="anti_missile"
                    :base-range="selected_damage.range"
                ></mek-beam-range-mod>
                <div class="mek-inline-flex-col">
                    <mek-beam-warm-up-time v-if="show_warm_up_time"
                        @update-warm-up-time="updateWarmUpTime"
                        :warm-up-time="selected_warm_up_time"
                    ></mek-beam-warm-up-time>
                    <mek-beam-wide-angle
                        @update-wide-angle="updateWideAngle"
                        :wide-angle="selected_wide_angle"
                    ></mek-beam-wide-angle>
                    <mek-space-efficiency style="align-self:baseline;"
                        :space_efficiency="efficiencies.space"
                        :raw_space="raw_space"
                        @update-efficiencies="updateEfficiencies"
                    ></mek-space-efficiency>
                </div>
                <div class="mek-inline-flex-row">           
                    <mek-beam-feature style="align-self:baseline;"
                            @update-feature="updateFeature"
                            :feature-array="feature_array"
                            :burst-value="selected_burst_value.burst_value"
                        ></mek-beam-feature>
                </div>
            </div>
            <div class="mek-inline-flex-row">
                <mek-component-stats :cols="4" :rows="4">
                    <div slot="col1-row1">Kills: {{selected_damage.damage}} K</div>
                    <div slot="col1-row2">Damage Capacity: {{damage_capacity}} K</div>
                    <div slot="col1-row3" v-if="selected_shots.shots==0">Shutdown: {{selected_damage.damage}} turns</div>
                    <div slot="col1-row3">Final Range: {{selected_damage.range * selected_range_mod.range_mod}}</div>

                    <div slot="col2-row1">Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>

                    <div slot="col3-row1">Base Space: {{round(raw_space,2)}}</div>
                    <div slot="col3-row2">Space: {{space_cost}}</div>
                    <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>
                    <div slot="col3-row4" v-if="mag_fed">E-Mag: +1CP, +1SP</div>

                    <div slot="col4-row1">Base Cost: {{selected_damage.cost}}</div>
                    <div slot="col4-row2">Multiplier: x{{round(cost_multiplier,2)}}</div>
                    <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
                </mek-component-stats>
                <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
            </div>
        </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";
import component_computed_mixin from "../../mixins/component_computed_mixin";
import component_methods_mixin from "../../mixins/component_methods_mixin";

export default
{
    name:"mek_beam",
    props:[],
    mixins:[selected_item_mixin, utility_mixin, component_computed_mixin, component_methods_mixin],
    components:
    {
        "mek-beam-damage":()=>import(/* webpackChunkName: "mek_beam-damage" */"./subcomponents/mek_beam-damage.vue"),
        "mek-beam-accuracy":()=>import(/* webpackChunkName: "mek_beam-accuracy" */"./subcomponents/mek_beam-accuracy.vue"),
        "mek-beam-burst-value":()=>import(/* webpackChunkName: "mek_beam-burst-value" */"./subcomponents/mek_beam-burst-value.vue"),
        "mek-beam-range-mod":()=>import(/* webpackChunkName: "mek_beam-range-mod" */"./subcomponents/mek_beam-range-mod.vue"),
        "mek-beam-shots":()=>import(/* webpackChunkName: "mek_beam-shots" */"./subcomponents/mek_beam-shots.vue"),
        "mek-beam-warm-up-time":()=>import(/* webpackChunkName: "mek_beam-warm-up-time" */"./subcomponents/mek_beam-warm-up-time.vue"),
        "mek-beam-wide-angle":()=>import(/* webpackChunkName: "mek_beam-wide-angle" */"./subcomponents/mek_beam-wide-angle.vue"),
        "mek-beam-feature":()=>import(/* webpackChunkName: "mek_beam-feature" */"./subcomponents/mek_beam-feature.vue"),

        "mek-space-efficiency":()=>import(/* webpackChunkName: "mek-space-efficiency" */"../universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import(/* webpackChunkName: "mek-component-name" */"../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek-save-reset-component" */"../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek-component-stats" */"../universal/mek_component-stats.vue")
    },
    data:function()
    {
        let obj={};
        obj.mounted=false;

        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="beam";
        obj.original_component=null;
        obj.component_changed=true;

        obj.damage_capacity=1;//varies by equipment

        obj.selected_damage={damage:1,cost:1.5,range:4};
        obj.selected_burst_value={burst_value:1,cost:1};
        obj.selected_range_mod={range_mod:1,cost:1,range:4};
        obj.selected_accuracy={accuracy:1,cost:1};
        obj.selected_shots={shots:"__INFINITY__",cost:1};
        obj.selected_warm_up_time={time:0,cost:1};
        obj.selected_wide_angle={angle:"__NIL__",cost:1};
        
        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.accuracy=1;
        obj.cost_multipliers.feature=1;
        obj.cost_multipliers.shots=1;
        obj.cost_multipliers.wide_angle=1;
        obj.cost_multipliers.warm_up_time=1;
        obj.cost_multipliers.burst_value=1;

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
        updateDamage(_damage)
        {
            this.$set(this,"selected_damage",_damage);
            this.component_changed=true;
            this.damage_capacity=_damage.damage;
        },
        updateAccuracy(_accuracy)
        {
            this.$set(this,"selected_accuracy",_accuracy);
            this.cost_multipliers.accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateBurstValue(_burst_value)
        {
            this.$set(this,"selected_burst_value",_burst_value);
            this.cost_multipliers.burst_value=_burst_value.cost;
            this.component_changed=true;
        },
        updateRangeMod(_range_mod)
        {
            this.$set(this,"selected_range_mod",_range_mod);
            this.cost_multipliers.range_mod=_range_mod.cost;
            this.component_changed=true;
        },
        updateShots(_shots)
        {
            this.$set(this,"selected_shots",_shots);
            this.cost_multipliers.shots=_shots.cost;
            this.component_changed=true;
        },
        updateWarmUpTime(_warm_up_time)
        {
            this.$set(this,"selected_warm_up_time",_warm_up_time);
            this.cost_multipliers.warm_up_time=_warm_up_time.cost;
            this.component_changed=true;
        },
        updateWideAngle(_wide_angle)
        {
            this.$set(this,"selected_wide_angle",_wide_angle);
            this.cost_multipliers.wide_angle=_wide_angle.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            this.projectile_name;
            this.damage_capacity=this.fragile ? 1 : this.selected_damage.damage;
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
                    this.$set(this,"feature_array",[]);
                    this.$set(this,"selected_damage",{damage:1,cost:1.5,range:4});
                    this.$set(this,"selected_burst_value",{burst_value:1,cost:1});
                    this.$set(this,"selected_range_mod",{range_mod:1,cost:1,range:4});
                    this.$set(this,"selected_accuracy",{accuracy:1,cost:1});
                    this.$set(this,"selected_shots",{shots:"__INFINITY__",cost:1});
                    this.$set(this,"selected_warm_up_time",{time:0,cost:1});
                    this.$set(this,"selected_wide_angle",{angle:"__NIL__",cost:1});
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
            return_data.component_type="beam";//specific equipment type
            return_data.component_name=this.component_name===null?this.beam_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_damage=JSON.parse(JSON.stringify(this.selected_damage));
            return_data.selected_burst_value=JSON.parse(JSON.stringify(this.selected_burst_value));
            //return_data.selected_burst_value.burst_value=this.selected_burst_value.burst_value===Infinity?"Infinity":this.selected_burst_value.burst_value;
            return_data.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod));
            return_data.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy));
            return_data.selected_shots=JSON.parse(JSON.stringify(this.selected_shots));
            return_data.selected_warm_up_time=JSON.parse(JSON.stringify(this.selected_warm_up_time));
            return_data.selected_wide_angle=JSON.parse(JSON.stringify(this.selected_wide_angle));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));

            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.final_damage=this.final_damage;
            return_data.damage_capacity=this.damage_capacity;

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Beam is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.beam_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=false;});
        },
    },
    computed:
    {
        raw_space()
        {
            //core cost prop
            return this.selected_damage.cost * this.cost_multiplier;
        },
        cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;
            subtotal_cost += this.mag_fed?1:0;

            return this.round(subtotal_cost,2);
        },
        beam_name()
        {
            let isInfiniteBurst=this.selected_burst_value.burst_value=="__INFINITY__";
            let isBurst=this.selected_burst_value.burst_value!=1 && !isInfiniteBurst;
            let beam_name=  isBurst?"Burst-"+this.selected_burst_value.burst_value+" ":
                            isInfiniteBurst?"Infinite-Burst ":
                            "";
            beam_name+=this.selected_wide_angle.angle!="__NIL__"?"Wide-Angle ":"";

            let isHydro=false;
            let isMegaBeam=false;
            beam_name=this.feature_array.reduce((_name,_val)=>
            {
                switch(_val.feature.toLowerCase())
                {
                    case "hydro":
                        isHydro=true;
                        return _name;
                    case "mega-beam":
                        isMegaBeam=true;
                        return _name;
                }
                return _name+_val.feature+" ";
            },beam_name);

            beam_name+= isHydro?" Hydro":
                        isMegaBeam?" Mega-Beam":
                        " Beam";
            beam_name=beam_name.trim();
            beam_name=beam_name.replace(/\s+/g," ");

            return beam_name; 
        },
        mag_fed()
        {
            return this.feature_array.some(function(_val)
            {
                if(_val.feature.toLowerCase()=="mag-fed")
                {
                    return true;
                }
            });
        },
        show_warm_up_time()
        {
            return !this.mag_fed && this.selected_shots.shots=="__INFINITY__";
        },
        anti_missile()
        {
            return this.feature_array.some(function(_val)
            {
                if(_val.feature.toLowerCase()=="anti-missile")
                {
                    return true;
                }
            });
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
        }
    },
    mounted()
    {
        this.mounted=true;
    }
};
</script>