let mek_armor_validators={};

import(/* webpackChunkName: "mek_armor-data-module" */"@/data_table_modules/mek_armor/mek_armor-data-module.js")
.then((_module)=>
{
    mek_armor_validators.mek_armor=_module.cleaned_feature;
    mek_armor_validators.mek_armor_filter=_module.filter_data_table;
});
import(/* webpackChunkName: "mek_armor-type-data-module" */"@/data_table_modules/mek_armor/mek_armor-type-data-module.js")
.then((_module)=>
{
    mek_armor_validators.mek_armor_type=_module.cleaned_feature;
});
import(/* webpackChunkName: "mek_armor-RAM-data-module" */"@/data_table_modules/mek_armor/mek_armor-RAM-data-module.js")
.then((_module)=>
{
    mek_armor_validators.mek_armor_RAM=_module.cleaned_feature;
});

export {mek_armor_validators};