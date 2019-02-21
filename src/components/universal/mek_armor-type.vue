<template>
    <!-- 
        add Armor Type stuff
        universal as it can apply to Servos and Shields
     -->
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Armor&nbsp;Type</div>
                <table style="margin:auto;">
                    <tr style="font-weight:bold; border-bottom:1px solid black;">
                        <td>Type</td>
                        <td>DC</td>
                        <td>Cost</td>
                    </tr>
                    <tr><td colspan=3 style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(armor_type,index) in armor_type_table" :key="'armor-type-'+index"
                        class="clickable"
                        :class="selectedItem('selected_armor_type_index',index,'selected_item')"
                        @click="select_armor_type(armor_type)"
                    >
                        <td>{{armor_type.type}}</td>
                        <td>{{armor_type.damage_coefficient}}</td>
                        <td>x{{decimalPad(armor_type.cost)}}</td>
                    </tr>
                    <tr style="visibility:hidden;height:0px;line-height:0px;">
                        <td>ABLATTIVE</td>
                        <td>WWW</td>
                        <td>WWWW</td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";
export default 
{
    name: "mek_armor_type",
    props:["armorType"],
    mixins:[selected_item_mixin,utility_mixin],
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
            let temp_obj=JSON.parse(JSON.stringify(_selected_armor_type));
            this.$emit("update-armor-type",temp_obj);
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
                this.select_armor_type(this.armor_type_table[index]);
            }
            return index;
        }
    }
}
</script>