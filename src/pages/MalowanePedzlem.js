
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./PedzlemMalowane.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import pdf from '../pdf1/malowanepedzlem.pdf'



class PedzlemMalowane extends Component {

    state = {
        slide: 1
    }
    componentDidMount() {
        var intervalId = setInterval(this.changeSlideRight, 5000);

        this.setState({ intervalId: intervalId });
    }
    componentWillUnmount() {

        clearInterval(this.state.intervalId);
    }

    
    changeSlideRight = () => {
        let currentSlide = this.state.slide

        let nextSlide
        nextSlide = currentSlide + 1
        if (nextSlide > 4) {
            nextSlide = 1
        }
        this.changeSlide(nextSlide)
    }

    changeSlide = (next) => {
        let allSlides = document.querySelectorAll('.slide')
        let nextSlide = document.querySelector(`.slide${next}`)
        allSlides.forEach(function (el) {
            el.style.display = 'none'
        })
        nextSlide.style.display = 'block'
        this.setState({ slide: next })

    }



    render() {






        return (
            <Layout>
                <Container>

            


                    <div className={styles.pedzlemMalowalne}>

                        <div className={styles.header}>

                            <h1>Płyty ścienne <br />
                                pomalowane pędzlem</h1>
                            <div className={styles.header__logo}></div>
                        </div>
                        <div className={styles.section1}>
                            <div className={styles.section1__left}>
                                <div className={styles.black__line}></div>
                                <p className={styles.black__text}>Gotowe pomalowane <br />
                                    płyty ścienne ! <br />
                                    <br />
                                    Płyty z białą powierzchnią <br />
                                    pomalowaną pędzlem mają <br />
                                    grubość 12 mm z pióro-wpustem <br />
                                    na długich bokach. <br />
                                    <br />
                                    Produkt charakteryzuje się trwałą, <br />
                                    zmywalną strukturą. <br />
                                    Dzięki możliwości prostego <br />
                                    a zarazem szybkiego montażu <br />
                                    zaoszczędzisz czas <br />
                                    i zagwarantujesz sobie <br />
                                    komfortowe środowisko pracy. <br />
                                    Płyty można zamontować <br />
                                    na stelarzu lub bezpośrednio <br />
                                    na istniejącej ścianie. <br />
                                    Nadaje się zarówno do <br />
                                    nowej budowy, jak i renowacji <br />
                                    wnętrza.</p>
                            </div>
                            <div className={styles.section1__right}>
                                <div className={styles.right__border}></div>
                                <div className={styles.right__slider}>
                                    <div className={`${styles.slide} ${styles.slide1} slide1 slide`}></div>
                                    <div className={`${styles.slide} ${styles.slide2} slide2 slide`}></div>
                                    <div className={`${styles.slide} ${styles.slide3} slide3 slide`}></div>
                                    <div className={`${styles.slide} ${styles.slide4} slide4 slide`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.section2}>
                            <div className={styles.section2__left}></div>
                            <div className={styles.section2__right}>
                                <div className={styles.right__image1}>

                                </div>
                                 <div className={styles.right__image2}>

                                </div>
                            </div>

                        </div>
                        <div className={styles.section3}>
                            <div className={styles.section3__text}>
                                <a download="Instrukcja montażu płyt ściennych malowanych pędzlem" href={pdf}>Instrukcja montażu płyt ściennych <br />
                                    malowanych pędzlem</a>
                            </div>

                        </div>
                      
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default PedzlemMalowane
