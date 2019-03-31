import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store= new Vuex.Store(
    {
        strict: process.env.NODE_ENV !== 'production',
        state:
        {
            components:{
                "00b21977-fa33-4f49-925b-5f766792384c":JSON.parse('{"uuid":"00b21977-fa33-4f49-925b-5f766792384c","component_category":"equipment","component_type":"projectile","component_name":"Gun","cost_multipliers":{"accuracy":1,"feature":1,"multi_feed":1,"burst_value":1,"range_mod":1.25},"efficiencies":{"space":{"cost":0,"modifier":0}},"selected_damage":{"damage":9,"cost":9,"range":9},"selected_accuracy":{"accuracy":0,"cost":1},"feature_array":[],"selected_range_mod":{"range_mod":1.5,"cost":1.25},"selected_multi_feed":{"feeds":1,"cost":1},"selected_burst_value":{"burst_value":1,"cost":1},"cost":11.25,"cost_multiplier":1.25,"weight":4.5,"damage_capacity":9}'),
                "24417195-7da1-4562-9e1f-04982fee5ddc":JSON.parse('{"uuid":"24417195-7da1-4562-9e1f-04982fee5ddc","component_category":"equipment","component_type":"servo","component_name":"Error Test Servo","selected_servo_type":{"type":"Arm"},"selected_servo_class":{"code":1,"id":"SL","name":"Superlight","cost":2,"space":2,"kills":2},"selected_armor":{"name":"Light","cost":1,"stopping_power":1,"code":1},"selected_armor_type":{"type":"Standard","damage_coefficient":1,"cost":1},"selected_absorption":{"absorption":0,"cost":1,"armor_penalty":0},"cost_multipliers":{"armor_type":1,"absorption":1},"kills_space_trade":{"space_modifier":0,"kills_modifier":0,"cost":0},"cost":3,"cost_multiplier":1,"weight":1.5,"total_kills":2,"available_space":2}')
            },
            component_list:{
                equipment:
                {
                    projectile:
                    {
                        "00b21977-fa33-4f49-925b-5f766792384c":"Gun"
                    },
                    servo:
                    {
                        "24417195-7da1-4562-9e1f-04982fee5ddc":"Error Test Servo"
                    }
                }
            },
            currentDesignTab:"mek-shield",
            currentBuildTab:"mek-nothing",
            currentIngestTab:"mek-nothing",
            currentAppTab:"mek-design-components",
            selected_component:null,
            alert_messages:[]
        },
        mutations:
        {
            saveComponent(_state,_component)
            {
                if(_component===null || typeof _component!=="object" || Array.isArray(_component))
                {
                    Vue.set(_state,"selected_component",null);
                }
                else
                {
                    //let copyComponent=JSON.parse(JSON.stringify(_component));//make deep copy
                    let copyComponent=_component;//make deep copy
                    copyComponent=this.cleanComponent(copyComponent);//clean values: ^[\w\d-_. ]+$ else null'd 
                    let category=copyComponent.component_category;
                    let type=copyComponent.component_type;
                    let uuid=copyComponent.uuid;
                    if(typeof category!=="undefined" && typeof type!=="undefined" && typeof uuid!=="undefined")
                    {
                        if(typeof _state.component_list[category]==="undefined")
                        {
                            Vue.set(_state.component_list,category,{});
                        }
                        if(typeof _state.component_list[category][type]==="undefined")
                        {
                            Vue.set(_state.component_list[category],type,{});
                        }
                        Vue.set(_state.component_list[category][type],[uuid],copyComponent.component_name);
                        Vue.set(_state.components,uuid,copyComponent);
                        _state.selected_component=uuid;
                    }
                }
            },
            showDesignTab(_state, _tab)
            {
                if(typeof _tab==="string")
                {
                    Vue.set(_state,'currentDesignTab',_tab);
                }
            },
            showBuildTab(_state, _tab)
            {
                if(typeof _tab==="string")
                {
                    Vue.set(_state,'currentBuildTab',_tab);
                }
            },
            showIngestTab(_state, _tab)
            {
                if(typeof _tab==="string")
                {
                    Vue.set(_state,'currentIngestTab',_tab);
                }
            },
            showAppTab(_state, _tab)
            {
                if(typeof _tab==="string")
                {
                    Vue.set(_state,'currentAppTab',_tab);
                }
            },
            selectComponent(_state, _uuid)
            {
                if(typeof _uuid==="string")
                {
                    Vue.set(_state,"selected_component",_uuid);
                }
            },
            clearComponent(_state)
            {
                Vue.set(_state,"selected_component",null);
            },
            alertMessage(_state, _message)
            {
                if(Array.isArray(_message))
                {
                    Vue.set(_state,"alert_messages",_state.alert_messages.concat(_message));
                }
                else if(typeof _message==="string")
                {
                    _state.alert_messages.push(_message);
                }
            },
            resetAlertMessages(_state)
            {
                Vue.set(_state,"alert_messages",[]);
            }
        },
        getters:
        {
            componentList: _state => _state.component_list,
            getComponent: (_state)=>(_uuid)=>_state.components[_uuid],
            targetDesignTab: _state=>_state.currentDesignTab,
            targetBuildTab: _state=>_state.currentBuildTab,
            targetIngestTab: _state=>_state.currentIngestTab,
            targetAppTab: _state=>_state.currentAppTab,
            selectedComponent: _state =>
            {
                return _state.selected_component===null?null:_state.components[_state.selected_component];
            },
            alertMessages:(_state)=>{return _state.alert_messages},
            getComponentByType:(_state)=>(_category,_type)=>
            {
                if(typeof _state.component_list[_category]==="undefined" || typeof _state.component_list[_category][_type]==="undefined")
                {
                    return undefined;
                }
                
                return _state.component_list[_category][_type];
            }
        }
    });

store.cleanComponent=function(_component)
{
    if(Array.isArray(_component))
    {
        _component.forEach((_element)=>
        {
            if(Array.isArray(_element) || typeof _element==="object")
            {
                _element=store.cleanComponent(_element);
            }
            else if(!/^[\w\d-_.() ]+$/.test(_element) || _element==="")
            {
                _element=null;
            }
        });
    }
    else if(typeof _component==="object")
    {
        for(let prop in _component)
        {
            if(Array.isArray(_component[prop]) || typeof _component[prop]==="object")
            {
                _component[prop]=store.cleanComponent(_component[prop]);
            }
            else if(!/^[\w\d-_.() ]+$/.test(_component[prop]) || _component[prop]==="")
            {
                _component[prop]=null;
            }
        }
    }
    else if(!/^[\w\d-_.() ]+$/.test(_component) || _component==="")
    {
        _component=null;
    }
    return _component;
}

export default store;