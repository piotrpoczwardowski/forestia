
import React, { Component } from "react"

import Layout from "../components/layout"
import Container from '../components/container'
import styles from "./textureWall.module.css"
import pdf from '../pdf1/textureWall.pdf'
import TextureWallWrapper from '../components/TextureWallWrapper'

import symfoni1 from '../images/textureWall/symfoni1/symfoni1.jpg'
import symfoniWhiteView from '../images/textureWall/symfoni1/white.jpg'


import symfoniMist from '../images/textureWall/symfoni1/symfoniMist.jpg'
import symfoniMistView from '../images/textureWall/symfoni1/mist.jpg'


import symfoniFrappe from '../images/textureWall/symfoni2/symfoniFrappe.jpg'
import symfoniFrappeView from '../images/textureWall/symfoni2/frappe.jpg'

import symfoni2 from '../images/textureWall/symfoni2/symfoni2.jpg'
import symfoniCappucinoView from '../images/textureWall/symfoni2/cappucino.jpg'




import fuge from '../images/textureWall/fuge.png'


class TextureWall extends Component {

    state = {
        panel: {
            title: 'Symfoni',
            img: symfoni1,
            fuge: fuge,
            description: 'Malowana Struktura drewna',
            sizes: '22x620 od 2390mm',
            colors: [
                {
                    img: symfoni1,
                    title: 'Symfoni white',
                    code: 'NCS 0502 Y',
                    view: symfoniWhiteView
                },
                {
                    img: symfoniMist,
                    title: 'Symfoni Mist',
                    code: 'NCS 3000 N',
                    view: symfoniMistView
                }
            ]
        },
    }

    componentWillMount() {

    }


    changePanel = (panel) => {
        this.setState({ panel })
    }

    render() {

        let panels = [
            {
                title: 'Symfoni',
                img: symfoni1,
                fuge: fuge,
                description: 'Malowana Struktura drewna',
                sizes: '22x620 od 2390mm',
                colors: [
                    {
                        img: symfoni1,
                        title: 'Symfoni white',
                        title2: 'Symfoni white',
                        code: 'NCS 0502 Y',
                        view: symfoniWhiteView
                    },
                    {
                        img: symfoniMist,
                        title: 'Symfoni Mist',
                        title2: 'Symfoni Mist',
                        code: 'NCS 3000 N',
                        view: symfoniMistView
                    }
                ]
            },
            {
                title: 'Symfoni',
                img: symfoni2,
                fuge: fuge,
                description: 'Struktura drewna',
                sizes: '22x620 od 2390mm',
                colors: [
                    {
                        img: symfoniFrappe,
                        title: 'Symfoni Stained',
                        title2: 'Symfoni Frappe',
                        view: symfoniFrappeView,
                        code: 'Frappe'
                    },
                    {
                        img: symfoni2,
                        title: 'Symfoni Stained',
                        title2: 'Symfoni Cappucino',
                        view: symfoniCappucinoView,

                        code: 'Cappucino'
                    }
                ]
            }
        ]



        return (
            <Container>
                <Layout>
                    <div className={styles.textureWall}>
                        <div className={styles.header}>
                            <h1 className={styles.title}>Texture Wall </h1>
                            <div className={styles.logo}> </div>
                        </div>
                        <div className={styles.section1}>
                            <div className={styles.section1__left}>
                                <div className={styles.black__line}> </div>
                                <div className={styles.section1__text}>
                                    Płyty ścienne o unikalnej fakturze <br />
                                    Z pióro-wpustem dla łatwego montażu <br />
                                    Rekomendowane przez <br />
                                    Norweskie Stowarzyszenie ds. Astmy i Alergii <br />
                                    W zestawie 2 szt. płyt - łatwe do przenoszenia <br />
                                    Opatentowane malowanie powierzchni <br />
                                </div>
                            </div>
                            <div className={styles.section1__right}>
                                <div className={styles.section1__img}>

                                </div>
                            </div>

                        </div>
                        <div className={styles.img2}> </div>
                        <div className={styles.frame}>
                            <div className={styles.frame__logo}> </div>

                        </div>
                        <div className={styles.section2}>
                            <p className={styles.section2__text}>
                                Płyty ścienne Huntonit nadadzą Twojemu wnętrzu charakter, który wyróżni Cię spośród tłumu. <br />
                                Wybierz spośród odcieni, które odpowiadają Twojemu stylowi, czy to francuski styl, shabby chic, czy <br />
                                bardziej męski i industrialny charakter. <br />
                                Płyta pilśniowa Huntonit jest odporna na wilgoć i może być montowana w pralni, łazience poza strefą <br />
                                mokrą i kuchni, pod warunkiem zapewnienia dobrej wentylacji pomieszczenia. Płyty są również <br />
                                odporne na duże wahania temperatury i dlatego są odpowiednie dla wnętrz, które nie są regularnie <br />
                                ogrzewane. <br />
                            </p>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.wrapper__title}>Płyty Huntonit Texture Wall występują w paru wariantach kolorystycznych:</div>
                            <div className={styles.wrapper__content}>
                                <div className={styles.content__left}>
                                    {panels.map(panel => <div className={styles.decor}>
                                        <div style={{ backgroundImage: `url(${panel.img})` }} className={styles.decor__img}></div>
                                        <div className={styles.decor__title}>{panel.title}</div>
                                        <div style={{ backgroundImage: `url(${panel.fuge})` }} className={styles.decor__fuge}></div>
                                        <div className={styles.decor__description}>{panel.description}</div>
                                        <button onClick={() => this.changePanel(panel)} className={styles.decor__button}>Zobacz</button>
                                    </div>)}

                                </div>
                                <div className={styles.content__right}>
                                    <TextureWallWrapper panel={this.state.panel} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.mont}>
                           <a href={pdf} download='Instrukcja montażu płyt ściennych Texture Wall'>Instrukcja montażu płyt ściennych <br/> Texture Wall</a>
                        </div>
                    </div>


                </Layout>
            </Container>
        )
    }
}



export default TextureWall
