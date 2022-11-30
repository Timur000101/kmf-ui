// import { DOCUMENT, WINDOW } from '@/constants/envv'
import { isElement } from './inspect'

// Add a class to an element
// TODO: I think that I will need remove this row all the places ["&& isElement(el)"], because I use the Typescript. DOUBLE CHECK function parameter
export const addClass = (el: HTMLElement, className: string) => {
	if (className && isElement(el) && el.classList) {
		el.classList.add(className)
	}
}

// Remove a class from an element
export const removeClass = (el: HTMLElement, className: string) => {
	if (className && isElement(el) && el.classList) {
		el.classList.remove(className)
	}
}

// Test if an element has a class
// ! Below function, I removed checking for Html Element function
export const hasClass = (el: HTMLElement, className: string): boolean => {
	if (className && el.classList) {
		return el.classList.contains(className)
	}
	return false
}

// Returns `true` if a tag's name equals `name`
export const isTag = (tag: string, name: string): boolean => tag.toLowerCase() === name.toLowerCase()
