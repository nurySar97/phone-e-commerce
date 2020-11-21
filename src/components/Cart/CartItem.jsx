import React from 'react'

const CartItem = ({ item, value }) => {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value
    return (
        <div className='row my-1 text-capitalize text-center'>
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    alt="CartItem"
                    style={{ width: '5rem', height: '5rem' }}
                    className='img-fluid'
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> product : </span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none"> price : </span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <span
                        onClick={() => decrement(id)}
                        className="btn btn-black mx-1"
                    >
                        -
                    </span>
                    <span className="btn btn-black mx-1">
                        {count}
                    </span>
                    <span
                        onClick={() => increment(id)}
                        className="btn btn-black mx-1"
                    >
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
