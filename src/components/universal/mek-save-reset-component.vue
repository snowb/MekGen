<template>
    <div class="mek-button-container" style="margin:5px;">
        <span :class="{'mek-button':!saveClicked,'mek-button-clicked':saveClicked}" 
            @click="button_clicked('save')" @animationend="saveClicked=false"
            title="Save Equipment"
        >
            Save
        </span>
        <span :class="{'mek-button':!resetClicked,'mek-button-clicked':resetClicked}" 
            @click="button_clicked('reset')" @animationend="resetClicked=false"
            title="Reset Equipment"
        >
            Reset
        </span>
        <span :class="{'mek-button':!clearClicked,'mek-button-clicked':clearClicked}" 
            @click="button_clicked('clear')" @animationend="clearClicked=false"
            title="Clear/New Equipment"
        >
            New
        </span>
    </div>
</template>
<script>

export default
{
    name:"mek_save_reset_component",
    props:[],
    data:function()
    {
        let obj={};
        obj.showEdit=false;
        obj.editMode=false;
        obj.saveClicked=false;
        obj.resetClicked=false;
        obj.clearClicked=false;
        return obj;
    },
    methods:
    {
        button_clicked:function(_btn)
        {
            if(_btn=="save")
            {
                this.saveClicked=true;
            }
            else if(_btn=="reset")
            {
                this.resetClicked=true;
            }
            else if(_btn=="clear")
            {
                this.clearClicked=true;
            }
            this.$emit("save-reset-component",_btn);
        }
    }
}
</script>
<style scoped>
    .mek-button-container
    {
        align-self:center;
        font-size: 150%;
        font-weight: bold;
    }
    .mek-button
    {
        padding: 5px 15px 5px 15px;
        margin: 5px;
        border: 1px solid #222;

        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.7);
        color: #e2e2e2;
        border-radius: 30px;
        box-shadow: inset -1px -1px 1px 1px white;
    }
    .mek-button:hover
    {
        background-color: rgba(0, 0, 0, 1);
        box-shadow: inset 1px 1px 1px 1px #fff;
        text-shadow: 1px 1px 1px #000, -1px 1px 1px #000, -1px -1px 1px #000, 1px -1px 1px #000;
        /*background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%)*/
    }
    @keyframes clicked
    {
        0%
        {
            background-image: linear-gradient(70deg, 
                rgb(255, 180, 0) 0%,
                rgb(255, 255, 0) 49%,
                rgb(255, 255, 0) 51%,
                rgb(255, 160, 0) 100%);
            color: #222 !important;
        }
        100%
        {
            background-color: rgba(0, 0, 0, 0.7);
            color: #e2e2e2;
        }
    }
    .mek-button-clicked
    {
        padding: 5px 15px 5px 15px;
        margin: 5px;
        cursor: pointer;
        animation: 500ms clicked;
        border-radius: 30px;
        border: 1px solid #222;
        box-shadow: inset 0px 0px 1px 1px #222;
    }
</style>
