(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mek_servo-kills-space-trade-data-module"],{f1d4:function(e,i,s){"use strict";s.r(i),s.d(i,"cleaned_feature",function(){return l});let l=function(e,i,s){let l={kills_modifier:0,space_modifier:0,cost:0};l.kills=void 0!==i?i:2,l.space=void 0!==s?s:2;let a=[],o=!1;if(void 0===i&&(a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing Base Kills, reseting to 2."),o=!0),void 0===s&&(a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing Base Space, reseting to 2."),o=!0),void 0===e.kills||void 0===e.space||void 0===e.cost)return a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Missing values, reseting to 0."),o=!0,{data:l,update:o,alerts:a};l.kills_modifier=e.kills_modifier,l.space_modifier=e.space_modifier,l.cost=e;let r=i+l.kills_modifier,d=s+l.space_modifier;switch(!0){case r<=0:case d<0:case 2*l.kills_modifier+l.space_modifier!==0:a.push("Mek_Servo-Kills-Space-Trade:"),a.push("**** Invalid values, reseting to 0."),l.kills_modifier=0,l.space_modifier=0,l.cost=0,o=!0;break}return l.cost=l.kills_modifier>0?2*l.kills_modifier:0,l.kills=l.kills+l.kills_modifier,l.space=l.space+l.space_modifier,{data:l,update:o,alerts:a}}}}]);
//# sourceMappingURL=mek_servo-kills-space-trade-data-module.2260ba31.js.map