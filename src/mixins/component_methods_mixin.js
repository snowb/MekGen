export default
{
    methods:
    {
        universal_ingest_data(_data_object,_alertMessage)
        {
            this.original_component=JSON.stringify(_data_object);//store a copy as a JSON object for 'reset' purposes
            let data_object=JSON.parse(this.original_component);
            if(_data_object===null)
            {
                this.componentSaveReset("clear");
                //generic error comment
                this.$store.commit("alertMessage",_alertMessage);
            }

            for(let _property in data_object)
            {//exclude computed properties that are auto updated
                if(Object.keys(this._computedWatchers).includes(_property))
                {
                    continue;
                }
                if(typeof data_object[_property]==="object" && !Array.isArray(data_object[_property]))
                {
                    if(typeof this[_property]!=="object" || this[_property]===null)
                    {
                        this.$set(this,_property,{})
                    }
                    for(let _sub_property in data_object[_property])
                    {
                        this.$set(this[_property],[_sub_property],data_object[_property][_sub_property]);
                    }
                }
                else if(Array.isArray(data_object[_property]))
                {
                    this.$set(this,_property,data_object[_property]);
                }
                else
                {
                    this.$set(this,_property,data_object[_property]);
                }
            }
            this.$forceUpdate();
        },
        updateComponentName(_name)
        {
            this.component_name=_name;
            this.component_changed=true;
        },
        addAlert(_alert_string)
        {
            this.alerts.push(_alert_string);
        },
        publishAlerts()
        {
            if(this.alerts.length>0)
            {   
                this.$store.commit("alertMessage",this.alerts);
            }
            this.$set(this,"alerts",[]);
        },
    }
}