import React from "react"

import "../sass/app.scss"
import { AppProvider } from "../context/AppContext"
import App from "../components/App"

const IndexPage = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}

export default IndexPage
