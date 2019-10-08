
import React, { Component } from "react"
import { Link } from "gatsby"
import "./elitex.css"
import Layout from "../components/layout"

class Elitex extends Component {

    state = {
        selector: 1
    }
    // componentDidMount() {
    //     // var intervalId = setInterval(this.handleArrowRight, 6500);

    //     // this.setState({ intervalId: intervalId });
    // }
    // componentWillUnmount() {

    //     clearInterval(this.state.intervalId);
    // }



    render() {






        return (
            <Layout>
                <div className='elitex'>

                    <div className="elitex__content">
                        <div className="elitex__header">
                            <h1 className="new">NOWOŚĆ!</h1>
                            <div className="header__line header__topLine"></div>
                            <p>Panele Forestia eliteX</p>
                            <br />
                            <p>Mocne i solidne panele ścienne do <br /> najbardziej wymagających wnętrz</p>
                     <h1 className="elitex__title">eliteX</h1>
                        </div>
                        <div className="elitex__description">
                            <p> Forestia eliteX to idealny wybór do garaży, hal przemysłowych, budynków <br />
                                gospodarczych, magazynów, pralni, rzeźni, mleczarni, <br />
                                lokali działalności gastronomicznej, piekarni i innych rodzai pomieszczeń <br />
                                pełniących funkcję działalności gospodarczej. <br />
                                Solidne panele ścienne oraz sufitowe Forestia eliteX, pokryte są melaminą <br />
                                charakteryzującą się wysoką twardością, odpornością na działanie wody, <br />
                                temperatury oraz światła co gwarantuje najwyższą jakość produktu. <br />
                                Ponadto panele eliteX zawierają odporny na wilgoć rdzeń (klasa klimatyczna 2) <br />
                                i dlatego dobrze sprawdzają się w pomieszczeniach o wyższej wilgotności. <br />
                                Płyty umożliwiają instalację wysokiej klasy wytrzymałości śrub i wkrętów, <br />
                                a także są odporne na działania mechaniczne. Dzięki takim właściwościom <br />
                                możesz zawiesić swój ulubiony rower i wiele innych obiektów na ścianie. <br />
                                Panel ścienny nie wymaga dodatkowej obróbki powierzchni, zatem pozostaje <br />
                                wybrać dekor spośród czterech nowoczesnych dekoracji:</p>
                        </div>

                        <div className="elitex__panels">
                            <div className="panel">
                                <div className="panel__img p1"></div>
                                <div className="panel__text">Grey slate</div>
                            </div>
                            <div className="panel">
                                <div className="panel__img p2" ></div>
                                <div className="panel__text">Venezia Sand</div>
                            </div>
                            <div className="panel">
                                <div className="panel__img p3"></div>
                                <div className="panel__text">White</div>
                            </div>
                            <div className="panel">
                                <div className="panel__img p4"></div>
                                <div className="panel__text">Grey sand</div>
                            </div>

                        </div>

                        <div className="panels__description">
                            <p>Panele ścienne eliteX są dostępne we wszystkich dekorach w wymiarach: <br />
                                12 x 620 x 2390 mm <br />
                                12 x 620 x 2600 mm <br />
                                Panel sufitowy eliteX występuje w wymiarze: <br />
                                12 x 620 x 1220 mm</p>
                        </div>
                        <div className="elitex__bars">
                            <div className="bar">
                                <div className="bar__img"></div>
                                <div className="bar__text"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}



export default Elitex
