
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./DesignWall.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import pdf from '../pdf1/designwall.pdf'
import HuntonitWrapper from '../components/HuntonitWrapper'


class DesignWall extends Component {





    render() {






        return (
            <Layout>
                <Container>




                    <div className={styles.designWall}>

                        <div className={styles.header}>
                            <div className={styles.header__line}>

                            </div>
                            <h1>Design Wall</h1>
                            <div className={styles.header__logo}>

                            </div>
                        </div>
                        <div className={styles.section1}>
                            <div className={styles.section1__text}>
                                <p>Dekoracyjne, ścienne płyty z wybraną fotografią</p>
                                <ul>
                                    <li> Fotografia na ścianie</li>
                                    <li> Stwórz unikalną ścianę w swoim domu</li>
                                    <li> Szybki i prosty montaż</li>
                                    <li> Poznaj dekory, które tworzą wizerunek wnętrza <br />
                                        i nadają mu charakter</li>
                                    <li> Płyty z pióro-wpustem, co umożliwia <br />
                                        połączenie z innymi płytami ściennymi <br />
                                        Huntonit</li>
                                    <li> Wysoka jakość fotografii</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.section2}>
                            <p className={styles.section2__text}>
                                Stwórz unikalną ścianę, dzięki wizualizacji fotograficznej w pokoju dziecinnym, korytarzu, poczekalni, <br />
                                recepcji lub w najbardziej stylowym biurze. <br />
                                Produkt Huntonit Designwall jest dostarczany ze zdjęciami nałożonymi na płytach. <br />
                                Płyty są odporne na wilgoć i mogą być instalowane w kuchni, pralni i łazience poza strefą mokrą. <br />
                                Pomieszczenie powinno być dobrze wentylowane. <br />
                                Produkt jest odporny na duże wahania temperatury, dlatego jest bardzo dobrą alternatywą do <br />
                                instalacji w miejscach, które nie są ogrzewane przez cały czas. Designwall mają ten sam rdzeń <br />
                                z włókna drzewnego jak pozostałe produkty marki Huntonit. Płyty są dostępne w różnych dekorach <br />
                                i liczbie płyt. Możemy również dostarczyć produkt z wybranym zdjęciem z własnej kolekcji. <br />
                                <span className="bigger">Twoja wyobraźnia - Twój wybór!</span>  <br />
                                *Huntonit tworzy produkty naturalne, dlatego mogą wystąpić różnice w kolorze lub wyglądzie. <br />
                                Zalecamy, aby na powierzchni ściany stosować płyty z tej samej produkcji lub numeru partii. <br />
                                Mogą wystąpić odchylenia kolorów z powodu ustawień wyświetlacza. <br />
                            </p>
                        </div>
                        <div className={styles.wrapper__title}>Płyty ścienne Design Wall występują w wariantach:</div>
                        <div className={styles.mont}>
                            <a download='Instrukcja montażu płyt ściennych Design Wall' href={pdf}>Instrukcja montażu płyt ściennych Design Wall</a>
                        </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default DesignWall
