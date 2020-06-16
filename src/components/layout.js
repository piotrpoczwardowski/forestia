/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from 'react';
import PropTypes from "prop-types"
import CustomerChat from '../components/CustomerChat'

import Navigation from "./Navigation"
import "./layout.css"
import Footer from './Footer'

class Layout extends Component {
  state = {
    infoFibo: true
  }

  componentDidMount(){
    let infoFibo
    let infoFiboWasOpen =  window.sessionStorage.getItem("infoFibo");
    
    infoFiboWasOpen ? infoFibo = false : infoFibo = true
   this.setState({infoFibo})
  }

  closeInfoFibo = () => {
    window.sessionStorage.setItem("infoFibo", true);
  
   this.setState({infoFibo:false})
   
  }

  render() {

    return (
      <div>
        <CustomerChat />
        {this.state.infoFibo &&  <div className="infoFibo">
          <div onClick={this.closeInfoFibo} className="infoFibo__exit">X</div>
          <div className="infoFibo__content">
          </div>
        </div> }
       
        <Navigation path={'d'} />
        <div>

        </div>
        {this.props.children}
        <Footer />
        <div className='privacy'>Wszelkie informacje i opisy są wynikiem indywidualnej i oryginalnej pracy twórczej, stanowiąc utwór w rozumieniu art. 1 ustawy z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych. Całość osobistych i majątkowych praw autorskich do tej dokumentacji przysługuje Smart-Panel s.c. z siedzibą w Karpaczu. Powielanie lub rozpowszechnianie tych danych na jakimkolwiek polu eksploatacji bez pisemnej zgody Smart-Panel s.c. z siedzibą w Karpaczu stanowi naruszenie przysługujących Twórcy majątkowych praw autorskich i spotka się z konsekwencjami natury prawnej.</div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
