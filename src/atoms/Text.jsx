import React from 'react'
import { css } from '@emotion/css'

const overflowEllipsis = (maxWidth) => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${maxWidth === 'auto' ? 'initial' : maxWidth + 'px'};
`;

export const margins = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lmd: '16px',
    lg: '18px',
    xlg: '24px',
    xxlg: '32px',
    xxxlg: '40px',
    xxxxlg: '64px',
}

const fontStyleGuideMap = {
    title: css`
      font-size: 72px;
      line-height: 76px;
    `,
    title1: css`
      font-size: 48px;
      line-height: 60px;
    `,
    title2: css`
      font-size: 32px;
      line-height: 44px;
    `,
    title3: css`
     font-weight: 600;
      font-size: 24px;
      line-height: 36px;
    `,
    title4: css`
    font-weight: 600;
     font-size: 18px;
     line-height: 30px;
   `,
    heading1: css`
    
      font-size: 16px;
      line-height: 24px;
    `,
    body1: css`
     
      font-size: 16px;
      line-height: 24px;
    `,
    heading2: css`
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    `,
    body2: css`
      font-size: 14px;
      line-height: 20px;
    `,
    heading3: css`

      font-size: 12px;
      line-height: 18px;
    `,
    body3: css`
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    `, 
    body4: css`
      font-size: 10px;
      line-height: 14px;
    `, 
  }

const Text = (
    {
        children,
        RenderAs = "p",
        color = "#1c1c1c",
        mb = "",
        mt = "",
        ml = "",
        mr = "",
        fontStyleGuide="",
        ellipsis="",
        weight=""
    }
) => {
    return (
        <RenderAs
            className={
                css`
                margin-right: ${margins[mr] || '0px'};
                margin-left: ${margins[ml] || '0px'};
                margin-top: ${margins[mt] || '0px'};
                margin-bottom: ${margins[mb] || '0px'};
                color: ${color};
                ${fontStyleGuide && fontStyleGuideMap[fontStyleGuide]};
                ${ellipsis && overflowEllipsis(ellipsis)};
                ${weight && `font-weight: ${weight}`}
            `}
        >
            {children}
        </RenderAs>
    )
}

export default Text