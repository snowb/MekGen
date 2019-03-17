<template>
    <mek-sub-component-table
        :items="armor_table" :selectedKeys="selected_keys" :pkey="pkey"
        :headers="{name:'Name',stopping_power:'SP',cost:'Cost'}"
        name="Armor" flow="pkey-col" :showHeaders="true"
        @update-selected-data="select_armor"
    ></mek-sub-component-table>
</template>

<script>
import servo_classes_mixin from "../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../mixins/selected_item_mixin.js";
import utility_mixin from "../../mixins/utility_mixin.js";

import {armor_data_table, armor_validate, get_feature, has_feature} from "../data_table_modules/mek_armor-data-module.js";

import mek_sub_component_table from "./mek_sub-component-table.vue";
export default 
{
    name: "mek_armor",
    props:["armor","maxArmor"],
    mixins:[servo_classes_mixin, selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={}
        obj.pkey="name";
        obj.alerts=[];
        return obj;
    },
    methods:
    {
        select_armor:function(_selected_armor)
        {
            this.$emit("update-armor",JSON.parse(JSON.stringify(_selected_armor)));
        }
    },
    computed:
    {
        armor_table()
        {
            let new_armor_table=armor_data_table.filter((_val)=>
            {
                return _val.code<=this.maxArmor;
            },this);
            return new_armor_table;
        },
        selected_keys()
        {
            let key_list=[];
            let default_data=get_feature(this.pkey,"None");

            if(this.armor===undefined)
            {
                this.select_armor(default_data);
            }
            let has_armor=has_feature(this.pkey,this.armor[this.pkey]);
            let json_data=JSON.stringify(this.armor);
            if(!has_armor)
            {
                this.addAlert("Mek_Armor: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_armor(default_data);
                return [default_data[this.pkey]];
            }
            else if(!armor_validate(this.armor))
            {
                this.addAlert("Mek_Armor: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_armor(get_feature(this.armor[this.pkey]));
            }
            return [this.armor[this.pkey]];
        }
    }
}
</script>