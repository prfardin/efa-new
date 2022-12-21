import UIkit from "uikit";
import { Ref, onMounted, watchEffect } from "vue";

/**
 * Component Composable icon: for icon component, button component etc.
 * do setIcon and watch if icon props changed.
 * we need to know which method is better,
 * do setIcon and watch [props.icon, props.ratio] or just watchEffect
 * for now watchEffect used cause its clean
 */

// define type for icon element
export type IconElement =  object | Ref | HTMLElement | string

// icon component
export function useIcon(el: any, icon: string | undefined, ratio?: number | undefined) {
    function setIcon() {
        return UIkit.icon(el.value, {
            icon: icon,
            ratio: ratio
        });
    }

    // do setIcon and watch props change
    onMounted(() => {
        watchEffect(setIcon)
    })
}
