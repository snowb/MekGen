export default
{
    methods:
    {
        round:function(_number, _decimals)
        {
            if(typeof _decimals==="undefined" || +_decimals==0)
            {
                return Math.round(+_number)
            }
            let multiplier=10 ** +_decimals;
            return Math.round(+_number * multiplier)/multiplier;
        },
        floor:function(_number)
        {
            return Math.floor(+_number);
        },
        ceiling:function(_number)
        {
            return Math.ceiling(+_number);
        },
        decimalPad(_number)
        {
            return +_number%1===0 ? _number.toPrecision(2) : _number;
        },
        create_uuid:function()
        {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
              
        },
        invisible_pad:function(_array_of_items)
        {
            let longestString="";
            _array_of_items.forEach(function(_element)
            {
                if(_element.length > longestString.length)
                {
                    longestString=_element;
                }
            },0);
            return longestString+"XX";
        },
        isNumeric:function isNumeric(_input)
        {
            return typeof _input!=='undefined' && !isNaN(parseFloat(_input)) && isFinite(_input);
        },
    }
};