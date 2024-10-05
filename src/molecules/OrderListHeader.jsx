import React from 'react'
import Add from '../atoms/icons/Add'
import FunnelSimple from '../atoms/icons/FunnelSimple'
import ArrowDownUp from '../atoms/icons/ArrowDownUp'
import SearchInput from '../atoms/SearchInput'
import { css } from '@emotion/css'

const OrderListHeader = () => {
  return (
    <div className={css`display: flex; align-items: center; justify-content: space-between; padding: 8px; border-radius: 8px; background: #F7F9FB; margin: 20px 0px`}>
        <div className={css`display: flex; align-items: center; gap: 20px; cursor: pointer`}>
            <Add/>
            <FunnelSimple/>
            <ArrowDownUp/>
        </div>
        <SearchInput/>
    </div>
  )
}

export default OrderListHeader