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
    {module_name:"./mek_reflector_validator",validator_prop_name:"mek_reflector"},//import mek_reflector validator
    {module_name:"./mek_energy_pool_validator",validator_prop_name:"mek_energy_pool"},//import mek_energy_pool validator
    {module_name:"./mek_missile_validator",validator_prop_name:"mek_missile"},//import mek_missile validator
    {module_name:"./mek_projectile_validator",validator_prop_name:"mek_projectile"},//import mek_projectile validator
    {module_name:"./mek_shield_validator",validator_prop_name:"mek_shield"},//import mek_shielde validator
];
module_list.forEach((_val)=>
{
    importValidator(_val.module_name,_val.validator_prop_name);
});

let validateComponent=(_component)=>
{
    let cleanedComponent;
    let validator_prop="";

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
                validator_prop="mek_missile";
                break;
            case "projectile":
                validator_prop="mek_projectile";
                break;
            case "magazine":
                validator_prop="mek_magazine";
                break;
            case "energy-pool":
                validator_prop="mek_energy_pool";
                break;
            case "shield":
                validator_prop="mek_shield"
                break;
            case "reflector":
                validator_prop="mek_reflector"
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