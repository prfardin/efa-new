import UIkit from "uikit";

export function icon(el: object | HTMLElement | string, icon: string, ratio?: number | undefined) {
    return UIkit.icon(el, {
        icon: icon,
        ratio: ratio
    });
}
