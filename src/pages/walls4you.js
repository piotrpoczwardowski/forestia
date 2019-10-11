
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./walls4you.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
console.log(styles)

class Walls4you extends Component {

    state = {
        slide: 1
    }


    render() {






        return (
            <Layout>
                <Container>
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
                                    <p className={styles.left__description}>Stworzona dla tych, którzy podążają <br/>
za najnowszym designem. <br/>
Stylowe tapety zarówno mają <br/>
zastosowanie jako ściana funkcyjna, <br/>
jak i do całego pomieszczenia</p>
                                    <button className={styles.left__button}>Sprawdź</button>
                                </div>
                                <div className={styles.top__right}>

                                </div>
                            </div>
                            <div className={styles.section2__bot}>
                                <div className={styles.bot__left}></div>
                                <div className={styles.bot__right}>
                                    <p className={styles.right__head}>Kolekcja CLASSIC</p>
                                    <div className={`${styles.black__line} ${styles.black__lineRight}`}></div>
                                    <p className={styles.right__description}>Kolekcja obejmuje klasyczne <br/>
wykończenia i powierzchnie <br/>
dekoracyjne. Liczne <br/>
kombinacje gwarantują <br/>
ekskluzywne i trwałe rezultaty</p>
                                    <button className={styles.right__button}>Sprawdź</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }
}



export default Walls4you
