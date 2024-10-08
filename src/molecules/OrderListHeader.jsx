import React from 'react'
import Add from '../atoms/icons/Add'
import FunnelSimple from '../atoms/icons/FunnelSimple'
import ArrowDownUp from '../atoms/icons/ArrowDownUp'
import SearchInput from '../atoms/SearchInput'
import { css } from '@emotion/css'
import ResponsiveDiv from './ResponsiveDiv'
import Search from '../atoms/icons/Search'

const OrderListHeader = () => {
  return (
    <div className={css`display: flex; align-items: center; justify-content: space-between; padding: 8px; border-radius: 8px; background: #F7F9FB; margin: 20px 0px`}>
        <div className={css`display: flex; align-items: center; gap: 20px; cursor: pointer`}>
            <Add/>
            <FunnelSimple/>
            <ArrowDownUp/>
        </div>
       <ResponsiveDiv
         xs={css`display: none`}
         sm={css`display: none`}
         md={css`display: none`}
         xl={css`display: block`}
         lg={css`display: block`}
         xxl={css`display: block`}
       >
       <SearchInput/>
       </ResponsiveDiv>
       <ResponsiveDiv
        xs={css`display: block`}
        sm={css`display: block`}
        md={css`display: none`}
        xl={css`display: none`}
        lg={css`display: none`}
        xxl={css`display: none`}
       >
          <Search/>
       </ResponsiveDiv>
    </div>
  )
}

export default OrderListHeader