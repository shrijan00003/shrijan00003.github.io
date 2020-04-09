import SEO from "./seo"
import React from "react"
import Layout from "./layout"
import { DefaultImage } from "./image"
import { useAppState } from "../context/AppContext"

export default function App() {
  const { theme } = useAppState()

  return (
    <div
      className={`theme ${theme === "dark" ? "theme--dark" : "theme--default"}`}
    >
      <Layout>
        <SEO title="Home" />
        <div style={{ margin: "0 auto" }}>
          <DefaultImage />
        </div>
      </Layout>
    </div>
  )
}
