export default
{
    computed:
    {
        space_cost()
        {
            return this.raw_space - this.efficiencies.space.modifier;
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
    }
};