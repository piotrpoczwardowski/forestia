
import React, { Component } from "react"


import Container from '../components/container'
import styles from "./textureWallWrapper.module.css"
import symfoni1 from '../images/textureWall/symfoni1/symfoni1.jpg'
import symfoniWhiteView from '../images/textureWall/symfoni1/white.jpg'



class TextureWallWrapper extends Component {

    state = {
        panel: {},
        decor: {
            img: symfoni1,
            title: 'Symfoni white',
            title2: 'Symfoni white',
            code: 'NCS 0502 Y',
            view: symfoniWhiteView
        },
    }

    componentWillMount(){
       
   
    }
    changeDecor = (decor) => {
        this.setState({decor})
    } 

    render() {

       let panel = this.props.panel



        return (
            <Container>

                <div className={styles.textureWallWrapper}>
                <div className={styles.decors}>
                {panel.colors.map(decor => <div onClick={() => this.changeDecor(decor)} className={styles.decor}>
                        <div style={{backgroundImage: `url(${decor.img})`}} className={styles.decor__img}>

                        </div>
                        <div className={styles.decor__description}>
                            <p>{decor.title}</p>
                            <p>{decor.code}</p>
                        </div>
                    </div> )}
                
                </div>
                <div className={styles.decor__view}>
                <p className={styles.view__title}>{this.state.decor.title2} </p>
                <div style={{backgroundImage: `url(${this.state.decor.view})`}} className={styles.view__img}> </div>
                <div className={styles.view__description}>
                <div  className={styles.description__title}>Dostępne wymiary:</div>
                <div className={styles.description__sizes}>{panel.sizes}</div>
                
                 </div>
                </div>
                    {/* <div className={styles.decor}>
                        <div className={styles.decor__img}>

                        </div>
                        <div className={styles.decor__description}>
                            <p>Symfoni Mist</p>
                            <p>NCS 3000 N</p>
                        </div>
                    </div> */}
                </div>



            </Container>
        )
    }
}



export default TextureWallWrapper
