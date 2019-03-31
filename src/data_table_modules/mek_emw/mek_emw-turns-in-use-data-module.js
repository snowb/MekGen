//data table module, raw data output for re-use in non-vue-component formats
import {partial_validate, partial_has_feature, partial_get_feature} from "../universal/mek_partial-function-data-module";

//create new turns_data_table
let turns_data_table=
[
    {turns:1,cost:0.3},
    {turns:2,cost:0.4},
    {turns:3,cost:0.5},
    {turns:4,cost:0.6},
    {turns:5,cost:0.7},
    {turns:7,cost:0.8},
    {turns:10,cost:0.9},
    {turns:"__INFINITY__",cost:1.0}
];
let data_table_keys=["turns","cost"];
let default_data={turns:Infinity,cost:1};

//data validator for turns_data_table
//call partial_validate with appropriate data for full validate
let turns_validate=partial_validate(turns_data_table, data_table_keys);

//completed function for checking if data has data
let has_feature=partial_has_feature(turns_data_table);

//completed function for returning matching data
let get_feature=partial_get_feature(turns_data_table, has_feature);

/**** 
 * see cleaned_feat can be converted to partial func due to use of Infinity
 * probably with a For...Of loop prior to JSON clone
 * 
 *  ****/
let cleaned_feature=function(_pkey, _feature)
{//input: primary key, selected feature, filtered data table
    let data=undefined;
    let key_list=[];
    let update=false;
    let alerts=[];
    let json_data=JSON.stringify(_feature);

    if(_feature===undefined || !has_feature(_pkey,_feature[_pkey]))
    {
        data=default_data;
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_EMW-Turns-In-Use: "+json_data);
        alerts.push("**** Invalid data. Reseting to default. ****");
    }
    else if(!turns_validate(_feature))
    {
        data=JSON.parse(JSON.stringify(get_feature(_pkey,_feature[_pkey])));
        data.turns=data.turns===null?Infinity:data.turns;
        key_list=[data[_pkey]];
        update=true;
        alerts.push("Mek_EMW-Turns-In-Use: "+json_data);
        alerts.push("**** Invalid data. Reseting. ****");
    }
    else
    {
        data=JSON.parse(JSON.stringify(_feature));
        data.turns=data.turns===null?Infinity:data.turns;
        key_list=[data[_pkey]];
        update=false;
    }
    return {data:data, key_list:key_list, update:update, alerts:alerts};
};

export {turns_data_table, turns_validate, has_feature, get_feature, cleaned_feature};
