
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./walls4youProduct.module.css"

import ProductView from '../components/ProductView'

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

import classic1 from '../images/walls2paint/classic/classic1.jpg'
import classic2 from '../images/walls2paint/classic/classic2.jpg'
import classic3 from '../images/walls2paint/classic/classic3.jpg'
import classic4 from '../images/walls2paint/classic/classic4.jpg'
import classic5 from '../images/walls2paint/classic/classic5.jpg'
import classic6 from '../images/walls2paint/classic/classic6.jpg'

class walls4youProduct extends Component {

    state = {
        type: 'TREND',
        productView: false
    }

    componentDidMount() {
        this.setState({ type: this.props.type })
    }

    handleMenuChange = (e) => {

        this.setState({ type: e.target.innerHTML })
    }
    handleProductView = () => {
        this.setState({ productView: true })
    }

    render() {

        let panels = {
            TREND: [{ imgOne: trend1, imgTwo: '', description: 'desc' },
            { imgOne: trend2, imgTwo: '', description: 'desc' },
            { imgOne: trend3, imgTwo: '', description: 'desc' },
            { imgOne: trend4, imgTwo: '', description: 'desc' },
            { imgOne: trend5, imgTwo: '', description: 'desc' },
            { imgOne: trend6, imgTwo: '', description: 'desc' },
            { imgOne: trend7, imgTwo: '', description: 'desc' },
            { imgOne: trend8, imgTwo: '', description: 'desc' },
            { imgOne: trend9, imgTwo: '', description: 'desc' },
            { imgOne: trend10, imgTwo: '', description: 'desc' },
            { imgOne: trend11, imgTwo: '', description: 'desc' },
            { imgOne: trend12, imgTwo: '', description: 'desc' },
            { imgOne: trend13, imgTwo: '', description: 'desc' },
            { imgOne: trend14, imgTwo: '', description: 'desc' }],
            CLASSIC: [{ imgOne: classic1, imgTwo: '', description: 'desc' },
            { imgOne: classic2, imgTwo: '', description: 'desc' },
            { imgOne: classic3, imgTwo: '', description: 'desc' },
            { imgOne: classic4, imgTwo: '', description: 'desc' },
            { imgOne: classic5, imgTwo: '', description: 'desc' }]
        }


        let renderPanels = panels[this.state.type]

        return (
            <Container>
                {this.state.productView ? <div className={styles.walls4youProduct}>
                    <ProductView />
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
                                <div onClick={this.handleProductView} className={styles.panel__button}>
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
