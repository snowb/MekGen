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
            },
            component_list:{
                equipment:
                {
                    projectile:
                    {
                        "00b21977-fa33-4f49-925b-5f766792384c":"Gun"
                    },
                }
            },
            currentDesignTab:"mek-shield",
            currentBuildTab:"mek-build-general",
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
            saveComponent(_state, _component)
            {
                if(_component===null || typeof _component!=="object" || Array.isArray(_component))
                {
                    Vue.set(_state,"selected_component",null);
                }
                else
                {
                    let copyComponent;
                    if(_component.fromLocalStorage===undefined)
                    {
                        copyComponent=this.cleanComponent(_component);//clean values: ^[\w\d-_. ]+$ else null'd
                    }
                    else
                    {
                        copyComponent=this.cleanComponent(_component.componentData);//clean values: ^[\w\d-_. ]+$ else null'd
                    }
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
                    //also save all components to localStorage
                    if(_component.fromLocalStorage===undefined && this.storageAvailable('localStorage'))
                    {
                        this.saveToLocalStorage("mekgendata",JSON.stringify(_state.components));
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
                let cleanedComponent=_component;
                if(_component.condense)
                {
                    cleanedComponent=this.embiggen(_component);
                }
                cleanedComponent=this.validateComponent(cleanedComponent);
                _context.commit("saveComponent",cleanedComponent.data);
                if(_component.condense)
                {
                    _context.commit("saveImportAlerts",["**** Condensed MekJSON Import. Alerts suppressed ****"]);
                }
                else
                {
                    _context.commit("saveImportAlerts",cleanedComponent.alerts);
                }
            }
        },
        getters:
        {
            componentList: _state => _state.component_list,
            listByCategoryAndType:(_state)=>(_category, _type)=>
            {
                if(_state.component_list[_category]===undefined || _state.component_list[_category][_type]===undefined)
                {
                    return [];
                }
                return _state.component_list[_category][_type];
            },
            categoryList:_state=>Object.keys(_state.component_list),
            typeList:(_state)=>(_category)=>
            {
                if(_state.component_list[_category]===undefined)
                {
                    return [];
                }
                return Object.keys(_state.component_list[_category]);
            },
            categoryObject:(_state)=>(_category)=>
            {
                return _state.component_list[_category];
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
// import(/* webpackPreload: true, webpackMode:"eager", webpackChunkName:"clean_component_module" */"./modules/clean_component_module")
// .then((_module)=>
//     {
//         store.cleanComponent=_module.cleanComponent;
//     });
//must use static import ensure it's valid
import {cleanComponent} from "./modules/clean_component_module";
store.cleanComponent=cleanComponent;
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

//load json embiggen method
import(/* webpackChunkName: "json_embiggen_functions" */"@/data_table_modules/import_export/json_embiggen_functions")
.then((_module)=>
    {
        store.embiggen=_module.embiggen;
    });
    
store.storageAvailable=(_type)=>
{
    var storage;
    try {
        storage = window[_type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};

store.saveToLocalStorage=(_key, _data)=>
{
    localStorage.setItem(_key,_data);
}

export default store;