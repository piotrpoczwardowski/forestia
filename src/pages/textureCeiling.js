
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./TextureCeiling.module.css"
import Layout from "../components/layout"
import Container from '../components/container'


class TextureCeiling extends Component {

   



    render() {

        




        return (
            <Layout>
                <Container>




                    <div className={styles.textureCeiling}>
                    <div className={styles.header}>
        <h1>Texture Ceiling</h1>
        <div className={styles.header__bottom}>
            <div className={styles.black__line}></div>
            <div className={styles.logo}></div>
        </div>
    </div>

    <div className={styles.section1}>
        <div className={styles.section1__left}>
            <div className={styles.left__img}></div>
        </div>
        <div className={styles.section1__right}>
            <div className={styles.right__text}>
                <p>Płyty sufitowe Texture Ceiling</p>
                <br/>
                <p>Poznaj produkt, który nada rustykalny charakter
                    <br/> Twojemu wnętrzu !
                    <br/> Płyty ścienne i sufitowe Huntonit wykonane
                    <br/> są z naturalnych włókien drzewnych, co warunkuje
                    <br/> ognioodporność przez dłuższy czas, jak i brak emisji
                    <br/> niebezpiecznych gazów pod wpływem pożaru.
                    <br/>
                </p>

            </div>
        </div>
    </div>
    <div className={styles.section2}>
        <div className={styles.section2__left}>
            <div className={styles.left__text}>
                <p>Jeśli chcesz ekscytującego dachu z dużą ilością życia, sufit sufitowy
                    <br/> Huntonit to naturalny wybór.
                    <br/> W nowych budynkach oraz podczas remontu płyty sufitowe
                    <br/> są montowane w poprzek lub równolegle do stelażu.
                    <br/> Płyta jest odporna na wilgoć i może być instalowana w kuchni,
                    <br/> pralni i łazience poza strefą mokrą.
                    <br/> Pomieszczenie powinno być dobrze wentylowane.
                    <br/> Płyty są również odporne na duże wahania temperatury,
                    <br/> dlatego są bardzo dobrą alternatywą do instalacji w miejscach,
                    <br/> które nie są ogrzewane przez cały czas.
                    <br/> Rekomendowane przez Norweskie Stowarzyszenie ds. Astmy i Alergii
                    <br/>
                </p>
                <div className={styles.left__logo}></div>
            </div>
        </div>
        <div className={styles.section2__right}>
            <div className={styles.right__img}></div>
        </div>
    </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default TextureCeiling
