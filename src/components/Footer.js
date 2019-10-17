
import React from "react"




import "./footer.css"

const Footer = ({ children }) => {


    return (
        <div className="footer">
        
            <div className="footer__left">
                <div className="left__text">
               
                    <div className="left__title"></div>
                    <div className="left__description">   Siedziba biura: <br/> <br />
                        Kaszubski Inkubator Przedsiębiorczości <br />
                        w Kościerzynie <br />
                        ul Przemysłowa 3,  83-400  Kościerzyna <br /><br/>
                        telefon: + 48 666 982 260 <br /><br/>
                        e-mail: biuro@smart-panel.pl</div>
                </div>

            </div>
            <div className="footer__right">
    <iframe style={{width: '100%', height:'100%'}} src='https://maps.google.com/maps?q=ul.Przemys%C5%82owa%203%2C%2083-400%2C%20Ko%C5%9Bcierzyna%20&t=&z=15&ie=UTF8&iwloc=&output=embed' frameborder="0"></iframe>
            </div>
        </div>
    )
}



export default Footer
