<template>
  <div>
    <div :class={fullscreen:isFullscreen,hidden:!isFullscreen}>
      <div class="display_area">
        <div class="metallic_background_small_oc">
          <mek-top-menu @focus-section="focusSection" :section="targetOptionTab" :section-list="sectionList"
            color="dddddd" color-offset="rgb" size="sm" class="subsection_header_small_oc"
          ></mek-top-menu>
          <span class="close_btn" @click="isFullscreen=false">&nbsp;X&nbsp;</span>
          <div class="subsection_container_oc">
            <component :is="targetOptionTab" style="margin-top:5px;"></component>
          </div>
        </div>
      </div>
    </div>
    <svg  style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
      <linearGradient id="gradient" gradientTransform="rotate(70)">
        <stop offset="0%" stop-color="rgb(76, 76, 76)"/>
        <stop offset="49%" stop-color="rgb(221, 221, 221)"/>
        <stop offset="51%" stop-color="rgb(221, 221, 221)"/>
        <stop offset="100%" stop-color="rgb(32, 32, 32)"/>
      </linearGradient>
    </svg>
    <svg class="gear" @click="toggleFullscreen"> 
      <use id="svg" href="@/assets/settings-work-tool.svg#settings_gear"></use>
    </svg>
    
  </div>
</template>
<script>
export default {
  name: "mek_options-container",
  components:
  {
    "mek-top-menu":()=>import(/* webpackChunkName: "mek_top-menu" */"@/app_components/mek_top_menu/mek_top-menu.vue"),
    "mek-options-about":()=>import(/* webpackChunkName: "mek_options-about" */"./mek_options-about.vue"),
    "mek-options-options":()=>import(/* webpackChunkName: "mek_options-options" */"./mek_options-options.vue"),
  },
  props:[],
  mixins:[],
  data:function()
  {
    let obj={};
    obj.isFullscreen=false;
    obj.sectionList=
    [
      {id:"mek-options-about",name:"About"},
      {id:"mek-options-options",name:"Options"},
    ];
    obj.targetOptionTab="mek-options-about";
    return obj;
  },
  methods:
  {
    toggleFullscreen()
    {
      this.isFullscreen=!this.isFullscreen;
    },
    focusSection(_section)
    {
      this.targetOptionTab=_section;
    }
  },
  computed:
  {

  }
}
</script>
<style scoped>
.close_btn
{
  position:absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  color: #e2e2e2;
  font-weight:bold;
  border-radius: 7px;
  box-shadow: inset -1px -1px 1px 1px white;
  padding: 0px 5px;
}
.close_btn:hover
{
    background-color: white;
    color: #222;
    border-radius: 7px;
    box-shadow: inset 1px 1px 1px 1px #222;
}
.display_area
{
  margin-top:25px;
  background-color:white; 
  display:inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.hidden
{
  display: none;
}
.fullscreen
{
  min-width:100%;
  min-height:100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgb(255,255,255,0.5);
}
.gear
{
  max-width: 25px;
  max-height: 25px;
  position: absolute;
  right: 5px;
  top: 5px;
}
#svg
{
  fill: url("#gradient");
}
.gear:hover
{
  animation-duration: 3s;
  animation-name: gearspin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes gearspin
{
  from
  {
    transform: rotate(0deg)
  }
  to
  {
    transform: rotate(360deg)
  }
}

.metallic_background_small_oc
{
    background-image: linear-gradient(to left top, rgba(247,0,0,1) 0%, 
        rgba(255, 129, 110,1) 49%, 
        rgba(255, 129, 110,1) 51%, 
        rgba(185,0,0,1) 100%);
    height: 100%;
    width: 100%;
    min-width: 230px;
    padding:5px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 0px 2px, #fff 0px 0px 5px 2px;
    /* padding-top:34px; */
}
.subsection_container_oc
{
    position: relative;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    width: 100%;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
}
.subsection_header_small_oc
{
    /* font-weight: bold; */
    position: relative;
    left: 50%;
    transform: translate(-50%,0%);
    /*top: -34px; */
/*     font-family: Arial Black, sans-serif;
    font-size: 110%; */
    /* border: 1px solid black; */
    padding: 2px 10px;
    border-radius: 7px;
/*     box-shadow: rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset, rgba(0,0,0,0.5) 1px 1px 1px 3px inset;
    color: #ddd;
    text-shadow: 1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000, -1px 1px 1px #000;
    background-color: rgba(0,0,0,0.2); */
    white-space: nowrap;
}
</style>
