/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import "./index.scss"
import Github from "../images/github.png"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header siteTitle="Sheng" />
      <div>
        <main>{children}</main>
        <footer>
          <section class="left">
            <a href="https://github.com/cySheng"><img src={Github} alt="Front page design of the law firm MSSMR"/></a>
            <p>Samsheng © {new Date().getFullYear()}</p>
          </section>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
