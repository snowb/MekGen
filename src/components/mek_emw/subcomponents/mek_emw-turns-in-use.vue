<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Turns&nbsp;in&nbsp;Use</div>
                <table>
                    <tr>
                        <td class="head_column">Turns</td>
                        <td>&nbsp;</td>
                        <td v-for="(turns,index) in turns_table" :key="'emw-turns-turns-'+index"
                            class="clickable"
                            :class="selectedItem('selected_turns_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_turns(turns,index)"
                        >{{turns.turns}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(turns,index) in turns_table" :key="'emw-turns-cost-'+index"
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
    name:"mek_emw_turns_in_use",
    props:["turnsInUse"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        obj.turns_table=
            [
                {turns:1,cost:0.3},
                {turns:2,cost:0.4},
                {turns:3,cost:0.5},
                {turns:4,cost:0.6},
                {turns:5,cost:0.7},
                {turns:7,cost:0.8},
                {turns:10,cost:0.9},
                {turns:"X",cost:1.0}
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
                if(_val.turns==this.turnsInUse.turns)
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