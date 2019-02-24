<template>
    <span class="mek-inline-flex-col">
        <mek-component-name :new-component="newComponent" :component-name="component_name||'Reflector'"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <mek-sub-component-table
                :items="reflector_table"
                :headers="{quality_value:'QV',cost:'Cost'}"
                name="Quality" flow="col" :showHeaders="true"
                :selectedIndices="reflector_index"
                @update-selected-indices="select_reflector"
            ></mek-sub-component-table>
            <span class="mek-flex-col no-margin">
                <mek-space-efficiency
                    :space_efficiency="efficiencies.space"
                    :raw_space="raw_space"
                    @update-efficiencies="updateEfficiencies"
                ></mek-space-efficiency>
            </span>
        </div>
        <div class="mek-inline-flex-row">
            <mek-reflector-stat
                :reflector="selected_reflector"
                :space_cost="space_cost" :weight="weight"
                :total_cost="total_cost" :raw_space="raw_space"
            ></mek-reflector-stat>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>

</template>
<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import mek_reflector_stat from "./subcomponents/mek_reflector-stat.vue";

import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";

import mek_sub_component_table from "../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_reflector",
    props:[],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-reflector-stat":mek_reflector_stat,
        "mek-space-efficiency":mek_space_efficiency,
        "mek-component-name":mek_component_name,
        "mek-save-reset-component":mek_save_reset_component,
        "mek-sub-component-table":mek_sub_component_table
    },
    data()
    {
        let obj={}
        obj.reflector_table=Array.apply({}, Array(10));
        
         obj.reflector_table.forEach((_el,_index)=>
        {
            let quality_value=_index+1;
            let cost=quality_value * quality_value;
            obj.reflector_table[_index]={quality_value:quality_value,cost:cost};
        },this);

        obj.uuid=null;
        obj.component_name=null;
        obj.component_category="reflector";
        obj.component_type=null;
        obj.original_component=null;
        obj.component_changed=true;
        obj.selected_reflector={quality_value:1, cost:1};

        obj.efficiencies={};
        obj.efficiencies.space={};
        obj.efficiencies.space.cost=0;
        obj.efficiencies.space.modifier=0;
        return obj;
    },
    methods:
    {
        select_reflector(_reflector)
        {
            this.$set(this,"selected_reflector",this.reflector_table[_reflector]);
            this.component_changed=true;
        },
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.component_changed=true;
        },
        output_reflector_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="reflector";
            return_data.component_name=this.component_name===null?"Reflector":this.component_name;

            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_reflector=JSON.parse(JSON.stringify(this.selected_reflector));

            return_data.cost=this.total_cost;

            return_data.weight=this.weight;

            this.$nextTick(()=>{this.component_changed=false;});

            return return_data;
        },
        ingest_reflector_data(_reflector_object)
        {
            this.original_component=JSON.stringify(_reflector_object);//store a copy as a JSON object for 'reset' purposes
            if(_reflector_object===null)
            {
                this.componentSaveReset("clear");
                this.$store.commit("alertMessage","Reflector is not valid, resetting.");
            }

            for(let _property in _reflector_object)
            {
                if(["weight","cost"].includes(_property))
                {
                    continue;
                }
                if(typeof _reflector_object[_property]==="object" && !Array.isArray(_reflector_object[_property]))
                {
                    for(let _sub_property in _reflector_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],_reflector_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(_reflector_object[_property]))
                {
                    this.$set(this,_property,_reflector_object[_property]);
                }
                else
                {
                    this.$set(this,_property,_reflector_object[_property]);
                }
                if(this.component_name=="Reflector")
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            }
            this.$nextTick(()=>{this.component_changed=false;});
        },
        componentSaveReset:function(_action)
        {
            switch(_action)
            {
                case "save":
                    this.$store.commit('saveComponent',this.output_reflector_data());
                    break;
                case "reset":
                    if(this.original_component!==null)
                    {
                        this.ingest_reflector_data(JSON.parse(this.original_component));
                    }
                    break;
                case "clear":
                    this.uuid=null;
                    this.efficiencies.space.modifier=0;
                    this.component_name=null;
                    this.$store.commit("saveComponent",null);
                    break;
            }
        },
        updateEfficiencies:function(_data)
        {
            this.efficiencies.space.cost=_data.cost;
            this.efficiencies.space.modifier=_data.modifier;
            this.component_changed=true;
        },
    },
    computed:
    {
        reflector_index()
        {
            let reflector_index=0;
            this.reflector_table.some((_val,_index)=>
            {
                if(this.selected_reflector.quality_value==_val.quality_value)
                {
                    reflector_index=_index;
                    return true;
                }
            });

            let update=false;
            switch(true)
            {
                case this.selected_reflector.quality_value!=this.reflector_table[reflector_index].quality_value:
                case this.selected_reflector.cost!=this.reflector_table[reflector_index].cost:
                    update=true;       
            }
            if(update)
            {   
                this.select_reflector(reflector_index);
            }

            return [reflector_index];
        },
        newComponent()
        {
            let selectedComponent=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));
            if(typeof selectedComponent!=="undefined" && selectedComponent!==null)
            {
                if(selectedComponent.uuid!==this.uuid 
                    && selectedComponent.component_category=="equipment" 
                    && selectedComponent.component_type=="reflector")
                {
                    this.ingest_reflector_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
        raw_space()
        {
            return this.reflector_table[this.reflector_index].cost;
        },
        weight()
        {
            return (this.reflector_table[this.reflector_index].cost / 2);
        },
        space_cost()
        {
            return this.selected_reflector.cost - this.efficiencies.space.modifier;
        },
        total_cost:function()
        {
            return this.selected_reflector.cost + this.efficiencies.space.cost;
        }
    }
}
</script>
<style scoped>
th
{
    padding-left:10px;
    padding-right:10px;
}
#left
{
    padding-left: 0px;
}
#right
{
    padding-right: 0px;
}
</style>
