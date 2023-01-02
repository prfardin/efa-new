import { compile, icons } from './util';

export default async function compileIcons(folders: { dir: string, prefix?: string }[]) {

    const files = await Promise.all(
        folders.map(async (folder: { dir: string, prefix?: string }) => {
            return await icons(`${folder.dir}/*.svg`, folder.prefix)
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
