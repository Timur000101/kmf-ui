import { isTag } from './dom'

export const toType = (value: unknown) => typeof value

export const isFunction = (value: unknown) => toType(value) === 'function'

export const isBoolean = (value: unknown) => toType(value) === 'boolean'

export const isString = (value: unknown) => toType(value) === 'string'

export const isNumber = (value: unknown) => toType(value) === 'number'

export const isNull = (value: unknown) => value === null

// Determine if an element is an HTML element
export const isElement = (el: HTMLElement | any) => !!(el && el.nodeType === Node.ELEMENT_NODE)

// TODO change type
export const isLink = (props: any) => !!(props.href || props.to)

export const isRouterLink = (tag: any) => !!(tag && !isTag(tag, 'a'))
