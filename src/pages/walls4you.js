
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./walls4you.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import Modal from '../components/walls4youProduct'
import Walls4youProduct from "../components/walls4youProduct";
import walls4you from '../pdf1/walls4you.pdf'


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

        if (e.target.getAttribute('close')) {
            this.handleCloseModal()
        }
    }

    render() {






        return (
            <Layout>
                <Container>
                    <div close='true' onClick={this.handleClick} className={this.state.modal ? `${styles.modal__container} ${styles.modal__active}` : `${styles.modal__container}`}>
                        <div className={styles.modal}>
                            <div onClick={this.handleCloseModal} className={styles.exit}>Wyjście</div>
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
                                    Dysponujemy szeroką gamą tapet, <br />
                                    które podzieliliśmy na trzy kolekcje:</p>
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
                                        Stylowe tapety mają
                                        zastosowanie <br /> jako ściana funkcyjna,
                                        jak i całego <br /> pomieszczenia</p>
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
                                        dekoracyjne. <br />
                                       Liczne kombinacje <br/> gwarantują
                                        ekskluzywne <br/> i trwałe rezultaty</p>
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
                                        <li>Przemyślane i stylowe rozwiązania <br /> narożne/listwy</li>
                                        <li>Do nowej budowy, renowacji i remontu</li>
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
                                <div className={styles.white__description}>Listwy do narożników  <br /> 
                                wewnętrznych/zewnętrznych mogą  <br /> być  <br /> dostarczane
                                    w dekorach: <br />
                                    <ul>
                                        <li>  10432 winebox  </li> <br />
                                        <li>  40291 verve plain uni  </li><br />
                                        <li>  40592 flow plain light concrete </li> <br />
                                        <li>  14213 plain offwhit  </li> <br />
                                        <li>  14238 metallic snow white  </li> <br />
                                        <li>  14243 light textile  </li> <br />
                                        <li>  14244 grey textile  </li> <br />
                                        <li>  14240 driftwood  </li> <br />
                                        <li>  10462 rustic oak  </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div className="mont__content">
            <a download='Instrukcja montażu walls4you' href={walls4you}>Instrukcja montażu walls4you</a>
            </div>
                        <div className={styles.section5}>
                            <div className={styles.section5__head}>
                                <p>walls<span>4</span>you</p>
                            </div>
                            <div className={`${styles.black__line} ${styles.section5__line}`}></div>
                            <div className={styles.section5__bot}>
                               <Link to='/Produkty/'> <button className={styles.section5__button}>Zobacz ofertę produktów ></button></Link>
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
