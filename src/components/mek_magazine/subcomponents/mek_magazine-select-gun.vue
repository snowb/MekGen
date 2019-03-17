<template>
    <mek-sub-component-table
        :items="gun_table"
        :headers="{name:'Name',cost:'Cost'}" :showHeaders="true"
        name="Gun Table" flow="dropdown"
        :selectedIndices="gun_index"
        @update-selected-indices="select_gun"
    ></mek-sub-component-table>
    <!--- uses dropdown for selection, have not written a pkey based dropdown option ...--->
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_magazine_select_gun",
    props:["selectedGun"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        return obj;
    },
    methods:
    {
        select_gun:function(_gun_index,_gun_name_change)
        {
            this.$emit("update-gun", this.gun_table[_gun_index], _gun_name_change);
        },
    },
    computed:
    {
        gun_index:function()
        {
            let index=0;
            this.gun_table.some(function(_val,_index)
            {
                if(_val.uuid==this.selectedGun.uuid)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);

            switch(true)
            {
                case this.selectedGun.name!=this.gun_table[index].name:
                    this.select_gun(index,true);
                    break;
                case this.selectedGun.cost!=this.gun_table[index].cost:
                    this.select_gun(index,false);
                    break;
            }
            return [index];
        },
        gun_table()
        {

            let gun_table=this.$store.getters.getComponentByType("equipment","projectile");
            if(typeof gun_table==="undefined")
            {
                return [];
            }
            gun_table=Object.keys(gun_table);
            gun_table=gun_table.map((_elem)=>
            {
                let data=this.$store.getters.getComponent(_elem);
                let name=data.component_name;
                let cost=data.cost;
                let uuid=data.uuid;
                return {name:name,cost:cost,uuid:uuid};
            },this);
            gun_table.splice(0,0,{name:"(none)",cost:1,uuid:null})

            return gun_table;
        }
    }
}
</script>
<style scoped>

</style>