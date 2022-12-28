import UIkit from "uikit";
import { Ref } from "vue";

// define type for icon element
export type ICONElement =  object | Ref | HTMLElement | string

// set icon
export function icon(el: any, icon: string | undefined, ratio?: number | undefined) {
    return UIkit.icon(el, {
        icon: icon,
        ratio: ratio
    });
}
