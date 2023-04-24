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
 * const still not assigned to their classObject's
 */
export const defaultPreserveCls = 'uk-preserve-color';

export const defaultPaddingCls = 'uk-padding';

/**
 * define background types, we use our main colors in
 * some components that take background color like button component,
 * so it's good to define it as global background types and extend from it
 */
export interface BackgroundTypes {
    default?: boolean,
    muted?: boolean,
    primary?: boolean,
    secondary?: boolean,
}

/**
 * we use background cls function to return all possible
 * background colors to every component we need it,
 * it will prevent us to define it for every component cls
 */
function backgroundCls(cls: string, props: { [key: string]: any }) {
    return [
        {
            [`${cls}-default`]: props.default,
            [`${cls}-muted`]: props.muted,
            [`${cls}-primary`]: props.primary,
            [`${cls}-secondary`]: props.secondary,
        }
    ]
}


/**
 * Container Classes
 */
export interface ContainerClassType {
    xsmall?: boolean,
    small?: boolean,
    large?: boolean,
    xlarge?: boolean,
    expand?: boolean
}

export const defaultContainerCls = 'uk-container';

export function containerClassObject(props: ContainerClassType, containerCls: string = defaultContainerCls) {
    return [
        containerCls,
        {
            [`${containerCls}-xsmall`]: props.xsmall,
            [`${containerCls}-small`]: props.small,
            [`${containerCls}-large`]: props.large,
            [`${containerCls}-xlarge`]: props.xlarge,
            [`${containerCls}-expand`]: props.expand
        },
    ]
}


/**
 * List Classes
 */
export interface ListClassType {
    disc?: boolean,
    circle?: boolean,
    square?: boolean,
    decimal?: boolean,
    hyphen?: boolean,
    muted?: boolean,
    emphasis?: boolean,
    primary?: boolean,
    secondary?: boolean,
    bullet?: boolean,
    divider?: boolean,
    striped?: boolean,
    large?: boolean,
    collapse?: boolean
}

export const defaultListCls = 'uk-list';

export function listClassObject(props: ListClassType, listCls: string = defaultListCls) {
    return [
        listCls,
        {
            [`${listCls}-disc`]: props.disc,
            [`${listCls}-circle`]: props.circle,
            [`${listCls}-square`]: props.square,
            [`${listCls}-decimal `]: props.decimal,
            [`${listCls}-hyphen`]: props.hyphen,
            [`${listCls}-muted`]: props.muted,
            [`${listCls}-emphasis`]: props.emphasis,
            [`${listCls}-primary `]: props.primary,
            [`${listCls}-secondary`]: props.secondary,
            [`${listCls}-bullet`]: props.bullet,
            [`${listCls}-divider`]: props.divider,
            [`${listCls}-striped `]: props.striped,
            [`${listCls}-large`]: props.large,
            [`${listCls}-collapse`]: props.collapse
        },
    ]
}


/**
 * Section Classes
 */
export interface SectionClassType extends BackgroundTypes {
    preserve?: boolean,
    xsmall?: boolean,
    small?: boolean,
    large?: boolean,
    xlarge?: boolean,
    paddingRemove?: boolean,
}

export const defaultSectionCls = 'uk-section';

export function sectionClassObject(props: SectionClassType, sectionCls: string = defaultSectionCls, preserveCls: string = defaultPreserveCls, paddingCls: string = defaultPaddingCls) {
    return [
        sectionCls,
        ...backgroundCls(sectionCls, props),
        {
            preserveCls: props.preserve,
            [`${sectionCls}-xsmall`]: props.xsmall,
            [`${sectionCls}-small`]: props.small,
            [`${sectionCls}-large`]: props.large,
            [`${sectionCls}-xlarge`]: props.xlarge,
            [`${paddingCls}-remove-vertical`]: props.paddingRemove
        },
    ]
}


/**
 * Tile Classes
 */
export interface TileClassType extends BackgroundTypes {
    xsmall?: boolean,
    small?: boolean,
    large?: boolean,
    xlarge?: boolean,
    paddingRemove?: boolean
}

export const defaultTileCls = 'uk-tile';

export function tileClassObject(props: TileClassType, tileCls: string = defaultTileCls, paddingCls: string = defaultPaddingCls) {
    return [
        tileCls,
        ...backgroundCls(tileCls, props),
        {
            [`${tileCls}-xsmall`]: props.xsmall,
            [`${tileCls}-small`]: props.small,
            [`${tileCls}-large`]: props.large,
            [`${tileCls}-xlarge`]: props.xlarge,
            [`${paddingCls}-remove`]: props.paddingRemove
        },
    ]
}


/**
 * Grid Classes
 */
export interface GridClassType {
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    collapse?: boolean,
    columnSmall?: boolean,
    columnMedium?: boolean,
    columnLarge?: boolean,
    columnCollapse?: boolean,
    rowSmall?: boolean,
    rowMedium?: boolean,
    rowLarge?: boolean,
    rowCollapse?: boolean,
    divider?: boolean,
    match?: boolean
}

export const defaultGridCls = 'uk-grid';

export function gridClassObject(props: GridClassType, gridCls: string = defaultGridCls) {
    return [
        {
            [`${gridCls}-small`]: props.small,
            [`${gridCls}-medium`]: props.medium,
            [`${gridCls}-large`]: props.large,
            [`${gridCls}-collapse`]: props.collapse,
            [`${gridCls}-column-small`]: props.columnSmall,
            [`${gridCls}-column-medium`]: props.columnMedium,
            [`${gridCls}-column-large`]: props.columnLarge,
            [`${gridCls}-column-collapse`]: props.columnCollapse,
            [`${gridCls}-row-small`]: props.rowSmall,
            [`${gridCls}-row-medium`]: props.rowMedium,
            [`${gridCls}-row-large`]: props.rowLarge,
            [`${gridCls}-row-collapse`]: props.rowCollapse,
            [`${gridCls}-divider`]: props.divider,
            [`${gridCls}-match`]: props.match
        },
    ]
}

/**
 * Button Classes
 */
export interface ButtonClassType extends BackgroundTypes {
    text?: boolean,
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
        ...backgroundCls(buttonCls, props),
        {
            [defaultButtonCls]: !props.iconButton,
            [`${buttonCls}-text`]: props.text,
            [`${buttonCls}-small`]: props.small,
            [`${buttonCls}-xsmall`]: props.xSmall,
            [`${buttonCls}-square`]: props.square,
            [`${buttonCls}-rounded`]: props.rounded,
            [`${buttonCls}-circle`]: props.circle,
            [`${buttonCls}-collapse`]: props.collapse,
            [`${prButtonCls}-has-icon`]: props.icon && hasDefaultSlot,
            [`uk-icon-button`]: props.iconButton
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
    icon?: string
}

export const defaultLinkCls = 'uk-link';
export const defaultPrLinkCls = 'pr-link';

export function linkClassObject(props: LinkClassType, hasDefaultSlot: boolean = true, linkCls: string = defaultLinkCls, prLinkCls: string = defaultPrLinkCls) {
    return [
        linkCls,
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


/**
 * Input Classes
 */
export interface InputClassType {
    muted?: boolean,
    text?: boolean,
    heading?: boolean,
    reset?: boolean,
    toggle?: boolean,
    icon?: string
}

export const defaultInputCls = 'uk-input';

export function inputClassObject(props: InputClassType, inputCls: string = defaultInputCls) {
    return [
        inputCls,
        {
            [`${inputCls}-muted`]: props.muted,
            [`${inputCls}-text`]: props.text,
            [`${inputCls}-heading`]: props.heading,
            [`${inputCls}-reset`]: props.reset,
            [`${inputCls}-toggle`]: props.toggle,
        }
    ]
}
