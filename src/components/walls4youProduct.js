
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./walls4youProduct.module.css"

import ProductView from '../components/ProductView'

import tr1 from '../images/walls2paint/trend/tr1.jpg'
import tr2 from '../images/walls2paint/trend/tr2.jpg'
import tr3 from '../images/walls2paint/trend/tr3.jpg'
import tr4 from '../images/walls2paint/trend/tr4.jpg'
import tr5 from '../images/walls2paint/trend/tr5.jpg'
import tr6 from '../images/walls2paint/trend/tr6.jpg'
import tr7 from '../images/walls2paint/trend/tr7.jpg'
import tr8 from '../images/walls2paint/trend/tr8.jpg'
import tr9 from '../images/walls2paint/trend/tr9.jpg'
import tr10 from '../images/walls2paint/trend/tr10.jpg'
import tr11 from '../images/walls2paint/trend/tr11.jpg'
import tr12 from '../images/walls2paint/trend/tr12.jpg'
import tr13 from '../images/walls2paint/trend/tr13.jpg'
import tr14 from '../images/walls2paint/trend/tr14.jpg'
import tr15 from '../images/walls2paint/trend/tr15.jpg'
import tr16 from '../images/walls2paint/trend/tr16.jpg'
import tr17 from '../images/walls2paint/trend/tr17.jpg'
import tr18 from '../images/walls2paint/trend/tr18.jpg'

import trend1 from '../images/walls2paint/trend/trend1.jpg'
import trend2 from '../images/walls2paint/trend/trend2.jpg'
import trend3 from '../images/walls2paint/trend/trend3.jpg'
import trend4 from '../images/walls2paint/trend/trend4.jpg'
import trend5 from '../images/walls2paint/trend/trend5.jpg'
import trend6 from '../images/walls2paint/trend/trend6.jpg'
import trend7 from '../images/walls2paint/trend/trend7.jpg'
import trend8 from '../images/walls2paint/trend/trend8.jpg'
import trend9 from '../images/walls2paint/trend/trend9.jpg'
import trend10 from '../images/walls2paint/trend/trend10.jpg'
import trend11 from '../images/walls2paint/trend/trend11.jpg'
import trend12 from '../images/walls2paint/trend/trend12.jpg'
import trend13 from '../images/walls2paint/trend/trend13.jpg'
import trend14 from '../images/walls2paint/trend/trend14.jpg'
import trend15 from '../images/walls2paint/trend/trend15.jpg'
import trend16 from '../images/walls2paint/trend/trend16.jpg'
import trend17 from '../images/walls2paint/trend/trend17.jpg'
import trend18 from '../images/walls2paint/trend/trend18.jpg'

import cl1 from '../images/walls2paint/classic/cl1.jpg'
import cl2 from '../images/walls2paint/classic/cl2.jpg'
import cl3 from '../images/walls2paint/classic/cl3.jpg'
import cl4 from '../images/walls2paint/classic/cl4.jpg'
import cl5 from '../images/walls2paint/classic/cl5.jpg'
import cl6 from '../images/walls2paint/classic/cl6.jpg'
import cl7 from '../images/walls2paint/classic/cl7.jpg'
import cl8 from '../images/walls2paint/classic/cl8.jpg'
import cl9 from '../images/walls2paint/classic/cl9.jpg'
import cl10 from '../images/walls2paint/classic/cl10.jpg'
import cl11 from '../images/walls2paint/classic/cl11.jpg'
import cl12 from '../images/walls2paint/classic/cl12.jpg'
import cl13 from '../images/walls2paint/classic/cl13.jpg'
import cl14 from '../images/walls2paint/classic/cl14.jpg'
import cl15 from '../images/walls2paint/classic/cl15.jpg'
import cl16 from '../images/walls2paint/classic/cl16.jpg'
import cl17 from '../images/walls2paint/classic/cl17.jpg'
import cl18 from '../images/walls2paint/classic/cl18.jpg'

import classic1 from '../images/walls2paint/classic/classic1.jpg'
import classic2 from '../images/walls2paint/classic/classic2.jpg'
import classic3 from '../images/walls2paint/classic/classic3.jpg'
import classic4 from '../images/walls2paint/classic/classic4.jpg'
import classic5 from '../images/walls2paint/classic/classic5.jpg'
import classic6 from '../images/walls2paint/classic/classic6.jpg'
import classic7 from '../images/walls2paint/classic/classic7.jpg'
import classic8 from '../images/walls2paint/classic/classic8.jpg'
import classic9 from '../images/walls2paint/classic/classic9.jpg'
import classic10 from '../images/walls2paint/classic/classic10.jpg'
import classic11 from '../images/walls2paint/classic/classic11.jpg'
import classic12 from '../images/walls2paint/classic/classic12.jpg'
import classic13 from '../images/walls2paint/classic/classic13.jpg'
import classic14 from '../images/walls2paint/classic/classic14.jpg'
import classic15 from '../images/walls2paint/classic/classic15.jpg'
import classic16 from '../images/walls2paint/classic/classic16.jpg'
import classic17 from '../images/walls2paint/classic/classic17.jpg'
import classic18 from '../images/walls2paint/classic/classic18.jpg'

import bs1 from '../images/walls2paint/basic/bs1.jpg'
import bs2 from '../images/walls2paint/basic/bs2.jpg'
import bs3 from '../images/walls2paint/basic/bs3.jpg'
import bs4 from '../images/walls2paint/basic/bs4.jpg'

import basic1 from '../images/walls2paint/basic/basic1.jpg'
import basic2 from '../images/walls2paint/basic/basic2.jpg'
import basic3 from '../images/walls2paint/basic/basic3.jpg'
import basic4 from '../images/walls2paint/basic/basic4.jpg'


class walls4youProduct extends Component {

    state = {
        type: 'TREND',
        productView: false,
        img2: '',
        title: '',
        description: '',

    }

    componentDidMount() {
        this.setState({ type: this.props.type })
      
    }

    handleMenuChange = (e) => {

        this.setState({ type: e.target.innerHTML })
    }
    handleProductView = (e) => {
        let img2 = e.target.getAttribute('img2')
        let title = e.target.getAttribute('title')
        let description = e.target.getAttribute('description')
        this.setState({ productView: true, img: img2, title: title, description: description })


    }

    handleBack = () => {
        this.setState({productView: false})
        this.props.exitOn()
    }

    render() {

        let panels = {
            TREND: [{ imgOne: trend1, imgTwo: tr1, title: '40900 Valentine',description: '' },
            { imgOne: trend2, imgTwo: tr2, title: '41100 Bright wood',description: '' },
            { imgOne: trend3, imgTwo: tr3, title: '41000 Wooden stripe',description: '' },
            { imgOne: trend4, imgTwo: tr4, title: '40901 Golden square',description: '' },
            { imgOne: trend5, imgTwo: tr5, title: '10462 Rustic oak', description:'Brąz jest klasyką wśród kolorów aranżacji wnętrz. Dlatego tapety z ciepłymi brązowymi motywami doskonale sprawdzą się w stylowych wnętrzach - salonu, biura, przedpokoju, czy jadalni.' },
            { imgOne: trend6, imgTwo: tr6, title: '14240 Driftwood', description: '' },
            { imgOne: trend7, imgTwo: tr7, title: '10442 Winebox light grey', description: '' },
            { imgOne: trend8, imgTwo: tr8, title: '10432 Winebox', description: 'Rustykalny wystrój do różnych aranżacj wnętrz. Co powiesz na wykorzystanie gotowej otapetowanej ściany w biurze ? A może jako ściana w rustykalnej kuchni? Niektórzy uważają, że ten rodzaj płyt jest idealny do kącika czytelniczego lub biblioteki. Opcje są nieograniczone, a wybór należy do Ciebie!' },
            { imgOne: trend9, imgTwo: tr9, title: '10452 Crusoe', description: 'Spójrz na kolory wykorzystane do stworzenia tapety! Piękna mieszanka czerni, błękitu i szarości.' },
            { imgOne: trend10, imgTwo: tr10, title: '4651 White metallic deco', description: 'Tapeta charakteryzująca się wspaniałym metalicznym połyskiem. Idealnie pasuje do stylu glamour, jak i minimalistycznej stylistyki wnętrza.' },
            { imgOne: trend11, imgTwo: tr11, title: '14232 Metallic plain black', description: 'Tapeta do zastosowania w odważnej aranżacji salonu, sypialni, łazienki lub innych pomieszczeń. Tapeta wyjątkowo podkreśla zarówno nowoczesny, jak i minimalistyczny wystrój wnętrza. Dobrym dopasowaniem do tego wystroju jest: 14230 Metallic plain silver 14237 Metallic stripe silver/black' },
            { imgOne: trend12, imgTwo: tr12, title: '14238 Metallic Snow white', description: '14238 Metallic Snow White wraz z dekorem 14242 Metallic stripe snow white/silver' },
            { imgOne: trend13, imgTwo: tr13, title: '40391 Verve silver leafs', description: 'Tapeta idealnie pasująca do dekoru 40291 Verve plain uni' },
            { imgOne: trend14, imgTwo: tr14, title: '40291 Verve plain uni', description: 'Tapeta idealnie pasująca do dekoru 40391 Verve silver leafs' },
            { imgOne: trend15, imgTwo: tr15, title: '14230 Metallic plain silver', description: 'Eleganckie tapety z przewodnim srebrnym motywem to idealne uzupełnienie aranżacji ścian w salonie oraz sypialni. Na zdjęciu przedstawiono dekor 14230 Metallic plain silver (Metaliczny gładki srebrny) w połączeniu z dekorem  14232 Metallic plain black (Metaliczny gładki czarny). Dobrym dopasowaniem do tego wystroju jest: 14237 Metallic stripe silver/black 14242 Metallic stripe snow white/silver' },
            { imgOne: trend16, imgTwo: tr16, title: '14231 Metallic plain purple', description: '' },
            { imgOne: trend17, imgTwo: tr17, title: '14232 Metallic plain black', description: 'Tapeta do zastosowania w odważnej aranżacji salonu, sypialni, łazienki lub innych pomieszczeń. Tapeta wyjątkowo podkreśla zarówno nowoczesny, jak i minimalistyczny wystrój wnętrza. Dobrym dopasowaniem do tego wystroju jest: 14230 Metallic plain silver 14237 Metallic stripe silver/black' },
            { imgOne: trend18, imgTwo: tr18, title: '14237 Metallic stripe silver black', description: 'Dobrym dopasowaniem do tego wystroju jest: 14230 Metallic plain silver 14232 Metallic plain black' }],
            CLASSIC: [{ imgOne: classic1, imgTwo: cl1, title: '4150 Grey deco', description: 'Szary, klasyczny dekor daje możliwość zabawy akcesoriami w różnych kolorach zamiast nakładania koloru na ścianę.' },
            { imgOne: classic2, imgTwo: cl2, title: '4147 White deco', description: 'Aranżaując wnętrza dekorem white deco łatwo dopasować do niego inne kolory, np. mebli i dodatków. Białe ściany są też doskonałym tłem dla dekoracyjnych przedmiotów.' },
            { imgOne: classic3, imgTwo: cl3, title: '14213 Plain offwhite', description: 'Ten rodzaj tapety doskonale pasuje do tapety 14214 Stripes offwhite/beige' },
            { imgOne: classic4, imgTwo: cl4, title: '14214 Stripes offwhite/beige', description: '' },
            { imgOne: classic5, imgTwo: cl5, title: '14217 Narrow stripes offwhite/blue ', description: '' },
            { imgOne: classic6, imgTwo: cl6, title: '14218 Narrow stripes offwhite/beige', description: 'Klasyczna tapeta w pasy o pięknym beżowym kolorze.' },
            { imgOne: classic7, imgTwo: cl7, title: '14219 Plain light beige', description: '' },
            { imgOne: classic8, imgTwo: cl8, title: '14221 Stripes offwhite/pearl/white', description: '' },
            { imgOne: classic9, imgTwo: cl9, title: '14220 Offwhite for pearl', description: 'Tapeta 14220 Offwhite for pearl tworzy unikalny wystrój w połączeniu z tapetą 14221 Stripes offwhite pearl white' },
            { imgOne: classic10, imgTwo: cl10, title: '40692 Flow stripes light concrete', description: 'Szary jest kolorem achromatycznym tak więc doskonale prezentuje się w zestawieniu z dowolnym kolorem. Wysokiej jakości tapeta 40692 Fow srips light concrete tworzy nisamowite wnętrza w polączniu z tapetami: 40592 Flow plain light concrete 40590 Flow plain offwhite concrete.' },
            { imgOne: classic11, imgTwo: cl11, title: '40590 Flow plain offwhite concrete', description: '' },
            { imgOne: classic12, imgTwo: cl12, title: '40592 Flow plain light concrete', description: '' },
            { imgOne: classic13, imgTwo: cl13, title: '40591 Flow plain dark concrete', description: '' },
            { imgOne: classic14, imgTwo: cl14, title: '40597 Flow plain light grey concrete', description: '' },
            { imgOne: classic15, imgTwo: cl15, title: '40599 Flow plain dark grey concrete', description: '' },
            { imgOne: classic16, imgTwo: cl16, title: '40699 Flow stripes grey concrete', description: '' },
            { imgOne: classic17, imgTwo: cl17, title: '40593 Flow plain blue concrete', description: '' },
            { imgOne: classic18, imgTwo: cl18, title: '40191 Textile stripes offwhite beige silver', description: '40191 Textile stripes to tapeta o bardzo wysokiej jakości z eleganckim wykończeniem tekstylnym. Tapeta z brązowym motywamem doskonale sprawdzi się w stylowych wnętrzach - polecamy do salonu, biura czy przedpokoju. To także doskonały wybór do jadalni - stylowy żyrandol zrównoważy piękny połysk eleganckich srebrnych pasków.' }],
            BASIC: [{ imgOne: basic1, imgTwo: bs1, title: '14243 Light textile', description: 'Light textile' },
            { imgOne: basic2, imgTwo: bs2, title: '14244 Grey textile', description: 'Grey textile' },
            { imgOne: basic3, imgTwo: bs3, title: '55F Beige Linnen', description: 'Beige linnen' },
            { imgOne: basic4, imgTwo: bs4, title: '54F Melinga crystal white', description: 'Melinga crystal white' }]
        }


        let renderPanels = panels[this.state.type]

        return (
            <Container>
                {this.state.productView ? <div className={styles.walls4youProduct}>
                <div onClick={this.handleBack} className={styles.back}>Powrót</div>
                    <ProductView exitOff={this.props.exitOff} img2={this.state.img} title={this.state.title} description={this.state.description} />
                </div> : <div className={styles.walls4youProduct}>
                        <div className={styles.menu}>
                            <div onClick={this.handleMenuChange} className={styles.block}>
                                TREND
                </div>
                            <div onClick={this.handleMenuChange} className={styles.block}>
                                CLASSIC
                </div>
                            <div onClick={this.handleMenuChange} className={styles.block}>
                                BASIC
                </div>
                        </div>

                        <div className={styles.board}>

                            {renderPanels.map(panel => <div className={styles.panel}>
                                <div description={panel.description} title={panel.title} img2={panel.imgTwo} onClick={this.handleProductView} className={styles.panel__button}>
                                </div>
                                <img src={panel.imgOne} className={styles.panel__img} />
                            </div>)}


                        </div>



                    </div>}

            </Container>
        )
    }
}



export default walls4youProduct
