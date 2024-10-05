import { css } from '@emotion/css'
import React from 'react'
import Text from './Text'

const Breadcrumb = (props) => {
    const {data} = props
  return (
    <div className={css`display: flex; align-itmes: center; gap: 8px`}>
        {
            data.map((datum, index)=>{
                const isLast = data.length - 1 === index
               return(
                <React.Fragment key={datum.id}>
                  <Text fontStyleGuide="body2">{datum.title}</Text>
                  {!isLast && <Text fontStyleGuide="body2">/</Text>}
                </React.Fragment>
               )
            })
        }
    </div>
  )
}

export default Breadcrumb