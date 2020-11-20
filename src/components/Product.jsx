import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';




export class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product
        console.log(this.props.product)
        return (
            <>
                <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3'>
                    <div className="card">
                        <div className="img-container p-5" onClick={() => console.log("You Click To Me!")}>
                            <Link to='/details'>
                                <img className='card-img-top' src={img} alt='product' />
                            </Link>
                            <button
                                disabled={inCart ? true : false}
                                className="cart-btn"
                                onClick={() => console.log('added to the cart')}
                            >
                                {inCart ?
                                    <p disabled className="text-capitalize mb-0">
                                        in inCart
                                </p>
                                    :
                                    <i className="fas fa-cart-plus" />
                                }
                            </button>
                        </div>
                        {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">
                                {title}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </div>
                    </div>
                </ProductWrapper>
            </>
        )
    }
}


const ProductWrapper = styled.div`
    
`

export default Product
