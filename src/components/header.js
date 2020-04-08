import React from "react"
import PropTypes from "prop-types"
import ToggleButton from "./common/ToggleButton"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav className="navbar ">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt={siteTitle} />
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
