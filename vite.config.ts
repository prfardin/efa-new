import { defineConfig } from 'vite'
import viteConfig from './src/scripts/build/vite-config'

export default defineConfig(({ command }) => viteConfig({ command: command, rtl: process.env.rtl }))