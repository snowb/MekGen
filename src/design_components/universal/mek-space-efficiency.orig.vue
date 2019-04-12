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
/* eslint-disable */
import selected_item_mixin from "@/mixins/selected_item_mixin";
import utility_mixin from "@/mixins/utility_mixin";

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
        space_integer:function()
        {
            return this.floor(this.raw_space,0);
        },
        space_fraction:function()
        {
            return this.raw_space - this.space_integer;
        },
        display_space_efficiency:
        {
            get:function()
            {   console.log('sp-eff get')
                return this.selected_value;
            },
            set:function(_value)
            {console.log('sp-eff set', this.space_efficiency.modifier,this.selected_modifier)
                let raw_space=this.raw_space;
                let modified=this.space_efficiency.modifier!==this.selected_modifier;
                
                let emitUpdate=false;
                switch(true)
                {
                    case _value==="":
                    case _value===".":
                    case this.selected_method=="to_space" && _value===0:
                        //do nothing on blank or 0 (for 0.x inputs)
                        break;
                    case !this.isNumeric(_value) && _value!=="" && this.selected_method=="to_space":
                    case this.isNumeric(_value) && this.selected_method=="to_space" && _value>raw_space:
                    case this.isNumeric(_value) && this.selected_method=="to_space" && _value<0.1:
                        this.selected_value=raw_space;
                        this.selected_modifier=0;
                        this.selected_cost=0;
                        emitUpdate=true;
                        break;
                    case !this.isNumeric(_value) && _value!=="" && this.selected_method=="by_space":
                    case this.isNumeric(_value) && this.selected_method=="by_space" && _value<0:
                    case this.isNumeric(_value) && this.selected_method=="by_space" && (raw_space-_value)<0.09:
                        this.selected_value=0;
                        this.selected_modifier=0;
                        this.selected_cost=0;
                        emitUpdate=true;
                        break;
                    case this.selected_method=="to_space":
                        this.selected_value=_value;
                        this.selected_modifier=raw_space-_value;
                        this.selected_cost=this.selected_modifier/2;
                        emitUpdate=true;
                        break;
                    case this.selected_method=="by_space":
                        this.selected_value=_value;
                        this.selected_modifier=_value;
                        this.selected_cost=this.selected_modifier/2;
                        emitUpdate=true;
                        break;
                }
                if(modified && emitUpdate)
                {
                    this.$forceUpdate();
                    this.$emit("update-efficiencies",{cost:this.selected_cost,modifier:this.selected_modifier});
                }
            }
        }
    },
    watch:
    {
        raw_space:function(_newval,_oldval)
        {console.log('r_s')
            if(_newval!=_oldval)
            {
                let prevMethod=this.selected_method;
                this.selectMethod("by_space");
                this.display_space_efficiency=this.space_efficiency.modifier;
                this.selectMethod(prevMethod);
            }
        },
        space_efficiency:function(_newmodifier,_oldmodifier)
        {console.log('s_e.m')
            let prevMethod=this.selected_method;
            this.selectMethod("by_space");
            this.display_space_efficiency=this.space_efficiency.modifier;
            this.selectMethod(prevMethod);
        }
        /*"space_efficiency.modifier":function(_newmodifier,_oldmodifier)
        {
            if(this.isNumeric(_newmodifier) && _newmodifier>=0 && (this.raw_space - _newmodifier)>=0.1)
            {
                this.selected_modifier=_newmodifier;
                this.selected_cost=_newmodifier/2;
            }
            else
            {
                this.selected_modifier=0;
                this.selected_cost=0;
            }
            console.log(this.space_efficiency)
        }*/
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