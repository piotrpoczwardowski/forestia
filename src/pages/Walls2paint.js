
import React, { Component } from "react"
import { Link } from "gatsby"
import "./walls2paint.css"
import Layout from "../components/layout"


class Elitex extends Component {

    state = {
        slide: 1
    }


    render() {






        return (
            <Layout>
                <div className='walls2paint'>
                    <div className="walls__content">
                        <div className="walls__section1">
                            <div className="section1__text">
                                <div className="section1__header">
                                    <p>walls<span className='bigNumber'>2</span>paint</p>
                                    <div className="section1__logo">
                                    </div>
                                    <div className="section1__image section1__image--mobile"></div>
                                </div>
                                <div className="section1__description walls__desc">
                                    <p><div className="black__line section1__line"></div>Panele ścienne gotowe do malowania. <br />
                                        Nowe ściany w mgnieniu oka. <br />
                                        Walls2Paint to genialny produkt zarówno <br />
                                        do nowej budowy, jak i renowacji. <br />
                                        <br />
                                        1.Zamontuj panele ścienne <br />
                                        2. Pomaluj na wybrany kolor <br />
                                        (możesz również tapetować z wybraną tapetą) <br />
                                        3. Wykończona ściana <br />
                                        Wskazówka! <br />
                                        Aby uzyskać najlepsze rezultaty,po pierwszej <br />
                                        warstwie farby możesz delikatnie wygładzić <br />
                                        połączenie drobnoziarnistym papierem.</p>
                                </div>

                            </div>
                            <div className="section1__image"></div>
                        </div>
                        <div className="walls__section2">
                            <div className="section2__images">
                            <div className="section2__image1">
                            
                            </div>
                            </div>
                            <div className="section2__text walls__desc">
                                <div className="black__line line__section2"></div>
                                Pomysłowe panele ścienne dla tych, którzy nie <br />
                                przepadają za szlifowaniem i polerowaniem. <br />
                                Walls2Paint ma taki sam profil blokujący jak Walls4You. <br />
                                Panele są łatwe w montażu i mogą być pomalowane <br />
                                na wybrany kolor, jak i tapetowane. <br />
                                Tak więc nie ma potrzeby tynkowania i wykańczania. <br />
                                Oszczędzasz czas, zapewniając jednocześnie <br />
                                lepsze środowisko pracy. <br />
                                Ważne jest, aby panele były dopasowane do bardzo <br />
                                dobrze wykonanych podtrzymujących ram <br />
                                zainstalowanych do ściany. <br />
                                <br />
                                Panele ścienne można również wykorzystać podczas prac <br />
                                konserwatorskich i remontu. <br />
                            </div>
                        </div>
                        <div className="walls__section3">
                            <div className="section3__text walls__desc">
                                <ul>

                                    <li>Unikalny profil blokujący</li>
                                    <li>Brak szlifowania-brak występowa-
nia pyłu</li>
                                    <li>Złącza płyt należy połączyć
                                    jednym pełnym pociągnięciem
kleju</li>
                                    <li>Płyty ścienne są przykręcane,

                                    mają dobrą wytrzymałość na wkrę-
                                    canie śrub

                                    Wymiary:
                                    Płyty występują w długościach 2,39
                                    m, 2,60 m, 2,80 m i 3 m.
                                    Szerokość wynosi standardowo 60
                                    cm,
Grubość wynosi 12 mm.</li>
                                </ul>
                            </div>
                            <div className="section3__image"></div>
                        </div>
                        <div className="walls__footer">
                            <div className="footer__top">
                                <div className="footer__title">walls<span className='footer__number'>2</span>paint</div>
                                <div className="footer__subtitle">dla marki huntonit</div>
                            </div>
                            <div className="black__line line__footer"></div>
                            <div className="footer__bottom">
                                <div className="footerWalls__left">
                                   
                                    <button className="footer__button">Zobacz ofertę produktów ></button>
                                </div>
                                <div className="footerWalls__right"></div>

                            </div>
                        </div>

                    </div>

                </div>
            </Layout>
        )
    }
}



export default Elitex
