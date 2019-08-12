let isValidProperty=(_object, _property_string)=>
{
  /*
  _object: object to check, must be always valid
  _property_string: string of type "prop1.prop2.propEtc" to be checked
  */
  switch(true)
  {
    case _object===undefined:
    case _object===null:
    case typeof _property_string!=="string":
    case _property_string=="":
      return false;
  }

  let propertyArray=_property_string.replace(/^\.*/,"").replace(/\.*$/,"").split(".");
  return propertyArray.reduce((_subobject, _element, _index, _propArray)=>
  {
    if(_subobject==false)
    {
      return false;
    }
    if(_subobject[_element]===undefined)
    {
      return false;
    }
    if(_index==_propArray.length-1)
    {
      return true;
    }
    return _subobject[_element];
  },_object);
};

let isNumeric=(n)=>
{
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export {isValidProperty, isNumeric};