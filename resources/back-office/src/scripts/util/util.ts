import UIkit from "uikit";
import {Ref, onMounted, watchEffect, ref} from "vue";

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
export function useIcon(icon: string | undefined, ratio?: number | undefined) {
    const iconEl: any = ref(null)

    function setIcon() {
        iconEl.value = UIkit.icon(iconEl.value, {
            icon: icon,
            ratio: ratio
        });
    }

    // do setIcon and watch props change
    onMounted(() => {
        // watchEffect(setIcon)
        setIcon()
    })

    return iconEl
}
