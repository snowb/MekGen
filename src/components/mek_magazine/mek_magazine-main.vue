<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||magazine_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <mek-magazine-select-gun :selected-gun="selected_gun" @update-gun="updateGun"></mek-magazine-select-gun>
        <span class="mek-flex-row">
            <mek-magazine-ammo-list :ammo-array="feature_array" @update-ammo="updateAmmo" :has-blast="hasBlast"></mek-magazine-ammo-list>
            <span class="mek-flex-col no-margin">
                <mek-magazine-shots :shots="selected_shots" @update-shots="updateShots" style="align-self:baseline;"></mek-magazine-shots>
                <mek-component-stats :cols="3" :rows="3">
                    <div slot="col1-row1">Shots: {{selected_shots}}</div>
                    <div slot="col1-row1">Ammo Type(s):<div style="max-width:150px;margin-left:10px;">{{ammo_list}}</div></div>
                    <div slot="col2-row1">Space: {{space_cost}}</div>
                    <div slot="col2-row2">Weight: {{round(weight,2)}} tons</div>
                    <div slot="col3-row1">Base Cost: {{cost}}</div>
                    <div slot="col3-row2">Multiplier: x{{cost_multiplier}}</div>
                    <div slot="col3-row3" style="font-weight:bold;">Total Cost: {{cost}}</div>
                </mek-component-stats>
                <mek-save-reset-component style="align-self:baseline;" @save-reset-component="componentSaveReset"></mek-save-reset-component>
            </span>
        </span>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";
import component_computed_mixin from "../../mixins/component_computed_mixin";
import component_methods_mixin from "../../mixins/component_methods_mixin";

export default
{
    name:"mek_magazine",
    props:[],
    mixins:[selected_item_mixin, utility_mixin, component_computed_mixin, component_methods_mixin],
    components:
    {
        "mek-magazine-select-gun":()=>import("./subcomponents/mek_magazine-select-gun.vue"),
        "mek-magazine-ammo-list":()=>import("./subcomponents/mek_magazine-ammo-list.vue"),
        "mek-magazine-shots":()=>import("./subcomponents/mek_magazine-shots.vue"),

        "mek-component-name":()=>import("../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import("../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import("../universal/mek_component-stats.vue")
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="equipment";
        obj.component_type="magazine";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_gun={name:"",cost:1,uuid:null};
        obj.selected_ammo=[{type:"High-Ex",cost:1}];
        obj.feature_array=[{type:"High-Ex",cost:1}];

        obj.cost_multipliers={};
        obj.cost_multipliers["High-Ex"]=1;

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.modifier=0;//have to set to use universal component_computed_mixin

        obj.selected_shots=1;

        return obj;
    },
    methods:
    {
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.component_changed=true;
        },
        updateGun(_selected_gun,_gun_name_change)
        {
            this.$set(this,"selected_gun",_selected_gun);
            this.magazine_name;
            this.component_changed=true;
            this.gun_name_change=_gun_name_change;
        },
        updateAmmo(_selected_ammo)
        {
            this.$set(this,"feature_array",_selected_ammo);
            let cost_multiplier=_selected_ammo.reduce((_newobj,_val)=>
            {
                _newobj[_val.type]=_val.cost;
                return _newobj;
            },{});
            this.$set(this,"cost_multipliers",cost_multiplier);
            this.component_changed=true;
        },
        updateShots(_selected_shots)
        {
            this.selected_shots=+_selected_shots;
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
                    this.component_name=null;
                    this.$set(this,"selected_gun",{name:"",cost:1,uuid:null})
                    this.$set(this,"feature_array",[{type:"High-Ex",cost:1}]);
                    this.$set(this,"selected_shots",1);
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
            return_data.component_type="magazine";//specific equipment type
            return_data.component_name=this.component_name===null?this.magazine_name:this.component_name;

            return_data.selected_gun=JSON.parse(JSON.stringify(this.selected_gun));
            return_data.feature_array=JSON.parse(JSON.stringify(this.feature_array));
            return_data.selected_shots=JSON.parse(JSON.stringify(this.selected_shots));
            return_data.hasBlast=JSON.parse(JSON.stringify(this.hasBlast));

            return_data.cost=this.cost;
            return_data.base_cost=this.base_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.damage_capacity=this.damage_capacity;

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Magazine is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.magazine_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>
                {
                    if(this.gun_name_change)
                    {
                        this.component_changed=true;
                    }
                    else
                    {
                        this.component_changed=false;
                    }
                    
                });
        },
    },
    computed:
    {
        component_list()
        {
            return this.$store.getters.getComponentByType("equipment","projectile");
        },
        base_cost()
        {
            return this.round(this.selected_gun.cost*0.01*this.selected_shots,2);
        },
        raw_space()
        {
            return this.base_cost;
        },
        cost:function()
        {
            let subtotal_cost=this.base_cost * this.cost_multiplier;

            return this.round(subtotal_cost,2);
        },
        damage_capacity()
        {
            return this.space_cost;
        },
        magazine_name()
        {
            this.selected_gun;
            let magazine_name=this.feature_array.reduce((_name,_val)=>
            {
                return _name+_val.type+" ";
            },"");
            magazine_name=magazine_name.trim();
            let gun_name=this.selected_gun.name==""?"":this.selected_gun.name+" - ";
            magazine_name=gun_name+" "+magazine_name+" Ammo ("+this.selected_shots+")";

            return magazine_name.replace(/\s+/," ");
        },
        hasBlast()
        {
            return this.feature_array.some((_val)=>
            {
                return /blast/gi.test(_val.type);
            });
        },
        ammo_list()
        {
            return this.feature_array.reduce(function(_string, _val, _index)
            {
                _string+=_index>0 ? ", " : "";
                _string+=_val.type;
                return _string;
            },"");
        }
    }
};
</script>