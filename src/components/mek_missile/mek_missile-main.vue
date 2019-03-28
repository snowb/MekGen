<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||missile_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        
        <div class="mek-inline-flex-row">
            <mek-missile-damage @update-damage="updateDamage" :damage="selected_damage"></mek-missile-damage>
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
                <div class="mek-inline-flex-col">
                    <mek-missile-smart :smart="selected_smart" v-if="!is_mine && !is_bomb"
                        @update-smart="updateSmart"
                    ></mek-missile-smart>
                    <mek-missile-skill v-if="selected_smart.smart>0 && (!is_mine && !is_bomb)" :skill="selected_skill"
                        @update-skill="updateSkill"
                    ></mek-missile-skill>
                    <mek-space-efficiency style="align-self:baseline;"
                        :space_efficiency="efficiencies.space"
                        :raw_space="raw_space"
                        @update-efficiencies="updateEfficiencies"
                    ></mek-space-efficiency>
                </div>
                <mek-missile-blast-radius :blast_radius="selected_blast_radius"
                    @update-blast-radius="updateBlastRadius"
                ></mek-missile-blast-radius>
                <mek-missile-feature style="align-self:baseline;"
                    @update-feature="updateFeature"
                    :feature-array="feature_array" :smart-missile="selected_smart.smart>0"
                    :blast-radius="selected_blast_radius.blast_radius"
                ></mek-missile-feature>
            </div>                
        </div>
        <div class="mek-inline-flex-row">
            <mek-component-stats :cols="4" :rows="5">
                <div slot="col1-row1">Kills: {{selected_damage.damage}} K</div>
                <div slot="col1-row2">Damage Capacity: {{damage_capacity}} K</div>
                <div slot="col1-row3">Final Range: {{selected_damage.range * selected_range_mod.range_mod}}</div>
                <div slot="col1-row4" v-if="has_duration">Duration: {{smoke_scatter_duration}} rounds</div>

                <div slot="col2-row1">Feature(s):<div style="max-width:150px;margin-left:10px;">{{feature_list}}</div></div>

                <div slot="col3-row1">Base Space: {{raw_space}}</div>
                <div slot="col3-row2">Space: {{space_cost}}</div>
                <div slot="col3-row3">Weight: {{round(weight,2)}} tons</div>

                <div slot="col4-row1">Base Cost: {{selected_damage.cost}}</div>
                <div slot="col4-row2">Multiplier: x{{cost_multiplier}}</div>
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
    name:"mek_missile",
    props:[],
    mixins:[selected_item_mixin, utility_mixin, component_computed_mixin, component_methods_mixin],
    components:
    {
        "mek-missile-damage":()=>import(/* webpackChunkName: "mek-missile-damage" */"./subcomponents/mek_missile-damage.vue"),
        "mek-missile-pack-size":()=>import(/* webpackChunkName: "mek-missile-pack-size" */"./subcomponents/mek_missile-pack-size.vue"),
        "mek-missile-accuracy":()=>import(/* webpackChunkName: "mek-missile-accuracy" */"./subcomponents/mek_missile-accuracy.vue"),
        "mek-missile-range-mod":()=>import(/* webpackChunkName: "mek-missile-range-mod" */"./subcomponents/mek_missile-range-mod.vue"),
        "mek-missile-smart":()=>import(/* webpackChunkName: "mek-missile-smart" */"./subcomponents/mek_missile-smart.vue"),
        "mek-missile-skill":()=>import(/* webpackChunkName: "mek-missile-skill" */"./subcomponents/mek_missile-skill.vue"),
        "mek-missile-blast-radius":()=>import(/* webpackChunkName: "mek-missile-blast-radius" */"./subcomponents/mek_missile-blast-radius.vue"),
        "mek-missile-feature":()=>import(/* webpackChunkName: "mek-missile-feature" */"./subcomponents/mek_missile-feature.vue"),

        "mek-space-efficiency":()=>import(/* webpackChunkName: "mek-space-efficiency" */"../universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import(/* webpackChunkName: "mek_component-name" */"../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek_save-reset-component" */"../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"../universal/mek_component-stats.vue"),

    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="missile";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_damage={damage:1,cost:0.1,range:4};
        obj.selected_pack_size=1;
        obj.selected_accuracy={accuracy:0,cost:1};
        obj.selected_range_mod={range_mod:1,cost:1,id:6};
        obj.selected_smart={smart:"__NIL__",cost:1};
        obj.selected_skill={skill:6,cost:1};
        obj.selected_blast_radius={blast_radius:"__NIL__",cost:1};
        obj.smoke_scatter_duration=null;

        obj.damage_capacity=this.round(1/15,2);

        obj.feature_array=[];

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;

        obj.cost_multipliers={};
        obj.cost_multipliers.accuracy=1;
        obj.cost_multipliers.feature=1;
        obj.cost_multipliers.smart=1;
        obj.cost_multipliers.skill=1;
        obj.cost_multipliers.range_mod=1;
        obj.cost_multipliers.blast_radius=1;

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
            this.damage_capacity=this.round(this.selected_pack_size*_damage.damage/15,2);

            if(this.has_duration)
            {
                this.$set(this,"smoke_scatter_duration",this.round(this.selected_damage.damage/2,0));
            }
        },
        updatePackSize(_missiles)
        {
            let size=_missiles>0 ? _missiles : 1;
            this.$set(this,"selected_pack_size",size);
            this.component_changed=true;
            this.damage_capacity=this.round((this.selected_damage.damage*_missiles)/15,1);
        },
        updateAccuracy(_accuracy)
        {
            this.$set(this,"selected_accuracy",_accuracy);
            this.cost_multipliers.accuracy=_accuracy.cost;
            this.component_changed=true;
        },
        updateRangeMod(_range_mod)
        {//console.log(_range_mod)
            this.$set(this,"selected_range_mod",_range_mod);
            this.cost_multipliers.range_mod=_range_mod.cost;
            this.selected_range_mod.type=typeof _range_mod.type!=="undefined" ? _range_mod.type : null;

            if(this.is_mine || this.is_bomb)
            {//update smart and skill if is mine or bomb
                this.updateSmart({smart:"__NIL__",cost:1});
                this.updateSkill({skill:6,cost:1});
            }
            if(this.is_mine)
            {//reset accuracy if is a mine
                this.updateAccuracy({accuracy:0,cost:1});
            }
            this.component_changed=true;
        },
        updateSmart(_smart)
        {
            this.$set(this,"selected_smart",_smart);
            this.cost_multipliers.smart=_smart.cost;
            this.component_changed=true;
        },
        updateSkill(_skill)
        {
            this.$set(this,"selected_skill",_skill);
            this.cost_multipliers.smart=_skill.cost;
            this.component_changed=true;
        },
        updateBlastRadius(_blast)
        {
            this.$set(this,"selected_blast_radius",_blast);
            this.cost_multipliers.blast_radius=_blast.cost;
            this.component_changed=true;
        },
        updateFeature(_featureArray)
        {
            this.$set(this,"feature_array",_featureArray);
            this.cost_multipliers.feature=this.feature_array.reduce((_multi,_val)=>{return _multi*=_val.cost},1);
            this.missile_name;

            if(this.has_duration)
            {
                this.$set(this,"smoke_scatter_duration",this.round(this.selected_damage.damage/2,0));
            }
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
                    //generic props and key values to reset
                    //this.selected_property1.keyProp=1;
                    //this.selected_property2.keyProp=1;
                    //this.$set(this,"feature_array",[]);
                    this.selected_damage.damage=1;
                    this.selected_pack_size=1;
                    this.selected_accuracy.accuracy=0;
                    this.selected_range_mod.range_mod=1;
                    this.selected_smart.smart="__NIL__";
                    this.selected_skill.skill=6;
                    this.selected_blast_radius.blast_radius="__NIL__";
                    this.smoke_scatter_duration=null;
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
            return_data.component_type="missile";//specific equipment type
            return_data.component_name=this.component_name===null?this.missile_name:this.component_name;

            return_data.cost_multipliers=JSON.parse(JSON.stringify(this.cost_multipliers));
            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            /* generic prop saves 
            return_data.selected_property1=JSON.parse(JSON.stringify(this.selected_property1));
            return_data.selected_property2=JSON.parse(JSON.stringify(this.selected_property2));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));
            */
            return_data.selected_damage=JSON.parse(JSON.stringify(this.selected_damage));
            return_data.selected_pack_size=this.selected_pack_size;
            return_data.selected_accuracy=JSON.parse(JSON.stringify(this.selected_accuracy));
            return_data.selected_range_mod=JSON.parse(JSON.stringify(this.selected_range_mod));
            return_data.selected_smart=JSON.parse(JSON.stringify(this.selected_smart));
            return_data.selected_skill=JSON.parse(JSON.stringify(this.selected_skill));
            return_data.selected_blast_radius=JSON.parse(JSON.stringify(this.selected_blast_radius));

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
            let alertMessage="Missile is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.missile_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=false;});
        },
        has_feature(_feature)
        {
            return this.feature_array.some((_val)=>
            {
                return _val.feature.toLowerCase()==_feature.toLowerCase();
            });
        }
    },
    computed:
    {
        raw_space()
        {
            //core cost prop
            let cost_multiplier=this.has_feature("nuclear") ? this.cost_multiplier/1000 : this.cost_multiplier;

            return this.round(this.selected_damage.cost * cost_multiplier * this.selected_pack_size,2);
        },
        cost:function()
        {
            let subtotal_cost=this.selected_damage.cost * this.cost_multiplier;
            subtotal_cost += this.efficiencies.space.cost;

            return this.round(subtotal_cost * this.selected_pack_size,2);
        },
        missile_name()
        {
            let missile_name=this.has_feature("nuclear") ? "Nuclear ":"";

            missile_name+=this.selected_smart.smart!="__NIL__"?"Smart ":"";

            missile_name=this.feature_array.reduce((_name,_val)=>
            {
                if(_val.feature.toLowerCase()=="nuclear")
                {
                    return _name;
                }
                return _name+_val.feature+" ";
            },missile_name);

            let type=   this.is_mine ? " Mine" :
                        this.is_bomb ? " Bomb" :
                        " Missile"

            missile_name=missile_name+type+" Pack";
            
            return missile_name+" ("+this.selected_pack_size+")";
        },
        is_bomb()
        {
            return typeof this.selected_range_mod.type!=="undefined" &&
                            this.selected_range_mod.type!==null && 
                            this.selected_range_mod.type.toLowerCase()=="bomb";
        },
        is_mine()
        {
            return typeof this.selected_range_mod.type!=="undefined" && 
                            this.selected_range_mod.type!==null && 
                            this.selected_range_mod.type.toLowerCase()=="mine";
        },
        has_duration()
        {
            let has_duration=this.has_feature("smoke") || this.has_feature("scatter") || this.has_feature("smoke-scatter");
            return has_duration
        }
    }
};
</script>