<template>
    <mek-sub-component-table
        :items="class_list"
        :headers="{name:'Name',stopping_power:'SP',cost:'Cost'}"
        name="Class" flow="col" :showHeaders="true"
        :selectedIndices="shield_class_index"
        @update-selected-indices="select_class"
    ></mek-sub-component-table>
</template>
<script>
import servo_classes_mixin from "../../../mixins/servo_classes_mixin.js";
import selected_item_mixin from "../../../mixins/selected_item_mixin.js";
import utility_mixin from "../../../mixins/utility_mixin.js";

import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default 
{
    name:"mek_shield_class",
    props:["type","shield_class","is_ablative"],
    mixins:[servo_classes_mixin,selected_item_mixin,utility_mixin],
    components:
    {
        "mek-sub-component-table":mek_sub_component_table
    },
    data:function()
    {
        let obj={};
        return obj;
    },
    methods:
    {
        select_class:function(_class_code)
        {
            this.$emit("update-class-code",this.class_list[_class_code]);
        },
        find_class_code_index:function(_class_code)
        {
            let class_index=null;
            this.servo_classes.some(function(_val,_index)
            {
                if(_val.code==_class_code)
                {
                    class_index=_index;
                    return true;
                }
            },this);
            return class_index;
        },
        calculate_cost:function(_class_code)
        {
            let type_multiplier=1;//Standard
            switch(this.type.toLowerCase())
            {
                case "active":
                    type_multiplier=1.5
                    break;
                case "reactive":
                    type_multiplier=3;
                    break;
            }
            return this.calculate_stopping_power(_class_code) * type_multiplier;
        },
        calculate_stopping_power:function(_class_code)
        {
            return _class_code + 4;
        }
    },
    computed:
    {
        shield_class_index:function()
        {
            let class_index=0;
            this.class_list.some((_val,_index)=>
            {
                if(this.shield_class.code==_val.code)
                {
                    class_index=_index;
                    return true;
                }
            });

            let update=false;
            switch(true)
            {
                case this.shield_class.id!=this.class_list[class_index].id:
                case this.shield_class.name!=this.class_list[class_index].name:
                case this.shield_class.stopping_power!=this.class_list[class_index].stopping_power:
                case this.shield_class.cost!=this.class_list[class_index].cost:
                    update=true;       
            }
            if(update)
            {   
                this.select_class(class_index);
            }
            return [class_index];
        },
        flat_name_array:function()
        {
            return this.servo_classes.reduce(function(_array, _el)
            {
                _array.push(_el.name);
                return _array;
            },[]);
        },
        class_list()
        {
            this.type;//accessing type to cause recompute when type updates
            return this.servo_classes.map(function(_val)
            {
                let newelement=
                {
                    stopping_power:_val.code+4,
                    code:_val.code,
                    id:_val.id,
                    name:_val.name,
                    cost:this.calculate_cost(_val.code)
                };
                return newelement;
            },this);
        }
    }
}
</script>
<style scoped>
#no-pad
{
    padding-right:0px;
}
</style>
