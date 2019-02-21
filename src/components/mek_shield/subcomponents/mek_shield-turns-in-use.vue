<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Turns&nbsp;in&nbsp;Use</div>
                <table>
                    <tr>
                        <td class="head_column">Turns</td>
                        <td>&nbsp;</td>
                        <td v-for="(turns,index) in turns_table" :key="'shield-turns-turns-'+index"
                            class="clickable"
                            :class="selectedItem('selected_turns_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_turns(turns,index)"
                        >{{turns.time}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(turns,index) in turns_table" :key="'shield-turns-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('selected_turns_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_turns(turns, index)"
                        >x{{turns.cost}}</td>
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
    name:"mek_shield_turns_in_use",
    props:["turnsInUse"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        obj.turns_table=
            [
                {time:1,cost:0.3},
                {time:2,cost:0.4},
                {time:3,cost:0.5},
                {time:4,cost:0.6},
                {time:5,cost:0.7},
                {time:7,cost:0.8},
                {time:10,cost:0.9},
                {time:"X",cost:1.0}
            ];

        return obj;
    },
    methods:
    {
        select_turns:function(_selected_turns)
        {
            this.$emit("update-turns-in-use",_selected_turns);
        }
    },
    computed:
    {
        selected_turns_index:function()
        {
            let index=7;
            this.turns_table.some(function(_val,_index)
            {
                if(_val.time==this.turnsInUse.time)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.turns_table[index].cost!==this.turnsInUse.cost)
            {
                this.select_turns(this.turns_table[index]);
            }
            return index;
        }
    }
}
</script>