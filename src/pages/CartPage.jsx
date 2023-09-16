import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavHeader from '../components/layout/NavHeader'
import CartTable from '../components/cart/CartTable'

const CartPage = () => {
    const isAuthentication = useSelector((state) => state.auth.isAuthentication)
    const router = useNavigate()
    useEffect(() => {
        if (!isAuthentication) {
            router('/login')
        }
    }, [isAuthentication, router])
    return (
        <React.Fragment>
            <NavHeader title={'Cart'} breadcrumbs={[{ name: 'cart', path: '/cart' }]} />
            <CartTable />
        </React.Fragment>
    )
}

export default CartPage
