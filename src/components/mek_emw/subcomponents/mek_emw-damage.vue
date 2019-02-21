<template>
    <span class="mek-flex-col">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small">Damage</div>
                <table>
                    <tr>
                        <th>Kills</th>
                        <th >Cost</th>
                    </tr>
                    <tr v-for="(dmg,index) in damage_table"
                        :key="'emw-damage-'+index"
                        @click="select_damage(dmg,index)"
                        :class="selectedItem('damage_index',index,'selected_item')"
                        class="clickable" 
                    >
                        <td id="left">{{dmg.damage}}</td>
                        <td id="right">{{dmg.cost}}</td>
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
    name:"mek_emw_damage",
    props:["damage"],
    mixins:[selected_item_mixin,utility_mixin],
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

        obj.selected_damage={damage:1,cost:0.5};

        return obj;
    },
    methods:
    {
        select_damage:function(_damage)
        {
            this.$emit("update-damage",_damage);
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
                this.select_damage(this.damage_table[damage_index]);
            }
            return damage_index;
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