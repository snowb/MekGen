(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_beam-wide-angle-data-module"],{4536:function(e,t,n){"use strict";n.r(t),n.d(t,"wide_angle_data_table",function(){return a}),n.d(t,"wide_angle_validate",function(){return d}),n.d(t,"has_feature",function(){return o}),n.d(t,"get_feature",function(){return s}),n.d(t,"cleaned_feature",function(){return c});var r=n("706d");let a=[{angle:"__NIL__",cost:1},{angle:"__HEX__",cost:2},{angle:60,cost:3},{angle:180,cost:5},{angle:300,cost:7},{angle:360,cost:9}],u=["angle","cost"],i={angle:"__NIL__",cost:1},d=Object(r["d"])(a,u),o=Object(r["c"])(a),s=Object(r["b"])(a,o),c=Object(r["a"])(d,o,s,i,"Mek_Beam-Wide-Angle-Time")},"706d":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return i});let r=(e,t)=>n=>{if("undefined"===typeof n||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return t.every(t=>{return n[t]==e[t]})});return r},a=e=>(t,n)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==n})},u=(e,t)=>(n,r)=>{let a=null;return t(n,r)&&e.some(e=>{if(e[n]==r)return a=e,!0},void 0),a},i=(e,t,n,r,a)=>(u,i)=>{let d=void 0,o=[],s=!1,c=[],l=JSON.stringify(i);return void 0!==i&&t(u,i[u])?e(i)?(d=JSON.parse(JSON.stringify(i)),o=[d[u]],s=!1):(d=JSON.parse(JSON.stringify(n(u,i[u]))),o=[d[u]],s=!0,c.push(a+": "+l),c.push("**** Invalid data. Reseting. ****")):(d=r,o=[d[u]],s=!0,c.push(a+": "+l),c.push("**** Invalid data. Reseting to default. ****")),{data:d,key_list:o,update:s,alerts:c}}}}]);
//# sourceMappingURL=mek_beam-wide-angle-data-module.aaf0bd13.js.map