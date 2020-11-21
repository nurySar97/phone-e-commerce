import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import withProductConsumer from '../HOC/withProductConsumer'
import Button from './Button'

const Modal = props => {
    const { modalOpen, closeModal } = props.value;
    const { img, title, price } = props.value.modalProduct
    if (!modalOpen) return null
    return (
        <ModalContainer>
            <div className="container">
                <div className="row">
                    <div id='modal' className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                        <h5>item added to the cart</h5>
                        <img src={img} alt="product" className="img-fluid" />
                        <h5>{title}</h5>
                        <h5 className='text-muted'>price: ${price}</h5>
                        <Link to='/'>
                            <Button onClick={() => closeModal()}>
                                Store
                            </Button>
                        </Link>
                        <Link to='/cart'>
                            <Button 
                                cart='yellow' 
                                onClick={() => closeModal()}
                            >
                                go to cart
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    rigth: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    #modal{
        background: var(--mainWhite);
    }
`

export default withProductConsumer(Modal)