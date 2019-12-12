import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./download.css"
import pdf1 from '../pdf/forestia/Forestia1.pdf'
import pdf2 from '../pdf/forestia/Forestia eliteX.pdf'
import pdf3 from '../pdf/forestia/Forestia Walls2Paint.pdf'
import pdf4 from '../pdf/forestia/Forestia Walls4You.pdf'
import pdf5 from '../pdf/forestia/Płyty sufitowe One-step ceiling.pdf'
import pdf6 from '../pdf/forestia/Podłoga Forestia Standard i Ekstra, Forestia Podłoga Rowkowana i Forestia Podłoga Projektowa.pdf'
import pdf7 from '../pdf/forestia/Właściwości użytkowe Forestia 12 mm Forestia 3 Ściana Elite - P7, Elitex P7, Ściana i Sufit podwieszany, eliteX, Ściana z profilem klik.pdf'
import pdf8 from '../pdf/forestia/Właściwości użytkowe Forestia 12 mm Gotowa ściana i Ściana z gruntowaniem.pdf'
import pdf9 from '../pdf/forestia/Właściwości użytkowe Forestia 12 mm Walls4You, Walls2Paint, Ściana P4, Panel fazowany, malowany pędzlem.pdf'
import pdf10 from '../pdf/forestia/Właściwości użytkowe Forestia 22 mm Podłoga Profesjonalna Standard, Podłoga Profesjonalna Ekstra.pdf'
import pdf11 from '../pdf/forestia/Właściwości użytkowe Forestia Bygg Standard.pdf'
import pdf12 from '../pdf/forestia/Właściwości użytkowe Forestia Płyty sufitowe One-step ceiling.pdf'
import pdf13 from '../pdf/forestia/Właściwości użytkowe Forestia Podłoga Standard i Ekstra.pdf'
import pdf14 from '../pdf/huntonit/hun1.pdf'
import pdf15 from '../pdf/huntonit/hun2.pdf'
import pdf16 from '../pdf/forestia/Forestia 3 Wall.pdf'
import pdf17 from '../pdf/forestia/Forestia Ognioodporne płyty ścienne.pdf'
import pdf18 from '../pdf/forestia/Forestia płyty konstrukcyjne podłogowe do renowacji Standard.pdf'


import forcert1 from '../forcert/forcert1.pdf'
import forcert2 from '../forcert/forcert2.pdf'
import forcert3 from '../forcert/forcert3.pdf'
import forcert4 from '../forcert/forcert4.pdf'
import forcert5 from '../forcert/forcert5.pdf'
import forcert6 from '../forcert/forcert6.pdf'
import forcert7 from '../forcert/forcert7.pdf'
import forcert8 from '../forcert/forcert8.pdf'
import forcert9 from '../forcert/forcert9.pdf'
import forcert10 from '../forcert/forcert10.pdf'
import forcert11 from '../forcert/forcert11.pdf'
import forcert12 from '../forcert/forcert12.pdf'

import huncert1 from '../huncert/huncert1.pdf'
import huncert2 from '../huncert/huncert2.pdf'
import huncert3 from '../huncert/huncert3.pdf'
import huncert4 from '../huncert/huncert4.pdf'
import huncert5 from '../huncert/huncert5.pdf'
import huncert6 from '../huncert/huncert6.pdf'
import huncert7 from '../huncert/huncert7.pdf'
import huncert8 from '../huncert/huncert8.pdf'
import huncert9 from '../huncert/huncert9.pdf'
import huncert10 from '../huncert/huncert10.pdf'
import huncert11 from '../huncert/huncert11.pdf'
import huncert12 from '../huncert/huncert12.pdf'




class Download extends Component {
    state = {
        active1: false,
        active2: false,
        active3: false
    }

    openList = (e) => {
       
       
      
      
       
        if( e.target.classList.contains('forestia__button')){
            this.setState({active1: true, active2: false, active3: false, active4:false})
        }
        if( e.target.classList.contains('huntonit__button')){
            this.setState({active1: false, active2: true, active3:false, active4:false})
        }
        if( e.target.classList.contains('forestiaCert__button')){
            this.setState({active1: false, active2: false, active3:true, active4: false})
        }
        if( e.target.classList.contains('huntonitCert__button')){
            this.setState({active1: false, active2: false, active3:false, active4:true})
        }
        if( e.target.classList.contains('active__button')){
           
            this.setState({active1: false, active2: false, active3: false, active4:false})
        }
       
     
    }
    render() {

        return (
            <Layout path={this.props.path}>
                <div className="download">
                    <div className="download__title">Do pobrania</div>
                    <div className="donwload__description">W tej sekcji znajdziesz wszystkie dokumenty <br />
                        na temat produktów Naszej firmy.</div>
                    <div className="download__section">
                    <div className="download__block">
                    <div className="block__content">
                    <button onClick={this.openList} className={this.state.active1 ? 'forestia__button active__button' : 'forestia__button'}>Karty produktów FORESTIA</button>
                    {this.state.active1 && <div className="list forestia__list">
                    <ol>
<li><a download='Forestia 22mm Podłoga Profesjonalna Standard i Ekstra' href={pdf1}>Forestia 22mm Podłoga Profesjonalna Standard i Ekstra</a></li>
<li><a download='Forestia EliteX' href={pdf2}>Forestia EliteX</a></li>
<li><a download='Forestia Walls2Paint' href={pdf3}>Forestia Walls2Paint</a></li>
<li><a download='Forestia Walls4you' href={pdf4}> Forestia Walls4you</a></li>
<li><a download='Płyty sufitowe One-step ceiling' href={pdf5}>Płyty sufitowe One-step ceiling</a></li>
<li><a download='Podłoga Forestia Standard i Ekstra
Forestia Podłoga Rowkowana i Forestia Podłoga Projektowa' href={pdf6}> Podłoga Forestia Standard i Ekstra
Forestia Podłoga Rowkowana i Forestia Podłoga Projektowa</a></li>
<li><a download='Właściwości użytkowe Forestia 12 mm Forestia 3
Ściana Elite - P7, Elitex P7, Ściana i Sufit podwieszany,
eliteX, Ściana z profilem klik' href={pdf7}>Właściwości użytkowe Forestia 12 mm Forestia 3
Ściana Elite - P7, Elitex P7, Ściana i Sufit podwieszany,
eliteX, Ściana z profilem klik</a></li>
<li><a download='Właściwości użytkowe Forestia 12 mm
Gotowa ściana i Ściana z gruntowaniem' href={pdf8}>Właściwości użytkowe Forestia 12 mm
Gotowa ściana i Ściana z gruntowaniem</a></li>
<li><a download='Właściwości użytkowe Forestia 12 mm Walls4You,
Walls2Paint, Ściana P4, Panel fazowany, malowany pędzlem' href={pdf9}>Właściwości użytkowe Forestia 12 mm Walls4You,
Walls2Paint, Ściana P4, Panel fazowany, malowany pędzlem</a></li>
<li><a download='Właściwości użytkowe Forestia 22 mm Podłoga Profesjonalna
Standard, Podłoga Profesjonalna Ekstra' href={pdf10}>Właściwości użytkowe Forestia 22 mm Podłoga Profesjonalna
Standard, Podłoga Profesjonalna Ekstra</a></li>
<li><a download='Właściwości użytkowe Forestia Bygg Standard' href={pdf11}>Właściwości użytkowe Forestia Bygg Standard</a></li>
<li><a download='Właściwości użytkowe Forestia Płyty sufitowe One-step ceiling' href={pdf12}>Właściwości użytkowe Forestia Płyty sufitowe One-step ceiling</a></li>
<li><a download='Właściwości użytkowe Forestia Podłoga Standard i Ekstra' href={pdf13}>Właściwości użytkowe Forestia Podłoga Standard i Ekstra</a></li>
<li><a download='Forestia 3 Wall' href={pdf16}>Forestia 3 Wall</a></li>
<li><a download='Forestia Ognioodporne płyty ścienne' href={pdf17}>Forestia Ognioodporne płyty ścienne</a></li>
<li><a download='Forestia płyty konstrukcyjne podłogowe do renowacji Standard' href={pdf18}>Forestia płyty konstrukcyjne podłogowe do renowacji Standard</a></li>
</ol>
                    </div>}
                    
                    </div>
                    </div>
                    <div className="download__block block2">
                    <div className="block__content">
                    <button onClick={this.openList} className={this.state.active2 ? 'huntonit__button active__button' : 'huntonit__button'}>Karty produktów HUNTONIT</button>
                    {this.state.active2 &&  <div className="list huntonit__list">
                   
                   <ol>
       <li><a download='Właściwości użytkowe Huntonit Płyta ścienna malowana
wałkiem/pędzlem, Panele z Mikrofugą i Fazowane' href={pdf14}>Właściwości użytkowe Huntonit Płyta ścienna malowana
wałkiem/pędzlem, Panele z Mikrofugą i Fazowane</a></li>
       <li><a download='Właściwości użytkowe Huntonit
Sufit malowany wałkiem/pędzlem' href={pdf15}>Właściwości użytkowe Huntonit
Sufit malowany wałkiem/pędzlem</a></li>

   </ol> 
                   </div> }
                   
                    </div>
                    </div>
                    <div className="download__block block3">
                    <div className="block__content">
                    <button onClick={this.openList} className={this.state.active3 ? 'forestiaCert__button active__button' : 'forestiaCert__button'}>Certyfikaty FORESTIA</button>
                    {this.state.active3 &&  <div className="list forestiaCert__list">
                   
                   <ol>
      <li><a href={forcert1} download='PEFC' >PEFC.pdf</a></li>
      <li><a href={forcert2} download='Certyfiakt CE' >Certyfiakt CE.pdf</a></li>
      <li><a href={forcert3} download='Nordic Ecolabel' >Nordic Ecolabel.pdf</a></li>
      <li><a href={forcert4} download='M1 Forestia eliteX' >M1 Forestia eliteX.pdf</a></li>
      <li><a href={forcert5} download='M1 Forestia One-Step' >M1 Forestia One-Step.pdf</a></li>
      <li><a href={forcert6} download='M1 Forestia Wall and flooring'>M1 Forestia Wall and flooring.pdf</a></li>
      <li><a href={forcert7} download='M1 Forestia Walls4You, Walls2Paint' >M1 Forestia Walls4You, Walls2Paint.pdf</a></li>
      <li><a href={forcert8} download='ISO 9001;2015'>ISO 9001;2015.pdf</a></li>
      <li><a href={forcert9} download='ISO 14001;2015'>ISO 14001;2015.pdf</a></li>
      <li><a href={forcert10} download='CARB Composite Wood Products' >CARB Composite Wood Products.pdf</a></li>
      <li><a href={forcert11} download='EPD Environmental Product Declaration - Forestia' >EPD Environmental Product Declaration - Forestia.pdf</a></li>
      <li><a href={forcert12} download='FSC Controlled Wood' >FSC Controlled Wood.pdf</a></li>

   </ol> 
                   </div> }
                   
                    </div>
                    </div>
                    <div className="download__block block4">
                    <div className="block__content">
                    <button onClick={this.openList} className={this.state.active4 ? 'huntonitCert__button active__button' : 'huntonitCert__button'}>Certyfikaty HUNTONIT</button>
                    {this.state.active4 &&  <div className="list huntonitCert__list">
                   
                   <ol>
      <li><a download='M1 Huntonit' href={huncert1}>M1 Huntonit.pdf</a></li>
      <li><a download='PEFC ST 2002;2013' href={huncert2}>PEFC ST 2002;2013.pdf</a></li>
      <li><a download='>Certyfikat Danish Indoor Climate Labelling' href={huncert3}>Certyfikat Danish Indoor Climate Labelling.pdf</a></li>
      <li><a download='Certyfikat Intertek 9001' href={huncert4}>Certyfikat Intertek 9001.pdf</a></li>
      <li><a download='Certyfikat Intertek 50001' href={huncert5}>Certyfikat Intertek 50001.pdf</a></li>
      <li><a download='Certyfikat Intertek 14001' href={huncert6}>Certyfikat Intertek 14001.pdf</a></li>
      <li><a download='Certyfikat SINTEF' href={huncert7}>Certyfikat SINTEF.pdf</a></li>
      <li><a download='Certyfikat SINTEF - Huntonit płyty ognioochronne' href={huncert8}>Certyfikat SINTEF - Huntonit płyty ognioochronne.pdf</a></li>
      <li><a download='Certyfikat SINTEF - Zgodność techniczna' href={huncert9}>Certyfikat SINTEF - Zgodność techniczna.pdf</a></li>
      <li><a download='EPD Environmental Product Declaration - Huntonit' href={huncert10}>EPD Environmental Product Declaration - Huntonit.pdf</a></li>
      <li><a download='Testrapport Antikk - płyty z mikro fugą' href={huncert11}>Testrapport Antikk - płyty z mikro fugą.pdf</a></li>
      <li><a download='Testrapport Skygge - płyty malowane pędzlem' href={huncert12}>Testrapport Skygge - płyty malowane pędzlem.pdf</a></li>

   </ol> 
                   </div> }
                   
                    </div>
                    </div>
                    </div>

                </div>

            </Layout>
        )
    }
}

export default Download
