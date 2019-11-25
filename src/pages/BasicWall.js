
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./BasicWall.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import pdf from '../pdf1/malowanepedzlem.pdf'



class BasicWall extends Component {





    render() {

        let panels = [
            {
                img: "img1",
                title: "title1",
                fugue: "",
                description: "",
                colors: [
                    {
                        img: "",
                        title: "",
                        desc: "",
                        view: "",
                        sizes: ""
                    }
                ]
            }
        ]




        return (
            <Layout>
                <Container>



                    <div className={styles.basicWall}>
                        <h1>Basic Wall</h1>
                        <div className={styles.logo__mobile}></div>
                        <div className={styles.black__line}></div>
                        <div className={styles.main}>
                            <div className={styles.main__left}>
                                <div className={styles.left__img}></div>
                            </div>
                            <div className={styles.main__right}>
                                <div className={styles.right__logo}></div>
                                <p className={styles.right__text}>
                                    <strong> Podstawowe malowane płyty ścienne !
                        <br /> W trosce o Twoje zdrowie i czas!
                        <br /> </strong>
                                    <br /> Prawdopodobnie najczystsze płyty na świecie.
                    <br /> Opatentowane malowanie powierzchni.
                    <br />
                                    <br /> Rekomendowane przez Norweskie Stowarzyszenie
                    <br /> ds. Astmy i Alergii.
                    <br />
                                    <br /> Nagroda Indoor Climate Award Duńskiego Instytutu
                    <br /> Technologicznego.
                    <br />
                                    <br /> Innowacyjny produkt, który został stworzony
                    <br /> z myślą o Twoim zdrowiu.
                    <br />
                                    <br /> Estetyczna struktura płyt, a do tego ich czyszczenie
                    <br /> i pielęgnacja jest niezwykle łatwa.
                    <br />
                                    <br /> Płyty można pomalować na wybrany kolor farbą
                    <br /> na bazie akrylu.
                    <br />
                                </p>
                            </div>
                        </div>
                        <div className={styles.walls}>
                            <div className={styles.walls__title}>Płyty Huntonit Podstawowa ściana występują w wariantach:</div>
                            <div className={styles.walls__plate}>
                                <div className={styles.plate}>
                                    <div className={styles.plate__img}></div>
                                    <div className={styles.plate__title}>Skygge</div>
                                    <div className={styles.plate__arrow}></div>
                                    <div className={styles.plate__text}> Struktura
                        <br /> 5 panelowa</div>
                                    <button className={styles.plate__button}>Zobacz</button>
                                </div>
                                <div className={styles.plate}>
                                    <div className={styles.plate__img}></div>
                                    <div className={styles.plate__title}>Skygge</div>
                                    <div className={styles.plate__arrow}></div>
                                    <div className={styles.plate__text}> Struktura
                        <br /> 5 panelowa</div>
                                    <button className={styles.plate__button}>Zobacz</button>
                                </div>


                            </div>
                            <div className={styles.walls__wrapper}>
                                <div className={styles.wrapper__left}>
                                    <div className={styles.left__title}>Dostęþne kolory:</div>
                                    <div className={styles.decor__container}>
                                        <div className={styles.left__decors}>
                                            <div className={styles.decor}>
                                                <div className={styles.decor__img}></div>
                                                <div className={styles.decor__title}>Classic White</div>
                                                <div className={styles.decor__number}>NCS S 0500 N</div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={styles.grey__line}>

                                    </div>
                                </div>
                                <div className={styles.wrapper__right}>
                                    <div className={styles.right__title}>Classic White</div>
                                    <div className={styles.right__img}></div>
                                    <div className={styles.sizes__title}>Dostępne wymiary:</div>
                                    <div className={styles.sizes}>
                                        <p>dasdasdasdasd</p>
                                        <p>dsadasdasdasd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mont}>
                            <a href="">Instrukcja montażu płyt ściennych
                <br /> Basic Wall</a>
                        </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default BasicWall
