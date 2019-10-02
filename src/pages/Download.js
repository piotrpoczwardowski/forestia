import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./download.css"


class Download extends Component {
    state = {
        active1: false,
        active2: false
    }

    forestiaWrapper = (e) => {
        let button = e.currentTarget
       
       this.setState({active1: !this.state.active1, active2: false})
        
    }

    huntonitWrapper = () => {
        this.setState({active2: !this.state.active2, active1: false})
    }
    render() {

        return (
            <Layout path={this.props.path}>
                <div className="download">
                    <div className="download__title">Do pobrania</div>
                    <div className="donwload__description">W tej sekcji znajdziesz wszystkie dokumenty <br />
                        na temat produktów Naszej firmy.</div>
                    <div className="download__bottom">
                        <div className="download__forestia">
                            <button onClick={this.forestiaWrapper} className={this.state.active1? 'forestia__button active__button' : 'forestia__button'}>Karta produktów FORESTIA</button>
                        <div className={this.state.active1? 'active__list forestia__list' : 'forestia__list'}>
                        <ol>
                            <li><a download='' href="">1. Forestia 22mm Podłoga Profesjonalna Standard i Ekstra</a></li>
                            <li><a download='' href="">2. Forestia EliteX</a></li>
                            <li><a download='' href="">3. Forestia Walls2Paint</a></li>
                            <li><a download='' href="">4. Forestia Walls4you</a></li>
                            <li><a download='' href="">5. Płyty sufitowe One-step ceiling</a></li>
                            <li><a download='' href="">6. Podłoga Forestia Standard i Ekstra
Forestia Podłoga Rowkowana i Forestia Podłoga Projektowa</a></li>
                            <li><a download='' href="">7. Właściwości użytkowe Forestia 12 mm Forestia 3
Ściana Elite - P7, Elitex P7, Ściana i Sufit podwieszany,
eliteX, Ściana z profilem klik</a></li>
                            <li><a download='' href="">8. Właściwości użytkowe Forestia 12 mm
Gotowa ściana i Ściana z gruntowaniem</a></li>
                            <li><a download='' href="">9. Właściwości użytkowe Forestia 12 mm Walls4You,
Walls2Paint, Ściana P4, Panel fazowany, malowany pędzlem</a></li>
                            <li><a download='' href="">10. Właściwości użytkowe Forestia 22 mm Podłoga Profesjonalna
Standard, Podłoga Profesjonalna Ekstra</a></li>
                            <li><a download='' href="">11. Właściwości użytkowe Forestia Bygg Standard</a></li>
                            <li><a download='' href="">12. Właściwości użytkowe Forestia Płyty sufitowe One-step ceiling</a></li>
                            <li><a download='' href="">13. Właściwości użytkowe Forestia Podłoga Standard i Ekstra</a></li>
                        </ol>
                        </div>
                        </div>
                        <div className="download__huntonit">
                        
                            <button onClick={this.huntonitWrapper}  className={this.state.active2? 'huntonit__button active__button' : 'huntonit__button'}>Karta produktów HUNTONIT</button>
                            <div className={this.state.active2? 'active__list--huntonit huntonit__list' : 'huntonit__list'}>
                            <ol>
                                <li><a download='' href="">1. Właściwości użytkowe Huntonit Płyta ścienna malowana
wałkiem/pędzlem, Panele z Mikrofugą i Fazowane</a></li>
                                <li><a download='' href="">2. Właściwości użytkowe Huntonit
Sufit malowany wałkiem/pędzlem</a></li>
                              
                            </ol>
                            
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>
        )
    }
}

export default Download
