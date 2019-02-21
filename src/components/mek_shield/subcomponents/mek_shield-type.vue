<template>
    <span class="mek-flex-col" style="align-self:center;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Type</div>
                <div v-for="(item,index) in type_table" :key="'shield-type-'+index"
                    class="clickable" 
                    @click="select_type(item)" 
                    :class="selectedItem('type',item.toLowerCase(),'selected_item')"
                    style="padding-left:10px; padding-right:10px;"    
                >{{item}}</div>
                <div style="visibility:hidden;height:0px;">{{invisible_pad(type_table)}}</div>
            </div>
        </div>
    </span>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name:"mek_shield_type",
    props:["type"],
    mixins:[selected_item_mixin, utility_mixin],
    data:function()
    {
        let obj={};
        obj.type_table=["Standard","Active","Reactive"];
        return obj;
    },
    methods:
    {
        select_type:function(_selected_type)
        {
            this.$emit("update-type",_selected_type.toLowerCase());
        }
    }
}
</script>
