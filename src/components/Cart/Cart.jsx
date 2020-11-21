import React, { Component } from 'react';
import withProductConsumer from '../../HOC/withProductConsumer';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';


class Cart extends Component {
    render() {
        const { cart } = this.props.value
        return (
            <section>
                {
                    cart.length
                        ? <>
                            <Title name='your' title="cart" />
                            <CartColumns />
                        </>
                        : <EmptyCart />
                }
            </section>
        )
    }
}




export default withProductConsumer(Cart)