<template>
    <div id="app" style="display:inline-flex-col;">
      <div class="mek-button-container">
        <span :class="{'mek-button':!importClicked,'mek-button-clicked':importClicked}" 
            @click="importJSON" @animationend="importClicked=false"
            title="Save Equipment"
        >
            Import
        </span>
      </div>
      <!--div class="json_container" contenteditable="true" @input="updateJSON($event.target.textContent)">
      </div-->
      <textarea :style="{'height':textAreaHeight}" class="json_container" @input="updateJSON" placeholder="(copy and paste JSON data from Export tab)"></textarea>
    </div>
</template>
<script>

export default {
  name: 'import-component',
  components:
  {
  },
  data:function()
  {
    let obj={};
    obj.jsonData="";
    obj.importClicked=false;
    obj.textArea=null;
    obj.textAreaHeight="auto";
    return obj;
  },
  methods:
  {
    updateJSON(_data)
    {
      this.textAreaHeight="auto";
      this.textArea=_data.target;
      this.jsonData=_data.target.value;
      this.textAreaHeight=this.textArea.scrollHeight+"px";
    },
    importJSON()
    {
      this.importClicked=true;
      this.$store.dispatch("importComponent",JSON.parse(this.jsonData));
      this.jsonData="";
    },
   
  }
}
</script>

<style scoped>
.json_container
{
    align-self: baseline;
    border-radius: 7px;
    padding: 10px;
    background-color: #eee;
    height: 100%;
    -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(0, 0, 0) 0px 0px 5px 2px inset;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(0, 0, 0) 0px 0px 5px 2px inset;
    margin-right: 10px;
    max-width: 75vw;
    overflow-wrap:break-word;
    word-break: break-all;
    text-align:left;
    min-width: 95vw;
    max-width: 95vw;
    overflow-y: hidden;
}
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
    margin-top: 10px;
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
