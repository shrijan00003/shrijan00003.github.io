import { storage, types } from "../constants"
import { useEffect, useCallback } from "react"
import useLocalStorage from "./useLocalStorage"
import { useAppDispatch, useAppState } from "../context/AppContext"

export default function useTheme() {
  const { theme } = useAppState()
  const dispatch = useAppDispatch()
  const [setStorage, getFromStorage] = useLocalStorage()
  const { THEME_STORAGE_KEY } = storage

  const toggleTheme = useCallback(() => {
    if (theme === "default") {
      setStorage(THEME_STORAGE_KEY, "dark")
      dispatch({ type: types.SET_DARK_THEME })
    } else {
      setStorage(THEME_STORAGE_KEY, "default")
      dispatch({ type: types.SET_DEFAULT_THEME })
    }
  }, [theme, THEME_STORAGE_KEY, dispatch])

  useEffect(() => {
    const localTheme = getFromStorage(THEME_STORAGE_KEY)
    if (localTheme === "dark") {
      dispatch({ type: "set-dark-theme" })
    } else {
      dispatch({ type: "set-default-theme" })
    }
  }, [THEME_STORAGE_KEY, dispatch])

  return [theme, toggleTheme]
}
