import React from "react";
import { css } from '@emotion/css'
import { keyMirror } from "../../utils/helpers";

export const justifyContents = keyMirror('start', 'center', 'end', 'space-between', 'space-around');

const calculateWidth = (val) => ((parseInt(val) / 24) * 100);
const colCss = (val) => css`
  display: ${val ? 'block' : 'none'};
  flex: 0 0 ${calculateWidth(val)}%;
  max-width: ${calculateWidth(val)}%;
`;

/**
 * Col concept copying from antd
 */
export default ({ 
  children,
  flex,
  alignItems = 'left',
  span = 24,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  RenderAs='div', 
  ...props 
}) => {
  
  return (
    <RenderAs
      className={css`
        position: relative;
        max-width: 100%;
        min-height: 1px;
        text-align: ${alignItems};
        ${flex && !isNaN(Number(flex)) && `flex: ${flex} ${flex} auto;`}
        ${flex && isNaN(Number(flex)) && `flex: 0 0 ${flex};`}
        ${flex && flex === "auto" && `flex: 1 1 auto;`}
        ${span && !flex && colCss(span)}
        @media(min-width: 0px) {
          ${xs && colCss(xs)};
          ${xs === 0 && `display: none;`}
        }
        @media(min-width: 576px) {
          ${sm && colCss(sm)};
          ${sm === 0 && `display: none;`}
        }
        @media(min-width: 768px) {
          ${md && colCss(md)};
          ${md === 0 && `display: none;`}
        }
        @media(min-width: 992px) {
          ${lg && colCss(lg)};
          ${lg === 0 && `display: none;`}
        }
        @media(min-width: 1200px) {
          ${xl && colCss(xl)};
          ${xl === 0 && `display: none;`}
        }
        @media(min-width: 1600px) {
          ${xxl && colCss(xxl)};
          ${xxl === 0 && `display: none;`}
        }
      `}
      {...props}
    >
      {children}
    </RenderAs>
  )
}