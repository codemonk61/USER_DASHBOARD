import { css } from '@emotion/css'
import React from 'react'
import Breadcrumb from '../atoms/Breadcrumb'
import Sidebar from '../atoms/icons/Sidebar'
import Star from '../atoms/icons/Star'
import SearchInput from '../atoms/SearchInput'
import Sun from '../atoms/icons/Sun'
import CounterClock from '../atoms/icons/CounterClock'
import Bell from '../atoms/icons/Bell'

const data = [
    {
        title: "Dashboards",
        id: "qwerty1"
    },
    {
        title: "Default",
        id: "qwerty2"
    }
]

const Header = () => {
    return (
        <header className={css`display: flex; justify-content: space-between; padding: 20px 28px; border-bottom: 1px solid #e0e0e0`}>
            <div className={css`display: flex; align-items: center; gap: 20px`}>
                <Sidebar />
                <Star />
                <Breadcrumb data={data} />
            </div>
            <div className={css`cursor: pointer; display: flex; align-items: center; gap: 12px`}>
                <SearchInput />
                <Sun />
                <CounterClock />
                <Bell />
                <Sidebar />
            </div>
        </header>
    )
}

export default Header