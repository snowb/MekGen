export default
{
    methods:
    {
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