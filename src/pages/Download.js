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
        active: 2
    }

    handleChange = (e) => {
        let button = e.currentTarget
        console.log(e.currentTarget)
        button.classList.toggle('active__button')
        if(button.classList.contains('forestia__button')){
            this.setState({active: 1})
        }
        if(button.classList.contains('huntonit__button')){
            this.setState({active: 2})
        }
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
                            <button onClick={this.handleChange} className="forestia__button">Karta produktów FORESTIA</button>
                        <div className={this.state.active === 1 ? 'active__list forestia__list' : 'forestia__list'}>forestia</div>
                        </div>
                        <div className="download__huntonit">
                            <button onClick={this.handleChange}  className="huntonit__button">Karta produktów HUNTONIT</button>
                            <div className={this.state.active === 2 ? 'active__list huntonit__list' : 'huntonit__list'}>huntonit</div>
                        </div>
                    </div>

                </div>

            </Layout>
        )
    }
}

export default Download
