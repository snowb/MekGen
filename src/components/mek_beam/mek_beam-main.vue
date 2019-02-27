<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <div style="align-self:flex-start;">
        beam
        </div>
    </span>
</template>

<script>
import servo_classes_mixin from "../../mixins/servo_classes_mixin";
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";
import mek_component_stats from "../universal/mek_component-stats.vue";

export default
{
    name:"mek_beam",
    props:[],
    mixins:[servo_classes_mixin, selected_item_mixin, utility_mixin],
    components:
    {
        //"mek-projectile-damage":mek_projectile_damage,
        //"mek-projectile-accuracy":mek_projectile_accuracy,
        //"mek-projectile-multi-feed":mek_projectile_multi_feed,
        //"mek-projectile-range-mod":mek_projectile_range_mod,
        //"mek-projectile-burst-value":mek_projectile_burst_value,
        //"mek-projectile-feature":mek_projectile_feature,
        //"mek-projectile-stats":mek_projectile_stats,
        //"mek-projectile-mount-type":mek_projectile_mount_type,

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

        obj.damage_capacity=1;//varies by equipment

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
        /* generic updateProp method 
        updateProperty(_property)
        {
            this.selected_property1.prop1=_property.prop1;
            this.selected_property1.prop2=_property.prop2;
            this.selected_property1.prop3=_property.prop3;
            this.component_changed=true;
            this.damage_capacity=_damage.damage;
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
                    //generic props and key values to reset
                    //this.selected_property1.keyProp=1;
                    //this.selected_property2.keyProp=1;
                    //this.$set(this,"feature_array",[]);
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
            return_data.component_name=this.component_name===null?this.projectile_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            /* generic prop saves 
            return_data.selected_property1=JSON.parse(JSON.stringify(this.selected_property1));
            return_data.selected_property2=JSON.parse(JSON.stringify(this.selected_property2));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));
            */
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
                //generic error comment
                this.$store.commit("alertMessage","Beam is not valid, resetting.");
            }

            for(let _property in _data_object)
            {//exclude computed properties that are auto updated
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
            //core cost prop
            //return this.selected_property1.cost * this.cost_multiplier;
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
        total_cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
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
                    && selectedComponent.component_type=="beam")
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
            let projectile_name=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";

            projectile_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },projectile_name);

            projectile_name=projectile_name+" "+this.selected_mount_type.mount_type+" Gun";

            return projectile_name; 
            */
           return "Beam";
        }
    }
};
</script>