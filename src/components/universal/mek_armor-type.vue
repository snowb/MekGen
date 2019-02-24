<template>
    <mek-sub-component-table
        :items="armor_type_table"
        :headers="{type:'Type',damage_coefficient:'DC',cost:'Cost'}"
        name="Armor Type" flow="col" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="selected_armor_type_index"
        @update-selected-indices="select_armor_type"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_armor_type",
    props:["armorType"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.armor_type_table=
            [
                {type:"Ablative",damage_coefficient:0,cost:0.5},
                {type:"Standard",damage_coefficient:1,cost:1},
                {type:"Alpha",damage_coefficient:2,cost:1.25},
                {type:"Beta",damage_coefficient:4,cost:1.5},
                {type:"Gamma",damage_coefficient:8,cost:2},
            ];
        return obj;
    },
    methods:
    {
        select_armor_type:function(_selected_armor_type)
        {
            this.$emit("update-armor-type",this.armor_type_table[_selected_armor_type]);
        }
    },
    computed:
    {
        selected_armor_type_index:function()
        {
            let index=1;

            this.armor_type_table.some((_val, _index)=>
            {
                if(_val.type.toLowerCase()==this.armorType.type.toLowerCase())
                {
                    index=_index;
                    return true;
                }
            },this);
            
            let update=false;
            switch(true)
            {
                case this.armorType.cost!=this.armor_type_table[index].cost:
                case this.armorType.damage_coefficient!=this.armor_type_table[index].damage_coefficient:
                    update=true;
            }
            if(update)
            {
                this.select_armor_type(index);
            }
            return [index];
        }
    }
}
</script>