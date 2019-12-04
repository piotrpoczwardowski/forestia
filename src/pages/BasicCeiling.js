
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./BasicCeiling.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import threewall from '../pdf1/threewall.pdf'
import HuntonitWrapper from '../components/HuntonitWrapper'

import antikkWhite from '../images/huntonit/basicCeiling/antikkWhite/antikkWhite.png'
import antikkWhite1 from '../images/huntonit/basicCeiling/antikkWhite/white1.jpg'
import antikkWhite2 from '../images/huntonit/basicCeiling/antikkWhite/white2.jpg'


class BasicCeiling extends Component {

    state = {
        modal: false,
        type: 'none',
        exit: true
    }



    render() {

        let panels = [
            {
                img: antikkWhite,
                name: 'Antikk White',
                sizes: ['11x620x1220mm'],
                colorNumber: 'NCS S0502Y',
                
                colors: [
                    {
                        img: antikkWhite1,
                        descriptions: ['1', '1'],
                        
                    },
                    {
                        img: antikkWhite2,
                        descriptions: ['1', '2'],
                        
                    }
                ]
            },
            {
                img: antikkWhite,
                name: 'Antikk Brilliant White',
                sizes: ['11x300x1220mm','11x620x1220mm' ],
                colorNumber: 'NCS S0500N',
                
                colors: [
                    {
                        img: antikkWhite1,
                        descriptions: ['Połączenie płyt ściennych Terracotta', 'z płytami sufitowymi Antikk Brilliant White'],
                        
                    },
                    {
                        img: antikkWhite2,
                        descriptions: ['2', '2'],
                        
                    }
                ]
            }
        ]




        return (
            <Layout>
                <Container>




                    <div className={styles.basicCeiling}>
                        <div className={styles.logo}></div>
                        <div className={styles.head}>
                            <h1>Basic Ceiling</h1>
                            <div className={styles.black__line}></div>
                        </div>
                        <div className={styles.section1}>

                            <div className={styles.section1__text}>

                                <p>Płyty sufitowe Basic Ceiling</p>
                                <ul>
                                    <li>Gładka powierzchnia płyty</li>
                                    <li>Pióro-wpust ze wszystkich czterech stron płyty</li>
                                    <li>Szybki i prosty montaż</li>
                                    <li>Malowane na biało płyty, pokryte są 5 warstwami farby</li>
                                    <li>Estetyczna struktura, która jest niezwykle łatwa
                    <br /> w czyszczeniu i pielęgnacji</li>
                                    <li>Rekomendowane przez Norweskie Stowarzyszenie
                    <br /> ds. Astmy i Alergii</li>
                                </ul>
                            </div>



                            <div className={styles.section1__img}></div>

                        </div>
                        <div className={styles.section2}>
                            <div className={styles.section2__img}></div>
                            <div className={styles.section2__text}>
                                <p>
                                    Pomalowane płyty Basic Ceiling mają ten sam rdzeń
                <br /> z włókna drzewnego jak pozostałe produkty Huntonit.
                <br /> Izolacyjność akustyczna płyt utrudnia przenikanie dźwięku.
                <br /> Produkt jest przystosowany do instalacji lamp sufitowych
                <br /> oraz do systemu typu downlight.
                <br /> Płyta jest odporna na wilgoć i może być instalowana w kuchni,
                <br /> pralni i łazience poza strefą mokrą.
                <br /> Pomieszczenie powinno być dobrze wentylowane.
                <br /> Płyty są również odporne na duże wahania temperatury,
                <br /> dlatego są bardzo dobrą alternatywą do instalacji w miejscach,
                <br /> które nie są ogrzewane przez cały czas.
                <br />
                                </p>
                            </div>
                        </div>
                        <div className={styles.menu__title}>Płyty sufitowe Basic Ceiling występują w wariantach:</div>
<HuntonitWrapper panels={panels}/>
                      
                        <div className={styles.mont}>
                                <a href=""> Instrukcja montażu płyt sufitowych Basic Ceiling </a>
                            </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default BasicCeiling
