import { compile, findIcons, icons } from './util'


export default async function compileIcons(findDir: string) {
    const usedIcons = await findIcons(findDir)

    const compiledIcons: {[key: string]: string} = {};

    await Promise.all([...usedIcons].map(async (iconName) => {
        const name = iconName.match(/^icon-([^-\s]+)-([^-\s]+)-(.+)$/);

        if (name) {
            const [_, category, subcategory, icon] = name;
            const iconPath = `./src/images/core/${category}/${subcategory}/icons/${icon}.svg`;

            compiledIcons[iconName] = await icons(iconPath);
        }
    }));

    const svgIcons = JSON.stringify(
        compiledIcons,
        null,
        '    '
    )

    return await compile('src/scripts/build/wrapper/icons.ts', 'src/.temp/uikit-icons', {
        replaces: {
            ICONS: svgIcons
        }
    })
}