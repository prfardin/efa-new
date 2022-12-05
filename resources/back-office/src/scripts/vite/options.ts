import {UserConfig, CSSOptions, PluginOption, AliasOptions} from 'vite'

// default option for vite
// we create separated file to prevent from duplicating
export function options({ publicDir, plugins, css, alias }: { publicDir?: string | false, plugins?: PluginOption[], css?: CSSOptions, alias?: AliasOptions }): UserConfig {
    return {
        publicDir: publicDir,
        plugins: plugins,
        css: css,
        resolve: {
            alias: alias
        }
    }
}
