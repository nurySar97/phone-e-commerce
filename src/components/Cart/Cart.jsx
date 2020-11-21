import React, { Component } from 'react';
import withProductConsumer from '../../HOC/withProductConsumer';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
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
                            <CartList value={this.props.value} />
                            <CartTotals value={this.props.value} />
                        </>
                        : <EmptyCart />
                }
            </section>
        )
    }
}




export default withProductConsumer(Cart)