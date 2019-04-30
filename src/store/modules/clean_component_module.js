let cleanComponent=function(_component)
{
    if(Array.isArray(_component))
    {
        _component.forEach((_element)=>
        {
            if(Array.isArray(_element) || typeof _element==="object")
            {
                _element=this.cleanComponent(_element);
            }
            else if(!/^[\w\d-_.()/ ]+$/.test(_element) || _element==="")
            {
                _element=null;
            }
        });
    }
    else if(typeof _component==="object")
    {
        for(let prop in _component)
        {
            if(Array.isArray(_component[prop]) || typeof _component[prop]==="object")
            {
                _component[prop]=this.cleanComponent(_component[prop]);
            }
            else if(!/^[\w\d-_.()/ ]+$/.test(_component[prop]) || _component[prop]==="")
            {
                _component[prop]=null;
            }
        }
    }
    else if(!/^[\w\d-_.()/ ]+$/.test(_component) || _component==="")
    {
        _component=null;
    }
    return _component;
};

export {cleanComponent};