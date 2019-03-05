export default
{
    methods:
    {
        universal_ingest_data(_data_object,_alertMessage)
        {
            this.original_component=JSON.stringify(_data_object);//store a copy as a JSON object for 'reset' purposes
            if(_data_object===null)
            {
                this.componentSaveReset("clear");
                //generic error comment
                this.$store.commit("alertMessage",_alertMessage);
            }

            for(let _property in _data_object)
            {//exclude computed properties that are auto updated
                if(Object.keys(this._computedWatchers).includes(_property))
                {
                    continue;
                }
                if(typeof _data_object[_property]==="object" && !Array.isArray(_data_object[_property]))
                {
                    if(typeof this[_property]!=="object" || this[_property]===null)
                    {
                        this[_property]={};
                    }
                    for(let _sub_property in _data_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],_data_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(_data_object[_property]))
                {
                    this.$set(this,_property,_data_object[_property]);
                }
                else
                {
                    this.$set(this,_property,_data_object[_property]);
                }
            }
            this.$forceUpdate();
        }
    }
}