
import React, { Component } from "react"
import { Link } from "gatsby"
import "./hero.css"

class Hero extends Component {

    state = {
        selector: 1
    }
    componentDidMount(){
       
    }

    startInterval = () => {
       
    }
    handleChange = (e) => {
        let allSlides = document.querySelectorAll('.slide')
        let allTexts = document.querySelectorAll('.text')
        let allSelectors = document.querySelectorAll('.selector')
    allSelectors.forEach(function(el){
        el.classList.remove('selector__active')
    })
        allSlides.forEach(function (element) {
            element.style.display = 'none'
        })
        allTexts.forEach(function (element) {
            element.style.display = 'none'
        })


        let number = e.currentTarget.getAttribute('data-select')
        this.setState({ selector: number })

        var slide = document.querySelector(`.slide${number}`)
        var text = document.querySelector(`.text${number}`)
        slide.style.display = 'block'
        text.style.display = 'block'
        var selectors = document.querySelectorAll(`.selector${number}`)
        selectors.forEach(function(el){
            el.classList.add('selector__active')
        })

    }
 handleArrowLeft = () => {
    let nextSelector = this.state.selector - 1
    if(nextSelector < 1){
        nextSelector = 4
    }

    this.setState({selector: nextSelector})
     this.changeSlide(nextSelector)
 }
 handleArrowRight = () => {
    
    let nextSelector = this.state.selector + 1
    if(nextSelector > 4){
        nextSelector = 1
    }

    this.setState({selector: nextSelector})
     this.changeSlide(nextSelector)
 }

 changeSlide = (nextSlide) => {
    let allSlides = document.querySelectorAll('.slide')
    let allTexts = document.querySelectorAll('.text')
    let allSelectors = document.querySelectorAll('.selector')
    allSelectors.forEach(function(el){
        el.classList.remove('selector__active')
    })
    allSlides.forEach(function (element) {
        element.style.display = 'none'
    })
    allTexts.forEach(function (element) {
        element.style.display = 'none'
    })

    var slide = document.querySelector(`.slide${nextSlide}`)
    var text = document.querySelector(`.text${nextSlide}`)
    var selectors = document.querySelectorAll(`.selector${nextSlide}`)
    selectors.forEach(function(el){
        el.classList.add('selector__active')
    })
    slide.style.display = 'block'
    text.style.display = 'block'
     
 }
    render() {
        let title = 'walls2paint'
        let description = ''
        let i = 1

        // let func = () => {
        //     if(i===5){
        //         i=1
        //     }
            
        //     this.changeSlide(i)
        //     i++
        // }

        // setInterval(func, 2000)


        return (
            <div className='hero'>
                <div className="arrow__left arrow">
                    <div onClick={this.handleArrowLeft} className="arrow__image left"></div>

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
                            <div data-select='1' onClick={this.handleChange} className="selector selector1 selector__active"></div>
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
                              <Link to='/Produkty/'>  <button className="right__button button1">Sprawdz</button></Link>
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
                    <Link to='/Produkty/'>  <button className="right__button button2">Sprawdz</button></Link>
                                <div className="line">
                                </div>
                            </div>
                            <div className="text3 text">
                                <p className="right__title right__title3">
                                    eliteX
                    </p>
                                <p className="right__description">
                                    Mocne i solidne płyty ścienne odporne na uszkodzenia.
            Idealny wybór do garażu lub pomieszczeń gospodarczych.
                    </p>
                    <Link to='/Produkty/'>  <button className="right__button button3">Sprawdz</button></Link>
                                <div className="line">
                                </div>
                            </div>
                            <div className="text4 text">
                                <p className="right__title right__title4">
                                    Płyty sufitowe
                One Step-Ceiling
                    </p>
                                <p className="right__description">
                                    Sufit w innym wydaniu? Zapoznaj się z ofertą Naszych płyt
            i wybierz te, które najbardziej odpowiadają Twoim oczekiwaniom.
                    </p>
                    <Link to='/Produkty/'>  <button className="right__button button4">Sprawdz</button></Link>
                                <div className="line">
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="hero__bottom">
                    <div onClick={this.handleArrowLeft} className="arrow__image left">
                    </div>
                        <div className="left__selectors left__selectors--mobile">
                            <div data-select='1' onClick={this.handleChange} className="selector selector1 selector__active"></div>
                            <div data-select='2' onClick={this.handleChange} className="selector selector2"></div>
                            <div data-select='3' onClick={this.handleChange} className="selector selector3"></div>
                            <div data-select='4' onClick={this.handleChange} className="selector selector4"></div>
                        </div>
                        <div onClick={this.handleArrowRight} className="arrow__image right">
                    </div>
                    </div>
                </div>
                <div className="arrow__right arrow">
                    <div onClick={this.handleArrowRight} className="arrow__image right">
                    </div>
                </div>

            </div>
        )
    }
}



export default Hero
