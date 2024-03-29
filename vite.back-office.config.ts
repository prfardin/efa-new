import { PluginOption, defineConfig } from 'vite';
import { options } from './resources/back-office/src/scripts/vite/options';
import { monochromeIcons, lineIcons } from "./resources/back-office/src/scripts/build/icons";
import * as defaultOptions from './resources/back-office/src/scripts/vite/backoffice';
import rtlcss from './resources/back-office/src/scripts/build/rtlcss';

// set icons
// monochromeIcons is or default icons,
// so we don't need to define icons if only use monochrome icons
// must change in future
function setIcon() {
    return defaultOptions.defaultIcons([ monochromeIcons, lineIcons ])
}

// handle rtlcss async type error
// must change in future
const rtlcssResolve: any = Promise.resolve(rtlcss);

// plugins & vite config for build command
const laravelVite = defaultOptions.laravelVite([
    'resources/back-office/src/less/default.less',
    'resources/back-office/src/cache/default-rtl.less'
]);

const pluginOptions: PluginOption = defaultOptions.pluginsFunc(laravelVite, rtlcssResolve);

const config = {
    publicDir: defaultOptions.publicDir,
    plugins: pluginOptions,
    alias: defaultOptions.alias,
}

// use option function (base UserConfig option) and pass our config
// we use defaultOptions in serve mode because need build rtl.css file in build command
// in serve mode we compile just ltr || rtl (back-office-rtl.config)
export default defineConfig(({ command, mode }) => {
    return command === 'serve'
        ? options(defaultOptions)
        : options(config);
})
