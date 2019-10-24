
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./onestep.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import onestep from '../pdf1/onestep.pdf'



class Walls4you extends Component {

    state = {
        modal: false,
        type: 'none'
    }




    render() {






        return (
            <Layout>
                <Container>
                    <div className={styles.onestep}>
                        <div className={styles.header}>
                            <h1>Płyty sufitowe <br />
                                One Step-Ceiling</h1>
                            <div className={styles.logo__forestia}></div>
                        </div>
                        <div className={styles.section1}>
                            <p className={styles.section1__title}>Gotowe płyty sufitowe!</p>
                            <p className={styles.section1__description}>Niezależnie od tego, czy po raz pierwszy wykańczasz, czy odnawiasz pomieszczenie, <br /> możesz
                                spełnić marzenie o spektakularnym i stylowym suficie dzięki sufitowi One-Step. <br />
                                Płyty oferują wiele możliwości stworzenia charakterystycznego sufitu, są dostępne w dwóch <br />
                                różnych rozmiarach, aby stworzyć imponujące tekstury i nadać charakter wnętrzu.</p>
                        </div>
                        <div className={styles.section2}>
                            <div className={styles.section2__images}>
                            <div className={styles.section2__image1}>
                            <div className={styles.section2__image1First}></div>
                            <div className={styles.section2__image1Second}></div>
                            </div>
                            <div className={styles.section2__image2}>
                            <div className={styles.section2__image2First}></div>
                            <div className={styles.section2__image2Second}></div>
                            </div>
                            </div>
                            <div className={styles.section2__content}>
                                <div className={styles.section2__top}>
                                    Płyty nadają się do montażu opraw typu downlight. <br />
                                    Tylko wyobraźnia wyznacza granice. <br /> <br />
                                    Płyty są ponadczasowe i wtapiają się we wnętrze <br />
                                    klasyczne, jak i nowoczesne. <br /> <br />
                                    Sufit Forestia One-Step to płyta pokryta folią, <br />
                                    profilowana ze wszystkich 4 stron za pomocą <br />
                                    wypustu i wpustu oraz połączenia w kształcie litery V. <br />
                                </div>
                                <div className={styles.section2__bot}>
                                <div className={styles.section2__black}>
                                <p>Produkt ten może być stosowany jako płyty <br/>
sufitowe we wszystkich pomieszczeniach. <br/>
Obszary zastosowania: Suche obszary, można <br/>
również stosować w dobrze wentylowanych <br/>
pomieszczeniach gospodarczych, <br/>
pralni i łazience (klasa klimatyczna 1). <br/>
Sufitowe pokrycia nigdy nie wymagają <br/>
konserwacji ani remontu</p>
                                <div className={styles.section2__lineTop}></div>
                                <p>Ponadto sufit jest łatwy w utrzymaniuw czystości, <br/>
ponieważ kurz i brud nie przylegają do jego <br/>
powierzchni. W razie potrzeby gotowy sufit <br/>
można myć dowolnym standardowym <br/>
nietłustym detergentem. <br/>
Jeśli kiedykolwiek planujesz zmienić kolor sufitu, <br/>
nic nie staje na przeszkodzie — płyty sufitowe <br/>
są łatwe do pomalowania.</p>
                                <div className={styles.section2__lineBot}></div>
                                <p>Produkt dostępny jest w następujących wymiarach: <br/><br/>
12 x 600 x 1200 mm <br/>
12 x 300 x 1200 mm</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.section3}>
                        
                        <div className={styles.section3__title}>
                        
                        Wybierz jeden z 6 różnych wykończeń dekoracyjnych ! <br/>
Świetny sufit pomaga podnieść standard pomieszczenia.
                        
                        </div>
                        <div className={styles.section3__panels}>
                        <div className={styles.panels1}>
                        <div className={styles.panel}>
                        <div className={`${styles.panel__img} ${styles.panel__img1}`}>

                        </div>
                        <div className={styles.panel__text}>
                        45TF WHITE RUSTIC
                        </div>
                        </div>
                        <div className={styles.panel}>
                        <div className={`${styles.panel__img} ${styles.panel__img2}`}>

                        </div>
                        <div className={styles.panel__text}>
                        40TF WHITE SILK
                        </div>
                        </div>
                        <div className={styles.panel}>
                        <div className={`${styles.panel__img} ${styles.panel__img3}`}>

                        </div>
                        <div className={styles.panel__text}>
                        21TF SIRIUS
                        </div>
                        </div>
                        </div>
                        <div className={styles.panels1}>
                        <div className={styles.panel}>
                        <div className={`${styles.panel__img} ${styles.panel__img4}`}>

                        </div>
                        <div className={styles.panel__text}>
                        14TFL WHITE INSPIRATION
                        </div>
                        </div>
                        <div className={styles.panel}>
                        <div className={`${styles.panel__img} ${styles.panel__img5}`}>

                        </div>
                        <div className={styles.panel__text}>
                        12TF WHITE LINNEN
                        </div>
                        </div>
                        <div className={styles.panel}>
                        <div className={`${styles.panel__img} ${styles.panel__img6}`}>

                        </div>
                        <div className={styles.panel__text}>
                        02TF WHITE STUCCO
                        </div>
                        </div>
                        </div>


                        </div>
                        <div className="mont__content">
            <a download='Instrukcja montażu one-step ceiling' href={onestep}>Instrukcja montażu One-step ceiling</a>
            </div>
                        <div className={styles.section5}>
                          
                            <div className={`${styles.black__line} ${styles.section5__line}`}></div>
                            <div className={styles.section5__bot}>
                            <Link to='/Produkty/'>    <button className={styles.section5__button}>Zobacz ofertę produktów ></button></Link>
                                <div className={styles.section5__logo}></div>
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
