import React from "react"

const initialState = {
  dark: false,
}

const AppStateContext = React.createContext()
const AppDispatchContext = React.createContext()

function appReducer(state, action) {
  switch (action.type) {
    case "toggle-theme": {
      return { ...state, dark: !state.dark }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error("useAppState must be called with in AppProvider")
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error("useAppDispatch must be called with in AppProvider")
  }
  return context
}

export { useAppState, useAppDispatch, AppProvider }
