import { defineStore } from 'pinia'
import { ref, computed } from "vue";
import { i18nGlobal } from "@bs/scripts/i18n";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useDirectionStore = defineStore('direction', () => {
    const direction = i18nGlobal.locale === 'fa' ? 'right' : 'left'

    return { direction }
})
