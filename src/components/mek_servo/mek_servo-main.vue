<template>
    <span class="mek-inline-flex-col" style="width:100%;">
        <div style="align-self:flex-start;">
        servo
        </div>
    </span>
</template>

<script>
import servo_classes_mixin from "../../mixins/servo_classes_mixin";
import selected_item_mixin from "../../mixins/selected_item_mixin";
import utility_mixin from "../../mixins/utility_mixin";

export default
{
    name:"mek_servo",
    props:[],
    mixins:[servo_classes_mixin, selected_item_mixin, utility_mixin],
    data:function()
    {
        return {};
    },
    methods:
    {

    }
};
</script>