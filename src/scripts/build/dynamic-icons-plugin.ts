import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { icons } from './util'
import chokidar from 'chokidar'

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

            chokidar.watch('./src/**/*.{vue,svg}').on('change', async (file) => {
                if (file.endsWith('.vue')) {
                    const newIcons = await handleVueFileChange(file, outputPath);
                    if (newIcons.size > 0) {
                        await appendIconsToFile(newIcons, outputPath);
                    }
                }
            });
        },
    };
}

// Helper function to handle Vue file change
async function handleVueFileChange(file: string, outputPath: string): Promise<Set<string>> {
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

    return newIcons;
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
    let existingContent = fs.readFileSync(filePath, 'utf-8');

    const lastSvgRegex = /<\/svg>"\s*,?\s*(?=\}\s*})/; // Matches the last </svg> before the closing braces

    const compiledIcons: any = {};

    await Promise.all([...newIcons].map(async (iconName) => {
        const name = iconName.match(/^icon-([^-\s]+)-([^-\s]+)-(.+)$/);

        if (name) {
            const [_, category, subcategory, icon] = name;
            const iconPath = `./src/images/core/${category}/${subcategory}/icons/${icon}.svg`;

            compiledIcons[iconName] = await icons(iconPath);
        }
    }));

    try {
        // Prepare new icons to add
        const newIconsContent = JSON.stringify(
            compiledIcons,
            null,
            '    '
        ).slice(1, -1)

        console.log(newIconsContent)

        // Insert new icons after the last </svg>
        existingContent = existingContent.replace(lastSvgRegex, `</svg>",\n${newIconsContent}`);

        // Write the updated content back to the file
        fs.writeFileSync(filePath, existingContent, 'utf-8');
    }
    catch (error) {
        console.log(error)
    }
}