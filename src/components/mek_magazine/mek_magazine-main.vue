<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||magazine_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <mek-magazine-select-gun :selected-gun="selected_gun" @update-gun="updateGun"></mek-magazine-select-gun>
        <span class="mek-flex-row">
            <mek-magazine-ammo-list :ammo-array="selected_ammo" @update-ammo="updateAmmo" :has-blast="hasBlast"></mek-magazine-ammo-list>
            <span class="mek-flex-col no-margin">
                <mek-magazine-shots :shots="selected_shots" @update-shots="updateShots" style="align-self:baseline;"></mek-magazine-shots>
                <mek-magazine-stats :total-cost="cost" :ammo-list="selected_ammo" :cost="base_cost"
                    :weight="weight" :space-cost="space_cost" :cost-multiplier="cost_multiplier" :shots="selected_shots"
                ></mek-magazine-stats>
                <mek-save-reset-component style="align-self:baseline;" @save-reset-component="componentSaveReset"></mek-save-reset-component>
            </span>
        </span>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

import mek_magazine_select_gun from "./subcomponents/mek_magazine-select-gun.vue";
import mek_magazine_ammo_list from "./subcomponents/mek_magazine-ammo-list.vue";
import mek_magazine_shots from "./subcomponents/mek_magazine-shots.vue";
import mek_magazine_stats from "./subcomponents/mek_magazine-stats.vue";

import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";

export default
{
    name:"mek_magazine",
    props:[],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-magazine-select-gun":mek_magazine_select_gun,
        "mek-magazine-ammo-list":mek_magazine_ammo_list,
        "mek-magazine-shots":mek_magazine_shots,
        "mek-magazine-stats":mek_magazine_stats,

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

        obj.selected_gun={name:"",cost:1,uuid:null};
        obj.selected_ammo=[{type:"High-Ex",cost:1}];
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
            this.$set(this,"selected_ammo",_selected_ammo);
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
                    this.$set(this,"selected_ammo",[{type:"High-Ex",cost:1}]);
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
            return_data.selected_ammo=JSON.parse(JSON.stringify(this.selected_ammo));
            return_data.selected_shots=JSON.parse(JSON.stringify(this.selected_shots));
            return_data.hasBlast=JSON.parse(JSON.stringify(this.hasBlast));

            return_data.cost=this.cost;
            return_data.base_cost=this.base_cost;
            return_data.cost_multiplier=this.cost_multiplier;
            return_data.weight=this.weight;
            return_data.damage_capacity=this.damage_capacity;

            this.$nextTick(()=>{this.component_changed=false;});

            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Magazine is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
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
        space_cost:function()
        {
            return this.round(this.base_cost,2);
        },
        cost_multiplier()
        {
            let cost_multiplier=1;
            for(let multi in this.selected_ammo)
            {
                cost_multiplier*=this.selected_ammo[multi].cost;
            }
            return cost_multiplier;
        },
        base_cost()
        {
            return this.round(this.selected_gun.cost*0.01*this.selected_shots,2);
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
                    && selectedComponent.component_type=="magazine")
                {//needs specific equipment type
                    this.ingest_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
        magazine_name()
        {
            this.selected_gun;
            let magazine_name=this.selected_ammo.reduce((_name,_val)=>
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
            return this.selected_ammo.some((_val)=>
            {
                return /blast/gi.test(_val.type);
            });
        }
    }
};
</script>