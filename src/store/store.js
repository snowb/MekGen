import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store= new Vuex.Store(
    {
        strict: process.env.NODE_ENV !== 'production',
        state:
        {
            components:{},
            component_list:{},
            currentTab:"mek-projectile",
            selected_component:null,
            alert_message:""
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
                    let copyComponent=JSON.parse(JSON.stringify(_component));//make deep copy
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
            showTab(_state, _tab)
            {
                if(typeof _tab==="string")
                {
                    Vue.set(_state,'currentTab',_tab);
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
                if(typeof _message==="string")
                {
                    Vue.set(_state,"alert_message",_message);
                }
            }
        },
        getters:
        {
            componentList: _state => _state.component_list,
            getComponent: (_state)=>(_uuid)=>_state.components[_uuid],
            targetTab: _state=>_state.currentTab,
            selectedComponent: _state =>
            {
                return _state.selected_component===null?null:_state.components[_state.selected_component];
            },
            alertMessage:(_state)=>{return _state.alert_message}
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
            else if(!/^[\w\d-_.() ]+$/.test(_element))
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
            else if(!/^[\w\d-_.() ]+$/.test(_component[prop]))
            {
                _component[prop]=null;
            }
        }
    }
    else if(!/^[\w\d-_.() ]+$/.test(_component))
    {
        _component=null;
    }
    return _component;
}

export default store;