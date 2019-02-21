<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Binder&nbsp;Space</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">-SP</td>
                        <td>&nbsp;</td>
                        <td v-for="(binder,index) in binder_table" :key="'binder-sp-'+index"
                            class="clickable"
                            :class="selectedItem('selected_binder_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_binder(binder,index)"
                        >{{binder.stopping_power_modifier*100}}%</td>
                    </tr>
                    <tr>
                        <td class="head_column">+Space</td>
                        <td>&nbsp;</td>
                        <td v-for="(binder,index) in binder_table" :key="'binder-space-'+index"
                            class="clickable" 
                            :class="selectedItem('selected_binder_index',index,'selected_item_mid')"
                            style="padding:2px 5px;"
                            @click="select_binder(binder,index)"
                        >{{Math.round(calculate_extra_space(binder.stopping_power_modifier)*10)/10}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(binder,index) in binder_table" :key="'binder-cost-'+index" 
                            class="clickable" 
                            :class="selectedItem('selected_binder_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_binder(binder,index)"
                        >x{{binder.cost}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
export default 
{
    name: "mek_shield_binder",
    props:["binder","base_stopping_power"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={}
        obj.binder_table=
            [
                {stopping_power_modifier:0,cost:1},
                {stopping_power_modifier:0.25,cost:1.1},
                {stopping_power_modifier:0.33,cost:1.2},
                {stopping_power_modifier:0.50,cost:1.3},
                {stopping_power_modifier:0.66,cost:1.2},
                {stopping_power_modifier:0.75,cost:1.1}
            ];
        return obj;
    },
    methods:
    {
        select_binder:function(_selected_binder, _index)
        {
            let temp_obj=JSON.parse(JSON.stringify(_selected_binder));
            temp_obj.space=this.calculate_extra_space(this.binder_table[_index].stopping_power_modifier);
            this.$emit("update-binder",temp_obj);
        },
        calculate_extra_space:function(_stopping_power_mod)
        {
            return (this.base_stopping_power*_stopping_power_mod) * 2;
        }
    },
    computed:
    {
        selected_binder_index:function()
        {
            let index=0;
            this.binder_table.some(function(_val,_index)
            {
                if(_val.stopping_power_modifier==this.binder.stopping_power_modifier)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            let update=false;
            switch(true)
            {
                case this.binder.cost!=this.binder_table[index].cost:
                case this.space!=this.calculate_extra_space(this.binder_table[index].stopping_power_modifier):
                    update=true;
            }

            if(update)
            {
                this.select_binder(this.binder_table[index], index);
            }
            return index;
        }
    }
}
</script>