<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <div class="metallic_background_small1">
            <div class="subsection_container1">
                <div class="subsection_header_small1">{{name}}</div>
                <table style="margin:auto;" v-if="flow=='row'">
                    <tr>
                        <td class="head_column1 pad" v-if="showHeaders">
                            <div v-for="(header,key) in headers" :key="key+'-header-'+name">
                                {{header}}
                            </div>
                        </td>
                        <td>&nbsp;</td>
                        <td v-for="(item,index) in itemDisplayedKeys" :key="index+'-item-'+name"
                            class="clickable1 pad"
                            :class="selectedItemMultiple('selectedIndices',index,'selected_item1')"
                            @click="updateSelectedIndices(index)"
                        >
                            <div v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name">
                                {{formatOutput(item[key],key)}}
                            </div>
                        </td>
                    </tr>
                </table>
                <table style="margin:auto;" v-else-if="flow=='col'">
                    <tr v-if="showHeaders" class="head_row">
                        <th v-for="(header,key) in headers" :key="key+'-header-'+name" class="pad">
                            {{header}}
                        </th>
                    </tr>
                    <tr><td :colspan="headers.length" style="line-height:4px;">&nbsp;</td></tr>
                    <tr v-for="(item,index) in itemDisplayedKeys" :key="index+'-item-'+name"
                        class="clickable1 pad"
                        :class="selectedItemMultiple('selectedIndices',index,'selected_item1')"
                        @click="updateSelectedIndices(index)"
                    >
                        <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name">
                            {{formatOutput(item[key],key)}}
                        </td>
                    </tr>
                    <tr class="invisible_pad_row">
                        <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                            {{largestKeyValues[key]}}
                        </td>
                    </tr>
                </table>
                <table style="margin:auto;" v-if="flow=='dropdown'">
                    <tr v-if="showHeaders" class="head_row">
                        <th v-for="(header,key) in headers" :key="key+'-header-'+name">
                            {{header}}
                        </th>
                    </tr>
                    <tr><td :colspan="headers.length" style="line-height:4px;">&nbsp;</td></tr>
                    <tr class="pad selected_item1" @click="showDropdown=true"
                        :style="hiddenDropDown"
                    >
                        <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name" 
                        >
                            {{itemDisplayedKeys[selectedIndices[0]][key]}}
                        </td>
                    </tr>
                    <tr class="invisible_pad_row">
                        <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                            {{largestKeyValues[key]}}
                        </td>
                    </tr>
                </table>
                <table class="dropdown-table" v-if="flow=='dropdown' && showDropdown">
                    <tr v-for="(item,index) in itemDisplayedKeys" :key="index+'-item-'+name"
                        class="clickable1 pad"
                        :class="selectedItemMultiple('selectedIndices',index,'selected_item1')"
                        @click="updateSelectedIndices(index);showDropdown=false"
                    >
                        <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name">
                            {{formatOutput(item[key],key)}}
                        </td>
                    </tr>
                    <tr class="invisible_pad_row">
                        <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                            {{largestKeyValues[key]}}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
import selected_item_mixin from "../../mixins/selected_item_mixin";

export default 
{
    name:"mek_sub_component_table",
    props:["name","items","headers","flow","selectedIndices","showHeaders","format"],
    /*
        name: String, title of the sub-component
        items: Array[Object], array of objects to display in the sub-component
        headers: Object, simple map of element key to header display string and which keys to display
        flow: String, "row" or "col", direction of data display
        selectedIndices: Array[Number], currently selected elements
        pkey: String, primary key for determining selected index/indices
        multiplier: Boolean, whether component is a cost multipler
        format: String, how to format the output of item data comma-seperated tied to keys
     */
    mixins:[selected_item_mixin],
    components:{},
    data:()=>
    {
        let obj={};
        obj.showDropdown=false;
        return obj;
    },
    methods:
    {
        updateSelectedIndices(_index)
        {
            this.$emit("update-selected-indices",_index);
        },
        formatOutput(_data, _key)
        {
            if(_data===Infinity)
            {
                return "\u221E"
            }
            if(typeof this.format==="undefined" || typeof this.format[_key]==="undefined")
            {
                return _data;
            }

            let formatArray=this.format[_key].split(",").map(el=>el.toLowerCase());
            let outputData=_data;
            if(formatArray.includes("percent"))
            {
                outputData=_data*100+"%";
            }
            if(formatArray.includes("multiplier"))
            {
                outputData="x"+outputData;
            }
            if(formatArray.includes("wide-angle"))
            {
                switch(_data)
                {
                    case 0:
                        outputData="\u00D8";
                        break;
                    case 1:
                        outputData="Hex";
                        break;
                    default:
                        outputData=_data+"\u00B0";
                }
            }
            if(formatArray.includes("nullzero"))
            {
                if(_data===0)
                {
                    outputData="\u00D8";
                }
            }
            return outputData;
        }
    },
    computed:
    {
        itemDisplayedKeys()
        {
            let headers=this.headers;
            return this.items.reduce((_newArray,_elem)=>
            {
                let obj={};
                for(let key in _elem)
                {
                    if(Object.keys(headers).includes(key))
                    {
                        obj[key]=_elem[key];
                    }
                }
                _newArray.push(obj);
                return _newArray;
            },[]);
        },
        largestKeyValues()
        {
            return this.itemDisplayedKeys.reduce((_newObj,_elem)=>
            {
                for(let key in _elem)
                {
                    if(typeof _newObj[key]==="undefined")
                    {
                        _newObj[key]="";
                    }
                    let stringVal=(""+_elem[key]);
                    if(_newObj[key].length <= stringVal.length)
                    {
                        _newObj[key]="xx"+stringVal+"xx";
                    }
                }
                return _newObj;
            },{});
        },
        hiddenDropDown()
        {
            return this.showDropdown ? "visibility:hidden;" : "";
        }
    }
}
</script>
<style scoped>
.invisible_pad_row
{
    visibility:hidden;
    height:0px;
    line-height:0px;
    font-weight:bold;
}
.dropdown-table
{
    margin:auto;
    position:absolute;
    background-color:#aaa;
    top:37px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 5px 2px;
    z-index:100;
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
.head_column1
{
    padding:2px 5px; 
    font-weight:bold;
    text-align:right;
    border-right:1px solid black;
    margin-right:5px;
}
.head_row
{
    font-weight:bold; 
    border-bottom:1px solid black;
}
.clickable1
{
    cursor: pointer;
}
.pad
{
    padding: 2px 5px;
}
.clickable1:hover
{
    background-color: white;
    color: #222;
    border-radius: 7px;
    box-shadow: inset 1px 1px 1px 1px #222;
}
tr.clickable1:hover td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.clickable1:hover td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.metallic_background1
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
    padding-top:43px;
}
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
.selected_item1
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
    padding: 2px 5px;
}
tr.selected_item1 td
{
    padding-top: 2px;
    padding-bottom: 2px;
}
tr.selected_item1 td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.selected_item1 td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
</style>
