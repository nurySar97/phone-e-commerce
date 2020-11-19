import React from 'react'
import { ProductConsumer } from '../context'

const withProductConsumer = Component => {
    return props => {
        return <ProductConsumer>
            {value=><Component {...props} value={value} />}
        </ProductConsumer>
    }
}

export default withProductConsumer
