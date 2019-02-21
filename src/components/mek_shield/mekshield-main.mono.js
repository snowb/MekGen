Vue.component("mekshield",
{
    props:[],
    data:function()
    {
        let obj={};
        obj.type="Standard";
        obj.type_table=["Standard","Active","Reactive"];
        obj.class_code=1;
        obj.da_table=
            [
                {da:-4,cost:0.6},
                {da:-3,cost:0.8},
                {da:-2,cost:1},
                {da:-1,cost:1.25},
                {da:0,cost:1.5},
            ];
        obj.binder_table=
            [
                {sp_mod:0,cost:1},
                {sp_mod:0.25,cost:1.1},
                {sp_mod:0.33,cost:1.2},
                {sp_mod:0.50,cost:1.3},
                {sp_mod:0.66,cost:1.2},
                {sp_mod:0.75,cost:1.1}
            ];
        obj.reset_table=
            [
                {time:"X",cost:0.5},
                {time:3,cost:0.75},
                {time:2,cost:1.0},
                {time:1,cost:1.5},
                {time:0,cost:2.0}
            ];
        obj.turns_table=
            [
                {time:1,cost:0.3},
                {time:2,cost:0.4},
                {time:3,cost:0.5},
                {time:4,cost:0.6},
                {time:5,cost:0.7},
                {time:7,cost:0.8},
                {time:10,cost:0.9},
                {time:"-",cost:1.0}
            ];
        obj.weakness_table=
            [
                {weakness:"All",monicker:"Shield",cost:1.0,exclusive:false},
                {weakness:"Ablative",monicker:"Screen",cost:1.0,exclusive:false},
                {weakness:"Energy Only",monicker:"Interference",cost:0.75,exclusive:true},
                {weakness:"Matter Only",monicker:"Kinetic",cost:0.75,exclusive:true},
                {weakness:"Ranged Only",monicker:"Swashbuckling",cost:0.75,exclusive:true},
                {weakness:"Enclosing",monicker:"Mirror",cost:0.5,exclusive:false},
                {weakness:"Surge",monicker:"Surge",cost:2.5,exclusive:false}
            ];
        obj.exclusive_weaknesses=obj.weakness_table.reduce(function(_array,_val,_index)
        {
            if(_val.exclusive)
            {
                _array.push(_index);
            }
            return _array;
        },[]);
        obj.selected_da_index=2;
        obj.selected_binder_index=0;
        obj.selected_reset_index=2;
        obj.selected_turns_index=7;
        obj.selected_weakness_index_array=[0];
        obj.weight_efficiency=0;
        obj.space_efficiency=0;
        return obj;
    },
    methods:
    {
        select_type:function(_type)
        {
            this.type=_type;
            if(_type==="reactive")
            {
                this.selected_da_index=null;
                this.selected_reset_index=this.selected_reset_index!==null ? this.selected_reset_index : 2;
                this.selected_turns_index=this.selected_turns_index!==null ? this.selected_turns_index : 7;
                this.selected_binder_index=null;
            }
            else if(_type==="active")
            {
                this.selected_da_index=null;
                this.selected_binder_index=this.selected_binder_index!==null ? this.selected_binder_index : 0;
                this.selected_reset_index=null;
                this.selected_turns_index=null;
            }
            else if(_type=="standard")
            {
                this.selected_da_index=this.selected_da_index!==null ? this.selected_da_index : 2;
                this.selected_binder_index=this.selected_binder_index!==null ? this.selected_binder_index : 0;
                this.selected_reset_index=null;
                this.selected_turns_index=null;
            }
        },
        select_class_code:function(_class_code)
        {
            this.class_code=_class_code;
        },
        select_da:function(_da_table_index)
        {
            this.selected_da_index=_da_table_index;
        },
        select_binder:function(_binder_table_index)
        {
            this.selected_binder_index=_binder_table_index;
        },
        select_reset:function(_reset_table_index)
        {
            this.selected_reset_index=_reset_table_index;
        },
        select_turns:function(_turns_table_index)
        {
            this.selected_turns_index=_turns_table_index;
        },
        toggle_weakness:function(_weakness_index)
        {
            if(this.weakness_table[_weakness_index].weakness.toLowerCase()=="all")
            {
                this.selected_weakness_index_array=[+0];
            }
            else if(this.selected_weakness_index_array.includes(+0))
            {
                this.selected_weakness_index_array.splice(this.selected_weakness_index_array.indexOf(+0),1);
            }
            if(this.selected_weakness_index_array.includes(_weakness_index))
            {
                this.selected_weakness_index_array.splice(this.selected_weakness_index_array.indexOf(_weakness_index),1);
            }
            else
            {
                if(this.weakness_table[_weakness_index].exclusive)
                {
                    this.exclusive_weaknesses.forEach(function(_val,_index)
                    {
                        if(this.selected_weakness_index_array.includes(_val))
                        {
                            this.selected_weakness_index_array.splice(this.selected_weakness_index_array.indexOf(_val),1);
                        }
                    },this);
                }
                this.selected_weakness_index_array.push(_weakness_index);
            }
            if(this.selected_weakness_index_array.length==0)
            {
                this.selected_weakness_index_array.push(+0);
            }
        },
        base_cost:function(_type, _class_code)
        {
            if(_type==="standard")
            {
                return _class_code+4;
            }
            else if(_type=="active")
            {
                return _class_code+6 + (_class_code*0.5);
            }
            else if(_type=="reactive")
            {
                return 12 + _class_code*3;
            }
            return "";
        },
        calculate_stopping_power:function(_class_code)
        {
            return _class_code + 4;
        },
        calculate_extra_space:function(_class_code, _sp_mod)
        {
            let base_sp=this.calculate_stopping_power(_class_code);
            let sp_loss=Math.round((base_sp*_sp_mod)*10)/10;
            return sp_loss*2;
        },
        selectedItem:function(_property, _target_value)
        {
            return this[_property]==_target_value ? "selected_item" : "";
        },
        selectedItemMultiple:function(_property, _target_value)
        {
            return this[_property].includes(_target_value) ? "selected_item" : "";
        }
    },
    computed:
    {
        cost_multiplier:function()
        {
            let multiplier=1;
            multiplier*=this.selected_da_index!==null ? this.da_table[this.selected_da_index].cost : 1;
            multiplier*=this.selected_binder_index!==null ? this.binder_table[this.selected_binder_index].cost : 1;
            multiplier*=this.selected_reset_index!==null ? this.reset_table[this.selected_reset_index].cost : 1;
            multiplier*=this.selected_turns_index!==null ? this.turns_table[this.selected_turns_index].cost : 1;

            if(this.selected_weakness_index_array.length>0)
            {
                let instance=this;
                let weakness_multipler=this.selected_weakness_index_array.reduce(function(_multiplier, _val)
                {
                    return _multiplier * instance.weakness_table[_val].cost;
                },1);
                multiplier*=weakness_multipler;
            }

            return Math.round(multiplier*100)/100;
        },
        space_cost:function()
        {
            if(this.type=="standard")
            {
                return 1 - this.space_efficiency;
            }
            let base_cost=this.base_cost(this.type, this.class_code) * this.cost_multiplier;
            if(this.type=="active")
            {
                return Math.round((base_cost/2 - this.space_efficiency)*100)/100;
            }
            else if(this.type=="reactive")
            {
                return Math.round((base_cost - this.space_efficiency)*100)/100;
            }
        },
        extra_spaces:function()
        {
            return this.calculate_extra_space(this.class_code, this.binder_table[this.selected_binder_index].sp_mod);
        },
        total_cost:function()
        {
            let subtotal_cost=this.base_cost(this.type,this.class_code) * this.cost_multiplier;
            subtotal_cost += this.weight_efficiency*2;
            subtotal_cost += this.space_efficiency*0.5;

            return Math.round(subtotal_cost*100)/100;
        },
        weakness_list:function()
        {
            let instance=this;
            return this.selected_weakness_index_array.reduce(function(_string, _val, _index)
            {
                _string+=_index>0 ? ", " : "";
                _string+=instance.weakness_table[_val].weakness;
                return _string;
            },"");
        },
        ablative_shield:function()
        {
            if(this.type!=="reactive")
            {
                return false;
            }

            let isabl= this.selected_weakness_index_array.some(function(_val)
            {
                return this.weakness_table[_val].weakness.toLowerCase()=="ablative";
            },this);

            return isabl;
        },
        weight:function()
        {
            return (this.calculate_stopping_power(this.class_code) / 2) - this.weight_efficiency;
        }
    },
    mixins:[servo_classes_mixin,selected_item_mixin],
    template:
    `
    <span class="mek-inline-flex-col">
        <div class="section_header">
            Shields
        </div>
        <div class="mek-inline-flex-row">
            <span class="mek-flex-col" style="padding-left:10px; padding-right:10px;">
                <div class="subsection_header">Type</div>
                <div v-for="item in type_table" class="clickable" @click="select_type(item)" :class="selectedItem('selected_type',item)">{{item}}</div>
            </span>
            <span class="mek-flex-col">
                <div class="subsection_header">Class</div>
                <table>
                    <tr v-for="classname in servo_classes" class="clickable" 
                        @click="select_class_code(classname.code)"
                        :class="selectedItem('class_code',classname.code)">
                        <td>{{classname.name}}</td>
                        <td class="td-left">SP:</td>
                        <td class="td-right">{{calculate_stopping_power(classname.code)}}</td>
                        <td class="td-left">Cost:</td>
                        <td v-if="type=='standard'" class="td-right">{{base_cost('standard',classname.code)}}</td>
                        <td v-else-if="type=='active'" class="td-right">{{base_cost('active',classname.code)}}</td>
                        <td v-else-if="type=='reactive'" class="td-right">{{base_cost('reactive',classname.code)}}</td>
                    </tr>
                </table>
            </span>
            <span class="mek-flex-col">
                <div class="subsection_header">Properties</div>
                <span v-if="type=='standard'" class="mek-flex-col">
                    <div style="font-weight:bold;">Defense Ability</div>
                    <table>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">DA</td>
                            <td v-for="da,index in da_table" 
                                class="td-right clickable"
                                :class="selectedItem('selected_da_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_da(index)"
                            >{{da.da}}</td>
                        </tr>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Cost</td>
                            <td v-for="da,index in da_table" 
                                class="td-right clickable" 
                                :class="selectedItem('selected_da_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_da(index)"
                            >x{{da.cost}}</td>
                        </tr>
                    </table>
                </span>
                <span v-if="type=='standard' || type=='active'" class="mek-flex-col">
                    <div style="font-weight:bold;">Binder Space</div>
                    <table>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">-SP</td>
                            <td v-for="binder,index in binder_table" 
                                class="td-right clickable"
                                :class="selectedItem('selected_binder_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_binder(index)"
                            >{{binder.sp_mod*100}}%</td>
                        </tr>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">+Space</td>
                            <td v-for="binder,index in binder_table" 
                                class="td-right clickable" 
                                :class="selectedItem('selected_binder_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_binder(index)"
                            >{{calculate_extra_space(class_code,binder.sp_mod)}}</td>
                        </tr>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Cost</td>
                            <td v-for="binder,index in binder_table" 
                                class="td-right clickable" 
                                :class="selectedItem('selected_binder_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_binder(index)"
                            >x{{binder.cost}}</td>
                        </tr>
                    </table>
                </span>
                <span v-if="type=='reactive'" class="mek-flex-col">
                    <div style="font-weight:bold;">Reset Time</div>
                    <table>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Rounds</td>
                            <td v-for="reset,index in reset_table" 
                                class="td-right clickable"
                                :class="selectedItem('selected_reset_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_reset(index)"
                            >{{reset.time}}</td>
                        </tr>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Cost</td>
                            <td v-for="reset,index in reset_table" 
                                class="td-right clickable" 
                                :class="selectedItem('selected_reset_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_reset(index)"
                            >x{{reset.cost}}</td>
                        </tr>
                    </table>
                </span>
                <span v-if="type=='reactive'" class="mek-flex-col">
                    <div style="font-weight:bold;">Turns in Use</div>
                    <table>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Turns</td>
                            <td v-for="turns,index in turns_table" 
                                class="td-right clickable"
                                :class="selectedItem('selected_turns_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_turns(index)"
                            >{{turns.time}}</td>
                        </tr>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Cost</td>
                            <td v-for="turns,index in turns_table" 
                                class="td-right clickable" 
                                :class="selectedItem('selected_turns_index',index)"
                                style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;"
                                @click="select_turns(index)"
                            >x{{turns.cost}}</td>
                        </tr>
                    </table>
                </span>
            </span>
            <span class="mek-flex-col">
                <div class="subsection_header">&nbsp;</div>
                <span v-if="type=='reactive'" class="mek-flex-col">
                    <div style="font-weight:bold;">Weakness</div>
                    <table>
                        <tr>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Weakness</td>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Monicker</td>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">Cost</td>
                        </tr>
                        <tr v-for="weakness,index in weakness_table"
                            class="clickable"
                            :class="selectedItemMultiple('selected_weakness_index_array',index)"
                            @click="toggle_weakness(index)"
                        >
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">{{weakness.weakness}}</td>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">{{weakness.monicker}}</td>
                            <td style="border:thin solid black; text-align:center; padding-left:5px; padding-right:5px;">x{{weakness.cost}}</td>
                        </tr>
                    </table>
                </span>
            </span>
            <span class="mek-flex-col">
                <div class="subsection_header">Effeciencies</div>
                <span class="mek-flex-col">
                    <div>
                        <span style="font-weight:bold;">
                            Space:
                        </span>
                        <span>
                            -<input type="text" size="1" v-model="space_efficiency"/> space
                        </span>
                    </div>
                    <div>
                        <span style="font-weight:bold;">
                            Weight:
                        </span>
                        <span>
                            -<input type="text" size="1" v-model="weight_efficiency"/> tons
                        </span>
                    </div>
                    <div>
                        <span style="font-weight:bold;">
                            Weight Inefficiency:
                        </span>
                        <span>
                        </span>
                    </div>
                </span>
            </span>
        </div>
        <div class="mek-flex-row">
            <div style="padding-right:10px; padding-left:10px;">
                <div v-if="ablative_shield">Kills: {{calculate_stopping_power(class_code) * 5}}</div>
                <div v-else>Stopping Power: {{calculate_stopping_power(class_code)}}</div>
                <div v-if="type=='standard' || type=='active'">Binder Space: {{extra_spaces}}</div>
                <div v-if="type=='reactive'">Weakness(es): {{weakness_list}}</div>
                <div v-if="type=='reactive'">Reset Time: {{reset_table[selected_reset_index].time}}</div>
                <div v-if="type=='reactive'">Turns in Use: {{turns_table[selected_turns_index].time}}</div>
            </div>
            <div style="padding-right:10px; padding-left:10px;">
                <div>Space: {{space_cost}}</div>
                <div>Weight: {{weight}} tons</div>                
            </div>
            <div style="padding-right:10px; padding-left:10px;">
                <div>Base Cost: {{base_cost(type,class_code)}}</div>
                <div>Multiplier: x{{cost_multiplier}}</div>
                <div style="font-weight:bold;">Total Cost: {{total_cost}}</div>
            </div>
        </div>
    </span>
    `
});