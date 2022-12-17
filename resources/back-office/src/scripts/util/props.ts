/**
 * we use type-based declaration for most components
 * this file also created for this reason but
 * vue not support export type-based declaration at this time,
 * so we will use this props as export props for components with future release of vue
 */

import { ComponentPropsOptions } from "@vue/runtime-core";
import { ButtonClassType } from "./classes";

/**
 * Icon Props Types
 */
export interface IconPropsType {
    tag?: 'span' | string,
    icon: string,
    ratio?: number
}

/**
 * Button Props Types
 * extended from Button Class Type
 * cause all button classes define as props
 */
export interface ButtonPropsType extends ButtonClassType {
    tag?: 'router-link' | 'a',
    to?: string,
    href?: string,
    ratio?: number
}
