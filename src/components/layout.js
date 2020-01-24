/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./Navigation"
import "./layout.css"
import Footer from './Footer'

const Layout = ({ children, path }) => {
  

    

  return (
    <div>
    
      <Navigation path={path}/>
      <div>
        
      </div>
     {children}
<Footer/>
 <div className='privacy'>Wszelkie informacje i opisy są wynikiem indywidualnej i oryginalnej pracy twórczej, stanowiąc utwór w rozumieniu art. 1 ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych. Całość osobistych i majątkowych praw autorskich do tej dokumentacji przysługuje Smart-Panel s.c. z siedzibą w Karpaczu. Powielanie lub rozpowszechnianie tych danych na jakimkolwiek polu eksploatacji bez pisemnej zgody Smart-Panel s.c. z siedzibą w Karpaczu stanowi naruszenie przysługujących Twórcy majątkowych praw autorskich i spotka się z konsekwencjami natury prawnej.</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
