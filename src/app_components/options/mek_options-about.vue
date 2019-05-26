<template>
  <div>
    ****<br>
    Mekton Mek Generator<br/>
    Build Date-Time: {{VUE_APP_BUILD_DATE}}<br/>
    <span v-if="NODE_ENV=='production'">
      'Prod' Build Version: {{VUE_APP_VERSION}}
    </span>
    <span v-else>
      Dev Commit Count: {{VUE_APP_COMMIT_COUNT}}
    </span><br/>
    ****<br/>
    <br/>
    <br/>
    R. Talsorian Games reserves all rights to Mek, Mekton, MektonZeta material.
    <br/>
    <br/>
    Mekton Mek Generator built by <a target="_blank" href="https://github.com/snowb/MekGen">snowb</a>
    <br/>
    <br/>
    Settings-Work-Tool.svg icon made by <a target="_blank" href="https://www.flaticon.com/authors/egor-rumyantsev">Egor Rumyantsev</a> from <a target="_blank" href="https://www.flaticon.com">www.flaticon.com</a>
    <br/>
    <br/>
    MekGen built with:<br>
    <a target="_blank" href="https://vuejs.org/">VueJS</a>, <a target="_blank" href="https://vuex.vuejs.org/">VueX</a>, and <a target="_blank" href="https://cli.vuejs.org/">VueCLI</a><br/>    
  </div>
</template>
<script>
export default {
  name:"mek-options-about",
  props:[],
  data:function()
  {
    let obj={};
    obj.VUE_APP_BUILD_DATE=process.env.VUE_APP_BUILD_DATE;
    obj.VUE_APP_VERSION=process.env.VUE_APP_VERSION;
    obj.VUE_APP_COMMIT_COUNT=process.env.VUE_APP_COMMIT_COUNT;
    obj.NODE_ENV=process.env.NODE_ENV;
    return obj;
  }
}
</script>
<style scoped>

</style>
