<template>
    <mek-sub-component-table
        :items="damage_table"
        :headers="{damage:'Damage',cost:'Cost',range:'Range'}"
        name="Damage" flow="row" :showHeaders="true"
        :selectedIndices="damage_index"
        @update-selected-indices="select_damage"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_beam_damage",
    props:["damage"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};

        obj.damage_table=Array.apply({}, Array(20));
        
         obj.damage_table.forEach((_el,_index)=>
        {
            let damage=_index+1;
            let cost=this.round(damage*0.1,1);
            let range=Math.round(Math.sqrt(damage)*3.5);
            obj.damage_table[_index]={damage:damage,cost:cost,range:range};
        },this);

        obj.selected_damage={damage:1,cost:0.1,range:4};

        return obj;
    },
    methods:
    {
        select_damage:function(_damage_index)
        {
            this.$emit("update-damage", this.damage_table[_damage_index]);
        },
    },
    computed:
    {
        damage_index()
        {
            let damage_index=0;
            this.damage_table.some((_val,_index)=>
            {
                if(this.damage.damage==_val.damage)
                {
                    damage_index=_index;
                    return true;
                }
            });

            let update=false;
            switch(true)
            {
                case this.damage.damage!=this.damage_table[damage_index].damage:
                case this.damage.cost!=this.damage_table[damage_index].cost:
                case this.damage.range!=this.damage_table[damage_index].range:
                    update=true;       
            }
            if(update)
            {   
                this.select_damage(damage_index);
            }
            return [damage_index];
        }
    }
}
</script>
<style scoped>
th
{
    padding-left:10px;
    padding-right:10px;
}
#left
{
    padding-left: 0px;
}
#right
{
    padding-right: 0px;
}
</style>