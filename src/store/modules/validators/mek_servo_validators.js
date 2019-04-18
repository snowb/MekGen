let validators={};

import(/* webpackChunkName: "[request]" */"@/data_table_modules/mek_servo/mek_servo-class-data-module.js")
.then((_module)=>
{
    validators.servo=_module.cleaned_feature;
    validators.create_class_table=_module.create_class_data_table;
});

import(/* webpackChunkName: "[request]" */"@/data_table_modules/mek_servo/mek_servo-kills-space-trade-data-module.js")
.then((_module)=>
{
    validators.trade=_module.cleaned_feature;
});

import(/* webpackChunkName: "[request]" */"@/data_table_modules/mek_servo/mek_servo-type-data-module.js")
.then((_module)=>
{
    validators.type=_module.cleaned_feature;
});

export {validators};