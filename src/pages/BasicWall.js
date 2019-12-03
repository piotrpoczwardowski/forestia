
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./BasicWall.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import pdf from '../pdf1/basicWall.pdf'
import BasicWallsWrapper from '../components/BasicWallWrapper'

import skyggeImg from '../images/huntonit/basicWall/skygge.jpg'
import perleImg from '../images/huntonit/basicWall/perle.jpg'
import fas3Img from '../images/huntonit/basicWall/fas3.jpg'
import fas6Img from '../images/huntonit/basicWall/fas6.jpg'
import fas8Img from '../images/huntonit/basicWall/fas8.jpg'
import microImg from '../images/huntonit/basicWall/micro.jpg'
import antikkImg from '../images/huntonit/basicWall/antikk.jpg'




import skyggeClassicWhite from '../images/huntonit/basicWall/skygge/classicWhite.jpg'
import skyggeClassicWhiteView from '../images/huntonit/basicWall/skygge/classicWhiteView.jpg'

import skyggeWhite from '../images/huntonit/basicWall/skygge/white.jpg'
import skyggeWhiteView from '../images/huntonit/basicWall/skygge/whiteView.jpg'

import skyggefrost from '../images/huntonit/basicWall/skygge/frost.jpg'
import skyggefrostView from '../images/huntonit/basicWall/skygge/frostView.jpg'

import skyggemist from '../images/huntonit/basicWall/skygge/mist.jpg'
import skyggemistView from '../images/huntonit/basicWall/skygge/mistView.jpg'

import skyggesoftMenthol from '../images/huntonit/basicWall/skygge/softMenthol.jpg'
import skyggesoftMentholView from '../images/huntonit/basicWall/skygge/softMentholView.jpg'

import skyggesoftEucalyptus from '../images/huntonit/basicWall/skygge/softEucalyptus.jpg'
import skyggesoftEucalyptusView from '../images/huntonit/basicWall/skygge/softEucalyptusView.jpg'

import skyggedeepOcean from '../images/huntonit/basicWall/skygge/deepOcean.jpg'
import skyggedeepOceanView from '../images/huntonit/basicWall/skygge/deepOceanView.jpg'

import skyggecaffelatte from '../images/huntonit/basicWall/skygge/caffelatte.jpg'
import skyggecaffelatteView from '../images/huntonit/basicWall/skygge/caffelatteView.jpg'

import skyggesand from '../images/huntonit/basicWall/skygge/sand.jpg'
import skyggesandView from '../images/huntonit/basicWall/skygge/sandView.jpg'

import skyggeearth from '../images/huntonit/basicWall/skygge/earth.jpg'
import skyggeearthView from '../images/huntonit/basicWall/skygge/earthView.jpg'

import skyggepepper from '../images/huntonit/basicWall/skygge/pepper.jpg'
import skyggepepperView from '../images/huntonit/basicWall/skygge/pepperView.jpg'

import skyggeterracotta from '../images/huntonit/basicWall/skygge/terracotta.jpg'
import skyggeterracottaView from '../images/huntonit/basicWall/skygge/terracottaView.jpg'





import perleClassicWhite from '../images/huntonit/basicWall/perle/classicWhite.jpg'
import perleClassicWhiteView from '../images/huntonit/basicWall/perle/classicWhiteView.jpg'

import perleWhite from '../images/huntonit/basicWall/perle/white.jpg'
import perleWhiteView from '../images/huntonit/basicWall/perle/whiteView.jpg'

import perleFrost from '../images/huntonit/basicWall/perle/frost.jpg'
import perleFrostView from '../images/huntonit/basicWall/perle/frostView.jpg'

import perleCaffelatte from '../images/huntonit/basicWall/perle/caffelatte.jpg'
import perleCaffelatteView from '../images/huntonit/basicWall/perle/caffelatteView.jpg'


import fas3ClassicWhite from '../images/huntonit/basicWall/fas3/classicWhite.jpg'
import fas3ClassicWhiteView from '../images/huntonit/basicWall/fas3/classicWhiteView.jpg'

import fas3White from '../images/huntonit/basicWall/fas3/white.jpg'
import fas3WhiteView from '../images/huntonit/basicWall/fas3/whiteView.jpg'

import fas3Caffelatte from '../images/huntonit/basicWall/fas3/caffelatte.jpg'
import fas3CaffelatteView from '../images/huntonit/basicWall/fas3/caffelatteView.jpg'

import fas6White from '../images/huntonit/basicWall/fas6/white.jpg'
import fas6WhiteView from '../images/huntonit/basicWall/fas6/whiteView.jpg'

import fas6WMist from '../images/huntonit/basicWall/fas6/mist.jpg'
import fas6WMistView from '../images/huntonit/basicWall/fas6/mistView.jpg'

import fas8White from '../images/huntonit/basicWall/fas8/white.jpg'
import fas8WhiteView from '../images/huntonit/basicWall/fas8/whiteView.jpg'

import fas8Frost from '../images/huntonit/basicWall/fas8/frost.jpg'
import fas8FrostView from '../images/huntonit/basicWall/fas8/frostView.jpg'

import microWhite from '../images/huntonit/basicWall/micro/white.jpg'
import microWhiteView from '../images/huntonit/basicWall/micro/whiteView.jpg'

import microClassicWhite from '../images/huntonit/basicWall/micro/classicWhite.jpg'
import microClassicWhiteView from '../images/huntonit/basicWall/micro/classicWhiteView.jpg'

import microFrost from '../images/huntonit/basicWall/micro/frost.jpg'
import microFrostView from '../images/huntonit/basicWall/micro/frostView.jpg'

import microMist from '../images/huntonit/basicWall/micro/mist.jpg'
import microMistView from '../images/huntonit/basicWall/micro/mistView.jpg'

import antikkWhite from '../images/huntonit/basicWall/antikk/white.jpg'
import antikkWhiteView from '../images/huntonit/basicWall/antikk/whiteView.jpg'



import skyggeFuge from '../images/huntonit/basicWall/skygge.png'
import antikkFuge from '../images/huntonit/basicWall/antikk.png'
import perleFuge from '../images/huntonit/basicWall/perle.png'
import mikroFuge from '../images/huntonit/basicWall/mikrofuge.png'



class BasicWall extends Component {


    state = {
        wrapper: false,
        panel: {},
        type: ""
    }

    handleWrapper = (panel) => {
        this.setState({ wrapper: true, panel: panel })

    }



    render() {

        let panels = [
            {
                img: skyggeImg,
                title: "Skygge",
                arrow: skyggeFuge,
                description: "Struktura 5 panelowa",
                colors: [
                    {
                        img: skyggeClassicWhite,
                        title: "Classic White",
                        description: 'NCS 0500N',
                        imgView: skyggeClassicWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    {
                        img: skyggeWhite,
                        title: "White",
                        description: 'NCS 0502Y',
                        imgView: skyggeWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm', '11x620x3050mm']
                    }
                    ,
                    {
                        img: skyggefrost,
                        title: "Frost",
                        description: 'NCS S 1500 N',
                        imgView: skyggefrostView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                    ,
                    {
                        img: skyggemist,
                        title: "Mist",
                        description: 'NCS S 3000 N',
                        imgView: skyggemistView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggesoftMenthol,
                        title: "Soft Menthol",
                        description: 'NCS S 1706 G15Y',
                        imgView: skyggesoftMentholView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggesoftEucalyptus,
                        title: "Soft Eucalyptus",
                        description: 'NCS S 5608 B78G',
                        imgView: skyggesoftEucalyptusView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggedeepOcean,
                        title: "Deep Ocean",
                        description: 'NCS S 7010 B10G',
                        imgView: skyggedeepOceanView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggecaffelatte,
                        title: "Caffelatte",
                        description: 'NCS S 1005 430R',
                        imgView: skyggecaffelatteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm', ]
                    }
                    ,
                    {
                        img: skyggesand,
                        title: "Sand",
                        description: 'NCS S 2502 Y',
                        imgView: skyggesandView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggeearth,
                        title: "Earth",
                        description: 'NCS S 4005 Y20R',
                        imgView: skyggeearthView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggepepper,
                        title: "Pepper",
                        description: 'NCS S 16502 R',
                        imgView: skyggepepperView,
                        sizes: ['11x620x2390mm']
                    }
                    ,
                    {
                        img: skyggeterracotta,
                        title: "Terracotta",
                        description: 'NCS S 3923 Y74R',
                        imgView: skyggeterracottaView,
                        sizes: ['11x620x2390mm']
                    }
                ]
            },
            {
                img: perleImg,
                title: "Perle",
                arrow: perleFuge,
                description: "Struktura 5 panelowa",
                colors: [
                    {
                        img: perleClassicWhite,
                        title: "Classic White",
                        description: 'NCS 0500N',
                        imgView: perleClassicWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm','11x620x3050mm']

                    },
                    {
                        img: perleWhite,
                        title: "White",
                        description: 'NCS 0502Y',
                        imgView: perleWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                    ,
                    {
                        img: perleFrost,
                        title: "Frost",
                        description: 'NCS S 1500 N',
                        imgView: perleFrostView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                    ,
                    {
                        img: perleCaffelatte,
                        title: "Caffelatte",
                        description: 'NCS S 1005 430R',
                        imgView: perleCaffelatteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                ]
            },
            {
                img: fas3Img,
                title: "Fas",
                arrow: antikkFuge,
                description: "Struktura 3 panelowa",
                colors: [
                    {
                        img: fas3ClassicWhite,
                        title: "Classic White",
                        description: 'NCS 0500N',
                        imgView: fas3ClassicWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    {
                        img: fas3White,
                        title: "White",
                        description: 'NCS 0502Y',
                        imgView: fas3WhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                    ,
                    {
                        img: fas3Caffelatte,
                        title: "Caffelatte",
                        description: 'NCS S 1005 430R',
                        imgView: fas3CaffelatteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                ]
            }, {
                img: fas6Img,
                title: "Fas ",
                arrow: antikkFuge,
                description: "Struktura 6 panelowa",
                colors: [
                    {
                        img: fas6White,
                        title: "White",
                        description: 'NCS 0502Y',
                        imgView: fas6WhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    {
                        img: fas6WMist,
                        title: "Mist",
                        description: 'NCS S 3000 N',
                        imgView: fas6WMistView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                ]
            }, {
                img: fas8Img,
                title: "Fas ",
                arrow: antikkFuge,
                description: "Struktura 8 panelowa",
                colors: [
                    {
                        img: fas8White,
                        title: "White",
                        description: 'NCS 0502Y',
                        imgView: fas8WhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    {
                        img: fas8Frost,
                        title: "Frost",
                        description: 'NCS S 1500 N',
                        imgView: fas8FrostView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    }
                ]
            }, {
                img: microImg,
                title: "Płyty",
                arrow: mikroFuge,
                description: "z Mikrofugą",
                colors: [
                    {
                        img: microClassicWhite,
                        title: "Classic White",
                        description: 'NCS 0500N',
                        imgView: microClassicWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    {
                        img: microWhite,
                        title: "White",
                        description: 'NCS 0502Y',
                        imgView: microWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm', '11x620x3050mm']
                    },
                    {
                        img: microFrost,
                        title: "Frost",
                        description: 'NCS S 1500 N',
                        imgView: microFrostView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    {
                        img: microMist,
                        title: "Mist",
                        description: 'NCS S 3000 N',
                        imgView: microMistView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
                    },
                    
                ]
            },
            {
                img: antikkImg,
                title: "Płyty",
                arrow: antikkFuge,
                description: "Antikk",
                colors: [
                    {
                        img: antikkWhite,
                        title: "Classic White",
                        description: 'NCS 0502Y',
                        imgView: antikkWhiteView,
                        sizes: ['11x620x2390mm', '11x620x2740mm']
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

                                {panels.map(panel => <div className={styles.plate}>
                                    <div className={styles.plate__img}><img src={panel.img} alt="" /></div>
                                    <div className={styles.plate__title}>{panel.title}</div>
                                    <div style={{backgroundImage: `url(${panel.arrow})`}} className={styles.plate__arrow}></div>
                                    <div className={styles.plate__text}> {panel.description} </div>
                                    <button onClick={() => this.handleWrapper(panel)} className={styles.plate__button}>Sprawdź</button>
                                </div>)}

                            </div>
                            {this.state.wrapper && <BasicWallsWrapper panel={this.state.panel} />}
                        </div>
                        <div className={styles.mont}>
                            <a download="Instrukcja montażu płyt ściennych Basic Wall" href={pdf}>Instrukcja montażu płyt ściennych
                <br /> Basic Wall</a>
                        </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default BasicWall
