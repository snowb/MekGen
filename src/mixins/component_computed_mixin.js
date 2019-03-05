export default
{
    computed:
    {
        space_cost()
        {
            return this.round(this.raw_space - this.efficiencies.space.modifier,2);
        },
        cost_multiplier()
        {
            let cost_multiplier=1;
            for(let multi in this.cost_multipliers)
            {
                cost_multiplier*=this.cost_multipliers[multi];
            }
            return this.round(cost_multiplier,2);
        },
        weight()
        {
            return this.round((this.damage_capacity / 2),2);
        },
        feature_list()
        {
            if(typeof this.feature_array==="undefined")
            {
                return "";
            }
            return this.feature_array.reduce(function(_string, _val, _index)
            {
                _string+=_index>0 ? ", " : "";
                _string+=_val.feature;
                return _string;
            },"");
        },
        newComponent()
        {
            let selectedComponent=JSON.parse(JSON.stringify(this.$store.getters.selectedComponent));
            
            if(typeof selectedComponent!=="undefined" && selectedComponent!==null)
            {
                if(selectedComponent.uuid!==this.uuid 
                    && selectedComponent.component_category==this.component_category
                    && selectedComponent.component_type==this.component_type)
                {
                    this.ingest_data(selectedComponent);
                }
                return false;
            }
            return true;
        },
    }
};