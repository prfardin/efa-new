import UIkit from "uikit";

export type IconElement = object | HTMLElement | string

export function icon(el: IconElement, icon: string | undefined, ratio?: number | undefined) {
    return UIkit.icon(el, {
        icon: icon,
        ratio: ratio
    });
}
