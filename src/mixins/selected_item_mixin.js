export default 
{
    methods:
    {
        selectedItem:function(_property, _target_value, _is_true_class, _else_class)
        {
            let elseClass = typeof _else_class==="undefined" ? "" : _else_class;
            if(typeof _is_true_class==="undefined")
            {
                return this[_property]==_target_value ? "selected_item" : elseClass;
            }
            return this[_property]==_target_value ? _is_true_class : elseClass;
        },
        selectedItemMultiple:function(_property, _target_value, _is_true_class, _else_class)
        {
            let elseClass = typeof _else_class==="undefined" ? "" : _else_class;
            if(Array.isArray(this[_property]))
            {
                if(typeof _is_true_class==="undefined")
                {
                    return this[_property].includes(_target_value) ? "selected_item" : elseClass;
                }
                return this[_property].includes(_target_value) ? _is_true_class : elseClass;
            }
            return "";
        }
    }
};