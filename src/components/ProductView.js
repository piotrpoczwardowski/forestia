
import React, { Component } from "react"
import { Link } from "gatsby"

import Container from '../components/container'
import styles from "./ProductView.module.css"



class walls4youProduct extends Component {

    state = {
        type: 'TREND'
    }


    render() {






        return (
            <Container>
                <div className={styles.productView}>

                    <div className={styles.left}>
                        <img src={this.props.img2} alt="" />
                    </div>
                    <div className={styles.right}>
                        <p> {this.props.title}</p>
                        <p>{this.props.description}</p>
                    </div>




                </div>
            </Container>
        )
    }
}



export default walls4youProduct
