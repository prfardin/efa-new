// we have just found this method to get rtl compile
// we think there is a better way, but at this time
// maybe we don't have the science to develop this or maybe vite or laravel stockade
// the way of we want to develop rtl file
// any way this must change in the future
// we try our best to develop with typescript (our first typescript project)
// help us to make it better
// this config only works when command is DEV
// we use another method in BUILD command
import { CSSOptions, PluginOption, defineConfig } from 'vite';
import { options } from "./resources/back-office/src/scripts/vite/options";
import { publicDir, laravelVite, pluginsFunc, alias } from './resources/back-office/src/scripts/vite/backoffice';
import { rtlcssConfig } from "./resources/back-office/src/scripts/build/rtlcss";
import rtlcss from 'rtlcss';

// set rtlcss config and use int postcss plugin to compile theme-rtl.css file
const rtlcssProcess: any = rtlcss.configure(rtlcssConfig);
const css: CSSOptions = {
    postcss: {
        plugins: [
            rtlcssProcess
        ]
    }
}

// we're using additionalInput less file instead default.less
// because we're using another font in rtl fil. we explain why we use another font in rtl
const laravel = laravelVite('resources/back-office/src/less/default-rtl.less');
const plugins: PluginOption = pluginsFunc(laravel);

// finally we use option function (base UserConfig option) and pass our config to it
export default defineConfig(options({ publicDir, plugins, css, alias }));
