
import React, { Component } from "react"
import { Link } from "gatsby"
import "./walls2paint.css"
import Layout from "../components/layout"
import walls2paint from '../pdf1/walls2paint.pdf'


class Elitex extends Component {

    state = {
        slide: 1
    }
    componentDidMount() {
        var intervalId = setInterval(this.changeSlideRight, 6000);

        this.setState({ intervalId: intervalId });
    }
    componentWillUnmount() {

        clearInterval(this.state.intervalId);
    }

    changeSlideRight = () => {
        let currentSlide = this.state.slide

        let nextSlide
        nextSlide = currentSlide + 1
        if (nextSlide > 6) {
            nextSlide = 1
        }
        this.changeSlide(nextSlide)
    }

    changeSlide = (next) => {
        let allSlides = document.querySelectorAll('.section2__image')
        let nextSlide = document.querySelector(`.section2__image${next}`)
        allSlides.forEach(function (el) {
            el.style.display = 'none'
        })
        nextSlide.style.display = 'block'
        this.setState({ slide: next })

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
                                    <div className="section1__image section1__image--mobile">
                                        <div className="first__image "></div>
                                    </div>
                                </div>
                                <div className="section1__description walls__desc">
                                    <p><div className="black__line section1__line"></div>Płyty ścienne gotowe do malowania. <br />
                                        Nowe ściany w mgnieniu oka. <br />
                                        Walls2Paint to genialny produkt zarówno <br />
                                        do nowej budowy, jak i renowacji. <br />
                                        <br />
                                        1.Zamontuj płyty ścienne <br />
                                        2. Pomaluj na wybrany kolor <br />
                                        (możesz również tapetować z wybraną tapetą) <br />
                                        3. Wykończona ściana <br />
                                        Wskazówka! <br />
                                        Aby uzyskać najlepsze rezultaty,po pierwszej <br />
                                        warstwie farby możesz delikatnie wygładzić <br />
                                        połączenie drobnoziarnistym papierem.</p>
                                </div>

                            </div>
                            <div className="section1__image">

                                <div className="second__image "></div>
                                <div className="first__image "></div>
                            </div>

                        </div>
                        <div className="walls__section2">
                            <div className="section2__images">
                                <div className="section2__image section2__image1">

                                </div>
                                <div className="section2__image section2__image2">

                                </div>
                                <div className="section2__image section2__image3">

                                </div>
                                <div className="section2__image section2__image4">

                                </div>
                                <div className="section2__image section2__image5">

                                </div>
                                <div className="section2__image section2__image6">

                                </div>
                            </div>
                            <div className="section2__text walls__desc">
                                <div className="black__line line__section2"></div>
                                Pomysłowe płyty ścienne dla tych, którzy nie <br />
                                przepadają za gipsowaniem i szlifowaniem. <br />
                                Walls2Paint ma taki sam profil blokujący jak Walls4You. <br />
                                Płyty są łatwe w montażu i mogą być pomalowane <br />
                                na wybrany kolor, jak i tapetowane. <br />
                                Tak więc nie ma potrzeby tynkowania i wykańczania. <br />
                                Oszczędzasz czas, zapewniając jednocześnie <br />
                                lepsze środowisko pracy. <br />
                                Ważne jest, aby płyty były dopasowane do bardzo <br />
                                dobrze wykonanych podtrzymujących ram <br />
                                zainstalowanych do ściany. <br />
                                <br />
                                Płyty ścienne można również wykorzystać podczas prac <br />
                                konserwatorskich i remontu. <br />
                            </div>
                        </div>
                        <div className="walls__section3">
                            <div className="section3__text walls__desc">
                                <ul>

                                    <li>Unikalny profil blokujący</li>
                                    <li>Brak szlifowania-brak <br/> występowania pyłu</li>
                                    <li>Złącza płyt należy połączyć <br/>
                                    jednym pełnym pociągnięciem <br/>
kleju</li>
                                    <li>Płyty ścienne są przykręcane, <br/>

                                    mają dobrą wytrzymałość na <br/> wkręcanie śrub
</li>
                                  <li>  Wymiary: <br/>
                                    Długość: 2,39m, 2,60m, 2,80m, 3m <br/>
                                    Szerokość  60cm <br/>
                                   Grubość: 12mm</li>
                                </ul>
                            </div>
                            <div className="section3__image"></div>
                        </div>
                        <div className="mont__content">
            <a download='Instrukcja montażu walls2paint' href={walls2paint}>Instrukcja montażu walls2paint</a>
            </div>
                        

                    </div>
                   
                </div>
            </Layout>
        )
    }
}



export default Elitex
