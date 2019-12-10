
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./TextureCeiling.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import pdf from '../pdf1/huntonitbasictexture.pdf'
import HuntonitWrapper from '../components/HuntonitWrapper'

import classicWhite from '../images/huntonit/textureCeiling/classiquewhite.jpg'
import plankettWhite from '../images/huntonit/textureCeiling/plankettwhite.jpg'
import symfonistained from '../images/huntonit/textureCeiling/symfonistained.jpg'
import symfoniwhite from '../images/huntonit/textureCeiling/symfoniwhite.jpg'

import plankettWhite1 from '../images/huntonit/textureCeiling/plankettwhite1.jpg'
import plankettWhite2 from '../images/huntonit/textureCeiling/plankettwhite2.jpg'
import plankettWhite3 from '../images/huntonit/textureCeiling/plankettwhite3.jpg'

import symfoniwhite1 from '../images/huntonit/textureCeiling/symfoniwhite1.jpg'
import symfoniwhite2 from '../images/huntonit/textureCeiling/symfoniwhite2.jpg'
import symfoniwhite3 from '../images/huntonit/textureCeiling/symfoniwhite3.jpg'
import symfoniwhite4 from '../images/huntonit/textureCeiling/symfoniwhite4.jpg'

import classicWhite1 from '../images/huntonit/textureCeiling/classiquewhite1.jpg'
import classicWhite2 from '../images/huntonit/textureCeiling/classiquewhite2.jpg'
import classicWhite3 from '../images/huntonit/textureCeiling/classiquewhite3.jpg'
import classicWhite4 from '../images/huntonit/textureCeiling/classiquewhite4.jpg'
import classicWhite5 from '../images/huntonit/textureCeiling/classiquewhite5.jpg'

import symfonistained1 from '../images/huntonit/textureCeiling/symfonistained1.jpg'


class TextureCeiling extends Component {





    render() {
        
        let panels = [
            {
                img: plankettWhite,
                name: 'Plankett White',
                sizes: ['11x300x1220mm', '11x300x1820mm'],
                colorNumber: 'NCS S0502Y',

                colors: [
                    {
                        img: plankettWhite1,
                        descriptions: [' ', ' '],

                    },
                    {
                        img: plankettWhite2,
                        descriptions: [' ', ' '],

                    }
                    ,
                    {
                        img: plankettWhite3,
                        descriptions: ['Połączenie płyt sufitowych', 'Texture Plankett White', 'z płytami ściennymi Fas stuktura', '6 panelowa Caffelatte.'],

                    }
                ]
            },

            {
                img: classicWhite,
                name: 'Classique White',
                sizes: ['11x300x1220mm', '11x300x1820mm', '11x620x1220mm'],
                colorNumber: 'NCS S0502Y',

                colors: [
                    {
                        img: classicWhite1,
                        descriptions: [''],

                    },
                    {
                        img: classicWhite2,
                        descriptions: [''],

                    },
                    {
                        img: classicWhite3,
                        descriptions: [''],

                    },
                    {
                        img: classicWhite4,
                        descriptions: [''],

                    },
                    {
                        img: classicWhite5,
                        descriptions: [''],

                    }
                ]
            },
            {
                img: symfonistained,
                name: 'Symfoni Stained Vintage wood',
                sizes: ['11x300x1220mm', '11x300x1820mm'],
                colorNumber: 'NCS S0502Y',

                colors: [
                    {
                        img: symfonistained1,
                        descriptions: [''],

                    }
                ]
            },
            {
                img: symfoniwhite,
                name: 'Symfoni White',
                sizes: ['11x300x1220mm', '11x300x1820mm'],
                colorNumber: 'NCS S0502Y',

                colors: [
                    {
                        img: symfoniwhite1,
                        descriptions: [''],

                    },
                    {
                        img: symfoniwhite2,
                        descriptions: [''],

                    },
                    {
                        img: symfoniwhite3,
                        descriptions: [''],

                    },
                    {
                        img: symfoniwhite4,
                        descriptions: [''],

                    }
                ]
            },
        ]
        


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
                                    <br />
                                    <p>Poznaj produkt, który nada rustykalny charakter
                    <br /> Twojemu wnętrzu !
                    <br /> Płyty ścienne i sufitowe Huntonit wykonane
                    <br /> są z naturalnych włókien drzewnych, co warunkuje
                    <br /> ognioodporność przez dłuższy czas, jak i brak emisji
                    <br /> niebezpiecznych gazów pod wpływem pożaru.
                    <br />
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className={styles.section2}>
                            <div className={styles.section2__left}>
                                <div className={styles.left__text}>
                                    <p>Jeśli chcesz ekscytującego dachu z dużą ilością życia, sufit sufitowy
                    <br /> Huntonit to naturalny wybór.
                    <br /> W nowych budynkach oraz podczas remontu płyty sufitowe
                    <br /> są montowane w poprzek lub równolegle do stelażu.
                    <br /> Płyta jest odporna na wilgoć i może być instalowana w kuchni,
                    <br /> pralni i łazience poza strefą mokrą.
                    <br /> Pomieszczenie powinno być dobrze wentylowane.
                    <br /> Płyty są również odporne na duże wahania temperatury,
                    <br /> dlatego są bardzo dobrą alternatywą do instalacji w miejscach,
                    <br /> które nie są ogrzewane przez cały czas.
                    <br /> Rekomendowane przez Norweskie Stowarzyszenie ds. Astmy i Alergii
                    <br />
                                    </p>
                                    <div className={styles.left__logo}></div>
                                </div>
                            </div>
                            <div className={styles.section2__right}>
                                <div className={styles.right__img}></div>
                            </div>
                        </div>
                        <div className={styles.wrapper__title}>Płyty sufitowe Texture Ceiling występują w wariantach:</div>
                        <HuntonitWrapper page={this.props.path} panels={panels} />
                        <div className={styles.mont}>
                            <a download='Instrukcja montażu płyt sufitowych Texture Ceiling' href={pdf}>
                                Instrukcja montażu płyt sufitowych <br />
                                Texture Ceiling
                        </a>
                        </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default TextureCeiling
