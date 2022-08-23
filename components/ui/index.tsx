import { createContext } from 'react'

export const uiContext = createContext({})

export const UIProvider = uiContext.Provider
export const UIConsumer = uiContext.Consumer
