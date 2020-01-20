
import React, { Component } from "react"
import { Link } from "gatsby"
import "./navigation.css"


class Navigation extends Component {
  state = {
    wrapper: false,
    mobileWrapper: false,
    linkNumber: 0
  }

  componentDidMount() {
    if (window.innerWidth < 680) {
      let links = document.querySelector('.links')
      let linksRight = document.querySelector('.navigation__wrapper')

      let targetLinks = document.querySelector('.mobile__wrapper');
      let targetRightLinks = document.querySelector('.mobile__products');
      targetLinks.appendChild(links);
      targetRightLinks.appendChild(linksRight);
    }
  }
  activeWrapper = (e) => {
    e.preventDefault();
    this.setState({ wrapper: !this.state.wrapper });
    let wrapperRight = document.querySelector('.wrapper__right');
    if (this.state.wrapper) {


      wrapperRight.classList.remove('wrapperRight__active');
    }
  }
  changeMenu = (e) => {
    var number = e.target.getAttribute('type');
    let wrapperRight = document.querySelector('.wrapper__right');
    wrapperRight.classList.add('wrapperRight__active');



    if (number == null) {
      number = e.target.parentElement.getAttribute('type');
    }

    let allLinks = document.querySelectorAll('.right__links')
    allLinks.forEach(function (el) {
      el.style.display = 'none'
    })
    let activeLink = document.querySelector(`.right__link${number}`);
    activeLink.style.display = 'flex'


  }
  clone = () => {

    let links = document.querySelector('.links');
    let blur = document.querySelector('.blur');
    links.classList.toggle('mobileWrapper__active');
    this.setState({ mobileWrapper: !this.state.mobileWrapper });
  }
  render() {

    var blur = false;
    if (this.state.mobileWrapper) {
      blur = true;
    }
    if (this.state.wrapper) {
      blur = true;
    }
    if (!this.state.wrapper && !this.state.mobileWrapper) {
      blur = false
    }

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
            <Link to='/' href=""><div className="logo"></div></Link>
          </div>
          <div className="links">
            <Link to='/'>Home</Link>
            <a className="links__product" onClick={this.activeWrapper}>Produkty</a>
            <div className="mobile__products"></div>
            <Link to='/Inspiracje'>Inspiracje</Link>
            <Link to='/Download'>Do pobrania</Link>
            <Link to='/Wspolpraca'>Współpraca</Link>
          </div>
          <div onClick={this.clone} className="hamburger__icon">
          </div>
        </div>
        <div className="main__line"></div>
        <div className="mobile__wrapper"></div>
        <div onClick={this.activeWrapper} className={blur ? "blur blur__active" : "blur"}></div>
        <div className={this.state.wrapper ? "navigation__wrapper active__wrapper" : "navigation__wrapper"}>
          <div className="wrapper__left">
            <div onClick={this.changeMenu} type="1" className="wrapper__button"> <p>Płyty Ścienne Forestia</p> <p>></p> </div>
            <div onClick={this.changeMenu} type="2" className="wrapper__button"><p>Płyty Ścienne Huntonit</p> <p>></p> </div>
            <div onClick={this.changeMenu} type="3" className="wrapper__button"><p>Płyty Sufitowe Forestia</p><p>></p></div>
            <div onClick={this.changeMenu} type="4" className="wrapper__button"><p>Płyty Sufitowe Huntonit</p><p>></p></div>
            <div onClick={this.changeMenu} type="5" className="wrapper__button"><p>Płyty Konstrukcyjne</p><p>></p></div>
          </div>
          <div className="wrapper__right">
            <div type="1" className=" right__links right__link1">
              <Link to='/Walls2paint'>Walls2paint</Link>
              <Link to='/walls4you'>Walls4you</Link>
              <Link to='/Elitex'>Elitex</Link>
              <Link to='/onestepscienne'>One-step wall</Link>
              <Link to='/3WallPlytyScienne'>3Wall</Link>
              <Link to='/MalowanePedzlem'>Malowane Pędzlem</Link>
            </div>
            <div type="2" className=" right__links right__link2">
              <Link to='/BasicWall'>Basic Wall</Link>
            </div>
            <div type="3" className=" right__links right__link3">
              <Link to='/onestep'>One-step ceiling</Link>

            </div>
            <div type="4" className=" right__links right__link4">
              <Link to='/BasicCeiling'>Basic ceiling</Link>
              <Link to='/textureCeiling'>Texture ceiling</Link>
            </div>
            <div type="5" className=" right__links right__link5">

            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Navigation
