let validators={};

import(/* webpackChunkName: "mek_beam-accuracy-data-module" */"@/data_table_modules/mek_beam/mek_beam-accuracy-data-module")
.then((_module)=>
{
    validators.accuracy=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-burst-value-data-module" */"@/data_table_modules/mek_beam/mek_beam-burst-value-data-module")
.then((_module)=>
{
    validators.burst_value=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-damage-data-module" */"@/data_table_modules/mek_beam/mek_beam-damage-data-module")
.then((_module)=>
{
    validators.damage=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-feature-data-module" */"@/data_table_modules/mek_beam/mek_beam-feature-data-module")
.then((_module)=>
{
    validators.filter_feature=_module.filter_data_table;//filter based on burst_value
    validators.feature=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-range-mod-data-module" */"@/data_table_modules/mek_beam/mek_beam-range-mod-data-module")
.then((_module)=>
{
    validators.update_range_mod=_module.create_range_mod_data_table;//filter based on base_range
    validators.range_mod=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-shots-data-module" */"@/data_table_modules/mek_beam/mek_beam-shots-data-module")
.then((_module)=>
{
    validators.update_shots=_module.filter_shots_data_table;//update based on magfed feature
    validators.shots=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-warm-up-data-module" */"@/data_table_modules/mek_beam/mek_beam-warm-up-data-module")
.then((_module)=>
{
    validators.warm_up=_module.cleaned_feature;
});

import(/* webpackChunkName: "mek_beam-wide-angle-data-module" */"@/data_table_modules/mek_beam/mek_beam-wide-angle-data-module")
.then((_module)=>
{
    validators.wide_angle=_module.cleaned_feature;
});

export {validators};