let validators={};
//load mek_armor validators from module
// import(/* webpackChunkName: "[request]" */"./mek_armor_validators")
// .then((_module)=>
// {
//     validators.mek_armor=_module.validators;
// });

let importValidator=(_module_name, _validator_prop_name)=>
{
    import(/* webpackChunkName: "[request]" */`${_module_name}`)
    .then((_module)=>
    {
        validators[_validator_prop_name]=_module;
    });
};

let module_list=
[
    //mek_armor is sub-comp used in servo and shield
    //{module_name:"./mek_armor_validator",validator_prop_name:"mek_armor"},
    {module_name:"./mek_servo_validator",validator_prop_name:"mek_servo"},//import mek_servo validator
    {module_name:"./mek_beam_validator",validator_prop_name:"mek_beam"},//import mek_beam validator
    {module_name:"./mek_emw_validator",validator_prop_name:"mek_emw"},//import mek_emw validator
    {module_name:"./mek_energy_pool_validator",validator_prop_name:"mek_energy_pool"},//import mek_energy_pool validator
    {module_name:"./mek_locomotion_validator",validator_prop_name:"mek_locomotion"},//import mek_locomotion validator
    {module_name:"./mek_magazine_validator",validator_prop_name:"mek_magazine"},//import mek_magazine validator
    {module_name:"./mek_melee_validator",validator_prop_name:"mek_melee"},//import mek_melee validator
];
module_list.forEach((_val)=>
{
    importValidator(_val.module_name,_val.validator_prop_name);
});

let validateComponent=(_component)=>
{
    //console.log(_component);
    let cleanedComponent;
    let validator_prop="";

    //console.log(cleanedComponent.selected_armor)
    /* *
    *
    * need to find a good way to 'scan' a provided component, with focused validation
    * likely need to have a decent switch for component_category
    * then component_type
    * then mass-validate known props
    *   also need to check for undefined?  
    * 
    * 
    * finally return the cleaned/validate component
    * 
    * */
   if(_component.component_category=="equipment")
   {//validate equipment
        switch(_component.component_type)
        {
            case "servo":
                validator_prop="mek_servo";
                break;
            case "beam":
                validator_prop="mek_beam";
                break;
            case "emw":
                validator_prop="mek_emw";
                break;
            case "melee":
                validator_prop="mek_melee";
                break;
            case "missile":
                //damage
                //accuracy
                //range mod
                //pack size (>0)
                //smart
                //skill (only with Smart >=1)
                //blast radius
                //features
                //efficiency!?
                break;
            case "projectile":
                //damage
                //accuracy
                //burst val
                //multi-feed
                //range mod
                //features
                //efficiency!?
                break;
            case "magazine":
                validator_prop="mek_magazine";
                break;
            case "energy-pool":
                validator_prop="mek_energy_pool";
                break;
            case "shield":
                //class
                //def ability, STANDARD ONLY
                //binder, STD and ACTVE ONLY
                //armor type, STD and ACTVE ONLY
                //RAM, STD and ACTVE ONLY
                //weakness, REACTIVE ONLY
                //reset time, REACTIVE ONLY
                //turns in use, REACTIVE ONLY
                //efficiency!?
                break;
            case "reflector":
                //quality
                //efficiency!?
                break;
            case "locomotion":
                validator_prop="mek_locomotion";
                break;
        }
        if(validator_prop!=="")
        {
            cleanedComponent=validators[validator_prop].validateComponent(_component)
        }    
   }
   return cleanedComponent;
};

export {validateComponent};