
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./HuntonitWrapper.module.css"




class HuntonitWrapper extends Component {

    state = {
        decor: {},
        displayImg: '',
        slide: 0
    }

    componentDidMount() {
        let decor = this.props.panels[0]
        this.setState({ decor: decor })
    }
    handleDecor = (decor) => {
        this.setState({ decor: decor })
        this.changeSlide(0)
    }
    changeSlideRight = () => {
        let currentSlide = this.state.slide

        let nextSlide
        nextSlide = currentSlide + 1
        let numberOfSlides = this.state.decor.colors.length
        if (nextSlide > numberOfSlides - 1) {
            nextSlide = 0
        }
        this.changeSlide(nextSlide)
    }

    changeSlideLeft = () => {

        let currentSlide = this.state.slide

        let nextSlide
        nextSlide = currentSlide - 1
        let numberOfSlides = this.state.decor.colors.length
        if (nextSlide < 0) {
            nextSlide = numberOfSlides - 1
        }
        this.changeSlide(nextSlide)
    }


    changeSlide = (next) => {
        let allSlides = document.querySelectorAll('.slides')
        let nextSlide = document.querySelector(`.slides${next}`)
        allSlides.forEach(function (el) {
            el.style.display = 'none'
        })
        nextSlide.style.display = 'block'



        this.setState({ slide: next })

    }

    render() {


        let panels = this.props.panels
        
        let styl = {
            decor: {},
            decor__name: {}
        }
        if(this.props.page === '/textureCeiling/'){
            styl.decor.width = '200px'
            styl.decor__name.fontSize = '20px'
        }
        console.log()

        return (
            <Container>

                <div className={styles.menu}>
                    <div className={styles.menu__body}>

                        <div className={styles.menu__left}>
                            <div className={styles.left__title}>Dostępne kolory:</div>
                            <div className={styles.left__decors}>

                                {panels.map(decor => <div style={styl.decor} className={styles.decor}>
                                    <div style={{backgroundImage: `url(${decor.img})`}} className={styles.decor__img}>
                                        <div style={styl.decor__name} className={styles.decor__name}>{decor.name}</div>
                                    </div>
                                    <button onClick={() => this.handleDecor(decor)} className={styles.decor__button}>Sprawdź</button>
                                </div>)}


                            </div>
                        </div>
                        <div  className={styles.menu__right}>
                            <div className={styles.right__title}>{this.state.decor.name}</div>
                            <div className={styles.right__slider}>
                                <div className={styles.slider__left}>
                                    <div onClick={this.changeSlideLeft} className={styles.left__arrow}></div>
                                </div>
                                <div className={styles.slider__center}>

                                    {this.state.decor.colors && this.state.decor.colors.map((color, i) => <div style={{ backgroundImage: `url(${color.img})`, display: `${i != 0 ? 'none' : 'block'}` }} className={`${styles.slide} slides slides${i}`}></div>)}
                                </div>
                                <div className={styles.slider__right}>
                                    <div onClick={this.changeSlideRight} className={styles.right__arrow}></div>
                                </div>
                            </div>
                            <div className={styles.right__bottom}>
                                <div className={styles.bottom__sizes}><div className={styles.sizes__title}>Dostępne wymiary:</div>{this.state.decor.sizes && this.state.decor.sizes.map(size => <p>-{size}</p>)} <p>Kolor {this.state.decor.colorNumber}</p></div>
                                <div className={styles.bottom__descriptions}>
                                    {this.state.decor.colors && this.state.decor.colors[this.state.slide].descriptions.map(description => <p>{description}</p>)}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        )
    }
}



export default HuntonitWrapper
