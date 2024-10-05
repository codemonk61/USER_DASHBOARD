import React from 'react'
import Dot from '../atoms/icons/Dot'
import Text from '../atoms/Text'
import { css } from '@emotion/css'

const styles = {
    wrapper: css`
      display: flex;
      align-items: center;
      margin-top: 4px;
      margin-left: 8px;
      gap: 12px;
    `
}

const ProjectOverviewTab = () => {

    return (
        <div className={css`margin: 20px 0px`}>
            <div className={css`display: flex; align-items: center; gap: 20px; margin-bottom: 4px`}>
                <Text fontStyleGuide="body2">Favorites</Text>
                <Text fontStyleGuide="body2">Recently</Text>
            </div>
            <div>
                <div className={styles.wrapper}>
                    <Dot />
                    <Text fontStyleGuide="body2">Overview</Text>
                </div>
                <div className={styles.wrapper}>
                    <Dot />
                    <Text fontStyleGuide="body2">Projects</Text>
                </div>
            </div>
        </div>
    )
}

export default ProjectOverviewTab