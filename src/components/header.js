import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <section style={{ display: `flex`, alignItems: `center` }}>
        <p style={{ marginBottom: `0`, marginRight: `25px`  }}>
          <Link to="/blog" style={{ textDecoration: `none`, color: `white` }}>Blog</Link>
        </p>
        <p style={{ marginBottom: `0`}}>
          <Link to="/" style={{ textDecoration: `none`, color: `white` }}>About</Link>
        </p>
      </section>
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
