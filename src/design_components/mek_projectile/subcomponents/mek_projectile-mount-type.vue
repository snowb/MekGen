<template>
    <!--span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small" style="white-space:nowrap;">Mount Type</div>
                <table style="margin:auto;">
                    <tr><td colspan=3 style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(mount_type,index) in mount_type_table" :key="'mount-type-'+index"
                        class="clickable"
                        :class="selectedItem('selected_mount_type_index',index,'selected_item')"
                        @click="select_mount_type(mount_type)"
                    >
                        <td>{{mount_type.mount_type}}</td>
                    </tr>
                    <tr style="visibility:hidden;height:0px;line-height:0px;">
                        <td>SERVO MOUNTED</td>
                    </tr>
                </table>
            </div>
        </div>
    </span-->
    <mek-sub-component-table
        :items="mount_type_table"
        :headers="{mount_type:'Mount Type'}"
        :showHeaders="false"
        :selected-indices="selected_mount_type_index"
        @update-selected-indices="select_mount_type"
        name="Mount Type"
        flow="col"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name: "mek_mount_type",
    props:["mountType"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.mount_type_table=
            [
                {mount_type:"Servo-Mounted",cost:1},
                {mount_type:"Handheld",cost:2},
            ];
        return obj;
    },
    methods:
    {
        select_mount_type:function(_mount_type)
        {
            this.$emit("update-mount-type",this.mount_type_table[_mount_type]);
        }
    },
    computed:
    {
        selected_mount_type_index:function()
        {
            let index=0;
            this.mountType;
            this.mount_type_table.some((_val, _index)=>
            {
                if(_val.mount_type.toLowerCase()==this.mountType.mount_type.toLowerCase())
                {
                    index=_index;
                    return true;
                }
            },this);
            
            return [index];
        }
    }
}
</script>