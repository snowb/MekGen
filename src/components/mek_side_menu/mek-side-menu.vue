<template>
    <span class="side_menu_container">
        <!--span class="side_menu_header">Equipment</span>
        <span v-for="(component,key,compindex) in components" 
            :key="'side-menu'+compindex"
        >
            <div class="equipment_header">{{key}}</div>
            <div class="equipment" v-for="(equipment,eqindex) in component" 
                :key="'side-menu-comp'+key+eqindex"
                :data-text="equipment.component_name"
                @click="loadData(equipment)"
            >
                {{equipment.component_name}}
            </div>
        </span-->
        <span v-if="Object.keys(componentList).length==0">
            No Saved<br>Components
        </span>
        <div v-for="(category,cat_key,cat_idx) in componentList"
            :key="'side-menu-cat-'+cat_idx"
            style=""
        >
            <div class="side_menu_header">{{cat_key}}</div>
            <div v-for="(component,comp_key,comp_idx) in category"
                :key="'side-menu-comp-'+comp_idx"
            >
                <div class="equipment_header">{{comp_key}}</div>
                <div v-for="(eq_name,eq_key,eq_idx) in component"
                    :key="'side-menu-eq-'+eq_idx" :data-text="eq_name"
                    class="equipment"
                    @click="loadData(eq_key)"
                >
                    {{eq_name}}
                </div>
            </div>
        </div>
    </span>
</template>

<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";
import {mapGetters} from 'vuex';

export default
{
    name: "mek_side_menu",
    props:[""],
    mixins:[selected_item_mixin],
    data:function()
    {
        let obj={};
        return obj;
    },
    methods:
    {
        loadData(_uuid)
        {
            this.$store.commit("showTab","mek-"+this.getComponent(_uuid).component_type);
            this.$store.commit("selectComponent",_uuid);
        }
    },
    computed:
    {
        ...mapGetters(
            {
                componentList:'componentList',
                getComponent:'getComponent'
            })
    }
}
</script>
<style scoped>
.side_menu_container
{
    white-space: nowrap;
    display:inline-flex;
    flex-direction:column;
    border-radius: 7px;
    padding: 10px;
    background-color: rgb(170, 170, 170);
    height: 100%;
    -webkit-box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset, rgb(255, 255, 255) 0px 0px 5px 2px inset;
    margin-right: 10px;
    min-width: 105px;
    max-width: 105px;
    width: 105px;
}
.side_menu_header
{
    font-weight: bold;
    font-size: 110%;
    box-shadow: 0px 1px 0px #222;
    text-transform: capitalize;
}
.equipment_header
{
    margin-top:5px;
    text-transform: capitalize;
    font-weight: bold;
    margin-left: 10px;
    overflow: hidden;
}
.equipment
{
    font-weight: normal;
    margin-left: 20px;
    background-color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.equipment:hover
{   
    color: transparent;
}
.equipment:hover::after
{
    content:attr(data-text);
    position:absolute;
    left: auto;
    top: auto;
    overflow: visible;
    color: #222;
    background-color: #aaa;
    display: block;
    padding-right: 5px;
    margin-top:-1.1rem;
    border-radius: 0px 7px 7px 0px;
    box-shadow: 1px 1px 1px #000, 1px -1px 1px #000;
    z-index: 1000;
}
</style>