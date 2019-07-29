<template>
    <div class="mek-button-container">
        <span v-for="(btn,idx) in filteredButtonList" :key="'msrc-'+btn.event+idx"
            :class="{'mek-button':!clickedTracker[btn.event],'mek-button-clicked':clickedTracker[btn.event]}" 
            @click="button_clicked(btn.event)" @animationend="clickedTracker[btn.event]=false"
            :title="btn.button+' Equipment'"
        >
            {{btn.button}}
        </span>
    </div>
</template>
<script>

export default
{
    name:"mek_save_reset_component",
    props:["activeButtons"],
    data:function()
    {
        let obj={};
        obj.editMode=false;
        obj.saveClicked=false;
        obj.resetClicked=false;
        obj.newClicked=false;
        obj.buttonsList=
        [
            {event:"save",button:"Save",clicked:false},
            {event:"reset",button:"Reset",clicked:false},
            {event:"new",button:"New",clicked:false},
            {event:"delete",button:"Delete",clicked:false}
        ];
        obj.clickedTracker=
        {
            "new":false,
            "reset":false,
            "save":false,
        }
        return obj;
    },
    methods:
    {
        button_clicked:function(_btn)
        {
            switch(_btn)
            {
                case "save":
                    this.saveClicked=true;
                    this.clickedTracker[_btn]=true;
                    break;
                case "reset":
                    this.resetClicked=true;
                    this.clickedTracker[_btn]=true;
                    break;
                case "new":
                    this.newClicked=true;
                    this.clickedTracker[_btn]=true;
                    break;
            }
            this.$emit("save-reset-component",_btn);
        },
        setClickedClass(_event)
        {
            switch(_event)
            {
                case "save":
                    return this.saveClicked ? 'mek-button-clicked' : 'mek-button';
                case "reset":
                    return this.resetClicked ? 'mek-button-clicked' : 'mek-button';
                case "new":
                    return this.resetClicked ? 'mek-button-clicked' : 'mek-button';
            }
        }
    },
    computed:
    {
        activeButtonsArray()
        {
            return this.activeButtons===undefined ? null : this.activeButtons.split(",");
        },
        showSave()
        {
            return this.activeButtons===undefined || this.activeButtonsArray.includes('save');
        },
        showReset()
        {
            return this.activeButtons===undefined || this.activeButtonsArray.includes('reset');
        },
        showNew()
        {
            return this.activeButtons===undefined || this.activeButtonsArray.includes('new');
        },
        filteredButtonList()
        {
            let activeButtonsArray=this.activeButtonsArray;
            if(activeButtonsArray===null)
            {
                return this.buttonsList;
            }
            return this.buttonsList.reduce((_array, _el)=>
            {
                if(activeButtonsArray.includes(_el.event))
                {
                    _array.push(_el);
                }
                return _array;
            },[]);
        }
    }
}
</script>
<style scoped>
    @media all and (max-width:500px)
    {
        .mek-button-container
        {
            display:contents;
        }
    }
    .mek-button-container
    {
        align-self:center;
        font-size: 150%;
        font-weight: bold;
        margin:5px;
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
