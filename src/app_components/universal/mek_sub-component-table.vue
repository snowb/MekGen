<template>
    <span class="mek-flex-col" style="align-self:baseline;">
        <mek-window type="metallic" :title="name">
            <table style="margin:auto;" v-if="flow=='pkey-col'">
                <tr v-if="showHeaders" class="head_row_sct">
                    <th v-for="(header,key) in headers" :key="key+'-header-'+name" class="pad">
                        {{header}}
                    </th>
                </tr>
                <tr v-if="showHeaders">
                    <td :colspan="colspan" style="line-height:2px;border-top:1px solid black">
                        &nbsp;
                    </td>
                </tr>
                <tr v-for="(item,index) in items" :key="index+'-item-'+name"
                    class="clickable_sct pad_sct"
                    :class="selectedItemMultiple('selectedKeys',item[pkey],'selected_item_sct')"
                    @click="updateSelectedData(items[index])"
                >
                    <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name">
                        {{formatOutput(item[key],key)}}
                    </td>
                </tr>
                <tr class="invisible_pad_row_sct">
                    <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                        {{largestKeyValues[key]}}
                    </td>
                </tr>
            </table>
            <table style="margin:auto;" v-else-if="flow=='pkey-row'">
                <tr>
                    <td class="head_column_sct pad_sct" v-if="showHeaders">
                        <div v-for="(header,key) in headers" :key="key+'-header-'+name">
                            {{header}}
                        </div>
                    </td>
                    <td>&nbsp;</td>
                    <td v-for="(item,index) in items" :key="index+'-item-'+name"
                        class="clickable_sct pad_sct"
                        :class="selectedItemMultiple('selectedKeys',item[pkey],'selected_item_sct')"
                        @click="updateSelectedData(items[index])"
                    >
                        <div v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name">
                            {{formatOutput(item[key],key)}}
                        </div>
                    </td>
                </tr>
            </table>
            <table style="margin:auto;" v-if="flow=='dropdown'">
                <tr v-if="showHeaders" class="head_row_sct">
                    <th v-for="(header,key) in headers" :key="key+'-header-'+name">
                        {{header}}
                    </th>
                </tr>
                <tr>
                    <td :colspan="colspan" style="line-height:4px;border-top:1px solid black">
                        &nbsp;
                    </td>
                </tr>
                <tr class="pad selected_item_sct" @click="showDropdown=true"
                    :style="hiddenDropDown"
                >
                    <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name" 
                    >
                        {{items[selectedIndices[0]][key]}}
                    </td>
                </tr>
                <tr class="invisible_pad_row_sct">
                    <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                        {{largestKeyValues[key]}}
                    </td>
                </tr>
            </table>
            <table class="dropdown-table_sct" v-if="flow=='dropdown' && showDropdown">
                <tr v-for="(item,index) in items" :key="index+'-item-'+name"
                    class="clickable_sct pad_sct"
                    :class="selectedItemMultiple('selectedIndices',index,'selected_item_sct')"
                    @click="updateSelectedIndices(index);showDropdown=false"
                >
                    <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name">
                        {{formatOutput(item[key],key)}}
                    </td>
                </tr>
                <tr class="invisible_pad_row_sct">
                    <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                        {{largestKeyValues[key]}}
                    </td>
                </tr>
            </table>
            <table style="margin:auto;" v-if="flow=='dropdown-pkey'">
                <tr v-if="showHeaders" class="head_row_sct">
                    <th v-for="(header,key) in headers" :key="key+'-header-'+name">
                        {{header}}
                    </th>
                </tr>
                <tr>
                    <td :colspan="colspan" style="line-height:4px;border-top:1px solid black">
                        &nbsp;
                    </td>
                </tr>
                <tr class="pad selected_item_sct" @click="showDropdown=true"
                    :style="hiddenDropDown" id="msct-td-id"
                >
                    <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name" id="msct-td-id"
                    >
                        <!-- {{formatOutput(items[key],key)}} -->
                        {{formatOutput(selectedDropdownPkey[key],key)}}
                    </td>
                </tr>
                <tr class="invisible_pad_row_sct">
                    <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                        {{largestKeyValues[key]}}
                    </td>
                </tr>
            </table>
            <table class="dropdown-table_sct" v-if="flow=='dropdown-pkey' && showDropdown"
                 v-click-outside="clickOutside"
            >
                <tr v-for="(item,index) in items" :key="index+'-item-'+name"
                    class="clickable_sct pad_sct"
                    :class="selectedItemMultiple('selectedKeys',item[pkey],'selected_item_sct')"
                    @click="updateSelectedData(items[index])"
                    id="msct-td-id"
                >
                    <td v-for="(header,key) in headers" :key="'item-'+key+'-element-'+name" id="msct-td-id">
                        {{formatOutput(item[key],key)}}
                    </td>
                </tr>
                <tr class="invisible_pad_row_sct">
                    <td v-for="(header,key) in headers" :key="key+'-pad-'+name">
                        {{largestKeyValues[key]}}
                    </td>
                </tr>
            </table>
        </mek-window>
    </span>
</template>
<script>
import selected_item_mixin from "@/mixins/selected_item_mixin";

export default 
{
    name:"mek_sub_component_table",
    props:["name","items","headers","flow","selectedIndices","showHeaders","format","pkey","selectedKeys"],
    /*
        name: String, title of the sub-component
        items: Array[Object], array of objects to display in the sub-component
        headers: Object, simple map of element key to header display string and which keys to display
        flow: String, "row" or "col", direction of data display
        selectedIndices: Array[Number], currently selected elements
        showHeaders: Bool, whether to show table headers or not
        format: String, how to format the output of item data comma-seperated tied to keys
        pkey: String, primary of data table for comparing
        selectedKeys: primary keys of selected elements
     */
    mixins:[selected_item_mixin],
    components:{
        "mek-window": () =>
            import(/* webpackChunkName: "mek_window" */ "@/app_components/universal/mek_window.vue"),
    },
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
        updateSelectedData(_data)
        {
            if(_data[this.pkey]!=this.selectedKeys[0])
            {
                this.$emit("update-selected-data",_data);
            }
            this.showDropdown=false;
        },
        formatOutput(_data, _key)
        {
            if(_data===Infinity || _data=="__INFINITY__")
            {//special codes for displaying Infinity symbol
                return "\u221E";
            }
            if(_data=="__NIL__")
            {//special codes for displaying NIL symbol
                return "\u00D8";
            }
            if(_data=="__HEX__")
            {//special codes for displaying "Hex" instead of number symbol
                return "Hex";
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
        },
        clickOutside(_event)
        {
            if(_event.target.id!="msct-td-id")
            {
                this.showDropdown=false;
            }
        }
    },
    computed:
    {
        // itemDisplayedKeys()
        // {
        //     return this.items;

        //     /* 
        //     old way, only allows matching of displayed data
        //     keeping here for now ... just in case
        //     let headers=this.headers;
        //     return this.items.reduce((_newArray,_elem)=>
        //     {
        //         let obj={};
        //         for(let key in _elem)
        //         {
        //             if(Object.keys(headers).includes(key))
        //             {
        //                 obj[key]=_elem[key];
        //             }
        //         }
        //         _newArray.push(obj);
        //         return _newArray;
        //     },[]); 
        //     */
        // },
        largestKeyValues()
        {
            return this.items.reduce((_newObj,_elem)=>
            {
                for(let key in _elem)
                {
                    if(typeof _newObj[key]==="undefined")
                    {
                        _newObj[key]="";
                    }
                    let stringVal=(""+_elem[key]);
                    if(_newObj[key].length-4 <= stringVal.length)
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
        },
        colspan()
        {
            return Object.keys(this.headers).length
        },
        selectedDropdownPkey()
        {
            let selected_dropdown_pkey={};
            selected_dropdown_pkey[this.pkey]=null;
            this.items.some((_el)=>
            {
                if(_el[this.pkey]==this.selectedKeys[0])
                {
                    selected_dropdown_pkey=_el;
                    return true;
                }
                return false;
            },this);
            return selected_dropdown_pkey;
        }
    },
    directives:
    {
        "click-outside":
        {
            bind(_el, _binding, _vnode) 
            {
                _vnode.context.showDropdowm=true;
                document.addEventListener('click',_vnode.context.clickOutside);
            },   
            unbind(_el, _binding, _vnode) 
            {
                document.removeEventListener('click',_vnode.context.clickOutside);
            },

            // stopProp(event) { event.stopPropagation() }
        }
    }
}
</script>
<style scoped>
table
{
    border-collapse: collapse;
    box-sizing:border-box;
}
.invisible_pad_row_sct
{
    visibility:hidden;
    height:0px;
    line-height:0px;
    font-weight:bold;
}
.dropdown-table_sct
{
    margin:auto;
    position:absolute;
    background-color:#aaa;
    top:37px;
    border-radius: 7px;
    box-shadow: #222 0px 0px 5px 2px;
    z-index:100;
}
.head_column_sct
{
    padding:2px 5px; 
    font-weight:bold;
    text-align:right;
    border-right:1px solid black;
    margin-right:5px;
}
.head_row_sct
{
    font-weight:bold; 
    border-bottom:1px solid black;
}
.clickable_sct
{
    cursor: pointer;
}
.pad_sct
{
    padding: 2px 5px;
}
.clickable_sct:hover
{
    background-color: white;
    color: #222;
    border-radius: 7px;
    box-shadow: inset 1px 1px 1px 1px #222;
}
tr.clickable_sct:hover td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.clickable_sct:hover td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
.selected_item_sct
{
    background-color: #222 !important;
    color: #fff !important;
    font-weight:bold;
    border-radius: 7px;
    box-shadow: inset -1px -1px 1px 1px white !important;
}
tr.selected_item_sct td
{
    padding-top: 2px;
    padding-bottom: 2px;
}
tr.selected_item_sct td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.selected_item_sct td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
tr.clickable_sct:hover td:first-child
{
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}
tr.clickable_sct:hover td:last-child
{
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
</style>
