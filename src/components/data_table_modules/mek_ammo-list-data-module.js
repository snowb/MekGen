//data table module, raw data output for re-use in non-vue-component formats

//create new ammo_data_table
let ammo_data_table=
[
    {type:"Paintball",cost:0.5,effect:"Practice Rounds"},
    {type:"Foam",cost:0.5,effect:"Firefighting"},
    {type:"High-Ex",cost:1,effect:"Standard"},
    {type:"Tracer",cost:3,effect:"+1 to WA"},
    {type:"Kinetic",cost:3,effect:"More Knockback"},
    {type:"Tangler",cost:3,effect:"Grappling Attack"},
    {type:"Armor Piercing",cost:4,effect:"1/2 SP vs Armor"},
    {type:"Disruptor",cost:4,effect:"1/2 SP vs Energy"},
    {type:"Incendiary",cost:4,effect:"Flamethrower"},
    {type:"Shock (only)",cost:4,effect:"Stun Effect",shock_exclusive:true},
    {type:"Shock (add)",cost:6,effect:"Stun & Damage",shock_exclusive:true},
    {type:"Scattershot",cost:5,effect:"Shotgun Effect"},
    {type:"Blast I",cost:6,effect:"1-Hex Radius",blast_exclusive:true},
    {type:"Blast II",cost:8,effect:"2-Hex Radius",blast_exclusive:true},
    {type:"Blast III",cost:10,effect:"3-Hex Radius",blast_exclusive:true},
    {type:"Blast IV",cost:12,effect:"4-Hex Radius",blast_exclusive:true},
    {type:"Blast V",cost:14,effect:"5-Hex Radius",blast_exclusive:true},
    {type:"Nuclear",cost:1000,effect:"Atomic Ammo"},
];
let shock_exclusive=ammo_data_table.filter((_el)=>{return typeof _el.shock_exclusive!=="undefined";});
let blast_exclusive=ammo_data_table.filter((_el)=>{return typeof _el.blast_exclusive!=="undefined";})

//data validator for ammo_data_table
let ammo_validate=(_data)=>
{
    if(typeof _data==="undefined")
    {
        return false;
    }
    let valid=ammo_data_table.some((_val)=>
    {
        return _val.type==_data.type
                && _val.cost==_data.cost
                && _val.shock_exclusive==_data.shock_exclusive
                && _val.blast_exclusive==_data.blast_exclusive;
    });
    return valid;
}

export {ammo_data_table, ammo_validate, shock_exclusive, blast_exclusive};
