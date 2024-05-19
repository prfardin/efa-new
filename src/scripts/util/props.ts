/**
 * we use type-based declaration for most components
 * this file also created for this reason but
 * vue not support export type-based declaration at this time,
 * so we will use this props as export props for components with future release of vue
 */
import {
  GridClassType,
  ButtonClassType,
  LinkClassType,
  ListClassType,
  ContainerClassType,
  SectionClassType,
  TileClassType,
  InputClassType,
  TextareaClassType,
  LabelClassType,
  SpinnerClassType,
  AvatarClassType,
  CardClassType
} from './classes'
import { RouteLocationRaw } from 'vue-router'

/**
 * Section Props Types
 */
export interface SectionPropsType extends SectionClassType {
  //
}

/**
 * Container Props Types
 */
export interface ContainerPropsType extends ContainerClassType {
  //
}

/**
 * Tile Props Types
 */
export interface TilePropsType extends TileClassType {
  //
}

/**
 * List Props Types
 * extended from List Class Type
 * cause all list classes define as props
 */
export interface ListPropsType extends ListClassType {
  tag?: 'ul' | 'div' | string
}

/**
 * Grid Props Types
 * extended from Grid Class Type
 * cause all grid classes define as props
 */
export interface GridPropsType extends GridClassType {
  margin?: string
  firstColumn?: string
  masonry?: boolean
  parallax?: number
}

/**
 * Button Props Types
 * extended from Button Class Type
 * cause all button classes define as props
 */
export interface ButtonPropsType extends ButtonClassType {
  tag?: 'router-link' | 'a' | 'button'
  to?: string
  href?: string
  slotClass?: string
  ripple?: boolean
  spinner?: boolean
  spinnerMod?: 'line' | 'circle'
  icon?: string
  ratio?: number | string
  iconClass?: string
  spinnerClass?: string
}

/**
 * Link Props Types
 * extended from Link Class Type
 * cause all link classes define as props
 */
export interface LinkPropsType extends LinkClassType {
  tag?: 'router-link' | 'a'
  to?: RouteLocationRaw
  href?: string
  slotClass?: string
  iconClass?: string
  ratio?: number
}

/**
 * Icon Props Types
 */
export interface IconPropsType {
  tag?: 'span' | string
  icon: string | undefined
  ratio?: any
}

/**
 * Nav Props Types
 */
export interface NavPropsType {
  hasNavTag?: boolean
}

/**
 * Input Props Types
 */
export interface InputPropsType extends InputClassType {
  type?: 'text' | string
  name: string
  id?: string
  label?: string
  ariaLabel?: string
  autofocus?: boolean
  icon?: string
  ratio?: number
  iconClass?: string
  iconFlip?: boolean
}

/**
 * Input Props Types
 */
export interface SelectBoxPropsType {
  type?: 'text' | string
  name: string
  id?: string
  label?: string
  ariaLabel?: string
  icon?: string
  ratio?: number
  iconClass?: string
  iconFlip?: boolean
  mode?: string
  lists?: string[] | undefined
  node?: any
  d?: string | null | string[]
  searchable?: boolean
  divider?: boolean
}

/**
 * Textarea Props Types
 */

export interface TextareaPropsType extends TextareaClassType {
  type?: 'text' | string
  name: string
  id?: string
  label?: string
  ariaLabel?: string
  autofocus?: boolean
  icon?: string
  ratio?: number
  iconClass?: string
  iconFlip?: boolean
  rows?: number
}

/**
 * Label Props Types
 */
export interface LabelPropsType extends LabelClassType {
  for: string
  icon?: string
  ratio?: number
  iconClass?: string
}

/**
 * Spinner Props Types
 */
export interface SpinnerPropsType extends SpinnerClassType {
  tag?: 'span' | string
  mode?: 'line' | 'circle'
}

/**
 * Avatar Props Types
 */

export interface AvatarPropsType extends AvatarClassType {
  tag?: string
  cls?: string
}

/**
 * Card Props Types
 */

export interface CardPropsType extends CardClassType {

}

/**
 * Offcanvas Props Types
 */

export interface OffcanvasPropsType {
  mode?: 'slide' | 'reveal' | 'push' | 'none'
  flip?: boolean | undefined
  overlay?: boolean | undefined
  escClose?: boolean | undefined
  bgClose?: boolean | undefined
  container?: string | boolean | undefined
  id: string
}

