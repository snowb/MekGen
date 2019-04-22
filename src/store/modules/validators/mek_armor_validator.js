let validators={};

import(/* webpackChunkName: "mek_armor-data-module" */"@/data_table_modules/mek_armor/mek_armor-data-module.js")
.then((_module)=>
{
    validators.armor=_module.cleaned_feature;
    validators.armor_filter=_module.filter_data_table;
});

import(/* webpackChunkName: "mek_armor-type-data-module" */"@/data_table_modules/mek_armor/mek_armor-type-data-module.js")
.then((_module)=>
{
    validators.type=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_armor-RAM-data-module" */"@/data_table_modules/mek_armor/mek_armor-RAM-data-module.js")
.then((_module)=>
{
    validators.RAM=_module.cleaned_feature;
});

export {validators};