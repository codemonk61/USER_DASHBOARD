import { css } from '@emotion/css'
import React from 'react'
import {  useSelector } from 'react-redux'
import Text from '../atoms/Text'
import Profile from '../molecules/Profile'

const RightSidebar = () => {

  const data = useSelector(state => state.rightSideBarData)

  return (
    <aside className={css`padding: 20px; border-left: 1px solid #e0e0e0; height: 100vh`}>
       {
        data.map((datum)=>{
         
          return(
            <React.Fragment key={datum.heading}>
              <Text fontStyleGuide="heading2" mb="sm" mt="sm">{datum.heading}</Text>
              {
                 datum.data.map((innerDatum, index)=>{
                 return <Profile {...innerDatum } isLast={index === datum.data.length - 1} key={index}/>
                })
              }
            </React.Fragment>
          )
        })
       }
    </aside>
  )
}

export default RightSidebar