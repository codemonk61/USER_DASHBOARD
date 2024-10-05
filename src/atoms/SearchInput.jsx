import React from 'react'
import Search from './icons/Search'
import { css } from '@emotion/css'
import Text from './Text'

const SearchInput = (props) => {
    const { onChange, value } = props
    return (
        <div className={css`background: #f4f4f4; padding: 4px; border-radius: 4px; display: flex; align-itmes: center; justify-content: space-between`}>
            <div className={css`display: flex; align-itmes: center; gap: 4px`}>
            <Search />
            <input
                onChange={onChange}
                value={value}
                className={css`background: #f4f4f4; border: none; outline: none`}
                placeholder='Search'
            />
            </div>
            <Text fontStyleGuide="body2" color="#1C1C1C33">⌘/</Text>
        </div>
    )
}

export default SearchInput