let loopValidators=(_validators, _component)=>
{
    let cleanedComponent=_component;
    let updateList=[];
    let alerts=[];
    _validators.forEach((_val)=>
    {
        let validatedData=runValidator(_val, cleanedComponent);
        cleanedComponent[_val.component_prop]=validatedData.data;
        alerts=alerts.concat(validatedData.alerts);
        if(validatedData.update && _val.skipUpdateList)
        {
            updateList.push(_val.component_prop);
        }
    });

    return {updateList:updateList, cleanedComponent:cleanedComponent, loopAlerts:alerts};
};

let runValidator=(_validator_data, _component)=>
{
    //let validatorInstance=validators[_validator_data.validator];
    let validatorInstance=_validator_data.validator;
    let pkeyInstance=_validator_data.pkey;
    let propInstance=_component[_validator_data.component_prop];

    if(_validator_data.component_prop=="feature_array")
    {
        return validatorInstance(propInstance, pkeyInstance); 
    }
    return validatorInstance(pkeyInstance, propInstance);
};

let updateMultipliers=(_updateList, _component)=>
{
    let component=_component;
    if(_updateList.length==0)
    {
        return component;
    }
    _updateList.forEach((_component_prop)=>
    {
        if(_component_prop=="feature_array")
        {
            component.cost_multipliers.feature=_component[_component_prop].reduce((_cm, _feat)=>
            {
                return _cm = _cm * _feat.cost;
            },1);
        }
        component.cost_multipliers[_component_prop]=_component[_component_prop].cost;
    });
    return component;
};

export {loopValidators, updateMultipliers};