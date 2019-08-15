<template functional>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div :class="$options.outerClasses(props)"
            v-if="props.type=='metallic'"
        >
            <div v-if="props.noinset!==undefined">
                <slot></slot>
            </div>
            <div :class="$options.innerClasses(props)" :style="$options.innerStyle(props)" v-else>
                <div :class="$options.titleClasses(props)"
                    v-if="props.title!==undefined"
                >{{props.title}}</div>
                <div class="subsection_hidden_header_mw"
                    v-if="props.title!==undefined"
                >.{{props.title}}.</div>
                <slot></slot>
            </div>
        </div>
        <!---div class="metallic_background_small_mw" v-else-if="props.type=='metal'">
            <slot></slot>
        </div--->
        <div :class="$options.innerClasses(props)" v-else>
            <slot></slot>
        </div>
    </span>
</template>
<script>
export default 
{
    name:"mek_window",
    outerClasses:(_props)=>
    {
        let class_array=["metallic_background_small_mw"];
        if(_props.title!==undefined && (_props.size===undefined || _props.size==""))
        {
            class_array.push("subsection_header_size_default");
            class_array.push("title_padding");
        }
        else if(_props.title!==undefined && _props.size=="sm")
        {
            class_array.push("subsection_header_size_small")
            class_array.push("title_padding_small");
        }
        //if(["redmetal","bluemetal","greenmetal","redchrome","bluechrome"].includes(_props.color))
        if(["redmetal","bluemetal","greenmetal","greymetal","goldmetal","grey"].includes(_props.color))
        {
            class_array.push(_props.color);
        }
        else
        {
            class_array.push("redmetal")
        }
        if(_props.noinset!==undefined)
        {
            class_array.push("noinset");
        }

        return class_array;
    },
    innerClasses:(_props)=>
    {
        let class_array=["subsection_container_mw"];
        if(["grey","red","green","blue"].includes(_props.engraveColor))
        {
            class_array.push(_props.engraveColor);
        }
        else if((_props.type===undefined && ["grey","red","green","blue","gold"].includes(_props.color)))
        {
            class_array.push(_props.color);
        }
        else
        {
            class_array.push("grey")
        }

        return class_array;
    },
    innerStyle:(_props)=>
    {
        let style_array="";
        if(_props.width!==undefined && _props.width!="")
        {
            let width=_props.width.replace(/[^0-9]/gi,"");
            style_array+="width:"+width+"px;"
        }
        if(_props.minWidth!==undefined && _props.minWidth!="")
        {
            let minWidth=_props.minWidth.replace(/[^0-9]/gi,"");
            style_array+="min-width:"+minWidth+"px;"
        }

        return style_array;
    },
    titleClasses:(_props)=>
    {
        let class_array=["subsection_header_mw"];
        if(_props.title!==undefined && (_props.size===undefined || _props.size==""))
        {
            class_array.push("subsection_header_size_default");
        }
        else if(_props.title!==undefined && _props.size=="sm")
        {
            class_array.push("subsection_header_size_small")
        }
        return class_array;
    },
    setType:(_type)=>
    {
        if(["metallic","greybox"].includes(_type))
        {
            return _type;
        }
        return "greybox";
    }
}
</script>
<style scoped>
.subsection_header_size_small
{
    top: -24px;
    font-size: 85%;
}
.subsection_header_size_default
{
    top: -34px;
    font-size: 110%;
}
.subsection_header_mw
{
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    font-family: Arial Black, sans-serif;
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
.redmetal
{
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%);
}
/* .redchrome
{
    background-image: linear-gradient(to bottom right,
     rgba(248, 80, 50, 1) 0%,
     rgba(241, 111, 92, 1) 50%,
     rgba(246, 41, 12, 1) 51%,
     rgba(240, 47, 23, 1) 71%,
     rgba(231, 56, 39, 1) 100%);
} */
.bluemetal
{
    background-image: linear-gradient(to left top, rgba(0,0,247,1) 0%, 
        rgba(182, 192, 255,1) 49%, 
        rgba(182, 192, 255,1) 51%, 
        rgba(0,0,185,1) 100%);
}
/* .bluechrome
{
    background-image: linear-gradient(to bottom right, 
    rgba(109, 179, 242, 1) 0%,
    rgba(84, 163, 238, 1) 50%,
    rgba(54, 144, 240, 1) 51%,
    /* rgb(29, 98, 172) 51%, */
    /* rgb(30, 105, 222, 1) 100%); */
    /* rgb(0, 0, 247, 1) 100%);
} */
.greenmetal
{
    background-image: linear-gradient(to left top, rgba(0,116,0,1) 0%, 
        rgba(129, 255, 110,1) 49%, 
        rgba(129, 255, 110,1) 51%, 
        rgba(0,141,0,1) 100%);
}
.goldmetal
{
    background-image: linear-gradient(to left top, rgba(255, 120, 0,1) 0%, 
        rgba(255, 255, 0,1) 49%, 
        rgba(255, 255, 0,1) 51%, 
        rgba(255, 160, 0,1) 100%);
}
.greymetal
{
    background-image: linear-gradient(to left top, rgb(63, 63, 63) 0%, 
        rgb(185, 185, 185) 49%, 
        rgba(185, 185, 185,1) 51%, 
        rgb(92, 92, 92) 100%);
    /* background-image: linear-gradient(to left top, rgba(116,116,116,1) 0%, 
        rgba(255, 255, 255,1) 49%, 
        rgba(255, 255, 255,1) 51%, 
        rgba(141,141,141,1) 100%); */
}
.grey
{
    background-color:rgb(170, 170, 170);
}
.red
{
    background-color:rgb(255, 116, 96);
}
.green
{
    background-color:rgb(100, 240, 100);
}
.blue
{
    background-color:rgb(170, 170, 255);
}
.gold
{
    background-color:rgb(255, 215, 64);
}
.metallic_background_small_mw
{
    
    height: 100%;
    width: 100%;
    padding:5px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 0px 2px, #fff 0px 0px 5px 2px;
    /* padding-top:34px; */
}
.subsection_container_mw
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    /* background-color: rgb(170, 170, 170); */
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.title_padding
{
    padding-top:35px;
}
.title_padding_small
{
    padding-top: 25px;
}
.noinset
{
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    border: 1px solid black;
    padding: 5px 10px;
}
</style>
