(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["[request]"],{"063b":function(e,t,i){"use strict";i.r(t),i.d(t,"create_class_data_table",function(){return n}),i.d(t,"class_data_table",function(){return s}),i.d(t,"servo_class_validate",function(){return o}),i.d(t,"has_feature",function(){return c}),i.d(t,"get_feature",function(){return u}),i.d(t,"cleaned_feature",function(){return f});var r=i("a58a"),a=i("706d");let s=[],d=["code","id","name","cost","kills","damage_bonus","throw_range"],n=function(e){let t=1,i=1,a=1,d=0,n=0,o=0,c=!1,u=!1,l=void 0!==e?e.toLowerCase():"torso";switch(l){case"torso":t=2,i=2,a=2;break;case"arm":c=!0;break;case"leg":u=!0;break;case"pod":i=2,a=0;break}let f=r["a"].map(e=>{let r={};return r.code=e.code,r.id=e.id,r.name=e.name,r.cost=e.code*t+d,r.space=e.code*i+n,r.kills=e.code*a+o,(c||u)&&(r.damage_bonus=u?Math.ceil(r.code/2)-1:Math.ceil(r.code/3)-1,c&&(r.throw_range=Math.floor(r.code/2)+1)),r});s=f};n();let o=Object(a["d"])(s,d),c=Object(a["c"])(s),u=Object(a["b"])(s,c),l=u("code",1),f=Object(a["a"])(o,c,u,l,"Mek_Servo-Class")},"5ca7":function(e,t,i){"use strict";i.r(t),i.d(t,"servo_data_table",function(){return a}),i.d(t,"servo_type_validate",function(){return n}),i.d(t,"has_feature",function(){return o}),i.d(t,"get_feature",function(){return c}),i.d(t,"cleaned_feature",function(){return u});var r=i("706d");let a=[{type:"Torso"},{type:"Head"},{type:"Arm"},{type:"Leg"},{type:"Wing"},{type:"Tail"},{type:"Pod"}],s=["type"],d={type:"Torso"},n=Object(r["d"])(a,s),o=Object(r["c"])(a),c=Object(r["b"])(a,o),u=Object(r["a"])(n,o,c,d,"Mek_Servo-Type")},"706d":function(e,t,i){"use strict";i.d(t,"d",function(){return r}),i.d(t,"c",function(){return a}),i.d(t,"b",function(){return s}),i.d(t,"a",function(){return d});let r=(e,t)=>i=>{if("undefined"===typeof i||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return t.every(t=>{return i[t]==e[t]})});return r},a=e=>(t,i)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==i})},s=(e,t)=>(i,r)=>{let a=null;return t(i,r)&&e.some(e=>{if(e[i]==r)return a=e,!0},void 0),a},d=(e,t,i,r,a)=>(s,d)=>{let n=void 0,o=[],c=!1,u=[],l=JSON.stringify(d);return void 0!==d&&t(s,d[s])?e(d)?(n=JSON.parse(JSON.stringify(d)),o=[n[s]],c=!1):(n=JSON.parse(JSON.stringify(i(s,d[s]))),o=[n[s]],c=!0,u.push(a+": "+l),u.push("**** Invalid data. Reseting. ****")):(n=r,o=[n[s]],c=!0,u.push(a+": "+l),u.push("**** Invalid data. Reseting to default. ****")),{data:n,key_list:o,update:c,alerts:u}}},a58a:function(e,t,i){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]},f1d4:function(e,t,i){"use strict";i.r(t),i.d(t,"cleaned_feature",function(){return r});let r=function(e,t,i){let r={kills_modifier:0,space_modifier:0,cost:0};r.kills=void 0!==t?t:2,r.space=void 0!==i?i:2;let a=[],s=!0;if(void 0===t&&(a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing Base Kills, reseting to 2."),s=!0),void 0===i&&(a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing Base Space, reseting to 2."),s=!0),void 0===e.kills||void 0===e.space||void 0===e.cost)return a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing values, reseting to 0."),s=!0,{data:r,update:s,alerts:a};r.kills_modifier=e.kills,r.space_modifier=e.space,r.cost=e;let d=t+r.kills_modifier,n=i+r.space_modifier;switch(!0){case d<=0:case n<0:case 2*r.kills_modifier+r.space_modifier!==0:a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Invalid values, reseting to 0."),r.kills_modifier=0,r.space_modifier=0,r.cost=0,s=!0;break}return r.cost=r.kills_modifier>0?2*r.kills_modifier:0,r.kills=r.kills+r.kills_modifier,r.space=r.space+r.space_modifier,{data:r,update:s,alerts:a}}}}]);
//# sourceMappingURL=[request].aa79a2ca.js.map