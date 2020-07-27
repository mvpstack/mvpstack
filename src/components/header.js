import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1 style={{ margin: 0 }}>
        {siteTitle}
      </h1>
      <small>A Bootstrapped company of One.</small>
      <p>Hi, It's <span><a href="https://twitter.com/mddanishyusuf">Mohd Danish</a></span> & I'm Solo <span>Founder</span> building <span>micro-startups</span> under the name of <span>MVP Stack</span>.</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
