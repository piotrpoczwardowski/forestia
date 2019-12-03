
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./HuntonitWrapper.module.css"




class HuntonitWrapper extends Component {

    state = {
        imgView: "",
        sizes: [],
        title: ""
    }

    

    render() {






        return (
            <Container>

                 <div className={styles.menu}>
                            <div className={styles.menu__body}>

                                <div className={styles.menu__left}>
                                    <div className={styles.left__title}>Dostępne kolory:</div>
                                    <div className={styles.left__decors}>
                                        <div className={styles.decor}>
                                            <div className={styles.decor__img}>
                                                <div className={styles.decor__name}>Antikk White</div>
                                            </div>
                                            <button className={styles.decor__button}>Sprawdź</button>
                                        </div>
                                        <div className={styles.decor}>
                                            <div className={styles.decor__img}>
                                                <div className={styles.decor__name}>Antikk White</div>
                                            </div>
                                            <button className={styles.decor__button}>Sprawdź</button>
                                        </div>


                                    </div>
                                </div>
                                <div className={styles.menu__right}>
                                    <div className={styles.right__title}>Antikk White</div>
                                    <div className={styles.right__slider}>
                                        <div className={styles.slider__left}>
                                            <div className={styles.left__arrow}>O</div>
                                        </div>
                                        <div className={styles.slider__center}>
                                            <div className={styles.slide1}></div>
                                        </div>
                                        <div className={styles.slider__right}>
                                            <div className={styles.right__arrow}>O</div>
                                        </div>
                                    </div>
                                    <div className={styles.right__sizes}>
                                        <p className={styles.sizes__title}>Dostępne wymiary:</p>
                                        <p>-11x620x1220mm</p>
                                        <p>Kolor NCS S0502Y</p>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
            </Container>
        )
    }
}



export default HuntonitWrapper
