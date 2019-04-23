<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Efficiency</div>
                <div>
                    <span class="clickable" style="padding:3px 10px 3px 10px;"
                        :class="selectedItem('selected_method','to_space','selected_item','non_selected_item')"
                        @click="selectMethod('to_space')"
                    >
                        To Spaces
                    </span>
                    <span class="clickable" style="padding:3px 10px 3px 10px;"
                        :class="selectedItem('selected_method','by_space','selected_item','non_selected_item')"
                        @click="selectMethod('by_space')"
                    >
                        By Spaces
                    </span>
                </div>
                <div style="margin-top:5px;">
                    <span style="font-weight:bold;">
                        {{selected_method=='to_space'?'To Spaces: ':'By Spaces: '}}
                    </span>
                    <span>
                        <input type="text" size="1"
                            v-model="display_space_efficiency"
                            @blur="clean_space_efficiency($event.target.value)"
                        /> {{display_space_efficiency==1 ? 'space' : 'spaces'}}
                    </span>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "@/mixins/selected_item_mixin";
import utility_mixin from "@/mixins/utility_mixin";

import {validate_efficiency} from "@/data_table_modules/universal/mek_space-efficiency-data-module";

export default 
{
    name:"mek_space_efficiency",
    props:["space_efficiency","raw_space","component_name"],
    mixins:[selected_item_mixin, utility_mixin],
    data:function()
    {
        let obj={};
        obj.selected_modifier=0;
        obj.selected_cost=0;
        obj.selected_method="to_space";
        obj.selected_value=this.raw_space;
        return obj;
    },
    methods:
    {
        selectMethod:function(_method)
        {
            this.selected_method=_method;
            if(_method=="by_space")
            {
                this.selected_value=this.selected_modifier;
            }
            else if(_method=="to_space")
            {
                this.selected_value=this.raw_space-this.selected_modifier;
            }
        },
        select_efficiency(_modifier)
        {
            this.selected_modifier=_modifier>=this.raw_space ? 0 : _modifier;
            this.selected_cost=this.selected_modifier/2;
            this.selectMethod(this.selected_method);
            this.$emit("update-efficiencies",{modifier:this.selected_modifier,cost:this.selected_cost});
        },
        clean_space_efficiency:function(_value)
        {
            this.display_space_efficiency=+_value;
        }
    },
    computed:
    {
        display_space_efficiency:
        {
            get()
            {

                let validated_efficiency=validate_efficiency(this.space_efficiency,this.raw_space,this.component_name)
                if(validated_efficiency.update)
                {
                    this.$emit("update-efficiencies",validated_efficiency.data);
                }
                //do something with the alerts
                if(this.selected_method=="to_space")
                {
                    return this.raw_space - validated_efficiency.data.modifier;
                }

                return validated_efficiency.data.modifier;
            },
            set(_value)
            {
                this.space_efficiency;
                this.raw_space;
                let efficiency=this.isNumeric(_value) ? +_value : +_value.replace(/[^0-9.]/g,"");//clear all none numeric characters
                let update=false;
                let inwork=/[0-9]+\.$/g.test(_value);
                switch(true)
                {
                    case inwork:
                        //is a number with trailing decimal, do nothing
                        break;
                    case efficiency<0:
                        efficiency=0;
                        update=true;
                        break;
                    case this.selected_method=="to_space":
                        efficiency=this.raw_space - efficiency;
                        update=true;
                        break;
                    case this.selected_method=="by_space":
                        update=true;
                        break;
                }
                if(update)
                {
                    this.select_efficiency(efficiency);
                }
            }
        }
    },
}
/**************** 
 * 
 * something with space efficiencies resetting on load of saved equipment
 * 
 * reset on equipment change is fine, but want to keep it on load 
 * 
*/
</script>
<style scoped>
.metallic_background_small
{
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%);
    height: 100%;
    width: 100%;
    padding:5px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 0px 2px, #fff 0px 0px 5px 2px;
    padding-top:34px;
}
.subsection_container
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.subsection_header_small
{
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    top: -32px;
    font-family: Arial Black, sans-serif;
    font-size: 110%;
    border: 1px solid black;
    padding: 2px 10px;
    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset, rgba(0,0,0,0.5) 1px 1px 1px 3px inset;
    color: #ddd;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    background-color: rgba(0,0,0,0.2);
    white-space: nowrap;
}
.non_selected_item
{
    background-color: #aaa !important;
    color: #222 !important;
    font-weight: bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px #222 !important;
}
.selected_item
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding-top: 2px;
    padding-bottom: 2px;
}
</style>
