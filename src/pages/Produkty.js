import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./produkty.css"


const Products = (props) => (
  <Layout path={props.path}>
    <div className="products">
      <div className="products__left">
        <div className="products__title">Strona w budowie</div>
        <div className="products__description">Zapraszamy do obejrzenia katalogu produktów <br/>
w wersji angielskiej. <br/>
Jeśli mają Państwo jakieś pytania to prosimy o kontakt <br/>
telefoniczny lub mailowy.</div> 
     <a target='__blank' href=" https://www.forestia.no/"> <button className="products__button">Zobacz ofertę produktów FORESTIA ></button></a> <br/> 
     <a target='__blank' href=" https://huntonit.com/"><button className="products__button">Zobacz ofertę produktów HUNTONIT ></button></a>
      </div>
      <div className="products__right"></div>
    </div>

  </Layout>
)

export default Products
