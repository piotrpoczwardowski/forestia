
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./DesignWallWrapper.module.css"




class DesignWallWrapper extends Component {

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
                            <div className={styles.left__title}>Dekory Huntonit</div>
                            <div className={styles.left__decors}>

                                {panels.map(decor => <div style={styl.decor} className={styles.decor} onClick={() => this.handleDecor(decor)} >
                                    <div className={styles.decor__img}>
                                        
                                    </div>
                                    <div style={styl.decor__name} className={styles.decor__name}>{decor.name}</div>
                                    
                                </div>)}


                            </div>
                        </div>
                        <div  className={styles.menu__right}>
                            <div className={styles.right__title}>{this.state.decor.name}</div>
                            <div className={styles.right__slider}>
                                
                                <div className={styles.slider__center}>

                                    {this.state.decor.colors && this.state.decor.colors.map((color, i) => <div style={{ backgroundImage: `url(${color.img})`, display: `${i != 0 ? 'none' : 'block'}` }} className={`${styles.slide} slides slides${i}`}></div>)}
                                </div>
                               
                            </div>
                            <div className={styles.right__bottom}>
                                <div className={styles.bottom__description}>{this.state.decor.description && this.state.decor.description.map(desc => <p>{desc}</p>)} </div>
                                
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        )
    }
}



export default DesignWallWrapper
