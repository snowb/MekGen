<template>
    <mek-sub-component-table
        :items="damage_table"
        :headers="{damage:'Damage',cost:'Cost'}"
        name="Damage" flow="row" :show-headers="true"
        :selected-indices="damage_index"
        @update-selected-indices="select_damage"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_emw_damage",
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
            let cost=damage;
            obj.damage_table[_index]={damage:damage,cost:cost};
        },this);

        return obj;
    },
    methods:
    {
        select_damage:function(_damage)
        {
            this.$emit("update-damage",this.damage_table[_damage]);
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