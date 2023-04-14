// default option for back-office compile
// some options define as function to we use them in other config files
import { PluginOption, AliasOptions, Plugin } from 'vite';
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import compileIcons, { monochromeIcons, lineIcons, IconsDir } from '../build/icons';

export function defaultIcons(sources: IconsDir[] = [ monochromeIcons, lineIcons ]) {
    return Promise.resolve(compileIcons(sources))
}

// all files in publicDir path will be copied to build path as the same they are
export const publicDir: string = 'resources/back-office/public';

export const vueVite = vue({
    template: {
        transformAssetUrls: {
            // The Vue plugin will re-write asset URLs, when referenced
            // in Single File Components, to point to the Laravel web
            // server. Setting this to `null` allows the Laravel plugin
            // to instead re-write asset URLs to point to the Vite
            // server instead.
            base: null,

            // The Vue plugin will parse absolute URLs and treat them
            // as absolute paths to files on disk. Setting this to
            // `false` will leave absolute URLs un-touched, so they can
            // reference assets in the public directly as expected.
            includeAbsolute: false,
        },
    },
    reactivityTransform: true
});

export const viteVueJsx = vueJsx({
    // options are passed on to @vue/babel-plugin-jsx
});

export const vueI18nVite = vueI18n({
    // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
    // compositionOnly: false,

    // you need to set i18n resource including paths !
    include: 'lang/**.json',
});

export function laravelVite( additionalInput: string | string[] = 'resources/back-office/src/less/default.less'): any {
    const input = ['resources/back-office/main.ts'].concat(additionalInput);
    return laravel({
        input: input,
        buildDirectory: 'back-office/build'
    });
}

export function pluginsFunc(laravel: any = laravelVite(), icons: any = defaultIcons(), plugins?: Plugin | PluginOption[]): PluginOption[] {
    return [
        laravel,
        vueVite,
        vueI18nVite,
        viteVueJsx,
        icons,
        plugins
    ];
}

export const plugins: PluginOption[] = pluginsFunc();

// we use alias for preventing to write full path in our app
export const alias: AliasOptions = {
    '@':   '/resources',
    '@b':  '/resources/back-office',                    // back-office
    '@bs': '/resources/back-office/src',                // back-office-src
    '@bc': '/resources/back-office/components',         // back-office-components
    '@bv': '/resources/back-office/views',              // back-office-views
    '@bf': '/resources/back-office/src/fonts',          // back-office-fonts,
    '@bi': '/resources/back-office/src/images',         // back-office-images,
    '@bStores': '/resources/back-office/src/stores',    // back-office-stores,
    "@l/*": 'lang',                                     // lang
}
