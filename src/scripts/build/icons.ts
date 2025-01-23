import { compile, findIcons, icons } from './util'

// Icons dir type
export interface IconsDir {
  dir: string
  prefix?: string
}

// we use prefix to prevent similar icon name with different style
// Monochrome is our default icon
export const monochromeIcons: IconsDir = {
  dir: './src/images/core/unicons/monochrome/*',
  prefix: 'icon-mono-'
}

export const lineIcons: IconsDir = {
  dir: './src/images/core/unicons/line/*',
  prefix: 'icon-line-'
}

export const solidIcons: IconsDir = {
  dir: './src/images/core/unicons/solid/*',
  prefix: 'icon-solid-'
}

export default async function compileIcons(sources: IconsDir[], findDir: string) {
  const files = await Promise.all(
    sources.map(async (src: IconsDir) => {
      return await icons(`${src.dir}/*.svg`, src.prefix)
    })
  )

  const usedIcons = await findIcons(findDir);

  const svgIcons = JSON.stringify(
    files.reduce((result: any, current) => {
      if (process.env.NODE_ENV === 'production') {
        return Object.entries(current).reduce((acc, [key, value]) => {
          if (usedIcons.has(key))
            acc[key] = value
          return acc
        }, result)
      }
      return Object.assign(result, current)
    }, {}),
    null,
    '    '
  )

  return await compile('src/scripts/build/wrapper/icons.ts', 'src/.temp/uikit-icons', {
    replaces: {
      ICONS: svgIcons
    }
  })
}
