<template functional>
  <div>
    ****<br>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/snowb/MekGen">Mekton Mek Generator</a><br/>
    Build Date-Time: {{props.functionalProps.VUE_APP_BUILD_DATE}}<br/>
    <span v-if="props.functionalProps.NODE_ENV=='production'">
      'Prod' Build Version: {{props.functionalProps.VUE_APP_VERSION}}
    </span>
    <span v-else>
      Dev Commit Count: {{props.functionalProps.VUE_APP_COMMIT_COUNT}}
    </span><br/>
    ****<br/>
    <br/>
    <br/>
    <a target="_blank" rel="noopener noreferrer" href="https://rtalsoriangames.com/">R. Talsorian Games</a> reserves all rights to <a target="_blank" rel="noopener noreferrer" href="https://rtalsoriangames.com/mekton/">Mek, Mekton, MektonZeta</a> material.
    <br/>
    <br/>
    Mekton Mek Generator built by <a target="_blank" rel="noopener noreferrer" href="https://github.com/snowb/MekGen">snowb</a>
    <br/>
    <br/>
    Settings-Work-Tool.svg icon made by <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/egor-rumyantsev">Egor Rumyantsev</a> from <a target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com">www.flaticon.com</a>
    <br/>
    <br/>
    MekGen built with:<br>
    <a target="_blank" href="https://vuejs.org/">VueJS</a>, <a target="_blank" rel="noopener noreferrer" href="https://vuex.vuejs.org/">VueX</a>, and <a target="_blank" rel="noopener noreferrer" href="https://cli.vuejs.org/">VueCLI</a><br/>    
  </div>
</template>
<script>
export default {
  name:"mek-settings-about",
}
</script>
<style scoped>

</style>
