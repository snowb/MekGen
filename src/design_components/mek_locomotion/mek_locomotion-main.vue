<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <mek-component-name :new-component="newComponent" :component-name="component_name||locomotion_name"
            :component-changed="component_changed"
            @update-component-name="updateComponentName"
        ></mek-component-name>
        <span class="mek-inline-flex-row">
            <mek-locomotion-type :locomotion-type="selected_locomotion_type" 
                @update-locomotion-type="updateLocomotionType" @alert-generated="handleAlert"
                style="align-self:flex-start;"
            ></mek-locomotion-type>
            <mek-locomotion-class @update-locomotion-class="updateLocomotionClass" @alert-generated="handleAlert"
                :locomotion-type="selected_locomotion_type.type" :locomotion-class="selected_locomotion_class"
            ></mek-locomotion-class>
            <span class="mek-inline-flex-col">
                <mek-component-stats :cols="4" :rows="6">
                    <div slot="col1-row1">Total Damage Capacity: {{damage_capacity}}</div>
                    <div slot="col1-row2">Total Weight: {{weight}} tons</div>
                    <div slot="col1-row3">Total Cost: {{cost}} tons</div>
                </mek-component-stats>
                <mek-save-reset-component @save-reset-component="componentSaveReset"></mek-save-reset-component>
            </span>
        </span>
    </span>
</template>

<script>
import utility_mixin from "@/mixins/utility_mixin.js";
import component_methods_mixin from "@/mixins/component_methods_mixin";
import component_computed_mixin from "@/mixins/component_computed_mixin";

export default
{
    name:"mek_locomotion",
    props:[],
    mixins:
        [
            utility_mixin, 
            component_methods_mixin, 
            component_computed_mixin
        ],
    components:
    {
        "mek-locomotion-type":()=>import(/* webpackChunkName: "mek_locomotion-type" */"./subcomponents/mek_locomotion-type.vue"),
        "mek-locomotion-class":()=>import(/* webpackChunkName: "mek_locomotion-class" */"./subcomponents/mek_locomotion-class.vue"),

        "mek-component-name":()=>import(/* webpackChunkName: "mek-component-name" */"@/design_components/universal/mek-component-name.vue"),
        "mek-save-reset-component":()=>import(/* webpackChunkName: "mek-save-reset-component" */"@/design_components/universal/mek-save-reset-component.vue"),
        "mek-component-stats":()=>import(/* webpackChunkName: "mek_component-stats" */"@/design_components/universal/mek_component-stats.vue"),
    },
    data:function()
    {
        let obj={};
        obj.uuid=null;
        obj.component_name=null;
        obj.custom_component_name=false;
        obj.component_category="equipment";
        obj.component_type="locomotion";
        obj.original_component=null;
        obj.component_changed=true;

        obj.selected_locomotion_type={type:"Wheels"};
        obj.selected_locomotion_class={name:"Superlight",cost:1,kills:1};

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
        updateLocomotionType(_locomotion_type)
        {   
            this.component_type=_locomotion_type.type;
            this.$set(this,"selected_locomotion_type",_locomotion_type);
            this.component_changed=true;
        },
        updateLocomotionClass(_locomotion_class)
        {
            this.$set(this,"selected_locomotion_class",_locomotion_class);
            this.component_changed=true;
        },
        ingest_data(_data_object)
        {
            let alertMessage="Bad data, resetting to 1K Wheels.";
            this.universal_ingest_data(_data_object,alertMessage);
            if(!this.custom_component_name)
                {//reset component_name if component generated
                    this.$set(this,"component_name",null);
                }
            this.$nextTick(()=>{this.component_changed=this.hasAlert;});
        },
        output_data()
        {
            let return_data={};
            this.uuid=this.uuid===null ? this.create_uuid() : this.uuid;
            return_data.uuid=this.uuid;
            return_data.component_category="equipment";
            return_data.component_type="locomotion";
            return_data.component_name=this.component_name===null?this.locomotion_name:this.component_name;
            return_data.custom_component_name=this.custom_component_name;
            return_data.selected_locomotion_type=this.selected_locomotion_type;
            return_data.selected_locomotion_class=this.selected_locomotion_class;

            return_data.damage_capacity=return_data.selected_locomotion_class.kills;
            return_data.cost=this.cost;
            return_data.weight=this.weight;

            this.$nextTick(()=>{this.component_changed=this.hasAlert;});
            this.original_component=JSON.stringify(return_data);
            return JSON.parse(this.original_component);
        },
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
                    this.selected_locomotion_type.type="Wheels";
                    this.$set(this,"selected_locomotion_class",{name:"Superlight",cost:1,kills:1});
                    this.component_name=null;
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
        locomotion_name()
        {
            return this.selected_locomotion_class.kills+"K "+this.selected_locomotion_type.type;
        },
        cost()
        {
            return this.selected_locomotion_class.cost;
        },
        damage_capacity()
        {
            return this.selected_locomotion_class.kills;
        },
        weight()
        {
            return this.round(this.damage_capacity/2,2);
        },
    }
};
</script>