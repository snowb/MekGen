<template>
    <mek-sub-component-table
        :items="gun_table"
        :headers="{name:'Name',cost:'Cost'}" :show-headers="true"
        name="Gun Table" flow="dropdown"
        :selected-indices="gun_index"
        @update-selected-indices="select_gun"
    ></mek-sub-component-table>
    <!--- uses dropdown for selection, have not written a pkey based dropdown option ...--->
</template>
<script>

export default
{
    name:"mek_magazine_select_gun",
    props:["selectedGun"],
    mixins:[],
    components:
    {
        "mek-sub-component-table":()=>import("@/app_components/universal/mek_sub-component-table.vue")
    },
    data:function()
    {
        let obj={};
        obj.pkey="uuid";
        return obj;
    },
    methods:
    {
        select_gun:function(_gun_index,_gun_name_change)
        {
            this.$emit("update-gun", this.gun_table[_gun_index], _gun_name_change);
        },
        /*
        need to add PKEY-DROPDOWN to sub-component-table to be usable
        
        get_feature(_pkey_val)
        {
            let found_feature=this.gun_table.filter((_val)=>
            {
                return _val[this.pkey]==_pkey_val;
            },this);

            return found_feature[0];
        },
        has_feature(_pkey_val)
        {
            return this.gun_table.some((_val)=>
            {
                return _val[this.pkey]==_pkey_val;
            },this);
        },
        gun_validate(_data)
        {
            if(typeof _data==="undefined")
            {
                return false;
            }
            let valid=this.gun_table.some((_val)=>
            {
                return _val.uuid==_data.uuid
                        && _val.cost==_data.cost
                        && _val.name==_data.name;
            });
            return valid;
        } */
    },
    computed:
    {
        gun_index:function()
        {
            let index=0;
            this.gun_table.some(function(_val,_index)
            {
                if(_val.uuid==this.selectedGun.uuid)
                {
                    index=_index;
                    return true;
                }
                return false;
            },this);

            switch(true)
            {
                case this.selectedGun.name!=this.gun_table[index].name:
                    this.select_gun(index,true);
                    break;
                case this.selectedGun.cost!=this.gun_table[index].cost:
                    this.select_gun(index,false);
                    break;
            }
            return [index];
        },
        /* selected_keys()
        {
            let default_data=JSON.parse(JSON.stringify(this.get_feature(this.pkey,"(none)")));
            if(this.selectedGun===undefined)
            {
                this.select_gun(feature_clone);
                return [default_data[this.pkey]];
            }
            let pkey_value=this.selectedGun[this.pkey];
            if(pkey_value===undefined || !this.has_feature(this.pkey,pkey_value))
            {
                let json_data=JSON.stringify(this.selectedGun);
                this.addAlert("Mek_Magazine-Select-Gun: "+json_data);
                this.addAlert("**** Invalid data. Reseting to default. ****");
                this.publishAlerts();
                this.select_gun(default_data);
                return ["(none)"];
            }
            else if(this.has_feature(this.pkey,pkey_value) && !this.gun_validate(this.selectedGun))
            {
                let json_data=JSON.stringify(this.get_feature(this.pkey,pkey_value));
                let feature_clone=JSON.parse(json_data);
                this.addAlert("Mek_Magazine-Select-Gun: "+json_data);
                this.addAlert("**** Invalid data. Reseting. ****");
                this.publishAlerts();
                this.select_gun(feature_clone);
            }
            return [pkey_value];
        }, */
        gun_table()
        {

            let gun_table=this.$store.getters.getComponentByType("equipment","projectile");
            if(typeof gun_table==="undefined")
            {
                return [];
            }
            gun_table=Object.keys(gun_table);
            gun_table=gun_table.map((_elem)=>
            {
                let data=this.$store.getters.getComponent(_elem);
                let name=data.component_name;
                let cost=data.cost;
                let uuid=data.uuid;
                return {name:name,cost:cost,uuid:uuid};
            },this);
            gun_table.splice(0,0,{name:"(none)",cost:1,uuid:null})

            return gun_table;
        }
    }
}
</script>
<style scoped>

</style>