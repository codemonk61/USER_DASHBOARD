import React from 'react'
import OrderListTable from '../atoms/OrderListTable'
import Text from '../atoms/Text'
import OrderListHeader from '../molecules/OrderListHeader'
import { css } from '@emotion/css'
import Header from '../layouts/Header'

const OrderList = () => {
  return (
    <>
    <Header/>
    <div className={css`padding: 20px 28px`}>
        <Text fontStyleGuide='heading2' mb="md">OrderList</Text>
        <OrderListHeader/>
        <OrderListTable/>
    </div>
    </>
  )
}

export default OrderList