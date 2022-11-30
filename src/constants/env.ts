export const HAS_WINDOW_SUPPORT: boolean = typeof window !== 'undefined'
export const HAS_DOCUMENT_SUPPORT: boolean = typeof document !== 'undefined'
export const HAS_NAVIGATOR_SUPPORT: boolean = typeof navigator !== 'undefined'

export const WINDOW: Window | object = HAS_WINDOW_SUPPORT ? window : {}
export const DOCUMENT: Document | object = HAS_DOCUMENT_SUPPORT ? document : {}
export const NAVIGATOR: Navigator | object = HAS_NAVIGATOR_SUPPORT ? navigator : {}
