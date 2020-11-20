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
        this.setState(() => ({ products: JSON.parse(JSON.stringify(storeProducts)) }))
    }
    handleDetail = () => {
        console.log('hello from detail')
    }
    addToCart = (id) => {
        alert(id)
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