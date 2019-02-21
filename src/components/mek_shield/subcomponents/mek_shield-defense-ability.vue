<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Defense&nbsp;Ability</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">DA</td>
                        <td>&nbsp;</td>
                        <td v-for="(da,index) in da_table" :key="'shield-da-da-'+index"
                            class="clickable"
                            :class="selectedItem('selected_da_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_da(da)"
                        >{{da.da}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(da,index) in da_table" :key="'shield-da-cost'+index"
                            class="clickable" 
                            :class="selectedItem('selected_da_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_da(da)"
                        >x{{da.cost}}</td>
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
    name:"mek_shield_defense_ability",
    props:["defense_ability","cost"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        obj.da_table=
            [
                {da:-4,cost:0.6},
                {da:-3,cost:0.8},
                {da:-2,cost:1},
                {da:-1,cost:1.25},
                {da:0,cost:1.5},
            ];
        return obj;
    },
    methods:
    {
        select_da:function(_selected_da)
        {
            this.$emit("update-defense-ability",_selected_da);
        }
    },
    computed:
    {
        selected_da_index:function()
        {
            let index=2;
            this.da_table.some(function(_val,_index)
            {
                if(_val.da==this.defense_ability)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.da_table[index].cost!==this.cost)
            {
                this.select_da(this.da_table[index]);
            }
            return index;
        }
    }
}
</script>
