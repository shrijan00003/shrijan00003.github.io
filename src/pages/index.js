import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../sass/app.scss"

const IndexPage = () => {
  const [dark, setDark] = useState(false)
  const toggleTheme = () => {
    setDark(d => !d)
  }
  return (
    <div className={`theme ${dark ? "theme--dark" : "theme--default"}`}>
      <Layout themedButtonProps={{ dark, toggleTheme }}>
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

export default IndexPage
