<template>
    <div class="outer-container">
        <span class="mek-inline-flex-row subsection_container" style="text-align:left;">
            <span class="padding-10px">
                <slot name="col1-row1"></slot>
                <slot name="col1-row2"></slot>
                <slot name="col1-row3"></slot>
            </span>
            <span class="padding-10px">
                <slot name="col2-row1"></slot>
                <slot name="col2-row2"></slot>
                <slot name="col2-row3"></slot>             
            </span>
            <span class="padding-10px">
                <slot name="col3-row1"></slot>
                <slot name="col3-row2"></slot>
                <slot name="col3-row3"></slot>
            </span>
        </span>
    </div>
</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin.js";

export default
{
    name:"mek_magazine_stats",
    mixins:[utility_mixin],
    props:[],
    data:function()
    {
        let obj={};
        return obj;
    },
    methods:
    {
    },
    computed:
    {
    }
}
</script>
<style scoped>
.padding-10px
{
    padding-right:10px; 
    padding-left:10px;
}
.outer-container
{
    align-self:flex-start;
    margin:5px;
    font-size:120%;
    color:#222;
}

</style>