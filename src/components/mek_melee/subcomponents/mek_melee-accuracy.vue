<template>
    <!--span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Accuracy</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">WA</td>
                        <td>&nbsp;</td>
                        <td v-for="(acc,index) in accuracy_table" :key="'melee-accuracy-'+index"
                            class="clickable"
                            :class="selectedItem('accuracy_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_accuracy(acc)"
                        >{{acc.accuracy}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(acc,index) in accuracy_table" :key="'melee-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('accuracy_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_accuracy(acc)"
                        >x{{acc.cost}}</td>
                    </tr>
                </table>
            </div>
        </div>
    </span-->
    <mek-sub-component-table
        :items="accuracy_table"
        :headers="{accuracy:'WA',cost:'Cost'}"
        name="Accuracy" flow="row" :showHeaders="true"
        :format="{cost:'multiplier'}"
        :selectedIndices="accuracy_index"
        @update-selected-indices="select_accuracy"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_melee_accuracy",
    props:["accuracy"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};

        obj.accuracy_table=
        [
            {accuracy:-2,cost:0.6},
            {accuracy:-1,cost:0.8},
            {accuracy:0,cost:1},
            {accuracy:1,cost:1.5},
            {accuracy:2,cost:2}
        ]

        return obj;
    },
    methods:
    {
        select_accuracy:function(_accuracy_index)
        {
            this.$emit("update-accuracy",this.accuracy_table[_accuracy_index]);
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
                this.select_accuracy(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>