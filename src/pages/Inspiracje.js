import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/Hero'
import aboutImage from '../images/about.png'
import "./inspiracje.css"


const Inspirations = (props) => (
    <Layout path={props.path}>
        <div className="inspirations">
        {console.log(props.path)}
            {/* <div className="inspirations__topLine">
        </div> */}
            <div className="inspirations__content">
                <div className="inspirations__title inspirations__title--mobile">Inspiracje wg<br />
                    Vibeke Hoås</div>
                    <div className="inspirations__line--mobile"></div>

                <div className="inspirations__left"></div>
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
                        <button className=" inspirations__button">Zobacz  ></button>
                    </div>
                </div>

            </div>
        </div>
    </Layout>
)

export default Inspirations
