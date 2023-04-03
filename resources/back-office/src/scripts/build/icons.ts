import { compile, icons } from './util';

// Icons dir type
export interface IconsDir {
    dir: string,
    prefix?: string
}

// we use prefix to prevent similar icon name with different style
// Monochrome is our default icon
export const monochromeIcons: IconsDir = {
    dir: './resources/back-office/src/images/core/unicons/monochrome/*'
}
export const lineIcons: IconsDir = {
    dir: './resources/back-office/src/images/core/unicons/line/*',
    prefix: 'line-'
}

export default async function compileIcons(sources: IconsDir[]) {

    const files = await Promise.all(
        sources.map(async (src: IconsDir) => {
            return await icons(`${src.dir}/*.svg`, src.prefix)
        })
    )

    const svgIcons = JSON.stringify(
        files.reduce(( result, current) => {
            return Object.assign(result, current);
        }, {}),
        null,
        '    '
    );

    return await compile('resources/back-office/src/scripts/build/wrapper/icons.ts', 'resources/back-office/src/cache/uikit-icons', {
        replaces: {
            ICONS: svgIcons
        }
    });
}
