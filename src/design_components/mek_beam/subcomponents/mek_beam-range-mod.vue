<template>
    <mek-sub-component-table
        :items="range_mod_table" :pkey="pkey" :selected-keys="selected_keys"
        :headers="{range_mod:'Range Mod',range:'Range',cost:'Cost'}"
        name="Range Mod" flow="pkey-col" :show-headers="true"
        :format="{range_mod:'percent',cost:'multiplier'}"
        @update-selected-data="select_range_mod"
    ></mek-sub-component-table>
</template>

<script>
import alerts_mixin from "../../../mixins/alerts_mixin";
import { range_mod_data_table, cleaned_feature, create_range_mod_data_table } 
    from "../../../data_table_modules/mek_beam/mek_beam-range-mod-data-module";

export default 
{
    name: "mek_beam_range_mod",
    props:["rangeMod","baseRange"],
    mixins:[alerts_mixin],
    components:
    {
        "mek-sub-component-table":()=>import("../../universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={}
        obj.alerts=[];
        obj.suppressAlerts=false;
        obj.pkey="range_mod";
        return obj;
    },
    methods:
    {
        select_range_mod:function(_range_mod)
        {
            let data=JSON.parse(JSON.stringify(_range_mod))
            this.$emit("update-range-mod",data);
        }
    },
    computed:
    {
        range_mod_table()
        {
            this.suppressAlerts=true;
            create_range_mod_data_table(this.baseRange);
            return range_mod_data_table;
        },
        selected_keys()
        {
            let cleaned_data=cleaned_feature(this.pkey, this.rangeMod);
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
                this.select_range_mod(cleaned_data.data);
            }
            this.suppressAlerts=false;
            return cleaned_data.key_list;
        }
    },
    watch:
    {
        "baseRange":function(_newval,_oldval)
        {//must track changes in burstValue to disable alerts for removed features on cleaned_feat
            if(_newval!=_oldval)
            {
                this.suppressAlerts=true;
            }
        }
    }
}
</script>