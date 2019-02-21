<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Attack&nbsp;Factor</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">AF</td>
                        <td>&nbsp;</td>
                        <td v-for="(acc,index) in attack_factor_table" :key="'emw-attack_factor-'+index"
                            class="clickable"
                            :class="selectedItem('attack_factor_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_attack_factor(acc)"
                        >{{acc.attack_factor}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(acc,index) in attack_factor_table" :key="'emw-af-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('attack_factor_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_attack_factor(acc)"
                        >x{{acc.cost}}</td>
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
    name:"mek_emw_attack_factor",
    props:["attackFactor"],
    mixins:[selected_item_mixin,utility_mixin],
    data:function()
    {
        let obj={};

        obj.attack_factor_table=
        [
            {attack_factor:"X",cost:1},
            {attack_factor:1,cost:1.5},
            {attack_factor:2,cost:2},
            {attack_factor:3,cost:2.5},
            {attack_factor:4,cost:3},
            {attack_factor:5,cost:3.5}
        ]

        obj.selected_attack_factor={attack_factor:0,cost:1};

        return obj;
    },
    methods:
    {
        select_attack_factor:function(_attack_factor)
        {
            this.$emit("update-attack-factor",_attack_factor);
        },
    },
    computed:
    {
        attack_factor_index:function()
        {
            let index=0;
            this.attackFactor;
            this.attack_factor_table.some(function(_val,_index)
            {
                if(_val.attack_factor==this.attackFactor.attack_factor)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.attack_factor_table[index].cost!==this.attackFactor.cost)
            {
                this.select_attack_factor(this.attack_factor_table[index]);
            }
            return index;
        }
    }
}
</script>
<style scoped>

</style>