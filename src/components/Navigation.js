
import React, { Component } from "react"
import { Link } from "gatsby"
import "./navigation.css"


class Navigation extends Component {
  state = {
    wrapper: false
  }
activeWrapper = (e) =>{
  e.preventDefault();
  this.setState({wrapper: !this.state.wrapper})
}
changeMenu = (e) => {
 var number = e.target.getAttribute('type');
 if(number == null){
  number = e.target.parentElement.getAttribute('type');
 }

 let allLinks = document.querySelectorAll('.right__links')
 allLinks.forEach(function(el){
  el.style.display = 'none'
 })
 let activeLink = document.querySelector(`.right__link${number}`);
 activeLink.style.display = 'block'
}
  render() {

    return (
      <div className='navigation'>
        <div className="navigation__top">
          <div className="number">
            <div className="number__icon"></div>
            <p>+48 666 982 260</p>
          </div>
          <div className="email">
            <div className="email__icon"></div>
            <p>biuro@smart-panel.pl</p>
          </div>
        </div>
        <div className="navigation__bot">
          <div className="logo__container">
            <Link href=""><div className="logo"></div></Link>
          </div>
          <div className="links">
            <Link>Home</Link>
            <Link className="links__product" onClick={this.activeWrapper}>Produkty</Link>
            <Link>Inspiracje</Link>
            <Link>Do pobrania</Link>
            <Link>Współpraca</Link>
          </div>
        </div>
        <div className="main__line"></div>
        <div onClick={this.activeWrapper} className={this.state.wrapper ? "blur blur__active" : "blur"}></div>
        <div className={this.state.wrapper ? "navigation__wrapper active__wrapper" : "navigation__wrapper"}>
          <div className="wrapper__left">
            <div onClick={this.changeMenu} type="1"  className="wrapper__button"> <p>Płyty Ścienne Forestia</p> <p>></p> </div>
            <div onClick={this.changeMenu} type="2"  className="wrapper__button"><p>Płyty Ścienne Huntonit</p> <p>></p> </div>
            <div onClick={this.changeMenu} type="3"  className="wrapper__button"><p>Płyty Sufitowe</p><p>></p></div>
            <div onClick={this.changeMenu} type="4"  className="wrapper__button"><p>Płyty Konstrukcyjne</p><p>></p></div>
          </div>
          <div className="wrapper__right">
          <div type="1" className=" right__links right__link1">FW</div>
          <div type="2" className=" right__links right__link2">HW</div>
          <div type="3" className=" right__links right__link3">C</div>
          <div type="4" className=" right__links right__link4">F</div>
          </div>
        </div>
      </div>
    )
  }
}



export default Navigation
