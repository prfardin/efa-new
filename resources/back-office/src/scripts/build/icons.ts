import { compile, icons } from './util';

export default async function compileIcons() {
    const folder = './resources/back-office/src/images/core/unicons/line/*';

    return await compile('resources/back-office/src/scripts/build/wrapper/icons.ts', 'resources/back-office/src/cache/uikit-icons', {
        replaces: {
            ICONS: await icons(`${folder}/*.svg`),
        }
    });
}
