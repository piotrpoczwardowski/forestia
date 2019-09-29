
import React, { Component } from "react"

import "./hero.css"

class Hero extends Component {

    state = {
        selector: 1
    }

    handleChange = (e) => {
        let allSlides = document.querySelectorAll('.slide')
        allSlides.forEach(function (element) {
            element.style.display = 'none'
        })

       
        let number = e.currentTarget.getAttribute('data-select')
        
        var el = document.querySelector(`.slide${number}`)
        el.style.display = 'block'
       

    }

    render() {
        let title = 'walls2paint'
        let description = ''



        return (
            <div className='hero'>
                <div className="arrow__left arrow">
                    <div className="arrow__image left"></div>

                </div>
                <div className="hero__content">
                    <div className="hero__left">
                        <div className="slides">
                            <div className="slide slide1 "></div>
                            <div className="slide slide2 "></div>
                            <div className="slide slide3"></div>
                            <div className="slide slide4"></div>
                        </div>

                        <div className="left__selectors">
                            <div data-select='1' onClick={this.handleChange} className="selector selector1"></div>
                            <div data-select='2' onClick={this.handleChange} className="selector selector2"></div>
                            <div data-select='3' onClick={this.handleChange} className="selector selector3"></div>
                            <div data-select='4' onClick={this.handleChange} className="selector selector4"></div>
                        </div>
                    </div>
                    <div className="hero__right">
                    <div className="texts">
                    <div className="text1 text">
                    <p className="right__title">
                            walls<span className='title__number'>2</span>paint
                    </p>
                        <p className="right__description">
                            Nowe ściany gotowe od zaraz! <br /> 1.Instalujesz 2.Malujesz 3.Dużo czasu i oszczędności zyskujesz!
                    </p>
                        <button className="right__button">Sprawdz</button>
                        <div className="line">
                        </div>
                    </div>
                    <div className="text2 text">
                    <p className="right__title">
                            walls<span className='title__number'>4</span>you
                    </p>
                        <p className="right__description">
                        Płyty ścienne z nałożoną tapetą.
Wybierz Swoją kombinację i zaoszczędź wiele godzin pracy!
                    </p>
                        <button className="right__button">Sprawdz</button>
                        <div className="line">
                        </div>
                    </div>
                    </div>
                       
                    </div>

                </div>
                <div className="arrow__right arrow">
                    <div className="arrow__image right">
                    </div>
                </div>

            </div>
        )
    }
}



export default Hero
