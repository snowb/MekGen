Vue.component("mekhead",
{
    props:["servodata","servoindex"],
    mixins:[servo_classes_mixin],
    data:function()
    {
        let obj={};
        obj.servo_classes=null;
        obj.selectedClass=null;
        return obj;
    },
    mounted:function()
    {
        this.servo_classes=this.servo_classes.reduce((_newobj, _val, _idx)=>
        {
            _newobj[_idx]={};
            _newobj[_idx].name=_val;
            _newobj[_idx].cost=_idx+1;
            _newobj[_idx].space=_idx+1;
            _newobj[_idx].kills=_idx+1;
            return _newobj;
        },{});
    },
    methods:
    {
        updateHead:function()
        {
            let updatedata={};
            updatedata.index=this.servoindex;
            updatedata.class=this.selectedClass;
            updatedata.name=this.servo_classes[this.selectedClass].name;
            updatedata.cost=this.servo_classes[this.selectedClass].cost;
            updatedata.space=this.servo_classes[this.selectedClass].space;
            updatedata.kills=this.servo_classes[this.selectedClass].kills;
            this.$emit("update-head",updatedata);
        },
        removeHead:function()
        {
            this.$emit("remove-head",this.servoindex);
        }
    },
    template:
    `
    <table>
        <thead>
            <tr>
                <td>Servo Class</td>
                <td>Cost</td>
                <td>Space</td>
                <td>Kills</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <select v-model="selectedClass" @change="updateHead">
                        <option v-for="classname,index in servo_classnames" :key="index" :value="index">{{classname}}</option>
                    </select>
                </td>
                <td>{{selectedClass!=null ? servo_classes[selectedClass].cost : ""}}</td>
                <td>{{selectedClass!=null ? servo_classes[selectedClass].space : ""}}</td>
                <td>{{selectedClass!=null ? servo_classes[selectedClass].kills : ""}}</td>
                <td><span style="text-decoration:underline; color:blue;" @click="removeHead">(-)</span></td>
            </tr>
        </tbody>
    </table>
    `
});