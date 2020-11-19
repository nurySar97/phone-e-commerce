import React, { Component } from 'react';
import Product from './components/Product';
export const ProductContext = React.createContext()


class ProductProvider extends Component {
    render() {
        return (
            <ProductContext.Provider value="">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}








export const ProductConsumer = ProductContext.Consumer
export default ProductProvider
