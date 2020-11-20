import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data.js'
export const ProductContext = React.createContext();



class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            detailProduct: detailProduct
        }
    }
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem]
        })

        this.setState(() => {
            return { products: tempProducts }
        })
    }
    handleDetail = () => {
        console.log('hello from detail')
    }
    addToCart = () => {
        console.log('hello from cart')
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



export const ProductConsumer = ProductContext.Consumer
export default ProductProvider