<template>
    <mek-sub-component-table
        :items="type_table" :headers="{name:''}"
        name="Type" flow="col" :show-headers="false"
        :selected-indices="type_index"
        @update-selected-indices="select_type"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name:"mek_shield_type",
    props:["type"],
    mixins:[selected_item_mixin, utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.type_table=
            [
                {name:"Standard"},
                {name:"Active"},
                {name:"Reactive"}
            ];
        return obj;
    },
    methods:
    {
        select_type:function(_selected_type)
        {
            this.$emit("update-type",this.type_table[_selected_type].name.toLowerCase());
        }
    },
    computed:
    {
        type_index()
        {
            let index=0;
            this.type_table.some((_elem,_index)=>
            {
                if(_elem.name.toLowerCase()==this.type.toLowerCase())
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
