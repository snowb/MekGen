(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek-projectile-multi-feed"],{d866:function(e,t,s){"use strict";t["a"]={methods:{addAlert(e){this.alerts.push(e)},publishAlerts(){this.alerts.length>0&&this.$store.commit("alertMessage",this.alerts),this.$set(this,"alerts",[])}}}},daf4:function(e,t,s){"use strict";s.d(t,"d",function(){return r}),s.d(t,"c",function(){return n}),s.d(t,"b",function(){return i}),s.d(t,"a",function(){return d});let r=(e,t)=>s=>{if("undefined"===typeof s||!Array.isArray(t)||0==t.length)return!1;let r=e.some(e=>{return!t.some(t=>{return s[t]!=e[t]})});return r},n=e=>(t,s)=>{return e.some(e=>{return void 0!==e[t]&&e[t]==s})},i=(e,t)=>(s,r)=>{let n=null;return t(s,r)&&e.some(e=>{if(e[s]==r)return n=e,!0},void 0),n},d=(e,t,s,r,n)=>(i,d)=>{let l=void 0,a=[],u=!1,o=[],c=JSON.stringify(d);return void 0!==d&&t(i,d[i])?e(d)?(l=JSON.parse(JSON.stringify(d)),a=[l[i]],u=!1):(l=JSON.parse(JSON.stringify(s(i,d[i]))),a=[l[i]],u=!0,o.push(n+": "+c),o.push("**** Invalid data. Reseting. ****")):(l=r,a=[l[i]],u=!0,o.push(n+": "+c),o.push("**** Invalid data. Reseting to default. ****")),{data:l,key_list:a,update:u,alerts:o}}},e556:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mek-sub-component-table",{attrs:{items:e.feeds_table,pkey:e.pkey,"selected-keys":e.selected_keys,headers:{feeds:"feeds",cost:"Cost"},"show-headers":!0,name:"Multi-feeds",flow:"pkey-row",format:{cost:"multiplier"}},on:{"update-selected-data":e.select_feeds}})},n=[],i=(s("ac6a"),s("d866")),d=s("daf4");let l=[{feeds:1,cost:1},{feeds:2,cost:1.2},{feeds:3,cost:1.4},{feeds:4,cost:1.6}],a=["feeds","cost"],u={feeds:1,cost:1},o=Object(d["d"])(l,a),c=Object(d["c"])(l),f=Object(d["b"])(l,c),p=Object(d["a"])(o,c,f,u,"Mek_Projectile-Multi-Feeds");var h={name:"mek_projectile_multi_feeds",props:["multiFeed"],mixins:[i["a"]],components:{"mek-sub-component-table":()=>s.e("chunk-f60adeec").then(s.bind(null,"97ea"))},data:function(){let e={alerts:[],pkey:"feeds",suppressAlerts:!1};return e},methods:{select_feeds:function(e){let t=JSON.parse(JSON.stringify(e));this.$emit("update-multi-feed",t)}},computed:{feeds_table(){return l},selected_keys(){let e=p(this.pkey,this.multiFeed);return e.alerts.length>0&&!this.suppressAlerts&&(e.alerts.forEach(e=>{this.addAlert(e)}),this.publishAlerts()),e.update&&this.select_feeds(e.data),e.key_list}}},m=h,b=s("2877"),k=Object(b["a"])(m,r,n,!1,null,"37a2fc8d",null);t["default"]=k.exports}}]);
//# sourceMappingURL=mek-projectile-multi-feed.694d0f65.js.map