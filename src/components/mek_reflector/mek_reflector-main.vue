<template>
    <span class="mek-inline-flex-col">
        <mek-component-name :new-component="newComponent" :component-name="component_name||reflector_name"
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
            <mek-component-stats :cols="3" :rows="3">
                <div slot="col1-row1">Quality Value: {{selected_reflector.quality_value}}</div>

                <div slot="col2-row1">Base Space: {{raw_space}}</div>
                <div slot="col2-row2">Space: {{space_cost}}</div>
                <div slot="col2-row3">Weight: {{round(weight,2)}} tons</div> 

                <div slot="col3-row1">Base Cost: {{selected_reflector.cost}}</div>
                <div slot="col3-row2" style="font-weight:bold;">Total Cost: {{cost}}</div>
            </mek-component-stats>
            <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
        </div>
    </span>

</template>
<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

/* import mek_space_efficiency from "../universal/mek-space-efficiency.vue";
import mek_component_name from "../universal/mek-component-name.vue";
import mek_save_reset_component from "../universal/mek-save-reset-component.vue";
import mek_component_stats from "../universal/mek_component-stats.vue";
 */
import mek_sub_component_table from "../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_reflector",
    props:[],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-space-efficiency":()=>import("../universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import("../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import("../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import("../universal/mek_component-stats.vue"),

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
        obj.component_category="equipment";
        obj.component_type="reflector";
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
            return_data.component_name=this.component_name===null?this.reflector_name:this.component_name;

            return_data.efficiencies=JSON.parse(JSON.stringify(this.efficiencies));

            return_data.selected_reflector=JSON.parse(JSON.stringify(this.selected_reflector));

            return_data.cost=this.cost;

            return_data.weight=this.weight;

            this.$nextTick(()=>{this.component_changed=false;});
            this.original_component=JSON.stringify(return_data);
            return return_data;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Reflector is not valid, resetting.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(this.component_name==this.reflector_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
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
                        this.ingest_data(JSON.parse(this.original_component));
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
            this.$set(this.efficiencies,"space",_data);
            this.component_changed=true;
        },
    },
    computed:
    {//unique nature of shields component (3-in-1), cannot use universal component_computed_mixin
    //is quite 'cut down' compared to other components
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
                    && selectedComponent.component_category==this.component_category
                    && selectedComponent.component_type==this.component_type)
                {
                    this.ingest_data(selectedComponent);
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
            return this.round((this.reflector_table[this.reflector_index].cost / 2),2);
        },
        space_cost()
        {
            return this.selected_reflector.cost - this.efficiencies.space.modifier;
        },
        cost:function()
        {
            return this.selected_reflector.cost + this.efficiencies.space.cost;
        },
        reflector_name()
        {
            return "QV-"+this.selected_reflector.quality_value+" Reflector";
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
