<template>
    <span class="mek-inline-flex-row">
        <span v-for="(section,index) in sectionList" :key="index" :class="selectedItem('focusedSection',section.id,'top_menu_selected_item','top_menu_nonselected_item')"
            @click="focusSection(section.id)"
            class="clickable top_menu" :style="button_style(selectedItem('focusedSection',section.id,'selected','nonselected'))">
            {{section.name}}
        </span>
    </span>
</template>

<script>
import selected_item_mixin from "@/mixins/selected_item_mixin";

export default
{
    name: "mek_top_menu",
    props:["section","sectionList","size","color","colorOffset","borderRadius"],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        return obj;
    },
    methods:
    {
        focusSection:function(_id)
        {
            this.$emit("focus-section",_id);
            this.$store.commit("clearComponent");
        },
        button_style(_data)
        {
            if(_data=='selected')
            {
                return {fontSize:this.font_size,
                        backgroundImage:this.background_image,
                        color:this.text_color,
                        padding:this.padding_size,
                        margin:"auto"};
            }
            else if(_data=="nonselected")
            {
                return {fontSize:this.font_size,
                        padding:this.padding_size};
            }
        }
    },
    computed:
    {
        focusedSection:function()
        {
            return this.section;
        },
        font_size()
        {
            if(this.size===undefined || this.size=="md")
            {
                return "110%";
            }
            switch(this.size)
            {
                case "sm":
                    return "90%";
                case "lg":
                    return "150%";
            }
            return "110%";
        },
        padding_size()
        {
            if(this.size===undefined || this.size=="md")
            {
                return "10px";
            }
            switch(this.size)
            {
                case "sm":
                    return "5px 10px";
                case "lg":
                    return "10px 15px";
            }
            return "10px";
        },
        background_image()
        {
            if(this.color===undefined || this.color.length==0)
            {
                return `linear-gradient(70deg, 
                        rgb(255, 180, 0) 0%, 
                        rgb(255, 255, 0) 49%, 
                        rgb(255, 255, 0) 51%, 
                        rgb(255, 160, 0) 100%)`;
            }
            let hex_string;
            if(this.color.length>=6)
            {
                hex_string=this.color.slice(0,6);
                //extract only first 6 hex vals
            }
            else if(this.color.length>=3)
            {
                //extract first 3 hex values. expand to 6 digits
                hex_string=this.color.slice(0,3);
                hex_string=hex_string.slice(0,1)
                            +hex_string.slice(0,1)
                            +hex_string.slice(1,2)
                            +hex_string.slice(1,2)
                            +hex_string.slice(2,3)
                            +hex_string.slice(2,3);
            }
            else
            {//extract 1st digit and expand to 6 digits
                hex_string=this.color.slice(0,1).repeat(6);
            }

            let basered=parseInt(hex_string.slice(0,2),16);
            let basegreen=parseInt(hex_string.slice(2,4),16);
            let baseblue=parseInt(hex_string.slice(4,6),16);
            let darkpercent=20;
            let darkerpercent=40;

            let darkred, darkerred;
            if(this.colorOffset!==undefined && /r/i.test(this.colorOffset))
            {
                darkred=parseInt(basered * (100-darkpercent)/100);
                darkerred=parseInt(basered * (100-darkerpercent)/100);
            }
            else
            {
                darkred=basered;
                darkerred=basered;
            }
            darkred=darkred<255 ? darkred : 255;
            darkred=darkred>0 ? darkred : 0;
            darkerred=darkerred<255 ? darkerred : 255;
            darkerred=darkerred>0 ? darkerred : 0;

            let darkgreen, darkergreen;
            if(this.colorOffset!==undefined && /g/i.test(this.colorOffset))
            {
                darkgreen=parseInt(basegreen * (100-darkpercent)/100);
                darkergreen=parseInt(basegreen * (100-darkerpercent)/100);
            }
            else
            {
                darkgreen=basegreen;
                darkergreen=basegreen;
            }
            darkgreen=darkgreen<255 ? darkgreen : 255;
            darkgreen=darkgreen>0 ? darkgreen : 0; 
            darkergreen=darkergreen<255 ? darkergreen : 255;
            darkergreen=darkergreen>0 ? darkergreen : 0; 


            let darkblue, darkerblue;
            if(this.colorOffset!==undefined && /b/i.test(this.colorOffset))
            {
                darkblue=parseInt(baseblue * (100-darkpercent)/100);
                darkerblue=parseInt(baseblue * (100-darkerpercent)/100);
            }
            else
            {
                darkblue=baseblue;
                darkerblue=baseblue;
            }
            darkblue=darkblue<255 ? darkblue : 255;
            darkblue=darkblue>0 ? darkblue : 0;
            darkerblue=darkerblue<255 ? darkerblue : 255;
            darkerblue=darkerblue>0 ? darkerblue : 0;

            return `linear-gradient(70deg, 
                    rgb(${darkred}, ${darkgreen}, ${darkblue}) 0%, 
                    rgb(${basered}, ${basegreen}, ${baseblue}) 49%, 
                    rgb(${basered}, ${basegreen}, ${baseblue}) 51%, 
                    rgb(${darkerred}, ${darkergreen}, ${darkerblue}) 100%)`;
        },
        text_color()
        {
            if(this.color===undefined || this.color.length==0)
            {
                return "black";
            }
            let hex_string;
            if(this.color.length>=6)
            {
                hex_string=this.color.slice(0,6);
                //extract only first 6 hex vals
            }
            else if(this.color.length>=3)
            {
                //extract first 3 hex values. expand to 6 digits
                hex_string=this.color.slice(0,3);
                hex_string=hex_string.slice(0,1)
                            +hex_string.slice(0,1)
                            +hex_string.slice(1,2)
                            +hex_string.slice(1,2)
                            +hex_string.slice(2,3)
                            +hex_string.slice(2,3);
            }
            else
            {//extract 1st digit and expand to 6 digits
                hex_string=this.color.slice(0,1).repeat(6);
            }

            let basered=parseInt(hex_string.slice(0,2),16);
            let basegreen=parseInt(hex_string.slice(2,4),16);
            let baseblue=parseInt(hex_string.slice(4,6),16);

            return (basered * 299 + basegreen * 587 + baseblue * 114) / 1000 > 125 ? '#222222' : '#e2e2e2'
        }
    }
}
</script>
<style>
.top_menu
{
    padding: 10px;
    border: 1px solid #222;
    font-weight: bold;
    margin: 1px;
}
.clickable
{
    cursor: pointer;
}
.clickable:hover
{
    background-color: white;
    color: #222;
    border-radius: 7px;
    box-shadow: inset 1px 1px 1px 1px #222;
}
.top_menu.clickable:hover
{
    background-color: #222;
    color: #fff;
    border-radius: 30px;
    box-shadow: inset 1px 1px 1px 1px #fff;
}
tr.clickable:hover td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.clickable:hover td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.top_menu_selected_item
{
    /*background-color: #fff !important;*/
/*     background-image: linear-gradient(70deg, 
        rgb(255, 180, 0) 0%,
        rgb(255, 255, 0) 49%,
        rgb(255, 255, 0) 51%,
        rgb(255, 160, 0) 100%); */
    /* color: #222 !important; */
    font-weight:bold;
    border-radius: 30px;
    box-shadow: inset 0px 0px 1px 1px #222 !important;
    /* font-size:110%; */
}
.top_menu_nonselected_item
{
    background-color: rgba(0, 0, 0, 0.7);
    color: #e2e2e2;
    font-weight:bold;
    border-radius: 30px;
    box-shadow: inset -1px -1px 1px 1px white;
    /*font-size:110%;*/
    margin:auto;
    margin: 1px;
}
</style>