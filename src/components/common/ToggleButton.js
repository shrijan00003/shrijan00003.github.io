import React from "react"
import { useAppState, useAppDispatch } from "../../context/AppContext"

export default function ToggleButton() {
  const { dark } = useAppState()
  const dispatch = useAppDispatch()
  const onToggle = () => {
    dispatch({ type: "toggle-theme" })
  }
  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle_input"
        checked={dark}
        onChange={onToggle}
      />
      <div className="toggle-control"></div>
    </label>
  )
}
