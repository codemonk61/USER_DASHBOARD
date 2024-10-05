import React from 'react'
import Text from '../atoms/Text'
import ArrowRaise from '../atoms/icons/ArrowRaise'
import ArrowFall from '../atoms/icons/ArrowFall'
import { css } from '@emotion/css'

const cardColorMapper = {
    Customers: "#E3F5FF",
    Orders: "#F7F9FB",
    Revenue: "#F7F9FB",
    Growth: "#E5ECF6",
}

const SummaryCard = ({
    title = "Revenue",
    count = "12345",
    percentage_change = "+15.01%",
    status = "raise"
},) => {
    return (
        <div className={css`background: ${cardColorMapper[title]}; border-radius: 16px; padding: 12px`}>
            <Text fontStyleGuide="heading1" mb="lg">{title}</Text>
            <div className={css`display: flex; align-items: center; justify-content: space-between`}>
                <Text fontStyleGuide="title4">{count}</Text>
                <div className={css`display: flex; align-items: center;gap: 4px`}>
                    <Text fontStyleGuide="body3">{percentage_change}</Text>
                    {status === "raise" ? <ArrowRaise /> : <ArrowFall />}
                </div>
            </div>
        </div>
    )
}

export default SummaryCard