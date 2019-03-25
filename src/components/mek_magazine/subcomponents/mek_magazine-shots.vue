<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small1">
            <div class="subsection_container1">
                <div class="subsection_header_small1">Shots</div>
                <label><span style="font-weight:bold;">Shots: </span>
                    <input type="text" size="1" v-model="display_shots" @keydown="catchKeyDown($event)"/>
                </label>
            </div>
        </div>
    </span>
</template>
<script>
import utility_mixin from "../../../mixins/utility_mixin";

export default
{
    name:"mek_magazine_shots",
    props:["shots"],
    mixins:[selected_item_mixin,utility_mixin],
    data:function()
    {
        let obj={};
        obj.selected_shots=1;
        return obj;
    },
    methods:
    {
        select_shots:function(_shots)
        {
            this.selected_shots=_shots;
            this.$emit("update-shots",this.selected_shots)
        },
        catchKeyDown(_event)
        {
            if(["ArrowUp","ArrowDown"].includes(_event.key))
            {
                _event.preventDefault();
                _event.stopPropagation();
                if(_event.key=="ArrowUp")
                {
                    this.selected_shots+=1;
                    this.select_shots(this.selected_shots);
                }
                else if(this.selected_shots>1)
                {
                    this.selected_shots-=1;
                    this.select_shots(this.selected_shots);
                }
            }
        }
    },
    computed:
    {
        display_shots:
        {
            get()
            {
                return this.shots <= 0 ? 1 : this.shots;
            },
            set(_value)
            {
                this.shots;
                let shots=+_value.replace(/[^0-9]/g,"");//clear all none numeric characters
                shots=shots<=0 ? 1 : shots;
                this.select_shots(shots);
            }
        }
    }
}
</script>
<style scoped>
.metallic_background_small1
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
    padding-top:34px;
}
.subsection_container1
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.subsection_header_small1
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
</style>