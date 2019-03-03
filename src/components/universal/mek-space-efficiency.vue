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
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

export default 
{
    name:"mek_space_efficiency",
    props:["space_efficiency","raw_space"],
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
            this.selected_cost=_modifier/2;
            this.selectMethod(this.selected_method);
            this.$emit("update-efficiencies",{modifier:this.selected_modifier,cost:this.selected_cost});
            console.log({modifier:this.selected_modifier,cost:this.selected_cost})
        },
        clean_space_efficiency:function(_value)
        {
            if(_value=="")
            {
                this.display_space_efficiency=-1;
            }
        }
    },
    computed:
    {
        display_space_efficiency:
        {
            get()
            {console.log('s_e.m',this.space_efficiency.modifier,'s_m',this.selected_modifier)
                if(this.space_efficiency.modifier!=this.selected_modifier)
                {
                    this.select_efficiency(this.space_efficiency.modifier);
                }
                return this.selected_value;
            },
            set(_value)
            {
                this.space_efficiency;
                this.raw_space;
                let efficiency=this.isNumeric(_value) ? +_value : +_value.replace(/[^0-9.]/g,"");//clear all none numeric characters
                switch(true)
                {
                    case efficiency<0:
                        efficiency=0;
                        break;
                    case this.selected_method=="to_space":
                        efficiency=this.raw_space - efficiency;
                        break;
                    case this.selected_method=="by_space":
                        //nothing to do
                        break;
                }
                this.select_efficiency(efficiency);
            }
        }
    },
    watch:
    {
        raw_space(_new,_old)
        {
            if(_new!=_old)
            {
                this.display_space_efficiency=this.selected_modifier;
            }
        },
        /* space_efficiency(_new, _old)
        {
            if(_new!=_old)
            {
                let prevMethod=this.selected_method;
                this.selectMethod("by_space");
                //this.display_space_efficiency=_new.modifier;
                this.selectMethod(prevMethod);
            }
        } */
    }
}
/**************** 
 * 
 * something with space efficiencies resetting on load of saved equipment
 * 
 * reset on equipment change is fine, but want to keep it on load 
 * 
*/
</script>