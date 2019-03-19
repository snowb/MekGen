<template>
    <span class="mek-inline-flex-col">
        <mek-component-name :new-component="newComponent" :component-name="component_name||reflector_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <div class="mek-inline-flex-row">
            <mek-sub-component-table
                :items="reflector_table" :pkey="pkey" :selectedKeys="selected_keys"
                :headers="{quality_value:'QV',cost:'Cost'}"
                name="Quality" flow="pkey-col" :showHeaders="true"
                @update-selected-data="select_reflector"
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
import component_methods_mixin from "../../mixins/component_methods_mixin";
import component_computed_mixin from "../../mixins/component_computed_mixin";
import alerts_mixin from "../../mixins/alerts_mixin";

import {reflector_data_table, reflector_validate, has_feature, get_feature} 
    from "../data_table_modules/mek_reflector/mek_reflector-data-module.js";

export default 
{
    name:"mek_reflector",
    props:[],
    mixins:[selected_item_mixin, utility_mixin, component_methods_mixin, component_computed_mixin, alerts_mixin],
    components:
    {
        "mek-space-efficiency":()=>import(/* webpackChunkName: "mek-space-efficiency" */"../universal/mek-space-efficiency.vue"),
        "mek-component-name":()=>import(/* webpackChunkName: "mek_component-name" */"../universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek_save-reset-component" */"../universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"../universal/mek_component-stats.vue"),

        "mek-sub-component-table":()=>import("../universal/mek_sub-component-table.vue")
    },
    data()
    {
        let obj={}
        obj.pkey="quality_value";

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

        obj.alerts=[];
        return obj;
    },
    methods:
    {
        select_reflector(_reflector)
        {
            this.$set(this,"selected_reflector",JSON.parse(JSON.stringify(_reflector)));
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
            return_data.damage_capacity=JSON.parse(JSON.stringify(this.damage_capacity));

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
            let action=_action=="reset" && this.original_component==null?"clear":_action;
            switch(action)
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
        raw_space()
        {
            return this.selected_reflector.cost;
        },
        weight()
        {
            return this.round((this.selected_reflector.cost / 2),2);
        },
        damage_capacity()
        {
            return this.selected_reflector.quality_value;
        },
        cost:function()
        {
            return this.selected_reflector.cost + this.efficiencies.space.cost;
        },
        reflector_name()
        {
            return "QV-"+this.selected_reflector.quality_value+" Reflector";
        },
        reflector_table()
        {
            return reflector_data_table;
        },
        selected_keys()
        {
            let default_data=get_feature(this.pkey,1);

            if(this.selected_reflector===undefined)
            {
                this.select_reflector(default_data);
            }
            let has_reflector=has_feature(this.pkey,this.selected_reflector[this.pkey]);
            let json_data=JSON.stringify(this.selected_reflector);
            if(!has_reflector)
            {
                this.addAlert("Mek_Reflector: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_reflector(default_data);
                return [default_data[this.pkey]];
            }
            else if(!reflector_validate(this.selected_reflector))
            {
                this.addAlert("Mek_Reflector: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_reflector(get_feature(this.selected_reflector[this.pkey]));
            }
            return [this.selected_reflector[this.pkey]];
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
