import { css } from '@emotion/css'
import React from 'react'
import Breadcrumb from '../atoms/Breadcrumb'
import Sidebar from '../atoms/icons/Sidebar'
import Star from '../atoms/icons/Star'
import SearchInput from '../atoms/SearchInput'
import Sun from '../atoms/icons/Sun'
import CounterClock from '../atoms/icons/CounterClock'
import Bell from '../atoms/icons/Bell'
import ResponsiveDiv from '../molecules/ResponsiveDiv'
import Text from '../atoms/Text'
import LeftSidebar from './LeftSidebar'

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
    const [toggle, setToggle] = React.useState(false)
    return (
        <header className={css`display: flex; justify-content: space-between; padding: 20px 28px; border-bottom: 1px solid #e0e0e0`}>
            <div className={css`display: flex; align-items: center; gap: 20px`}>
                <ResponsiveDiv
                    xs={css`display: none`}
                    sm={css`display: none`}
                    md={css`display: none`}
                    xl={css`display: block`}
                    lg={css`display: block`}
                    xxl={css`display: block`}
                >
                    <Sidebar />
                </ResponsiveDiv>
                <ResponsiveDiv
                    xs={css`display: block`}
                    sm={css`display: block`}
                    md={css`display: block`}
                    xl={css`display: none`}
                    lg={css`display: none`}
                    xxl={css`display: none`}
                >
                    <span
                        onClick={() => setToggle(!toggle)}

                    >
                        &#9776;
                    </span>
                </ResponsiveDiv>
                <Star />
                <ResponsiveDiv
                 xs={css`display: none`}
                 sm={css`display: none`}
                 md={css`display: none`}
                 xl={css`display: block`}
                 lg={css`display: block`}
                 xxl={css`display: block`}
                
                >
                <Breadcrumb data={data} />
                </ResponsiveDiv>
            </div>
            <div className={css`cursor: pointer; display: flex; align-items: center; gap: 12px`}>
                {/* <SearchInput /> */}
                <Sun />
                <CounterClock />
                <Bell />
                <Sidebar />
            </div>
            {toggle && <LeftSidebar
                style={
                `
                 position: absolute;
                 top: 62px;
                 background: white;
                 z-index: 9;
                `
                }
            />}
        </header>
    )
}

export default Header