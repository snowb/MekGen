import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store= new Vuex.Store(
    {
        strict: process.env.NODE_ENV !== 'production',
        state:
        {
            components:{
                "00b21977-fa33-4f49-925b-5f766792384c":JSON.parse('{"uuid":"00b21977-fa33-4f49-925b-5f766792384c","component_category":"equipment","component_type":"projectile","component_name":"9K Gun","custom_component_name":false,"cost_multipliers":{"selected_accuracy":1,"feature_array":1,"selected_multi_feed":1,"selected_burst_value":1,"selected_range_mod":1.25,"accuracy":1,"feature":1,"multi_feed":1,"burst_value":1,"range_mod":1.25},"efficiencies":{"space":{"modifier":0,"cost":0}},"selected_damage":{"damage":9,"cost":9,"range":9},"selected_accuracy":{"accuracy":0,"cost":1},"feature_array":[],"selected_range_mod":{"range_mod":1.5,"cost":1.25,"range":13.5},"selected_multi_feed":{"feeds":1,"cost":1},"selected_burst_value":{"burst_value":1,"cost":1},"cost":14.04,"cost_multiplier":1.56,"weight":4.5,"damage_capacity":9}'),
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
            currentImportTab:"equipment",
            currentExportTab:"equipment",
            currentAppTab:"mek-design-components",
            currentTypeTab:"",
            selected_component:null,
            alert_messages:[],
            import_alert_messages:[]
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
                    //let copyComponent=_component;//make copy
                    let copyComponent=this.cleanComponent(_component);//clean values: ^[\w\d-_. ]+$ else null'd 
                    let category=copyComponent.component_category;
                    let type=copyComponent.component_type;
                    let uuid=copyComponent.uuid!==undefined?copyComponent.uuid:this.create_uuid();
                    copyComponent.uuid=uuid;
                    if(typeof category!=="undefined" && typeof type!=="undefined")
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
            showTab(_state, _payload)
            {
                if(typeof _payload.prop==="string" && typeof _payload.tab==="string" && _state[_payload.prop]!==undefined)
                {
                    Vue.set(_state,_payload.prop,_payload.tab);
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
            },
            saveImportAlerts(_state, _message)
            {
                if(Array.isArray(_message))
                {
                    Vue.set(_state,"import_alert_messages",_state.import_alert_messages.concat(_message));
                }
                else if(typeof _message==="string")
                {
                    _state.import_alert_messages.push(_message);
                }
            },
            resetImportAlertMessages(_state)
            {
                Vue.set(_state,"import_alert_messages",[]);
            },
        },
        actions:
        {
            importComponent(_context, _component)
            {
                let cleanedComponent=this.validateComponent(_component);
                _context.commit("saveComponent",cleanedComponent.data);
                _context.commit("saveImportAlerts",cleanedComponent.alerts);
            }
        },
        getters:
        {
            componentList: _state => _state.component_list,
            categoryList:_state=>Object.keys(_state.component_list),
            typeList:(_state)=>(_category)=>
            {
                if(_state.component_list[_category]===undefined)
                {
                    return [];
                }
                return Object.keys(_state.component_list[_category]);
            },
            getComponent: (_state)=>(_uuid)=>_state.components[_uuid],
            targetDesignTab: _state=>_state.currentDesignTab,
            targetBuildTab: _state=>_state.currentBuildTab,
            targetImportTab: _state=>_state.currentImportTab,
            targetExportTab: _state=>_state.currentExportTab,
            targetAppTab: _state=>_state.currentAppTab,
            targetTypeTab: _state=>_state.currentTypeTab,
            selectedComponent: _state =>
            {
                return _state.selected_component===null?null:_state.components[_state.selected_component];
            },
            alertMessages:(_state)=>{return _state.alert_messages},
            importAlertMessages:(_state)=>{return _state.import_alert_messages},
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

//load cleanComponent method from module
import(/* webpackChunkName: "clean_component_module" */"./modules/clean_component_module")
.then((_module)=>
    {
        store.cleanComponent=_module.cleanComponent;
    });
//load create_uuid method from module
import(/* webpackChunkName: "create_uuid_module" */"./modules/create_uuid_module")
.then((_module)=>
    {
        store.create_uuid=_module.create_uuid;
    });

//load master validator method
import(/* webpackChunkName: "mek_master_validator" */"./modules/validators/mek_master_validator")
.then((_module)=>
    {
        store.validateComponent=_module.validateComponent;
    });


export default store;