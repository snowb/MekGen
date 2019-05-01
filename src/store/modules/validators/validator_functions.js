let loopValidators=(_validators, _component)=>
{
    let cleanedComponent=_component;
    let alerts=[];
    _validators.forEach((_val)=>
    {
        let validatedData=runValidator(_val, cleanedComponent);
        cleanedComponent[_val.component_prop]=_val.component_prop=="feature_array"
                    ? validatedData.cleaned_array
                    : validatedData.data;
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

let updateMultipliers=(_updateList, _component, _name)=>
{
    let component=_component;
    let alerts=[];
    let data={};
    if(_updateList.length==0)
    {
        return {data:component, alerts:alerts};
    }
    _updateList.forEach((_component_prop)=>
    {
        if(_component_prop=="feature_array")
        {
            let feature_array_cost_multiplier=_component.feature_array.reduce((_cm, _feat)=>
            {
                return _cm * _feat.cost;
            },1);
            if(component.cost_multipliers.feature_array!=feature_array_cost_multiplier)
            {
                alerts.push(_name+": cost_multipliers."+_component_prop);
                alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
                data.feature_array=feature_array_cost_multiplier;
            }   
        }
        else
        {
            if(component.cost_multipliers[_component_prop]!=_component[_component_prop].cost)
            {
                alerts.push(_name+": cost_multipliers."+_component_prop);
                alerts.push("**** Invalid Cost Multiplier. Correcting. ****");
                data[_component_prop]=_component[_component_prop].cost;
            }   
        }
    });
    return {data:data, alerts:alerts};
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