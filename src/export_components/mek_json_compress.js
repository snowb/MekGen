let compress=(_mek_json)=>
{
  let mek_object=typeof _mek_json==="string" ? JSON.parse(_mek_json)
                : typeof _mek_json==="object" ? _mek_json
                : null;

  return compress_object(mek_object);
};

let compress_object=(_object)=>
{
  let newobject={};
  let newprop;
  for(let prop in _object)
  {
    newprop=compress_prop(prop);
    newprop=newobject[newprop]===undefined ? newprop : newprop+"1";

    if(Array.isArray(_object[prop]))
    {
      newobject[newprop]=_object[prop].map((_el)=>
      {
        return compress_object(_el);
      });
    }
    else if(typeof _object[prop]=="object")
    {
      newobject[newprop]=compress_object(_object[prop]);
    }
    else
    {
      newobject[newprop]=_object[prop];
    }
    
  }

  return newobject;
};

let compress_prop=(_prop)=>
{
  let chunk_match="([A-z0-9])[A-z0-9]*_";
  let end_match="([A-z0-9])[A-z0-9]*";

  let prop_size=_prop.match(/_/g);
  prop_size=prop_size===null ? 0 : prop_size.length;
  if(prop_size==0)
  {
    return _prop.charAt(0)+_prop.charAt(_prop.length-1);
  }

  let full_match=new RegExp(chunk_match.repeat(prop_size)+end_match);
  return _prop.replace(full_match,(_match, ..._groups)=>
  {
    return _groups.slice(0,-2).join("");
  }); 
};

export {compress};