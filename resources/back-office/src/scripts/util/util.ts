import UIkit from "uikit";
import { Ref } from "vue";

// define type for UIkit or HTML elements
export type Element =  object | Ref | HTMLElement | string

// set icon
export function icon(el: Element, icon: string | undefined, ratio?: number | undefined) {
    return UIkit.icon(el, {
        icon: icon,
        ratio: ratio
    });
}

// set nav
export function nav(el: Element, options?: any) {
    return UIkit.nav(el, options);
}
