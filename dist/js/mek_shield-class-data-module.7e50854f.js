(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_shield-class-data-module"],{"1dc1":function(e,t,n){"use strict";n.r(t),n.d(t,"class_data_table",function(){return d}),n.d(t,"class_validate",function(){return s}),n.d(t,"has_feature",function(){return l}),n.d(t,"get_feature",function(){return f}),n.d(t,"cleaned_feature",function(){return p}),n.d(t,"create_class_data_table",function(){return c});var r=n("a58a"),a=n("706d");let d=[],i=!1,c=function(e){let t=void 0===e?"standard":e,n=1;switch(t.toLowerCase()){case"active":n=1.5;break;case"reactive":n=3;break}d=r["a"].map(function(e){let t={stopping_power:e.code+4,code:e.code,id:e.id,name:e.name,kills:5*(e.code+4),cost:(e.code+4)*n};return t},this),i=!1};c("standard");let o=["stopping_power","code","id","name","kills","cost"],u=Object(a["d"])(d,o),s=e=>{return i?u(e):(i=!0,u=Object(a["d"])(d,o),u(e))},l=Object(a["c"])(d),f=Object(a["b"])(d,l),m=JSON.parse(JSON.stringify(f("code",1))),p=Object(a["a"])(s,l,f,m,"Mek_Shield-Class")},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return i});let r=(e,t)=>n=>{if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return t.every(t=>{return n[t]==e[t]})});return r},a=e=>(t,n)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==n})},d=(e,t)=>(n,r)=>{let a=null;return t(n,r)&&e.some(e=>{if(e[n]==r)return a=e,!0},void 0),a},i=(e,t,n,r,a)=>(d,i)=>{let c=void 0,o=[],u=!1,s=[],l=JSON.stringify(i);return void 0!==i&&t(d,i[d])?e(i)?(c=JSON.parse(JSON.stringify(i)),o=[c[d]],u=!1):(c=JSON.parse(JSON.stringify(n(d,i[d]))),o=[c[d]],u=!0,s.push(a+": "+l),s.push("**** Invalid data. Reseting. ****")):(c=r,o=[c[d]],u=!0,s.push(a+": "+l),s.push("**** Invalid data. Reseting to default. ****")),{data:c,key_list:o,update:u,alerts:s}}},a58a:function(e,t,n){"use strict";t["a"]=[{code:1,id:"SL",name:"Superlight"},{code:2,id:"LW",name:"Lightweight"},{code:3,id:"STR",name:"Striker"},{code:4,id:"MS",name:"Medium Striker"},{code:5,id:"HS",name:"Heavy Striker"},{code:6,id:"MW",name:"Mediumweight"},{code:7,id:"LH",name:"Light Heavy"},{code:8,id:"MH",name:"Medium Heavy"},{code:9,id:"AH",name:"Armored Heavy"},{code:10,id:"SH",name:"Super Heavy"},{code:11,id:"MgH",name:"Mega Heavy"}]}}]);
//# sourceMappingURL=mek_shield-class-data-module.7e50854f.js.map