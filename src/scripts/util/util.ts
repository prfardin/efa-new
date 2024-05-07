import UIkit from 'uikit'
import { Ref } from 'vue'
import {
  UIkitGridOptions,
  UIkitIconOptions,
  UIkitHeightViewportOptions,
  UIkitNavOptions
} from './types'

// define type for UIkit or HTML elements
export type Element = object | Ref | HTMLElement | string

export type RefElement = Element | null

// define type for HTML input elements
export type InputElement = object | Ref | HTMLInputElement | string

// set grid
export function grid(el: Element, options?: UIkitGridOptions) {
  return UIkit.grid(el, options)
}

// set icon
export function icon(el: Element, options?: UIkitIconOptions) {
  return UIkit.icon(el, options)
}

// set height viewport
export function heightViewport(el: Element, options?: UIkitHeightViewportOptions) {
  return UIkit.heightViewport(el, options)
}

// set nav
export function nav(el: Element, options?: UIkitNavOptions) {
  return UIkit.nav(el, options)
}

// set nav
export function drop(el: Element, options?: UIkitNavOptions) {
  return UIkit.drop(el, options)
}
