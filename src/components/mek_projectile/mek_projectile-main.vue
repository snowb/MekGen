<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||projectile_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        
        <div class="mek-inline-flex-row">
            <mek-projectile-damage @update-damage="updateDamage" :damage="selected_damage"></mek-projectile-damage>
            <mek-projectile-accuracy 
                    @update-accuracy="updateAccuracy" 
                    :accuracy="selected_accuracy"
                ></mek-projectile-accuracy>
            <mek-projectile-burst-value 
                    @update-burst-value="updateBurstValue" 
                    :burst-value="selected_burst_value"
                ></mek-projectile-burst-value>
            <div class="mek-inline-flex-row">
                <div class="mek-inline-flex-col">
                    <mek-projectile-multi-feed 
                        @update-multi-feed="updateMultiFeed" 
                        :multi-feed="selected_multi_feed"
                    ></mek-projectile-multi-feed>
                    <!-- not using for now
                    mek-projectile-mount-type 
                        @update-mount-type="updateMountType" 
                        :mount-type="selected_mount_type"
                    ></mek-projectile-mount-type-->
                </div>
                <mek-projectile-range-mod style="align-self:baseline;"
                    @update-range-mod="updateRangeMod"
                    :range-mod="selected_range_mod"
                    :base-range="selected_damage.range"
                ></mek-projectile-range-mod>
                <mek-projectile-feature style="align-self:baseline;"
                        @update-feature="updateFeature"
                        :feature-array="feature_array"
                        :burst-value="selected_burst_value.burst_value"
                    ></mek-projectile-feature>
                <mek-space-efficiency style="align-self:baseline;"
                    :space_efficiency="efficiencies.space"
                    :raw_space="raw_space"
                    @update-efficiencies="updateEfficiencies"
                ></mek-space-efficiency>
            </div>
            
                
        </div>
        <div class="mek-inline-flex-row">
            <mek-projectile-stats :damage="selected_damage" :accuracy="selected_accuracy"
                :cost-multiplier="cost_multiplier" :feature-array="feature_array" :weight="weight"
                :space-cost="space_cost" :raw-space="raw_space" :total-cost="total_cost"
                :damage_capacity="damage_capacity"
            ></mek-projectile-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

import mek_projectile_damage from "./subcomponents/mek_projectile-damage.vue";
import mek_projectile_accuracy from "./subcomponents/mek_projectile-accuracy.vue";
import mek_projectile_multi_feed from "./subcomponents/mek_projectile-multi-feed.vue";
import mek_projectile_range_mod from "./subcomponents/mek_projectile-range-mod.vue";
import mek_projectile_burst_value from "./subcomponents/mek_projectile-burst-value.vue";
import mek_projectile_feature from "./subcomponents/mek_projectile-feature.vue";
import mek_projectile_stats from "./subcomponents/mek_projectile-stats.vue";
//import mek_projectile_mount_type from "./subcomponents/mek_projectile-mount-type.vue";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";

export default
{
    name:"mek_projectile",
    props:[],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-projectile-damage":mek_projectile_damage,
        "mek-projectile-accuracy":mek_projectile_accuracy,
        "mek-projectile-multi-feed":mek_projectile_multi_feed,
        "mek-projectile-range-mod":mek_projectile_range_mod,
        "mek-projectile-burst-value":mek_projectile_burst_value,
        "mek-projectile-feature":mek_projectile_feature,
        "mek-projectile-stats":mek_projectile_stats,
        //"mek-projectile-mount-type":mek_projectile_mount_type,

        "mek-space-efficiency":mek_space_efficiency,
        "mek-component-name":mek_component_name,
        "mek-save-reset-component":mek_save_reset_component
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

        obj.selected_damage={damage:1,cost:1,range:3};
        obj.selected_accuracy={accuracy:0,cost:1};
        obj.selected_range_mod={range_mod:1,cost:1};
        obj.selected_multi_feed={feeds:1,cost:1};
        obj.selected_burst_value={burst_value:1,cost:1};

        obj.damage_capacity=1;

        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.accuracy=1;
        obj.cost_multipliers.feature=1;
        obj.cost_multipliers.multi_feed=1;
        obj.cost_multipliers.burst_value=1;
        obj.cost_multipliers.range_mod=1;

        //obj.selected_mount_type={mount_type:"Servo-Mounted"};
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
        updateDamage(_damage)
        {
            this.selected_damage.damage=_damage.damage;
            this.selected_damage.cost=_damage.cost;
            this.selected_damage.range=_damage.range;
            this.component_changed=true;
            this.damage_capacity=_damage.damage;
        },
        updateAccuracy(_accuracy)
        {
            this.selected_accuracy.accuracy=_accuracy.accuracy;
            this.selected_accuracy.cost=_accuracy.cost;
            this.cost_multipliers.accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateMultiFeed(_multi_feed)
        {
            this.selected_multi_feed.feeds=_multi_feed.feeds;
            this.selected_multi_feed.cost=_multi_feed.cost;
            this.cost_multipliers.multi_feed=_multi_feed.cost;
            this.component_changed=true;
        },
        updateBurstValue(_burst_value)
        {
            this.selected_burst_value.burst_value=_burst_value.burst_value;
            this.selected_burst_value.cost=_burst_value.cost;
            this.cost_multipliers.burst_value=_burst_value.cost;
            this.component_changed=true;
        },
        updateRangeMod(_range_mod)
        {
            this.selected_range_mod.range_mod=_range_mod.range_mod;
            this.selected_range_mod.cost=_range_mod.cost;
            this.cost_multipliers.range_mod=_range_mod.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            this.projectile_name;
        },
        /* updateMountType(_mountType)
        {
            this.$set(this,"selected_mount_type",_mountType);
            this.projectile_name;
        }, */
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
                    this.selected_damage.damage=1;
                    this.selected_accuracy.accuracy=1;
                    this.selected_range_mod.range_mod=1;
                    this.selected_multi_feed.feeds1;
                    this.selected_burst_value.burst_value=1;
                    //this.mount_type.mount_type="Servo-Mounted";
                    this.$set(this,"feature_array",[]);
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
            return_data.component_type="projectile";
            return_data.component_name=this.component_name===null?this.projectile_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_damage=JSON.parse(JSON.stringify(this.selected_damage));
            return_data.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));
            return_data.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod));
            return_data.selected_multi_feed=JSON.parse(JSON.stringify(this.selected_multi_feed));
            return_data.selected_burst_value=JSON.parse(JSON.stringify(this.selected_burst_value));
            //return_data.selected_mount_type=JSON.parse(JSON.stringify(this.selected_mount_type));

            return_data.cost=this.total_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.final_damage=this.final_damage;
            return_data.damage_capacity=this.damage_capacity;

            this.$nextTick(()=>{this.component_changed=false;});

            return return_data;
        },
        ingest_data(_data_object)
        {
            this.original_component=JSON.stringify(_data_object);//store a copy as a JSON object for 'reset' purposes
            if(_data_object===null)
            {
                this.componentSaveReset("clear");
                this.$store.commit("alertMessage","Projectile is not valid, resetting.");
            }

            for(let _property in _data_object)
            {
                if(["weight","cost","cost_multiplier","final_damage"].includes(_property))
                {
                    continue;
                }
                if(typeof _data_object[_property]==="object" && !Array.isArray(_data_object[_property]))
                {
                    for(let _sub_property in _data_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],_data_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(_data_object[_property]))
                {
                    this.$set(this,_property,_data_object[_property]);
                }
                else
                {
                    this.$set(this,_property,_data_object[_property]);
                }
                if(this.component_name==this.melee_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            }
            this.$nextTick(()=>{this.component_changed=false;});
        },
    },
    computed:
    {
        raw_space()
        {
            return this.round(this.selected_damage.cost * this.cost_multiplier,2);
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
            return this.round(cost_multiplier,2);
        },
        total_cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        weight:function()
        {
            return this.round((this.damage_capacity / 2),2);
        },
        newComponent()
        {
            let selectedComponent=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));
            
            if(typeof selectedComponent!=="undefined" && selectedComponent!==null)
            {
                if(selectedComponent.uuid!==this.uuid 
                    && selectedComponent.component_category=="equipment" 
                    && selectedComponent.component_type=="projectile")
                {
                    this.ingest_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
        projectile_name()
        {
            let projectile_name=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";

            projectile_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },projectile_name);

            //projectile_name=projectile_name+" "+this.selected_mount_type.mount_type+" Gun";
            projectile_name=projectile_name.length>0?projectile_name+" Gun":"Gun";

            return projectile_name;
        }
    }
};
</script>