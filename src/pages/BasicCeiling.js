
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./BasicCeiling.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import threewall from '../pdf1/threewall.pdf'
import HuntonitWrapper from '../components/HuntonitWrapper'
import pdf from '../pdf1/basicCeiling.pdf'

import antikkWhite from '../images/huntonit/basicCeiling/antikkWhite/antikkWhite.png'
import antikkWhite1 from '../images/huntonit/basicCeiling/antikkWhite/white1.jpg'
import antikkWhite2 from '../images/huntonit/basicCeiling/antikkWhite/white2.jpg'

import antikkBrilliant from '../images/huntonit/basicCeiling/brilliant/brilliant.png'
import antikkBrilliant1 from '../images/huntonit/basicCeiling/brilliant/brilliant1.jpg'
import antikkBrilliant2 from '../images/huntonit/basicCeiling/brilliant/brilliant2.jpg'
import antikkBrilliant3 from '../images/huntonit/basicCeiling/brilliant/brilliant3.jpg'
import antikkBrilliant4 from '../images/huntonit/basicCeiling/brilliant/brilliant4.jpg'
import antikkBrilliant5 from '../images/huntonit/basicCeiling/brilliant/brilliant5.jpg'
import antikkBrilliant6 from '../images/huntonit/basicCeiling/brilliant/brilliant6.jpg'


class BasicCeiling extends Component {

   



    render() {

        let panels = [
            {
                img: antikkWhite,
                name: 'Antikk White',
                sizes: ['11x620x1220mm'],
                colorNumber: 'NCS S0502Y',
                
                colors: [
                    
                    {
                        img: antikkWhite2,
                        descriptions: [' ',' '],
                        
                    }
                ]
            },
            {
                img: antikkBrilliant,
                name: 'Antikk Brilliant White',
                sizes: ['11x300x1220mm','11x620x1220mm' ],
                colorNumber: 'NCS S0500N',
                
                colors: [
                    {
                        img: antikkBrilliant1,
                        descriptions: ['Połączenie płyt ściennych Skygge Sand', 'z płytami sufitowymi Antikk Brilliant White.'],
                        
                    },
                    {
                        img: antikkBrilliant2,
                        descriptions: ['Połączenie płyt ściennych Terracotta', 'z płytami sufitowymi Antikk Brilliant White.'],
                        
                    },
                    {
                        img: antikkBrilliant3,
                        descriptions: ['Połączenie płyt ściennych Forestia Walls2paint', 'z płytami sufitowymi Antikk Brilliant White.'],
                        
                    },
                    {
                        img: antikkBrilliant4,
                        descriptions: ['Połączenie płyt ściennych Forestia Walls4you','40597 Flow plain light grey conrete', 'z płytami sufitowymi Antikk Brilliant White.'],
                        
                    },
                    {
                        img: antikkBrilliant5,
                        descriptions: ['Połączenie płyt ściennych Huntonit','z Mikrofugą Frost', 'z płytami sufitowymi Antikk Brilliant White.'],
                        
                    },
                    {
                        img: antikkBrilliant6,
                        descriptions: ['', ''],
                        
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
                                <a download='Instrukcja montażu płyt sufitowych Basic Ceiling' href={pdf}> Instrukcja montażu płyt sufitowych Basic Ceiling </a>
                            </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default BasicCeiling
