import React from "react"

import SEO from "./seo"
import Image from "./image"
import Layout from "./layout"
import { Link } from "gatsby"
import { useAppState } from "../context/AppContext"

export default function App() {
  const { dark } = useAppState()

  return (
    <div className={`theme ${dark ? "theme--dark" : "theme--default"}`}>
      <Layout>
        <SEO title="Home" />

        <h1 className="primary-color">Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    </div>
  )
}
