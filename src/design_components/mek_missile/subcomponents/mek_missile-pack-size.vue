<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small1">
            <div class="subsection_container1">
                <div class="subsection_header_small1">Pack Size</div>
                <label><span style="font-weight:bold;">Missiles: </span>
                    <input type="text" size="1" v-model="display_missiles" @keydown="catchKeyDown($event)"/>
                </label>
            </div>
        </div>
    </span>
    <!--mek-sub-component-table
        :items="filteredAmmoArray"
        :headers="{type:'Type',cost:'Cost',effect:'Effect'}" :showHeaders="true"
        :format="{cost:'multiplier'}"
        name="Ammo Table" flow="col"
        :selectedIndices="selected_ammo_index_array"
        @update-selected-indices="select_ammo"
    ></mek-sub-component-table-->
</template>
<script>
import selected_item_mixin from "@/mixins/selected_item_mixin";

//import mek_sub_component_table from "../../universal/mek_sub-component-table.vue";
export default
{
    name:"mek_pack_size",
    props:["pack"],
    mixins:[selected_item_mixin,utility_mixin],
    /* components:
    {
        "mek-sub-component-table":mek_sub_component_table
    }, */
    data:function()
    {
        let obj={};
        obj.selected_missiles=1;
        return obj;
    },
    methods:
    {
        select_missiles:function(_missiles)
        {
            this.selected_missiles=_missiles;
            this.$emit("update-pack-size",this.selected_missiles)
        },
        catchKeyDown(_event)
        {
            if(["ArrowUp","ArrowDown"].includes(_event.key))
            {
                _event.preventDefault();
                _event.stopPropagation();
                if(_event.key=="ArrowUp")
                {
                    this.selected_missiles+=1;
                    this.select_missiles(this.selected_missiles);
                }
                else if(this.selected_missiles>1)
                {
                    this.selected_missiles-=1;
                    this.select_missiles(this.selected_missiles);
                }
            }
        }
    },
    computed:
    {
        display_missiles:
        {
            get()
            {
                return this.pack;
            },
            set(_value)
            {
                this.pack;
                let missiles=+_value.replace(/[^0-9]/g,"");//clear all none numeric characters
                this.select_missiles(missiles);
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