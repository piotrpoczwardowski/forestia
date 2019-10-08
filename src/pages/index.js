import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./index.css"


const IndexPage = (props) => (
  <Layout path={props.path}>
  
    <Hero />
    
    <div className="features">
    <Link to='/Produkty/'> 
      <div className="features__block features1">
        <p className="block__title title">Płyty ścienne</p>
      </div>
      </Link>
      <Link to='/Produkty/'> 
      <div className="features__block features2">
        <p className="block__title title">Płyty sufitowe</p>
      </div>
      </Link>
      <Link to='/Produkty/'> 
      <div className="features__block features3">
        <p className="block__title title">Płyty podłogowe</p>
      </div>
      </Link>
    </div>

    <div className="about">
      <div className="about__top">
        <div className="top__line">
          <div className=" about__line"></div>
        </div>
        <div className="top__title title">
          Nasza firma
    </div>
      </div>
      <div className="about__bot">
        <div className="bot__image"></div>
        <div className="bot__text">
        <p>
        Oferujemy Państwu produkty skandynawskich firm Forestia AS &amp; Huntonit AS <br/>
opierając się na doświadczeniu liczącym sobie 45 lat oraz ciągłym prężnym rozwoju.<br/>
W czasach, gdzie nowe technologie mają ogromny wpływ na środowisko a tym samym<br/>
na nasze zdrowie i jakość życia stawiamy na produkty najwyższej jakości<br/>
certyfikowane zgodnie z systemem Intertek NS-EN ISO 19001 oraz systemem zarządzania<br/>
środowiskiem zgodnie z Intertek NS-EN ISO 14001. Produkty posiadają również certyfikaty CE i PEFC.<br/>
Ponadto płyty firmy Huntonit produkowane w 100% z naturalnych włókien drzewnych wyróżniają się<br/>
certyfikatem Norweskiego Stowarzyszenia Astmy i Alergii „Norges Astma og Allergiforbund”, <br/>
<br/>
które ma celu zapewnienie jakości zdrowia na najwyższym poziomie.<br/>
Wybór materiałów marki Forestia &amp; Huntonit gwarantuje najwyższą jakość,<br/>
szybki i prosty montaż, skrócenie czasu prac wykończeniowych oraz przystępną cenę.<br/>
<br/>
Wybierajmy mądrze.<br/>
Dbajmy o siebie i żyjmy w zgodzie z naturą.<br/>
My wybraliśmy bezpieczeństwo i ochronę zdrowia.<br/>

Zespół SMART-PANEL</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
