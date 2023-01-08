/**
 * we use this file for classes of the components
 * we send the props to xClassObject function, and
 * it will return us array of class that defined from props
 * we use this way to make our code clean
 * and reusable class for other semi-like components
 * we also define interface for each component classes
 * we will improve this way with future release of vue (type-based declaration export)
 */

/**
 * Button Classes
 */
export interface ButtonClassType {
    default?: boolean,
    primary?: boolean,
    secondary?: boolean,
    muted?: boolean,
    small?: boolean,
    xSmall?: boolean,
    square?: boolean,
    rounded?: boolean,
    circle?: boolean,
    collapse?: boolean,
    icon?: string,
    iconButton?: boolean,
    width?: string
}

export const defaultButtonCls = 'uk-button';
export const defaultPrButtonCls = 'pr-button';

export function buttonClassObject(props: ButtonClassType, hasDefaultSlot: boolean = true, buttonCls: string = defaultButtonCls, prButtonCls: string = defaultPrButtonCls) {
    return [
        props.width ? `uk-width-${props.width}` : '',
        {
            [defaultButtonCls]: !props.iconButton,
            [`${buttonCls}-default`]: props.default,
            [`${buttonCls}-primary`]: props.primary,
            [`${buttonCls}-secondary`]: props.secondary,
            [`${buttonCls}-muted`]: props.muted,
            [`${buttonCls}-small`]: props.small,
            [`${buttonCls}-xsmall`]: props.xSmall,
            [`${buttonCls}-square`]: props.square,
            [`${buttonCls}-rounded`]: props.rounded,
            [`${buttonCls}-circle`]: props.circle,
            [`${buttonCls}-collapse`]: props.collapse,
            [`${prButtonCls}-has-icon`]: props.icon && hasDefaultSlot,
            [`uk-icon-button`]: props.iconButton,
        }
    ]
}


/**
 * Link Classes
 */
export interface LinkClassType {
    muted?: boolean,
    text?: boolean,
    heading?: boolean,
    reset?: boolean,
    toggle?: boolean,
    icon?: string,
}

export const defaultLinkCls = 'uk-link';
export const defaultPrLinkCls = 'pr-link';

export function linkClassObject(props: LinkClassType, hasDefaultSlot: boolean = true, linkCls: string = defaultLinkCls, prLinkCls: string = defaultPrLinkCls) {
    return [
        {
            [`${linkCls}-muted`]: props.muted,
            [`${linkCls}-text`]: props.text,
            [`${linkCls}-heading`]: props.heading,
            [`${linkCls}-reset`]: props.reset,
            [`${linkCls}-toggle`]: props.toggle,
            [`${prLinkCls}-has-icon`]: props.icon && hasDefaultSlot
        }
    ]
}

