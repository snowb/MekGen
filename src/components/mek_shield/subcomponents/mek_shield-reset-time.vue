<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Reset&nbsp;Time</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">Rounds</td>
                        <td>&nbsp;</td>
                        <td v-for="(reset,index) in reset_table" :key="'shield-reset-rounds-'+index"
                            class="clickable"
                            :class="selectedItem('selected_reset_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_reset(reset,index)"
                        >{{reset.time}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(reset,index) in reset_table" :key="'shield-reset-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('selected_reset_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_reset(reset,index)"
                        >x{{reset.cost}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";

export default 
{
    name:"mek_shield_reset_time",
    props:["resetTime"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        obj.reset_table=
            [
                {time:"X",cost:0.5},
                {time:3,cost:0.75},
                {time:2,cost:1.0},
                {time:1,cost:1.5},
                {time:0,cost:2.0}
            ];
        return obj;
    },
    methods:
    {
        select_reset:function(_selected_reset_obj)
        {
            this.$emit("update-reset-time",_selected_reset_obj);
        }
    },
    computed:
    {
        selected_reset_index:function()
        {
            let index=2;
            this.reset_table.some(function(_val,_index)
            {
                if(_val.time==this.resetTime.time)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.reset_table[index].cost!==this.resetTime.cost)
            {
                this.select_reset(this.reset_table[index]);
            }
            return index;
        }
    }
}
</script>