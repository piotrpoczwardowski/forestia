import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./wspolpraca.css"


const Coop = (props) => (
    <Layout path={props.path}>
        <div className="coop">
            <div className="coop__head">
                <div className="coop__title">Współpraca</div>
                <div className="coop__line--mobile coop__line--top"></div>
                <div className="coop__description">Współpracujemy zarówno z dużymi jak i małymi firmami<br /> Zadzwoń, lub napisz do nas, aby dowiedzieć sę więcej</div>
            </div>
            <div className="coop__image">
                <div className="coop__contact">
                    <div className="contact__number"> <div className="coop__number icon"></div> +48 666-982-260
</div>
                    <div className="contact__email"><div className="coop__email icon"></div> biuro@smart-panel.pl</div>
                </div>
            </div>
            <div className="coop__contact coop__contact--mobile">
                <div className="contact__number">
                    <div className="coop__number icon">
                    </div> +48 666-982-260</div>
                    <div className="coop__line--mobile coop__line--bottom"></div>
                <div className="contact__email">
                    <div className="coop__email icon">
                    </div> biuro@smart-panel.pl</div>
            </div>
        </div>

    </Layout>
)

export default Coop
