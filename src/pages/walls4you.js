
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./walls4you.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import Modal from '../components/walls4youProduct'
import Walls4youProduct from "../components/walls4youProduct";


class Walls4you extends Component {

    state = {
        modal: false,
        type: 'none'
    }


    handleOpenModal = (e) => {
        this.setState({ modal: true, type: e.target.getAttribute('type') })
    }
    handleCloseModal = () => {
        this.setState({ modal: false })
    }
    handleClick = (e) => {
      
        if(e.target.getAttribute('close')){
           this.handleCloseModal()
        }
    }

    render() {






        return (
            <Layout>
                <Container>
                    <div close='true' onClick={this.handleClick} className={this.state.modal ? `${styles.modal__container} ${styles.modal__active}` : `${styles.modal__container}`}>
                        <div className={styles.modal}>
                        <div onClick={this.handleCloseModal} className={styles.exit}>X</div>
                         {this.state.modal && <Walls4youProduct type={this.state.type} />}   
                        </div>

                    </div>

                    <div className={styles.walls4you}>
                        <div className={`${styles.black__line} ${styles.black__lineTop}`}></div>
                        <div className={styles.section1}>
                            <div className={styles.section1__top}>
                                <p>walls<span>4</span>you</p>  <div className={styles.top__logo}>

                                </div>
                            </div>
                            <div className={styles.section1__mid}>
                                <p>Panele ścienne z nałożoną tapetą. <br />
                                    Wybierz kombinację i zaoszczędź <br />
                                    wiele godzin pracy! <br />
                                    Szeroki wybór dekorów.</p>
                            </div>
                            <div className={styles.section1__bot}>
                                <p>W wyniku wieloletniego rozwoju produktu Forestia <br />
                                    mamy przyjemność zaprezentować wiórowe <br />
                                    płyty ścienne ze stylową tapetą najwyższej jakości. <br />
                                    <br />
                                    Dysponujemy szeroką gamą tapet, które <br />
                                    podzieliliśmy na trzy kolekcje:</p>
                            </div>
                        </div>
                        <div className={`${styles.black__line} ${styles.black__lineMid}`}></div>
                        <div className={styles.section2}>
                            <div className={styles.section2__top}>
                                <div className={styles.top__left}>
                                    <p className={styles.left__head}>Kolekcja TREND</p>
                                    <div className={`${styles.black__line} ${styles.black__lineLeft}`}></div>
                                    <p className={styles.left__description}>Stworzona dla tych, którzy podążają <br />
                                        za najnowszym designem. <br />
                                        Stylowe tapety zarówno mają <br />
                                        zastosowanie jako ściana funkcyjna, <br />
                                        jak i do całego pomieszczenia</p>
                                    <button type='TREND' onClick={this.handleOpenModal} className={styles.left__button}>Sprawdź</button>
                                </div>
                                <div className={styles.top__right}>

                                </div>
                            </div>
                            <div className={styles.section2__bot}>
                                <div className={styles.bot__left}></div>
                                <div className={styles.bot__right}>
                                    <p className={styles.right__head}>Kolekcja CLASSIC</p>
                                    <div className={`${styles.black__line} ${styles.black__lineRight}`}></div>
                                    <p className={styles.right__description}>Kolekcja obejmuje klasyczne <br />
                                        wykończenia i powierzchnie <br />
                                        dekoracyjne. Liczne <br />
                                        kombinacje gwarantują <br />
                                        ekskluzywne i trwałe rezultaty</p>
                                    <button type='CLASSIC' onClick={this.handleOpenModal} className={styles.right__button}>Sprawdź</button>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.black__line} ${styles.black__lineBot}`}></div>
                        <div className={styles.section3}>
                            <p className={styles.section3__head}>Kolekcja BASIC</p>
                            <div className={`${styles.black__line} ${styles.section3__line}`}></div>
                            <p className={styles.section3__description}>Kolekcja składa się z klasycznych <br />
                                dekoracyjnych tapet o delikatnej, <br />
                                lekkiej i ponadczasowej strukturze.</p>
                            <button type='BASIC' onClick={this.handleOpenModal} className={styles.section3__button}>Sprawdź</button>
                        </div>
                        <div className={styles.section4}>
                            <div className={styles.section4__black}>
                                <div className={styles.black__head}>Poznaj ich <br />
                                    zalety:</div>
                                <div className={`${styles.black__line} ${styles.section4__line}`}></div>
                                <div className={styles.black__description}>
                                    <ul>

                                        <li>Wiele wzorów tapet</li>
                                        <li>Kombinacje różnych wzorów i kolorów</li>
                                        <li>Łatwy montaż z inteligentnym profilem <br />
                                            zamykającym</li>
                                        <li>Przemyślane i stylowe rozwiązania naroż- <br />
                                            ne / listwy</li>
                                        <li>Do nowej budowy, renowacji i remontu</li>
                                        <li>Bez kleju</li>
                                        <li>Listwy do narożników wewnętrznych / <br />
                                            zewnętrznych <br />
                                            mogą być dostarczane w wybranych de- <br />
                                            korach.</li>
                                        <li>Dostępne wymiary: 12 x 620 x 2390 mm <br />
                                            (dostępny również 12 x 620 x 2600 mm , <br />
                                            przy minimalnym zamówieniu 200 płyt w <br />
                                            tym samym wystroju).</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.section4__white}>
                                <p className={styles.white__description}>Listwy do narożników wewnętrznych/ <br />
                                    zewnętrznych mogą być dostarczane <br />
                                    w wybranych dekorach: <br />
                                    10432 winebox, <br />
                                    40291 verve plain uni, <br />
                                    40592 flow plain light concrete, <br />
                                    14213 plain offwhite, <br />
                                    14238 metallic snow white, <br />
                                    14243 light textile, <br />
                                    14244 grey textile, <br />
                                    14240 driftwood <br />
                                    10462 rustic oak</p>
                            </div>

                        </div>
                        <div className={styles.section5}>
                            <div className={styles.section5__head}>
                                <p>walls<span>4</span>you</p>
                            </div>
                            <div className={`${styles.black__line} ${styles.section5__line}`}></div>
                            <div className={styles.section5__bot}>
                                <button className={styles.section5__button}>Zobacz ofertę produktów ></button>
                                <div className={styles.section5__logo}></div>
                            </div>
                        </div>
                    </div>

                </Container>
            </Layout>
        )
    }
}



export default Walls4you
