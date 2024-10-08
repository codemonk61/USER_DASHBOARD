import { css } from '@emotion/css'
import React from 'react'
import Profile from '../molecules/Profile'
import LeftSideMenus from '../molecules/LeftSideMenus'
import { useSelector } from 'react-redux'
import ProjectOverviewTab from '../molecules/ProjectOverviewTab'
import Text from '../atoms/Text'

const LeftSidebar = ({style}) => {
    const dashboardData = useSelector(state => state.dashboards)
    const pageData = useSelector(state => state.pages)
    return (
        <aside className={css`padding: 20px 16px; border-right: 1px solid #e0e0e0;height: 100vh;${style}`}>
            <Profile />
            <ProjectOverviewTab />
            <div className={css`margin-top: 35px`}>
                <Text fontStyleGuide="body2" mb="xs" color="#1c1c1c44">Dashboards</Text>
                <LeftSideMenus data={dashboardData} />
            </div>
            <div className={css`margin-top: 35px`}>
                <Text fontStyleGuide="body2" mb="xs" color="#1c1c1c44">Pages</Text>
                <LeftSideMenus data={pageData} />
            </div>
        </aside>
    )
}

export default LeftSidebar