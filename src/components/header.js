import React from "react"
import PropTypes from "prop-types"
import ToggleButton from "./common/ToggleButton"

const Header = ({ siteTitle, themeToggleButtonProps }) => {
  return (
    <header>
      <nav className="navbar ">
        <a className="navbar-brand" href="#">
          Shrijan00003
        </a>
        <div className="float-right mr-2">
          <ToggleButton {...themeToggleButtonProps} />
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  themeToggleButtonProps: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
