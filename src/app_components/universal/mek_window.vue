<template functional>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small_mw" 
            v-if="[undefined,'titled','untitled'].includes(props.type)"
            :class="[[undefined,'titled'].includes(props.type) ? 'title_padding' : '']"
        >
            <div class="subsection_container_mw">
                <div class="subsection_header_small_mw" 
                    v-if="[undefined,'titled'].includes(props.type)"
                >{{props.title}}</div>
                <div class="subsection_hidden_header_mw"
                    v-if="[undefined,'titled'].includes(props.type)"
                >{{props.title}}</div>
                <slot></slot>
            </div>
        </div>
        <div class="metallic_background_small_mw" v-else-if="props.type=='metal'">
            <slot></slot>
        </div>
        <div class="subsection_container_mw" v-else>
            <slot></slot>
        </div>
        
    </span>
</template>
<script>
export default 
{
    name:"mek_window",
}
</script>
<style scoped>
.subsection_header_small_mw
{
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    top: -32px;
    font-family: Arial Black, sans-serif;
    font-size: 110%;
    border: 1px solid black;
    padding: 2px 10px;
    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset, rgba(0,0,0,0.5) 1px 1px 1px 3px inset;
    color: #ddd;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    background-color: rgba(0,0,0,0.2);
    white-space: nowrap;
}
.subsection_hidden_header_mw
{
    font-weight: bold;
    font-family: Arial Black, sans-serif;
    font-size: 110%;
    white-space: nowrap;
    visibility: hidden;
    line-height: 0px;
    height:0px;
}
.metallic_background_small_mw
{
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%);
    height: 100%;
    width: 100%;
    padding:5px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 0px 2px, #fff 0px 0px 5px 2px;
    /* padding-top:34px; */
}
.title_padding
{
    padding-top:34px;
}
.subsection_container_mw
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
</style>
