import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { icons } from './util'

let cachedIcons = new Set<string>();

export function dynamicIcon(): Plugin {
    const outputPath = path.resolve('./src/.temp/uikit-icons.ts');

    return {
        name: 'dynamic-icon',
        // Create the file during the initial build
        buildStart() {
            // Load existing icons into cache
            const existingIcons = loadExistingIcons(outputPath);
            cachedIcons = new Set(existingIcons);
        },
        async handleHotUpdate({ file }) {
            if (file && file.endsWith('.vue')) {
                const newIcons = new Set<string>();

                // Step 1: Read the changed file content
                const content = fs.readFileSync(file, 'utf-8');

                // Step 2: Find new icons in the file
                const fileIcons = findIconsInContent(content);

                // Step 3: Update the cached icons
                fileIcons.forEach(icon => {
                    if (!cachedIcons.has(icon)) {
                        cachedIcons.add(icon);
                        newIcons.add(icon);
                    }
                });

                if (newIcons.size > 0) {
                    await appendIconsToFile(newIcons, outputPath);
                }
            }
        },
    };
}

// Helper: Load existing icons from file
function loadExistingIcons(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const matches = fileContent.match(/"([^"]+)"\s*:/g);

    return matches ? matches.map(match => match.replace(/[":]/g, '').trim()) : [];
}

// Helper function to extract icons from content
function findIconsInContent(content: string): Set<string> {
    const icons = new Set<string>();

    extractIcons(content).forEach(icon => icons.add(icon));

    return icons;
}

// Helper function to find icons in text content
function extractIcons(content: string): string[] {
    const iconRegex = /icon-[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*/g; // Match icons like "icon-*"
    return content.match(iconRegex) || [];
}

// Helper: Append new icons to the file
async function appendIconsToFile(newIcons: Set<string>, filePath: string) {

    const lastSvgRegex = /<\/svg>"\s*,?\s*(?=\}\s*})/; // Matches the last </svg> before the closing braces

    const compiledIcons: any = {};

    await Promise.all([...newIcons].map(async (iconName) => {
        const name = iconName.match(/^icon-([^-\s]+)-([^-\s]+)-(.+)$/);

        if (name && name.length > 3) {
            const [_, category, subcategory, icon] = name;
            const iconPath = `./src/images/core/${category}/${subcategory}/icons/${icon}.svg`;

            const compiledIcon = await icons(iconPath);
            if (compiledIcon)
                compiledIcons[iconName] = compiledIcon;
        }
    }));

    if (Object.keys(compiledIcons).length) {
        // Prepare new icons to add
        const newIconsContent = JSON.stringify(
            compiledIcons,
            null,
            '    '
        ).slice(1, -1)

        let existingContent = fs.readFileSync(filePath, 'utf-8');

        // Insert new icons after the last </svg>
        existingContent = existingContent.replace(lastSvgRegex, `</svg>",\n${newIconsContent}`);

        // Write the updated content back to the file
        fs.writeFileSync(filePath, existingContent, 'utf-8');
    }
}