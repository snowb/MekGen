<template>
    <mek-sub-component-table
        :items="feeds_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{feeds:'Feeds',cost:'Cost'}" :show-headers="true"
        name="Multi-feeds" flow="pkey-row" :format="{cost:'multiplier'}"
        @update-selected-data="select_feeds"
    ></mek-sub-component-table>
</template>
<script>
import alerts_mixin from "@/mixins/alerts_mixin";

import {feeds_data_table, cleaned_feature}
    from "@/data_table_modules/mek_projectile/mek_projectile-multi-feed-data-module.js";

export default
{
    name:"mek_projectile_multi_feeds",
    props:["multiFeed"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("@/app_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.alerts=[];
        obj.pkey="feeds";
        obj.suppressAlerts=false;
        return obj;
    },
    methods:
    {
        select_feeds:function(_feeds)
        {
            let data=JSON.parse(JSON.stringify(_feeds));
            this.$emit("update-multi-feed",data);
        },
    },
    computed:
    {
        feeds_table()
        {
            return feeds_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.multiFeed);
            if(cleaned_data.alerts.length>0 && !this.suppressAlerts)
            {
                cleaned_data.alerts.forEach((_alert)=>
                {
                    this.addAlert(_alert);
                });
                this.publishAlerts();
            }
            if(cleaned_data.update)
            {
                this.$emit("alert-generated",true);
                this.select_feeds(cleaned_data.data);
            }
            return cleaned_data.key_list;
        }
    }
}
</script>
<style scoped>

</style>