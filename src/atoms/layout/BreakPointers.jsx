import React from 'react';
import { css } from '@emotion/css'

export const margins = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lmd: '16px',
  lg: '18px',
  xlg: '24px',
  xxlg: '32px',
  xxxlg: '64px',
}

/**
 * Use this hoc to create components with css styling available on all 
 * appropriate breakpoints
 */
export default (Component) => ({
  xs = '',
  sm = '',
  md = '',
  lg = '',
  xl = '',
  xxl = '',
  mb,
  mr,
  ml,
  mt,
  children,
  ...props
}) => (
  <Component
    className={css`
      margin-bottom: ${margins[mb] || '0px'};
      margin-right: ${margins[mr] || '0px'};
      margin-left: ${margins[ml] || '0px'};
      margin-top: ${margins[mt] || '0px'};
      @media(min-width: 0px) {
        ${xs};
      }
      @media (min-width: 0px) and (max-width: 575px) {
        ${xs === null && `display: none;`}
        ${xs === true && `display: block;`}
      }
      @media(min-width: 576px) {
        ${sm};
      }
      @media (min-width: 576px) and (max-width: 767px) {
        ${sm === null && `display: none;`}
        ${sm === true && `display: block;`}
      }
      @media(min-width: 768px) {
        ${md};
      }
      @media (min-width: 768px) and (max-width: 991px) {
        ${md === null && `display: none;`}
        ${md === true && `display: block;`}
      }
      @media(min-width: 992px) {
        ${lg};
      }
      @media (min-width: 992px) and (max-width: 1199px) {
        ${lg === null && `display: none;`}
        ${lg === true && `display: block;`}
      }
      @media(min-width: 1200px) {
        ${xl};
      }
      @media (min-width: 1200px) and (max-width: 1599px) {
        ${xl === null && `display: none;`}
        ${xl === true && `display: block;`}
      }
      @media(min-width: 1600px) {
        ${xxl};
        ${xxl === null && `display: none;`}
        ${xxl === true && `display: block;`}
      }
    `}
   {...props} 
  >
    {children}
  </Component>
)