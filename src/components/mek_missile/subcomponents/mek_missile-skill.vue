<template>
    <mek-sub-component-table
        :items="skill_table"
        :headers="{skill:'Skill',cost:'Cost'}" :showHeaders="true"
        name="Smart Skill" flow="row" :format="{cost:'multiplier'}"
        :selectedIndices="skill_index"
        @update-selected-indices="select_skill"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_missile_skill",
    props:["skill"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};

        obj.skill_table=
        [
            {skill:6,cost:1},
            {skill:9,cost:1.3},
            {skill:12,cost:1.6},
            {skill:15,cost:1.9},
            {skill:18,cost:2.2},
            {skill:20,cost:2.5},
        ];
        return obj;
    },
    methods:
    {
        select_skill:function(_skill_index)
        {
            this.$emit("update-skill",this.skill_table[_skill_index]);
        },
    },
    computed:
    {
        skill_index:function()
        {
            let index=0;
            this.skill;
            this.skill_table.some(function(_val,_index)
            {
                if(_val.skill==this.skill.skill)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);

            if(this.skill_table[index].cost!==this.skill.cost)
            {
                this.select_skill(index);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>