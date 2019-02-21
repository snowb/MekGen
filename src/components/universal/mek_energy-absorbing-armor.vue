<template>
    <!-- 
        add Armor Type stuff
        universal as it can apply to Servos and Shields
     -->
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Energy&nbsp;Absorption</div>
                <table style="margin:auto;">
                    <tr style="font-weight:bold; border-bottom:1px solid black;">
                        <td>Absorption</td>
                        <td>SP Reduction</td>
                        <td>Cost</td>
                    </tr>
                    <tr><td colspan=3 style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(absorption_type,index) in absorption_table" :key="'absorption-type-'+index"
                        class="clickable"
                        :class="selectedItem('selected_absorption_index',index,'selected_item')"
                        @click="select_absorption_type(absorption_type)"
                    >
                        <td>{{absorption_type.absorption*100}}%</td>
                        <td>{{absorption_type.armor_penalty*100}}%</td>
                        <td>x{{decimalPad(absorption_type.cost)}}</td>
                    </tr>
                    <tr style="visibility:hidden;height:0px;line-height:0px;">
                        <td>ABSORPTION</td>
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
    name: "mek_energy_absorbing_armor",
    props:["absorption"],
    mixins:[selected_item_mixin,utility_mixin],
    data:function()
    {
        let obj={}
        obj.absorption_table=
            [
                {absorption:0,cost:1.0,armor_penalty:0},
                {absorption:0.2,cost:1.5,armor_penalty:0},
                {absorption:0.25,cost:1.8,armor_penalty:0.2},
                {absorption:0.33,cost:2.2,armor_penalty:0.25},
                {absorption:0.5,cost:2.5,armor_penalty:0.33},
            ];
        return obj;
    },
    methods:
    {
        select_absorption_type:function(_selected_absorption)
        {
            let temp_obj=JSON.parse(JSON.stringify(_selected_absorption));
            this.$emit("update-absorption",temp_obj);
        }
    },
    computed:
    {
        selected_absorption_index:function()
        {
            let index=0;

            this.absorption_table.some((_val, _index)=>
            {
                if(_val.absorption==this.absorption.absorption)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            let update=false;
            switch(true)
            {
                case this.absorption.cost!=this.absorption_table[index].cost:
                case this.absorption.armor_penalty!=this.absorption_table[index].armor_penalty:
                    update=true;
            }
            if(update)
            {
                this.select_absorption_type(this.absorption_table[index]);
            }
            return index;
        }
    }
}
</script>