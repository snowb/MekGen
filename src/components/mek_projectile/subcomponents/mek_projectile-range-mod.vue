<template>
    <mek-sub-component-table
        :items="range_mod_table"
        :headers="{range_mod:'Range Mod',range:'Range',cost:'Cost'}"
        name="Range Mod" flow="col" :showHeaders="true"
        :format="{range_mod:'percent',cost:'multiplier'}"
        :selectedIndices="selected_range_mod_index"
        @update-selected-indices="select_range_mod"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name: "mek_range_mod",
    props:["rangeMod","baseRange"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.range_mod_table=
            [
                {range_mod:0,cost:0.5,range:0},
                {range_mod:0.25,cost:0.62,range:0.25*3},
                {range_mod:0.5,cost:0.75,range:0.5*3},
                {range_mod:0.75,cost:0.88,range:0.75*3},
                {range_mod:1,cost:1,range:1*3},
                {range_mod:1.25,cost:1.12,range:1.25*3},
                {range_mod:1.5,cost:1.25,range:1.5*3},
                {range_mod:1.75,cost:1.38,range:1.75*3},
                {range_mod:2,cost:1.5,range:2*3},
                {range_mod:2.5,cost:1.75,range:2.5*3},
                {range_mod:3,cost:2,range:3*3},
            ];
        return obj;
    },
    methods:
    {
        select_range_mod:function(_range_mod_index)
        {
            this.$emit("update-range-mod",this.range_mod_table[_range_mod_index]);
        }
    },
    computed:
    {
        selected_range_mod_index:function()
        {
            let index=0;
            this.rangeMod;
            this.range_mod_table.some((_val, _index)=>
            {
                if(_val.range_mod==this.rangeMod.range_mod)
                {
                    index=_index;
                    return true;
                }
            },this);
            
            if(this.rangeMod.cost!=this.range_mod_table[index].cost)
            {
                this.select_range_mod(index);
            }
            return [index];
        }
    },
    watch:
    {
        baseRange(_newval)
        {
            let newtable=this.range_mod_table.map((_val)=>
            {
                return {range_mod:_val.range_mod,cost:_val.cost,range:_newval*_val.range_mod}
            });
            this.$set(this,"range_mod_table",newtable);
        }
    }
}
</script>