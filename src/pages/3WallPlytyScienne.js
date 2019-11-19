
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./3WallPlytyScienne.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import threewall from '../pdf1/threewall.pdf'



class ThreeWall extends Component {

    state = {
        modal: false,
        type: 'none',
        exit: true
    }



    render() {






        return (
            <Layout>
                <Container>




                    <div className={styles.threeWalls}>
                        <div className={styles.header}>
                            <h1>3 Wall Płyty ścienne
                <br /> gotowe do tapetowania</h1>
                            <div className={styles.header__logo}>

                            </div>
                        </div>
                        <div className={styles.main}>
                            <div className={styles.main__left}>
                                <div className={styles.black__line}>

                                </div>
                                <div className={styles.left__text}>
                                    Nie trać czasu – dzięki gotowej płycie
                    <br /> zaoszczędzisz go nawet do 50%
                    <br />
                                    <br /> PRZYŚPIESZ prace wykończeniowe !
                    <br />
                                    <br /> Płyta ścienna Forestia 3 Wall
                    <br /> to obrobiona powierzchniowo
                    <br /> płyta przygotowana do nałożenia
                    <br /> tapety, folia podkładowa
                    <br /> znajduje się na obu jej stronach.
                    <br />
                                    <br /> Produkt ten ułatwi szybkie i wygodne
                    <br /> nałożenie wybranej tapety, a montaż płyt
                    <br /> oferuje komfortowe środowisko pracy.
                    <br />
                                </div>
                            </div>
                            <div className={styles.main__right}>
                                <div className={styles.right__img}></div>
                                <div className={styles.right__border}></div>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.bottom__left}>
                                <p>
                                    Dostępne wymiary:
                    <br /> 12 x 1220 x 2390mm
                    <br /> 12 x 1220 x 2440mm
                    <br /> 12 x 1220 x 2740mm
                    <br /> 12 x 0620 x 2390mm
                </p>
                            </div>

                            <div className={styles.bottom__right}>
                                <a href={threewall} download='Instrukcja montażu 3 Wall Płyty ścienne gotowe do tapetowania'> Instrukcja montażu 3 Wall Płyty ścienne
                    <br /> gotowe do tapetowania </a>
                            </div>
                        </div>
                        <div className={styles.section5}>

                            <div className={`${styles.black__line} ${styles.section5__line}`}></div>
                            <div className={styles.section5__bot}>
                                <Link to='/Produkty/'>    <button className={styles.section5__button}>Zobacz ofertę produktów ></button></Link>
                                <div className={styles.section5__logo}></div>
                            </div>
                        </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default ThreeWall
