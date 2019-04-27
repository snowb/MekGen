let loopValidators=(_validators, _component)=>
{
    let cleanedComponent=_component;
    let alerts=[];
    _validators.forEach((_val)=>
    {
        let validatedData=runValidator(_val, cleanedComponent);
        cleanedComponent[_val.component_prop]=validatedData.data;
        alerts=alerts.concat(validatedData.alerts);
    });
    return {cleanedComponent:cleanedComponent, loopAlerts:alerts};
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

let round=(_number, _decimals)=>
{
    if(typeof _decimals==="undefined" || +_decimals==0)
    {
        return Math.round(+_number)
    }
    let multiplier=10 ** +_decimals;
    return Math.round(+_number * multiplier)/multiplier;
};

export {loopValidators, updateMultipliers, round};