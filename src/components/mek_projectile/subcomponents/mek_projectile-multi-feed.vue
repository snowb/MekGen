<template>
    <mek-sub-component-table
        :items="multi_feed_table"
        :headers="{feeds:'Feeds',cost:'Cost'}"
        name="Multi-Feed" flow="row" :multiplier="true"
        pkey="feeds"
        :selectedIndices="multi_feed_index"
        @update-selected-indices="select_multi_feed"
    ></mek-sub-component-table>
</template>
<script>
import selected_item_mixin from "../../../mixins/selected_item_mixin";
import utility_mixin from "../../../mixins/utility_mixin";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_projectile_multi_feed",
    props:["multiFeed"],
    mixins:[selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};

        obj.multi_feed_table=
        [
            {feeds:1,cost:1},
            {feeds:2,cost:1.2},
            {feeds:3,cost:1.4},
            {feeds:4,cost:1.6}
        ]

        return obj;
    },
    methods:
    {
        select_multi_feed:function(_multi_feed_index)
        {
            this.$emit("update-multi-feed", this.multi_feed_table[_multi_feed_index]);
        },
    },
    computed:
    {
        multi_feed_index:function()
        {
            let index=0;
            this.multiFeed;
            this.multi_feed_table.some(function(_val,_index)
            {
                if(_val.feeds==this.multiFeed.feeds)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);
            if(this.multi_feed_table[index].cost!==this.multiFeed.cost)
            {
                this.select_multi_feed(this.multi_feed_table[index]);
            }
            return [index];
        }
    }
}
</script>
<style scoped>

</style>