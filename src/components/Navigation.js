
import React, {Component} from "react"
import { Link } from "gatsby"
import "./navigation.css"

class Navigation extends Component  {
  state={
    activeWrapper: false,
    mobile: false,
    walls: true,
    ceiling: false,
    floors: false
  }
componentDidMount(){
 
  if(window.innerWidth < 700){
    this.setState({mobile: true})
  }

  window.addEventListener('resize', function(){
  
  })
}


  handleWrapper = (e) => {
    let body = document.querySelector('body')
    let blur = document.querySelector('.blur')

    if(!this.state.mobile){
      this.setState({activeWrapper: !this.state.activeWrapper})
      document.querySelector('.wrapper__right').classList.remove('active__wrapper__right')
     !this.state.activeWrapper ? blur.style.height = body.offsetHeight - 222 + 'px' : blur.style.height = 0 + 'px'
   
   
    } else{
      document.querySelector('.products__wrapper').classList.toggle('active__wrapper--mobile')
    }
  
 
  }
handleWrapperRight = (e) => {
  let type = e.target.getAttribute('type')
  document.querySelector('.wrapper__right').classList.add('active__wrapper__right')

  if(type === 'walls'){
    this.setState({walls:true, ceiling:false, floor:false})
    
  }

  if(type === 'ceiling'){
    this.setState({walls:false, ceiling:true, floor:false})
    
  }
  if(type === 'floor'){
    this.setState({walls:false, ceiling:false, floor:true})
    
  }
console.log(e.target.parent)

}

handleBlur = () => {
  this.setState({activeWrapper: false})
}

handleHamburgerMenu =() => {
  document.querySelector('.hamburger__links').classList.toggle('hamburger__active')
}
  render(){

  return (
    <div className='navigation'>
    
      <div className="navigation__header">
        <div className="header__number"> <div className="navigation__number--icon"></div> <p>+48 666 982 260</p> </div>
        <div className="header__email"> <div className="navigation__email--icon"></div> <p>biuro@smart-panel.pl</p> </div>
      </div>
      <div className='navigation__block'>
        <div className='block__left'>


        </div>
        <div className='block__right'>
          <div className='right__links hamburger__links'>
            <Link to='/' className={'link link__home' + `${this.props.path === '/' && ' active__page'}`}>Home</Link>
            <a id='wrapper' onClick={this.handleWrapper}  className={'link link__products' + `${this.props.path === '/Produkty/' && ' active__page'}`}>Produkty
               
            </a>
            <div className={`products__wrapper + ${this.state.activeWrapper && ' active__wrapper'}`}>
                <div className="wrapper__left">
                  <div type='walls' onClick={this.handleWrapperRight} className="walls --flex"> <p type='walls'>Płyty ścienne</p> <p type='walls'>></p> </div>
                  <div type='ceiling' onClick={this.handleWrapperRight} className="ceiling --flex"><p type='ceiling'>Płyty sufitowe</p> <p type='ceiling'>></p> </div>
                  <div type='floor' onClick={this.handleWrapperRight} className="floor --flex"><p type='floor'>Płyty konstrukcyjne </p> <p type='floor'>></p> </div>
                </div>
                <div className="wrapper__right">
                  <div className="wrapper__right__content">
                  {this.state.walls && <div className='wrapper__walls'>
                  <Link to='/Walls2paint/'> <div className="walls__walls2paint">Walls2paint</div></Link>
                  <Link to='/walls4you/'> <div className="walls__walls4you">Walls4you</div></Link>
                  <Link to='/Elitex/'><div className="walls__elitex">EliteX</div></Link>
                  <Link to='/onestepscienne/'>  <div className="walls__onestep">One-step wall</div></Link>
                  <Link to='/3WallPlytyScienne/'>  <div className="walls__onestep">3Wall</div></Link>
                  <Link to='/MalowanePedzlem/'>  <div className="walls__onestep">Malowane Pędzlem</div></Link>
                  </div>}
                  {this.state.ceiling && <div className='wrapper__ceiling'>
                  <Link to='/onestep/'>  <div className="ceiling__onestep">One-step ceiling</div></Link>
                  </div>}
                  {this.state.floor && <div className='wrapper__floor'>
                  <p><Link to='/Produkty/'>Forestia</Link> </p>
                    <div className="wrapper__line"></div>
                    <p><Link to='/Produkty/'>Huntonit</Link></p>
                  </div>}
                  
                  </div>

                </div>
              </div>

            <Link to='/Inspiracje/' className={'link link__inspirations' + `${this.props.path === '/Inspiracje/' && ' active__page'}`}>Inspiracje</Link>
            <Link to='/Download/' className={'link link__download' + `${this.props.path === '/Download/' && ' active__page'}`}>Do pobrania</Link>
            <Link to='/Wspolpraca/' href="" className={'link link__coop' + `${this.props.path === '/Wspolpraca/' && ' active__page'}`}>Współpraca</Link>



          </div>
        <div onClick={this.handleHamburgerMenu} className="hamburger__menu">
        
        </div>
        </div>

      </div>
      
      <div className="main__line">
      </div>
      
      <div onClick={this.handleBlur} className={`blur + ${this.state.activeWrapper && ' blur__active'}`}></div>
    </div>
  )
}
}



export default Navigation
