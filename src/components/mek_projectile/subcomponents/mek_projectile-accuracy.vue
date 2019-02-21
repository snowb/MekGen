<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Accuracy</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">WA</td>
                        <td>&nbsp;</td>
                        <td v-for="(acc,index) in accuracy_table" :key="'projectile-accuracy-'+index"
                            class="clickable"
                            :class="selectedItem('accuracy_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_accuracy(acc)"
                        >{{acc.accuracy}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(acc,index) in accuracy_table" :key="'projectile-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('accuracy_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_accuracy(acc)"
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
    name:"mek_projectile_accuracy",
    props:["accuracy"],
    mixins:[selected_item_mixin,utility_mixin],
    data:function()
    {
        let obj={};

        obj.accuracy_table=
        [
            {accuracy:-2,cost:0.6},
            {accuracy:-1,cost:0.8},
            {accuracy:0,cost:1.0},
            {accuracy:1,cost:1.5},
            {accuracy:2,cost:2.0},
        ]

        obj.selected_accuracy={accuracy:0,cost:1};

        return obj;
    },
    methods:
    {
        select_accuracy:function(_accuracy)
        {
            this.$emit("update-accuracy",_accuracy);
        },
    },
    computed:
    {
        accuracy_index:function()
        {
            let index=2;
            this.accuracy;
            this.accuracy_table.some(function(_val,_index)
            {
                if(_val.accuracy==this.accuracy.accuracy)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.accuracy_table[index].cost!==this.cost)
            {
                this.select_accuracy(this.accuracy_table[index]);
            }
            return index;
        }
    }
}
</script>
<style scoped>

</style>