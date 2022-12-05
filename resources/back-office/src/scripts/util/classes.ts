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
