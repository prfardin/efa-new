import UIkit from 'uikit'
import { Ref } from 'vue'
import {
  UIkitGridOptions,
  UIkitIconOptions,
  UIkitHeightViewportOptions,
  UIkitNavOptions,
  UIkitNavbarOptions,
  UIkitDropOptions,
  UIkitOffcanvasOptions,
  UIkitToggleOptions
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

// set navbar
export function navbar(el: Element, options?: UIkitNavbarOptions) {
  return UIkit.navbar(el, options)
}

// set drop
export function drop(el: Element, options?: UIkitDropOptions) {
  return UIkit.drop(el, options)
}

// set offcanvas
export function offcanvas(el: Element, options?: UIkitOffcanvasOptions) {
  return UIkit.offcanvas(el, options)
}

// set toggle
export function toggle(el: Element, options?: UIkitToggleOptions) {
  return UIkit.toggle(el, options)
}


// set util
// need import
// export function util() {
//   return UIkit.util()
// }




