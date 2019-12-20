import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./inspiracje.css"


class Inspirations extends Component {


    handleView = (e) => {
        e.target.classList.add('view')
    }

    render() {

        return (
            <Layout path={this.props.path}>
                <div className="inspirations">

                    {/* <div className="inspirations__topLine">
        </div> */}
                    <div className="inspirations__content">
                        <div className="inspirations__title inspirations__title--mobile">Inspiracje wg <br />
                            Vibeke Hoås</div>
                        <div className="inspirations__line--mobile"></div>

                        <div className="inspirations__left">
                            <div onClick={this.handleView} className="inspiration__block inspiration1"></div>
                            <div className="inspiration__block inspiration2"></div>
                            <div className="inspiration__block inspiration3"></div>
                            <div className="inspiration__block inspiration4"></div>
                            <div className="inspiration__block inspiration5"></div>
                            <div className="inspiration__block inspiration6"></div>
                            <div className="inspiration__block inspiration7"></div>
                            <div className="inspiration__block inspiration8"></div>
                            <div className="inspiration__block inspiration9"></div>
                        </div>
                        <div className="inspirations__right">
                            <div className="inspirations__title">Inspiracje wg<br />
                                Vibeke Hoås</div>
                            <div className="inspirations__description">Odwiedź profil Vibeke gdzie znajdziesz <br />
                                mnóstwo inspiracji do aranżacji wnętrz. <br />
                                Norweski styl i wykorzystanie naszych <br />
                                płyt to niesamowita skarbnica kolorystyki <br />
                                w różnych pomieszczeniach.</div>
                            <div className="inspirations__bottom">
                                <div className="inspirations__line"></div>
                                <a target='__blank' href="https://www.instagram.com/huset_i_brattelia/?fbclid=IwAR0dQCyo-syoj2dGT2QRLtprLfojdNdihS_o17Iihj4uOUER6mjwqG8FRsI"><button className=" inspirations__button">Zobacz  ></button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}
export default Inspirations
