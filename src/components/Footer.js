
import React from "react"




import "./footer.css"

const Footer = ({ children }) => {


    return (
        <div className="footer">
        
            <div className="footer__left">
                <div className="left__text">
                <div className="block"></div>
                    <div className="left__title"></div>
                    <div className="left__description">   Siedziba główna: <br/> <br />
                        Kaszubski Inkubator Przedsiębiorczości <br />
                        w Kościerzynie <br />
                        ul.Przemysłowa 3, 83-400, Kościerzyna <br /><br/>
                        telefon: + 48 666-982-260 <br /><br/>
                        mail: biuro@smart-panel.pl</div>
                </div>

            </div>
            <div className="footer__right">

            </div>
        </div>
    )
}



export default Footer
