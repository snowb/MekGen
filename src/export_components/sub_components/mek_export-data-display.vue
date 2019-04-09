<template>
  <div class="json_container">
      {{displayedComponent}}
  </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  name: 'export-data-display',
  components:
  {
  },
  data:function()
  {
    let obj={};
    return obj;
  },
  methods:
  {
  },
  computed:
  {
    displayedComponent()
    {
      if(this.selectedComponent==""||this.selectedComponent===null||this.selectedComponent===undefined)
      {
        return "{}";
      }
      return JSON.stringify(this.selectedComponent);
    },
    ...mapGetters(
        {
            selectedComponent:'selectedComponent',
        })
  }
}
</script>

<style scoped>
.json_container
{
    align-self: baseline;
    display:inline-flex;
    flex-direction:column;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    margin-right: 10px;
    max-width: 75vw;
    overflow-wrap:break-word;
    word-break: break-all;
    text-align:left;
}
</style>
