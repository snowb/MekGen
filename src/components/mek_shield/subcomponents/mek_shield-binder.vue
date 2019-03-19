<template>
    <mek-sub-component-table
        :items="binder_table"
        :headers="{stopping_power_modifier:'-SP',space:'+Space',cost:'Cost'}"
        name="Binder" flow="row" :showHeaders="true"
        :format="{stopping_power_modifier:'percent',cost:'multiplier'}"
        :selectedIndices="selected_binder_index"
        @update-selected-indices="select_binder"
    ></mek-sub-component-table>
</template>

<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

export default 
{
    name: "mek_shield_binder",
    props:["binder","base_stopping_power"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.binder_table=
            [
                {stopping_power_modifier:0,cost:1,space:0},
                {stopping_power_modifier:0.25,cost:1.1,space:0},
                {stopping_power_modifier:0.33,cost:1.2,space:0},
                {stopping_power_modifier:0.50,cost:1.3,space:0},
                {stopping_power_modifier:0.66,cost:1.2,space:0},
                {stopping_power_modifier:0.75,cost:1.1,space:0}
            ];
        return obj;
    },
    methods:
    {
        select_binder:function(_selected_binder_index)
        {
            this.$emit("update-binder",this.binder_table[_selected_binder_index]);
        },
        calculate_extra_space:function(_stopping_power_mod)
        {
            return (this.base_stopping_power*_stopping_power_mod) * 2;
        },
        update_binder_table()
        {
            this.binder_table.forEach((_elem)=>
            {
                _elem.space=this.round((this.base_stopping_power*_elem.stopping_power_modifier) * 2,1);
            },this);
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
                this.select_binder(index);
            }
            return [index];
        }
    },
    watch:
    {
        base_stopping_power()
        {
            this.update_binder_table();
        }
    },
    mounted()
    {
        this.update_binder_table();
    }
}
</script>