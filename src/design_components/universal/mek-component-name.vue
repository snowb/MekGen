<template>
    <div style="margin:10px 0px;align-self:flex-start;" @mouseover="showEdit=true" @mouseout="showEdit=false">
        <span class="section_header">
            <span style="font-size:50%;vertical-align:super;">{{newComponent?"(New)":""}} {{componentChanged?"(Unsaved)":""}} </span>
            <span class="edit_name" :contenteditable="editMode" @keydown="catchEnter($event)">{{componentName}}</span>
        </span>
        <span v-if="showEdit && !editMode" class="icon_container edit_icon" title="Edit Name" @click="editName">
            <v-icon name="edit" scale="2"></v-icon>
        </span>
        <span v-if="editMode" class="icon_container save_icon" title="Save Name" @click="saveName">
            <v-icon name="save" scale="2"></v-icon>
        </span>
    </div>
</template>
<script>
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/save';
import Icon from 'vue-awesome/components/Icon';

export default
{
    name:"mek_component_name",
    props:["componentName","newComponent","componentChanged"],
    components:
    {
        'v-icon':Icon
    },
    data:function()
    {
        let obj={};
        obj.showEdit=false;
        obj.editMode=false;
        return obj;
    },
    methods:
    {
        editName:function()
        {
            this.editMode=true;

            let editTarget=document.querySelector(".edit_name");
            editTarget.focus();
            editTarget.innerText=this.componentName;

            let range = document.createRange();
            let sel = window.getSelection();
            range.setStart(editTarget.childNodes[0], 0);
            range.setEnd(editTarget.childNodes[0], editTarget.childNodes[0].length)
            sel.removeAllRanges();
            sel.addRange(range);
            window.setTimeout(()=>{editTarget.focus()},1)
        },
        saveName:function()
        {
            this.editMode=false;
            let editTargetContent=document.querySelector(".edit_name").textContent;
            this.$emit("update-component-name",editTargetContent)
        },
        catchEnter(_event)
        {
            switch(true)
            {
                case /^[\w\d-_ ]$|^Arrow(Up|Down|Left|Right)$|^(Delete|Backspace)$/i.test(_event.key):
                    //allow
                    break;
                case /^Enter$/i.test(_event.key):
                    _event.preventDefault();
                    _event.stopPropagation();
                    this.saveName();
                    break;
                default:
                    _event.preventDefault();
                    _event.stopPropagation();
            }
        }
    }
}
</script>
<style scoped>
.icon_container
{
    /*background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
    rgba(255, 129, 110,1) 49%, 
    rgba(255, 129, 110,1) 51%, 
    rgba(185,0,0,1) 100%);*/
    display: inline-block;
    border-radius: 0px 7px 7px 0px;
    color: #eee;
    background-color: #222;
    padding: 2px 5px 1px 1px;
    position: relative;
    cursor: pointer;
}
.edit_icon
{
    top:3px;
}
.save_icon
{
    top:5px;
}
.section_header
{
    display:inline-block;
    font-weight: bold;
    font-size: 25px;
    border:1px solid black;
    border-radius: 7px;
    padding:5px 20px;
    font-family: Arial Black, sans-serif;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 1px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    color: #eee;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    /*background-color: rgba(34,34,34,1);*/
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%)
}
</style>
