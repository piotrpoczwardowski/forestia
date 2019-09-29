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
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <div className="features">
      <div className="features__block features1">
        <p className="block__title title">Płyty ścienne</p>
      </div>
      <div className="features__block features2">
        <p className="block__title title">Płyty sufitowe</p>
      </div>
      <div className="features__block features3">
        <p className="block__title title">Płyty podłogowe</p>
      </div>
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
          Oferując produkty skandynawskich firm Forestia AS & Huntonit AS <br/>
  opieramy się na doświadczeniu, które liczy sobie 45 lat i stale prężnie <br/>
  się rozwija. <br/>
  Żyjąc w czasach, w których nowe technologie mają ogromny wpływ <br/>
  na środowisko a tym samym na zdrowie i jakość życia stawiamy na<br/>
  produkty najwyższej jakości certyfikowanymi zgodnie systemem<br/>
  Intertek NS-EN ISO 19001 oraz systemem zarządzania środowiskiem<br/>
  zgodnie z Intertek NS-EN ISO 14001. Produkty posiadają również<br/>
  certyfikaty CE i PEFC. Ponadto płyty marki Huntonit z rdzeniem<br/>
  z włókna drzewnego wyróżniają się certyfikatem Norweskiego<br/>
  Stowarzyszenia Astmy i Alergii<br/>
  „Norges Astma- og Allergiforbund”, które ma na celu zapewnienie<br/>
  jakości na najwyższym poziomie.<br/>
  Wybór produktów marki Forestia & Huntonit gwarantuje znaczne skrócenie<br/>
  czasu oczekiwania na realizację zamówienia.<br/><br/>
  My wybraliśmy bezpieczeństwo i ochronę zdrowia, jakość<br/>
  produktu i wykończenia wnętrz a do tego szybki i prosty montaż.<br/>
  Dbajmy o siebie i żyjmy w zgodzie z naturą. Wybierajmy mądrze.<br/>
  Stawiamy na rzetelność, uczciwość oraz ekologię !</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
