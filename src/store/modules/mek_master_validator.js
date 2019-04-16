let alerts=[];

let mek_armor_validators;
//load mek_armor validators from module
import(/* webpackChunkName: "mek_armor_validators" */"./mek_armor_validators")
.then((_module)=>
{
    mek_armor_validators=_module.mek_armor_validators;
});

let validateComponent=(_component)=>
{
    //console.log(_component);
    let cleanedComponent={};
    let validatedData;

    mek_armor_validators.mek_armor_filter(_component.selected_servo_class.code+2);
    validatedData=mek_armor_validators.mek_armor("code",_component.selected_armor);
    if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
    cleanedComponent.selected_armor=validatedData.data;
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
                //validate armor
                mek_armor_validators.mek_armor_filter(_component.selected_servo_class.code+2);
                validatedData=mek_armor_validators.mek_armor("code",_component.selected_armor);
                if(validatedData.update){alerts=alerts.concat(validatedData.alerts);}
                cleanedComponent.selected_armor=validatedData.data;
                //validate armor-type
                //validate RAM
                //validate servo-class
                //validate servo-kills-space-trade
                //valid servo-type
                break;
            case "beam":
                //damage
                //accuracy
                //brust val
                //range mod
                //warm up time
                //shots (>0)
                //wide angle
                //features
                //efficiency!?
                break;
            case "emw":
                //damage
                //accuracy
                //atk factor
                //turns in use
                //features
                //efficiency!?
                break;
            case "emw":
                //damage
                //accuracy
                //entangle range trade
                //features
                //efficiency!?
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
                //gun??
                //ammo table/feature
                //shots (>0)
                break;
            case "energy_pool":
                //energy_pool
                //portfolio size
                //feature
                //efficiency!?
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
                //type
                //class
                break;
        }
   }
};

let getAlerts=()=>alerts;

export {validateComponent, getAlerts};