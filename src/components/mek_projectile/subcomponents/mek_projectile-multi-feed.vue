<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small">
            <div class="subsection_container">
                <div class="subsection_header_small" style="white-space:nowrap;">Multi-Feed</div>
                <table style="margin:auto;">
                    <tr>
                        <td class="head_column">Feeds</td>
                        <td>&nbsp;</td>
                        <td v-for="(feed,index) in multi_feed_table" :key="'projectile-multi_feed-'+index"
                            class="clickable"
                            :class="selectedItem('multi_feed_index',index,'selected_item_top')"
                            style="padding:2px 5px;"
                            @click="select_multi_feed(feed)"
                        >{{feed.feeds}}</td>
                    </tr>
                    <tr>
                        <td class="head_column">Cost</td>
                        <td>&nbsp;</td>
                        <td v-for="(feed,index) in multi_feed_table" :key="'projectile-feed-cost-'+index"
                            class="clickable" 
                            :class="selectedItem('multi_feed_index',index,'selected_item_bottom')"
                            style="padding:2px 5px;"
                            @click="select_multi_feed(feed)"
                        >x{{feed.cost}}</td>
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
    name:"mek_projectile_multi_feed",
    props:["multiFeed"],
    mixins:[selected_item_mixin,utility_mixin],
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

        obj.selected_multi_feed={feeds:1,cost:1};

        return obj;
    },
    methods:
    {
        select_multi_feed:function(_multi_feed)
        {
            this.$emit("update-multi-feed",_multi_feed);
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
            return index;
        }
    }
}
</script>
<style scoped>

</style>