import React from "react"
import PropTypes from "prop-types"
import ToggleButton from "./common/ToggleButton"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav className="navbar ">
        <a className="navbar-brand" href="/">
          {siteTitle}
        </a>
        <div className="float-right mr-2">
          <ToggleButton />
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
