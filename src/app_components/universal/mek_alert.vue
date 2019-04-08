<template>
    <transition :nothing="alertMessage" name="alert" @enter="showAlert=false" @after-leave="resetAlert">
        <span class="alert mek-flex-col" v-if="showAlert">
            <div class="metallic_background">
                <div class="subsection_container">
                    <div class="subsection_header">Alert</div>
                    <div v-if="Array.isArray(alertMessage)">
                        <span v-for="(msg,index) in alertMessage" :key="'msg'+index" style="display:block;">
                            {{alertMessage[index]}}
                        </span>
                    </div>
                    <div v-else>
                        {{alertMessage}}
                    </div>
                </div>
            </div>
        </span>
    </transition>
</template>
<script>

export default
{
    name:"mek_alert",
    props:[],
    components:
    {
    },
    data:function()
    {
        let obj={};
        obj.showAlert=false;
        return obj;
    },
    methods:
    {
        resetAlert()
        {
            this.$store.commit("resetAlertMessages");
        }
    },
    computed:
    {
        alertMessage()
        {
            let alertMessages=this.$store.getters.alertMessages;
            this.$set(this,"showAlert",!!alertMessages && alertMessages.length>0)
            return alertMessages;
        }
    }
}
</script>
<style scoped>
.alert
{
    position:absolute;
    left:25%;
    font-weight: bold;
    font-size: 125%;
}
.metallic_background
{
    background-image: linear-gradient(to left top, rgba(200,200,200,1) 0%, 
        rgba(50, 50, 50,1) 49%, 
        rgba(50, 50, 50,1) 51%, 
        rgba(255,255,255,1) 100%);
    height: 100%;
    width: 100%;
    padding:5px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 0px 2px, #fff 0px 0px 5px 2px;
    padding-top:43px;
}
.subsection_header
{
    font-weight: bold;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
    top: -41px;
    font-family: Arial Black, sans-serif;
    font-size: 125%;
    border: 1px solid black;
    padding: 0px 10px 2px 10px;
    border-radius: 7px;
    box-shadow: rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset, rgba(0,0,0,0.5) 1px 1px 1px 3px inset;
    color: #d00;
    text-shadow: 1px 1px 1px #fff, 1px -1px 1px #fff, -1px -1px 1px #fff, -1px 1px 1px #fff;
    background-color: rgba(0,0,0,0.2);
}
.subsection_container
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.alert-leave-active
{
    transition: all 500ms 3s;
}
.alert-leave-to
{
    opacity: 0;
}
</style>
