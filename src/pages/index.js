
import { Link } from "gatsby"
import React, { Component } from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./index.css"




class IndexPage extends Component {


  handleLinks = (e) => {
   let number = e.target.getAttribute('type');
   let allLinks = document.querySelectorAll('.features__links')
   let allBlocks = document.querySelectorAll('.features__block')
   if (number == null) {
    number = e.target.parentElement.getAttribute('type');
  }
  
  allBlocks.forEach(function (el) {
    el.classList.remove('features__block__active')
  })
  allLinks.forEach(function (el) {
    el.classList.remove('features__links__active')
  })

  let activeLink = document.querySelector(`.features__link${number}`);
  activeLink.classList.add('features__links__active')
  let activeBlock = document.querySelector(`.features${number}`);
  activeBlock.classList.add('features__block__active')

   
  }


  render(){

    return(

  <Layout path={this.props.path}>

    <Hero />

    <div className="features">
      <div onClick={this.handleLinks} type='1' className="features__block features1">
        <p className="block__title gilroy title">Płyty ścienne</p>
        <div className="features__links features__link1">
          <p>Forestia</p>
          <Link to='/Walls2paint'>Walls2paint</Link>
          <Link to='/walls4you'>Walls4you</Link>
          <Link to='/Elitex'>Elitex</Link>
          <Link to='/onestepscienne'>One-step wall</Link>
          <Link to='/3WallPlytyScienne'>3Wall</Link>
          <Link to='/PedzlemMalowane.module'>Malowane Pędzlem</Link>
          <p>Huntonit</p>
          <Link to='/BasicWall'>Basic Wall</Link>
        </div>
      </div>
      <div onClick={this.handleLinks} type='2' className="features__block features2">
        <p className="block__title gilroy title">Płyty sufitowe</p>
        <div className="features__links features__link2">
          <p>Forestia</p>
          <Link to='/onestep'>One-step ceiling</Link>
          <p>Huntonit</p>
          <Link to='/BasicCeiling'>Basic ceiling</Link>
          <Link to='/textureCeiling'>Texture ceiling</Link>
        </div>
      </div>
      <div onClick={this.handleLinks} type='3' className="features__block features3">
        <p className="block__title gilroy title">Płyty konstrukcyjne </p>
        <div className="features__links features__link3">
          <p>Forestia</p>
       
          <p>Huntonit</p>
        
        </div>
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
        <p>
          Oferujemy Państwu produkty skandynawskich firm Forestia AS & Huntonit AS <br />
          opierając się na doświadczeniu liczącym sobie 45 lat oraz ciągłym prężnym rozwoju. <br />
          W czasach, gdzie nowe technologie mają ogromny wpływ na środowisko a tym samym <br />

          na nasze zdrowie i jakość życia stawiamy na produkty najwyższej jakości <br />

          certyfikowane zgodnie z systemem Intertek NS-EN ISO 19001 oraz systemem zarządzania <br />

          środowiskiem zgodnie z Intertek NS-EN ISO 14001. Produkty posiadają również certyfikaty CE i PEFC. <br />
          Ponadto płyty firmy Huntonit produkowane w 100% z naturalnych włókien drzewnych wyróżniają się <br />
          certyfikatem Norweskiego Stowarzyszenia Astmy i Alergii „Norges Astma og Allergiforbund”, <br />
          <br />
          które ma na celu zapewnienie jakości zdrowia na najwyższym poziomie. <br />
          Wybór materiałów marki Forestia & Huntonit gwarantuje najwyższą jakość, <br />

          szybki i prosty montaż, skrócenie czasu prac wykończeniowych oraz przystępną cenę. <br />
          <br />
          Wybierajmy mądrze. <br />

          Dbajmy o siebie i żyjmy w zgodzie z naturą. <br />
          My wybraliśmy bezpieczeństwo i ochronę zdrowia. <br />
        </p>
        <div className="sign"></div>
      </div>
    </div>
  </Layout>
)
  }
}

export default IndexPage
