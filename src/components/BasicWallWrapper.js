
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./BasicWallWrapper.module.css"




class walls4youProduct extends Component {

    state = {
       imgView: "",
       sizes: [],
       title: ""
    }

    componentDidMount(){
      
       let decor = this.props.panel.colors[0]
       this.handleImgView(decor);
    }
 

    handleImgView = (decor) => {
        this.setState({imgView: decor.imgView, sizes: decor.sizes, title: decor.title});
    }


    render() {

       




        return (
            <Container>
               
                <div className={styles.walls__wrapper}>
                <div className={styles.wrapper__left}>
                                    <div className={styles.left__title}>Dostęþne kolory:</div>
                                    <div className={styles.decor__container}>
                                        <div className={styles.left__decors}>
                                           
                                            {this.props.panel.colors.map(decor =>  <div onClick={() => this.handleImgView(decor)} className={styles.decor}>
                                                <div style={{backgroundImage: `url(${decor.img})`}} className={styles.decor__img}></div>
                                                <div className={styles.decor__title}>{decor.title}</div>
                                                <div className={styles.decor__number}>{decor.description}</div>
                                            </div> )}

                                        </div>
                                    </div>
                                    <div className={styles.grey__line}>

                                    </div>
                                </div>
                                <div className={styles.wrapper__right}>
                                    <div className={styles.right__title}>{this.state.title}</div>
                                    <div style={{backgroundImage: `url(${this.state.imgView})`}} className={styles.right__img}></div>
                                    <div className={styles.sizes__title}>Dostępne wymiary:</div>
                                    <div className={styles.sizes}>
                                        {this.state.sizes.map(size => <p>{size}</p>)}
                                    </div>
                                </div>
                            </div>
            </Container>
        )
    }
}



export default walls4youProduct
