Vue.component("mekheadblock",
{
    props:["headservos"],
    data:()=>
    {
        let obj={};
        return obj;
    },
    methods:
    {
        addHead:function()
        {
            this.$emit("add-head");
        },
        updateHead:function(_data)
        {
            this.$emit("update-head", _data)
        },
        removeHead:function(_delete_index)
        {
            this.$emit("remove-head", _delete_index);
        }
    },
    template:`
    <div style="display:flex; align-content:center; flex-direction:column;">
        <div style="font-size:20px; font-weight:bold;">Head Servo</div>
        <div style="display:flex; justify-content:space-around; flex-direction:row;">
            <mekhead v-for="servo,index in headservos" :key="index" :servodata="servo" :servoindex="index" 
                @update-head="updateHead" @remove-head="removeHead">
            </mekhead>
        </div>
        <span style="text-decoration:underline; color:blue;" @click="addHead">Add Head Servo</span>
    </div>
    `
});