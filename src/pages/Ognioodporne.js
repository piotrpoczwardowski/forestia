
import React, { Component } from "react"

import Layout from "../components/layout"
import Container from '../components/container'
import styles from "./Ognioodporne.module.css"
import pdf from '../pdf1/ognioodporne.pdf'



class Ognioodporne extends Component {



    render() {




        return (
            <Container>
                <Layout>
                    <div className={styles.ognioodporne}>
                        <div className={styles.header}>
                            <div className={styles.left__line}></div>
                            <h1 className={styles.title}>Ognioodporne płyty ścienne</h1>
                            <div className={styles.right__line}></div>
                        </div>
                        <div className={styles.main}>
                            <div className={styles.logo}></div>
                        </div>
                        <div className={styles.section1}>
                        <div className={styles.border__top}></div>
                        <div className={styles.border__right}></div>
                        <div className={styles.border__bottom}></div>
                        <div className={styles.border__left}></div>
                            <div className={styles.left}>
                                <div className={styles.left__panel}>

                                </div>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right__text}>
                                    Produkt Forestia Ognioodporne płyty ścienne zaliczany jest do klasyfikacji <br />
                                    ognioodporności B-s1, d0 i certyfikowany zgodnie z normą produktu EN 13986. <br />
                                    W klasyfikacji pożarowej płyty zaliczane są do norm NS-EN 13501-1. <br />
                                    Podobnie do całej gamy produktów firmy Forestia nie należą do rodzaju <br />
                                    produktu, który należy dodatkowo gipsować, szlifować. <br />
                                    Płyty cechują się wysokimi właściwościami wytrzymałościowymi, które <br />
                                    zapewniają dobre wkręcanie oraz solidność usytuowania wkrętów. <br />
                                    Artykuł zawiera unikalny profil blokujący podobnie jak produkty <br />
                                    Walls2Paint i Walls4You. <br />
                                    Aby uzyskać idealny efekt końcowy, płyty należy pomalować farbą firmy Teknos <br />
                                    „Biora 20” - wodorozcieńczalna lateksowa farba akrylowa do malowania ścian <br />
                                    i sufitów wewnątrz pomieszczeń. <br />
                                    Jest łatwa do nakładania i tworzy półmatową powłokę, łatwą do utrzymania <br />
                                    w czystości. <br />
                                    Więcej informacji na temat montażu znajduje się w naszej instrukcji montażu. <br />
                                </div>
                            </div>
                        </div>
                        <div className={styles.mont}>
                        <a download='Instrukcja montażu płyt ściennych Ognioodpornych' href={pdf}>Instrukcja montażu płyt ściennych Ognioodpornych</a>
                        </div>
                    </div>
                </Layout>
            </Container>
        )
    }
}



export default Ognioodporne
