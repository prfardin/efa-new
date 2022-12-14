// define classes for export

// Button Classes
export interface ButtonProps {
    to?: string,
    href?: string,
    default?: boolean,
    primary?: boolean,
    secondary?: boolean,
    muted?: boolean,
    xSmall?: boolean,
    rounded?: boolean,
    circle?: boolean,
    collapse?: boolean,
    icon?: string,
}

export var ButtonProps2: ButtonProps = {
    tag: {
        type: String,
        default: 'a',
    },
    to: {
        type: String,
        required: true
    },
    href: {
        type: String,
    },
    default: {
        type: Boolean,
    },
    primary: {
        type: Boolean,
    },
    secondary: {
        type: Boolean,
    },
    muted: {
        type: Boolean,
    },
    xSmall: {
        type: Boolean,
    },
    rounded: {
        type: Boolean,
    },
    circle: {
        type: Boolean,
    },
    collapse: {
        type: Boolean,
    },
    icon: {
        type: String,
    },
    ratio: {
        type: Number,
    },
}

export const defaultButtonCls = 'uk-button';
export const defaultPrButtonCls = 'pr-button';

export function buttonCls(props: ButtonProps, buttonCls: string = defaultButtonCls, prButtonCls: string = defaultPrButtonCls) {
    return [
        buttonCls,
        {
            [`${buttonCls}-default`]: props.default,
            [`${buttonCls}-primary`]: props.primary,
            [`${buttonCls}-secondary`]: props.secondary,
            [`${buttonCls}-muted`]: props.muted,
            [`${buttonCls}-xsmall`]: props.xSmall,
            [`${buttonCls}-rounded`]: props.rounded,
            [`${buttonCls}-circle`]: props.circle,
            [`${buttonCls}-collapse`]: props.collapse,
            [`${prButtonCls}-has-icon`]: props.icon,
        }
    ]
}
