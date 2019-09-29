/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./Navigation"
import "./layout.css"
import Footer from './Footer'

const Layout = ({ children, path }) => {
  

    

  return (
    <div>
      <Navigation path={path}/>
     {children}
<Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
