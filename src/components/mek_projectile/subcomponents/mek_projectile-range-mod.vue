<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Range Mod</div>
                <table style="margin:auto;">
                    <tr style="font-weight:bold; border-bottom:1px solid black;">
                        <td>Range Mod</td>
                        <td>Range</td>
                        <td>Cost</td>
                    </tr>
                    <tr><td colspan=3 style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(range_mod,index) in range_mod_table" :key="'range-mod-'+index"
                        class="clickable"
                        :class="selectedItem('selected_range_mod_index',index,'selected_item')"
                        @click="select_range_mod(range_mod)"
                    >
                        <td>{{range_mod.range_mod*100}}%</td>
                        <td style="text-align:left;">&nbsp;&nbsp;{{range_mod.range_mod*baseRange}}</td>
                        <td style="text-align:left;">&nbsp;&nbsp;x{{decimalPad(range_mod.cost)}}</td>
                    </tr>
                    <tr style="visibility:hidden;height:0px;line-height:0px;">
                        <td>RANGE_MOD</td>
                        <td>range</td>
                        <td>cost</td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";
export default 
{
    name: "mek_range_mod",
    props:["rangeMod","baseRange"],
    mixins:[selected_item_mixin,utility_mixin],
    data:function()
    {
        let obj={}
        obj.range_mod_table=
            [
                {range_mod:0,cost:0.5},
                {range_mod:0.25,cost:0.62},
                {range_mod:0.5,cost:0.75},
                {range_mod:0.75,cost:0.88},
                {range_mod:1,cost:1},
                {range_mod:1.25,cost:1.12},
                {range_mod:1.5,cost:1.25},
                {range_mod:1.75,cost:1.38},
                {range_mod:2,cost:1.5},
                {range_mod:2.5,cost:1.75},
                {range_mod:3,cost:2},
            ];
        return obj;
    },
    methods:
    {
        select_range_mod:function(_range_mod)
        {
            this.$emit("update-range-mod",_range_mod);
        }
    },
    computed:
    {
        selected_range_mod_index:function()
        {
            let index=0;
            this.rangeMod;
            this.range_mod_table.some((_val, _index)=>
            {
                if(_val.range_mod==this.rangeMod.range_mod)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(this.rangeMod.cost!=this.range_mod_table[index].cost)
            {
                this.select_range_mod(this.range_mod_table[index]);
            }
            return index;
        }
    }
}
</script>