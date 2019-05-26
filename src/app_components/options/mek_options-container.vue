<template>
  <div>
    <div :class={fullscreen:isFullscreen,hidden:!isFullscreen}>
      <span class="display_area">
        <mek-top-menu @focus-section="focusSection" :section="targetOptionTab" :section-list="sectionList"
          color="dddddd" color-offset="rgb" size="sm" 
        ></mek-top-menu>
        <component :is="targetOptionTab" style="margin-top:5px;"></component>
      </span>
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
.display_area
{
  margin: 25px;
  padding: 25px;
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
</style>
