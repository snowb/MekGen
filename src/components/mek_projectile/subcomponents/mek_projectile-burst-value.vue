<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small" style="white-space:nowrap;">Burst Value</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">BV</td>
                        <td>&nbsp;</td>
                        <td v-for="(bv,index) in burst_value_table" :key="'projectile-burst_value-'+index"
                            class="clickable"
                            :class="selectedItem('burst_value_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_burst_value(bv)"
                        >{{bv.burst_value}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(bv,index) in burst_value_table" :key="'projectile-burst-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('burst_value_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_burst_value(bv)"
                        >x{{bv.cost}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_projectile_burst_value",
    props:["burstValue"],
    mixins:[selected_item_mixin,utility_mixin],
    data:function()
    {
        let obj={};

        obj.burst_value_table=
        [
            {burst_value:1,cost:1},
            {burst_value:2,cost:1.5},
            {burst_value:3,cost:2},
            {burst_value:4,cost:2.5},
            {burst_value:5,cost:3},
            {burst_value:6,cost:3.5},
            {burst_value:7,cost:4},
            {burst_value:8,cost:4.5},
        ]

        obj.selected_burst_value={feeds:1,cost:1};

        return obj;
    },
    methods:
    {
        select_burst_value:function(_burst_value)
        {
            this.$emit("update-burst-value",_burst_value);
        },
    },
    computed:
    {
        burst_value_index:function()
        {
            let index=0;
            this.burstValue;
            this.burst_value_table.some(function(_val,_index)
            {
                if(_val.burst_value==this.burstValue.burst_value)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.burst_value_table[index].cost!==this.burstValue.cost)
            {
                this.select_burst_value(this.burst_value_table[index]);
            }
            return index;
        }
    }
}
</script>
<style scoped>

</style>