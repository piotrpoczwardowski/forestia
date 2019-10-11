
import React, { Component } from "react"
import { Link } from "gatsby"
import "./elitex.css"
import Layout from "../components/layout"


class Elitex extends Component {

    state = {
        slide: 1
    }
    componentDidMount() {
        var intervalId = setInterval(this.changeSlideRight, 3500);

        this.setState({ intervalId: intervalId });
    }
    componentWillUnmount() {

        clearInterval(this.state.intervalId);
    }

    handleArrow = (e) => {
        let currentSlide = this.state.slide
        let direction = e.currentTarget.getAttribute('direction')
        let nextSlide
        if (direction === 'right') {
            nextSlide = currentSlide + 1
            if (nextSlide > 8) {
                nextSlide = 1
            }
        }
        if (direction === 'left') {
            nextSlide = currentSlide - 1
            if (nextSlide < 1) {
                nextSlide = 8
            }
        }

        this.changeSlide(nextSlide)
    }
    changeSlideRight = () => {
        let currentSlide = this.state.slide

        let nextSlide
        nextSlide = currentSlide + 1
        if (nextSlide > 8) {
            nextSlide = 1
        }
        this.changeSlide(nextSlide)
    }

    changeSlide = (next) => {
        let allSlides = document.querySelectorAll('.slider__imgs')
        let nextSlide = document.querySelector(`.slider__img${next}`)
        allSlides.forEach(function (el) {
            el.style.display = 'none'
        })
        nextSlide.style.display = 'block'
        this.setState({ slide: next })

    }

    render() {






        return (
            <Layout>
                <div className='elitex'>
                    <div className="elitex__header">
                        <div className="header__right">
                            <h1 className="new">NOWOŚĆ!</h1>
                            <div className="header__line header__topLine"></div>
                            <div className="header__description">
                                <p>Panele Forestia eliteX</p>
                                <br />
                                <p>Mocne i solidne panele ścienne do <br /> najbardziej wymagających wnętrz</p>
                            </div>
                        </div>
                        <h1 className="elitex__title">eliteX</h1>
                        <div className="header__line header__botLine"></div>
                    </div>
                    <div className="elitex__slider">
                        <div direction='left' onClick={this.handleArrow} className="elitex__arrow elitex__arrowLeft"></div>
                        <div className="slider__images">
                            <div className="slider__imgs slider__img1"></div>
                            <div className="slider__imgs slider__img2"></div>
                            <div className="slider__imgs slider__img3"></div>
                            <div className="slider__imgs slider__img4"></div>
                            <div className="slider__imgs slider__img5"></div>
                            <div className="slider__imgs slider__img6"></div>
                            <div className="slider__imgs slider__img7"></div>
                            <div className="slider__imgs slider__img8"></div>
                        </div>
                        <div direction='right' onClick={this.handleArrow} className="elitex__arrow elitex__arrowRight"></div>
                    </div>
                    <div className="elitex__content">

                        <div className="elitex__description">
                            <p> Forestia eliteX to idealny wybór do garaży, hal przemysłowych, budynków <br />
                                gospodarczych, magazynów, pralni, rzeźni, mleczarni, <br />
                                lokali działalności gastronomicznej, piekarni i innych rodzai pomieszczeń <br />
                                pełniących funkcję działalności gospodarczej. <br />
                                Solidne płyty ścienne oraz sufitowe Forestia eliteX, pokryte są melaminą <br />
                                charakteryzującą się wysoką twardością, odpornością na działanie wody, <br />
                                temperatury oraz światła co gwarantuje najwyższą jakość produktu. <br />
                                Ponadto płyty eliteX zawierają odporny na wilgoć rdzeń (klasa klimatyczna 2) <br />
                                i dlatego dobrze sprawdzają się w pomieszczeniach o wyższej wilgotności. <br />
                                Płyty umożliwiają instalację wysokiej klasy wytrzymałości śrub i wkrętów, <br />
                                a także są odporne na działania mechaniczne. Dzięki takim właściwościom <br />
                                możesz zawiesić swój ulubiony rower i wiele innych obiektów na ścianie. <br />
                                Płyta ścienny nie wymaga dodatkowej obróbki powierzchni, zatem pozostaje <br />
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
                            <p>Płyty ścienne eliteX są dostępne we wszystkich dekorach w wymiarach: <br />
                                12 x 620 x 2390 mm <br />
                                12 x 620 x 2600 mm <br />
                                Płyta sufitowy eliteX występuje w wymiarze: <br />
                                12 x 620 x 1220 mm</p>
                        </div>
                        <div className="elitex__bars">
                            <div className="bar">
                                <div className="bar__img bar1"></div>
                                <div className="bar__text">Listwa pozioma</div>
                            </div>
                            <div className="bar">
                                <div className="bar__img bar2"></div>
                                <div className="bar__text">Listwa narożna zewnętrzna</div>
                            </div>
                            <div className="bar">
                                <div className="bar__img bar3"></div>
                                <div className="bar__text">Listwa pionowa dwuczęściowa</div>
                            </div>
                            <div className="bar">
                                <div className="bar__img bar4"></div>
                                <div className="bar__text">Listwa narożna wewnętrzna dwuczęściowa</div>
                            </div>
                            <div className="bar">
                                <div className="bar__img bar5"></div>
                                <div className="bar__text">Listwa przypodłogowa</div>
                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}



export default Elitex
