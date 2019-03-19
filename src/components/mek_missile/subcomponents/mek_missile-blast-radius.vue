<template>
    <mek-sub-component-table
        :items="blast_radius_table"
        :headers="{blast_radius:'Radius (hex)',cost:'Cost'}" :showHeaders="true"
        name="Blast Radius" flow="col" :format="{cost:'multiplier',blast_radius:'nullzero'}"
        :selectedIndices="blast_radius_index"
        @update-selected-indices="select_blast_radius"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_missile_blast_radius",
    props:["blast_radius"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};

        obj.blast_radius_table=
        [
            {blast_radius:0,cost:1},
            {blast_radius:1,cost:3},
            {blast_radius:2,cost:4},
            {blast_radius:3,cost:5},
            {blast_radius:4,cost:6},
            {blast_radius:5,cost:7},
            {blast_radius:6,cost:7.5},
            {blast_radius:7,cost:8},
            {blast_radius:8,cost:8.5},
            {blast_radius:9,cost:9},
            {blast_radius:10,cost:10},
            {blast_radius:20,cost:20},
        ];
        return obj;
    },
    methods:
    {
        select_blast_radius:function(_blast_radius_index)
        {
            this.$emit("update-blast-radius",this.blast_radius_table[_blast_radius_index]);
        },
    },
    computed:
    {
        blast_radius_index:function()
        {
            let index=0;
            this.blast_radius;
            this.blast_radius_table.some(function(_val,_index)
            {
                if(_val.blast_radius==this.blast_radius.blast_radius)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);

            if(this.blast_radius_table[index].cost!==this.blast_radius.cost)
            {
                this.select_blast_radius(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>