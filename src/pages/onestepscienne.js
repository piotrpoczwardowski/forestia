
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./onestepscienne.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import onestepScienne from '../pdf1/onestepScienne.pdf'


class Walls4you extends Component {

    state = {
        modal: false,
        type: 'none',
        exit: true
    }



    render() {






        return (
            <Layout>
                <Container>


                    <div className={styles.onestep}>
                        <div className={styles.onestep__header}>
                            <h1>Płyty ścienne One-Step Wall</h1>
                            <div className={styles.header__logo}>

                            </div>
                        </div>
                        <div className={styles.onestep__section1}>
                            <div className={styles.section1__img}></div>
                            <div className={styles.section1__text}>
                                <div className={`${styles.black__line} ${styles.line__s1}`}></div>
                                <br />
                                Gotowe płyty ścienne ! <br />
                                <br />
                                Forestia One-Step Wall to płyta <br />
                                z pióro-wpustem i v-fugą pokryta folią. <br />
                                Płyty mogą być stosowane <br />
                                jako materiał wykończeniowy we wszystkich <br />
                                budynkach, w których istnieją wymagania <br />
                                dotyczące powierzchni o klasie ogniowej D-s2,d0. <br />
                                Ścianę Forestia One-Step można zamontować <br />
                                na stelażu drewnianym i stalowym. <br />
                                Płyty są wstępnie obrobione po jednej stronie. <br />
                                W niesprzyjających warunkach klimatycznych <br />
                                może to prowadzić do pewnej krzywizny płyt. <br />
                                Aby temu zapobiec, należy zainstalować <br />
                                wzmocnienia o średnicy c/c 80 cm. <br />
                                Jeśli ciężkie przedmioty np. szafki kuchenne <br />
                                mają być przymocowane do ściany, należy <br />
                                zainstalować dodatkowe wzmocnienia w stelażu. <br />
                            </div>
                        </div>
                        <div className={styles.onestep__section2}>
                            <div className={styles.section2__left}>
                                <div className={styles.left__top}>
                                    <div className={`${styles.black__line} ${styles.line__s2}`}></div>
                                    <p>Poznaj zalety płyt ściennych Forestia One-Step Wall:</p>
                                    <ul>
                                        <li>Łatwy montaż</li>
                                        <li>Łatwe w utrzymaniu czystości</li>
                                        <li>Możliwość pomalowania</li>
                                        <li>Zarówno dla nowych konstrukcji, jak i remontów</li>
                                        <li>Wytrzymała powierzchnia</li>
                                    </ul>
                                </div>
                                <div className={styles.left__bot}>
                                    <div className={`${styles.s2__img} ${styles.img2}`}></div>
                                    <p>Wymiary płyt:</p>
                                    <ul>
                                        <li>Szerokość: 60cm</li>
                                        <li>Wysokość: Od 2390 mm do 4200 mm</li>
                                    </ul>
                                    <div className={`${styles.s2__img} ${styles.img3}`}></div>
                                </div>
                            </div>
                            <div className={styles.section2__right}>
                                <div className={`${styles.s2__img} ${styles.img4}`}></div>
                                <p>Obszary zastosowania: <br />
                                    <br />
                                    Suche obszary, można również <br />
                                    stosować w dobrze wentylowanych <br />
                                    pomieszczeniach gospodarczych, <br />
                                    pralni i łazience (klasa klimatyczna 1). </p>
                                <div className={`${styles.s2__img} ${styles.img5}`}></div>
                                <p>Ściana Forestia One-Step jest dostępna <br />
                                    w 18 różnych dekorach.</p>
                            </div>
                        </div>
                        <div className={styles.section3__panels}>
                            <div className={styles.panels1}>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img1}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        45TF White rustic
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img2}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        40TF White silk
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img3}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        21TF Sirius
                        </div>
                                </div>
                            </div>
                            <div className={styles.panels1}>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img4}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        14TFL White inspiration
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img5}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        12TF White linnen
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img6}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        02TF White stucco
                        </div>
                                </div>
                            </div>
                            <div className={styles.panels1}>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img7}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        07F Antique white hessian
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img8}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        08F White Hessain
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img9}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        010 PVC White Hessain (PVC)
                        </div>
                                </div>
                            </div>
                            <div className={styles.panels1}>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img10}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        030PVC Grey Hessain (PVC)
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img11}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        50F Bohemian Beige
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img12}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        53F Melinga Silver
                        </div>
                                </div>
                            </div>
                            <div className={styles.panels1}>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img13}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        54F Melinga Crystal White
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img14}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        55F Beige Linnen
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img15}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        060 PVC White Brickwall (PVC)
                        </div>
                                </div>
                            </div>
                            <div className={styles.panels1}>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img16}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        305 Glazed Ash
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img17}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        14243 Light Textile
                        </div>
                                </div>
                                <div className={styles.panel}>
                                    <div className={`${styles.panel__img} ${styles.panel__img18}`}>

                                    </div>
                                    <div className={styles.panel__text}>
                                        14244 Grey Textile
                        </div>
                                </div>
                            </div>


                        </div>
                        <div className="mont__content">
                            <a download='Instrukcja montażu one-step płyty ścienne' href={onestepScienne}>Instrukcja montażu One-step płyty ścienne</a>
                        </div>
                      

                    </div>

                </Container>
            </Layout>
        )
    }
}



export default Walls4you
