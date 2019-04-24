<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||projectile_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        
        <div class="mek-inline-flex-row">
            <mek-projectile-damage @update-damage="updateDamage" @alert-generated="handleAlert"
                :damage="selected_damage"
            ></mek-projectile-damage>
            <mek-projectile-accuracy 
                @update-accuracy="updateAccuracy" @alert-generated="handleAlert"
                :accuracy="selected_accuracy"
            ></mek-projectile-accuracy>
            <mek-projectile-burst-value 
                    @update-burst-value="updateBurstValue" @alert-generated="handleAlert"
                    :burst-value="selected_burst_value"
                ></mek-projectile-burst-value>
            <div class="mek-inline-flex-row">
                <div class="mek-inline-flex-col">
                    <mek-projectile-multi-feed 
                        @update-multi-feed="updateMultiFeed" @alert-generated="handleAlert"
                        :multi-feed="selected_multi_feed"
                    ></mek-projectile-multi-feed>
                    <!-- not using for now
                    mek-projectile-mount-type 
                        @update-mount-type="updateMountType" 
                        :mount-type="selected_mount_type"
                    ></mek-projectile-mount-type-->
                </div>
                <mek-projectile-range-mod style="align-self:baseline;"
                    @update-range-mod="updateRangeMod" @alert-generated="handleAlert"
                    :range-mod="selected_range_mod"
                    :base-range="selected_damage.range"
                ></mek-projectile-range-mod>
                <mek-projectile-feature style="align-self:baseline;"
                        @update-feature="updateFeature" @alert-generated="handleAlert"
                        :feature-array="feature_array"
                        :burst-value="selected_burst_value.burst_value"
                    ></mek-projectile-feature>
                <mek-space-efficiency style="align-self:baseline;"
                    :space_efficiency="efficiencies.space"
                    :raw_space="raw_space" component_name="Mek-Projectile"
                    @update-efficiencies="updateEfficiencies"
                ></mek-space-efficiency>
            </div>                
        </div>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="5">
                <div slot="col1-row1">Kills: {{selected_damage.damage}} K</div>
                <div slot="col1-row2">Damage Capacity: {{damage_capacity}} K</div>
                <div slot="col1-row3">Final Range: {{selected_damage.range * selected_range_mod.range_mod}}</div>

                <div slot="col2-row1">Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>

                <div slot="col3-row1">Base Space: {{raw_space}}</div>
                <div slot="col3-row2">Space: {{space_cost}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>
                <div slot="col3-row4">&nbsp;</div>
                <div slot="col3-row5">Standard Ammo Cost: {{round(cost*0.01,2)}}/shot</div>

                <div slot="col4-row1">Base Cost: {{selected_damage.cost}}</div>
                <div slot="col4-row2">Multiplier: x{{cost_multiplier}}</div>
                <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "@/mixins/selected_item_mixin";
import utility_mixin from "@/mixins/utility_mixin";
import component_computed_mixin from "@/mixins/component_computed_mixin";
import component_methods_mixin from "@/mixins/component_methods_mixin";

export default
{
    name:"mek_projectile",
    props:[],
    mixins:[selected_item_mixin, utility_mixin, component_computed_mixin,component_methods_mixin],
    components:
    {
        "mek-projectile-damage":()=>
        import(/* webpackChunkName: "mek_projectile-damage" */"./subcomponents/mek_projectile-damage.vue"),
        "mek-projectile-accuracy":()=>
        import(/* webpackChunkName: "mek_projectile-accuracy" */"./subcomponents/mek_projectile-accuracy.vue"),
        "mek-projectile-multi-feed":()=>
        import(/* webpackChunkName: "mek_projectile-multi-feed" */"./subcomponents/mek_projectile-multi-feed.vue"),
        "mek-projectile-range-mod":()=>
        import(/* webpackChunkName: "mek_projectile-range-mod" */"./subcomponents/mek_projectile-range-mod.vue"),
        "mek-projectile-burst-value":()=>
        import(/* webpackChunkName: "mek_projectile-burst-value" */"./subcomponents/mek_projectile-burst-value.vue"),
        "mek-projectile-feature":()=>
        import(/* webpackChunkName: "mek_projectile-feature" */"./subcomponents/mek_projectile-feature.vue"),
        //"mek-projectile-mount-type":mek_projectile_mount_type,

        "mek-space-efficiency":()=>
        import(/* webpackChunkName: "mek-space-efficiency" */"@/design_components/universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>
        import(/* webpackChunkName: "mek-component-name" */"@/design_components/universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>
        import(/* webpackChunkName: "mek-save-reset-component" */"@/design_components/universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>
        import(/* webpackChunkName: "mek_component-stats" */"@/design_components/universal/mek_component-stats.vue"),
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.custom_component_name=false;
        obj.component_category="equipment";
        obj.component_type="projectile";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_damage={damage:1,cost:1,range:3};
        obj.selected_accuracy={accuracy:0,cost:1};
        obj.selected_range_mod={range_mod:1,cost:1, range:3};
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

        obj.hasAlert=false;

        //obj.selected_mount_type={mount_type:"Servo-Mounted"};
        return obj;
    },
    methods:
    {
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.custom_component_name=true;
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
        updateMultiFeed(_multi_feed)
        {
            this.$set(this,"selected_multi_feed",_multi_feed);
            this.cost_multipliers.multi_feed=_multi_feed.cost;
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
            this.$set(this,"selected_range_mod",_range_mod)
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
                        break;
                    }
                    // eslint-disable-next-line
                case "clear":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.$set(this,"selected_damage",{damage:1,cost:1,range:3});
                    this.$set(this,"selected_accuracy",{accuracy:0,cost:1});
                    this.$set(this,"selected_range_mod",{range_mod:1,cost:1, range:3});
                    this.$set(this,"selected_multi_feed",{feeds:1,cost:1});
                    this.$set(this,"selected_burst_value",{burst_value:1,cost:1});
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
            return_data.custom_component_name=this.custom_component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_damage=JSON.parse(JSON.stringify(this.selected_damage));
            return_data.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));
            return_data.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod));
            return_data.selected_multi_feed=JSON.parse(JSON.stringify(this.selected_multi_feed));
            return_data.selected_burst_value=JSON.parse(JSON.stringify(this.selected_burst_value));
            //return_data.selected_mount_type=JSON.parse(JSON.stringify(this.selected_mount_type));

            return_data.cost=this.cost;
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
            let alertMessage="Projectile is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(!this.custom_component_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=this.hasAlert;});
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
            return this.round(this.selected_damage.cost * this.cost_multiplier,2);
        },
        cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost,2);
        },
        projectile_name()
        {
            let projectile_name=this.selected_burst_value.burst_value>1?"Burst-"+this.selected_burst_value.burst_value+" ":"";

            projectile_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.feature+" ";
            },projectile_name);

            //projectile_name=projectile_name+" "+this.selected_mount_type.mount_type+" Gun";
            projectile_name+=this.selected_damage.damage+"K Gun";

            return projectile_name.replace(/\s+/g," ");
        }
    }
};
</script>