<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||melee_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <mek-melee-damage @update-damage="updateDamage" @alert-generated="handleAlert"
                :damage="selected_damage"
            ></mek-melee-damage>
            <mek-melee-accuracy @update-accuracy="updateAccuracy" @alert-generated="handleAlert"
                :accuracy="selected_accuracy"
            ></mek-melee-accuracy>
        </div>
        <div class="mek-inline-flex-row">
            <mek-melee-feature
                    @update-feature="updateFeature" @alert-generated="handleAlert"
                    :feature-array="feature_array"
            ></mek-melee-feature>
            <mek-melee-entangle-range v-if="isEntangle" style="align-self:start"
                :base_damage="selected_damage.damage" :range_modifier="entangle.range_modifier" :damage_modifier="entangle.damage_modifier"
                @update-damage-and-range="updateDamageAndRange" @alert-generated="handleAlert"
            ></mek-melee-entangle-range>
            <mek-space-efficiency style="align-self:start;"
                :space_efficiency="efficiencies.space"
                :raw_space="raw_space" component_name="Mek-Melee"
                @update-efficiencies="updateEfficiencies"
            ></mek-space-efficiency>
        </div>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="4">
                <div slot="col1-row1">{{entangle.damage_modifier!=0?"Base":""}} Kills: {{selected_damage.damage}} K</div>
                <div slot="col1-row2" v-if="entangle.damage_modifier!=0">Kills: {{selected_damage.damage - entangle.damage_modifier}} K</div>
                <div slot="col1-row3" v-if="entangle.range_modifier!=0">Range: {{entangle.range_modifier}} hex</div>
                <div slot="col1-row4">Damage Capacity: {{damage_capacity}} K</div>

                <div slot="col2-row1">Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>

                <div slot="col3-row1">Base Space: {{raw_space}}</div>
                <div slot="col3-row2">Space: {{space_cost}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>

                <div slot="col4-row1">Base Cost: {{selected_damage.cost}}</div>
                <div slot="col4-row2">Multiplier: x{{cost_multiplier}}</div>
                <div slot="col4-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset" :active-buttons="activeButtons"
            ></mek-save-reset-component>
        </div>
    </span>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin";
import component_computed_mixin from "@/mixins/component_computed_mixin";
import component_methods_mixin from "@/mixins/component_methods_mixin";

export default
{
    name:"mek_melee",
    props:[""],
    mixins:[utility_mixin, component_computed_mixin, component_methods_mixin],
    components:
    {
        "mek-melee-damage":()=>
        import(/* webpackChunkName: "mek_melee-damage" */"./subcomponents/mek_melee-damage.vue"),
        "mek-melee-accuracy":()=>
        import(/* webpackChunkName: "mek_melee-accuracy" */"./subcomponents/mek_melee-accuracy.vue"),
        "mek-melee-feature":()=>
        import(/* webpackChunkName: "mek_melee-feature" */"./subcomponents/mek_melee-feature.vue"),
        "mek-melee-entangle-range":()=>
        import(/* webpackChunkName: "mek_melee-entangle-range" */"./subcomponents/mek_melee-entangle-range.vue"),

        "mek-space-efficiency":()=>
        import(/* webpackChunkName: "mek-space-efficiency" */"@/design_components/universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>
        import(/* webpackChunkName: "mek-component-name" */"@/app_components/universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>
        import(/* webpackChunkName: "mek-save-reset-component" */"@/app_components/universal/mek-save-reset-component.vue"),
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
        obj.component_type="melee";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_damage={damage:1,cost:0.5};
        obj.selected_accuracy={accuracy:0,cost:1};

        obj.damage_capacity=1;

        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.selected_accuracy=1;
        obj.cost_multipliers.feature_array=1;

        obj.entangle={};
        obj.entangle.range_modifier=0;
        obj.entangle.damage_modifier=0;

        obj.hasAlert=false;

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
            this.selected_damage.damage=_damage.damage;
            this.selected_damage.cost=_damage.cost;
            this.component_changed=true;
            this.damage_capacity=_damage.damage;
        },
        updateAccuracy(_accuracy)
        {
            this.selected_accuracy.accuracy=_accuracy.accuracy;
            this.selected_accuracy.cost=_accuracy.cost;
            this.cost_multipliers.selected_accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature_array=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            if(!this.isEntangle)
            {
                this.entangle.range_modifier=0;
                this.entangle.damage_modifier=0;
            }

            this.melee_name;
            this.component_changed=true;
        },
        updateDamageAndRange(_modifier)
        {
            this.entangle.range_modifier=_modifier.range;
            this.entangle.damage_modifier=_modifier.damage;
            this.component_changed=true;
        },
        output_melee_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="melee";
            return_data.component_name=this.component_name===null?this.melee_name:this.component_name;
            return_data.custom_component_name=this.custom_component_name;

            return_data.cost_multipliers=this.cost_multipliers;
            return_data.efficiencies=this.efficiencies;

            return_data.selected_damage=this.selected_damage;
            return_data.selected_accuracy=this.selected_accuracy;
            return_data.feature_array=this.feature_array;

            return_data.cost=this.cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.final_damage=this.final_damage;
            return_data.damage_capacity=this.selected_damage.damage;

            if(this.isEntangle)
            {
                return_data.entangle={};
                return_data.entangle.damage_modifier=this.entangle.damage_modifier;
                return_data.entangle.range_modifier=this.entangle.range_modifier;
            }

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return JSON.parse(this.original_component);
        },
        ingest_data(_data_object)
        {
            let alertMessage="Melee is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(!this.custom_component_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=this.hasAlert;});
        },
        componentSaveReset:function(_action)
        {
            let action=_action=="reset" && this.original_component==null?"new":_action;
            switch(action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_melee_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_data(JSON.parse(this.original_component));
                        break;
                    }
                    // eslint-disable-next-line
                case "delete":
                    if(this.uuid)
                    {
                        this.$store.commit("deleteComponent",
                            {
                                category:this.component_category,
                                type:this.component_type,
                                uuid:this.uuid
                            });
                        this.uuid=null;
                        this.$emit("updateMSMKey");
                    }
                    // eslint-disable-next-line
                case "new":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.$set(this,"feature_array",[]);
                    this.$set(this,"selected_damage",{damage:1,cost:0.5});
                    this.$set(this,"selected_accuracy",{accuracy:0,cost:1});
                    this.$set(this,"entangle",{range_modifier:0,damage_modifier:0});
                    this.cost_multipliers.selected_accuracy=1;
                    this.cost_multipliers.feature_array=1;
                    this.$store.commit("saveComponent",null);
                    break;
            }
        },
        handleAlert(_alert_status)
        {
            this.hasAlert=_alert_status;
        }
    },
    computed:
    {
        final_damage()
        {
            return this.selected_damage.damage - this.entangle.damage_modifier;
        },
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
        isEntangle()
        {
            return this.feature_array.some((_val)=>
            {
                return _val.feature.toLowerCase()=="entangle";
            });
        },
        melee_name()
        {
            let name=this.feature_array.reduce((_name,_val)=>
            {
                _name+=_val.name+" ";
                return _name;
            },"");
            name+=this.selected_damage.damage+"K ";
            return name+"Melee";
        },
        activeButtons()
        {
            return "save,reset,new"+(this.uuid!==null?",delete":"");
        }
    }
};
</script>