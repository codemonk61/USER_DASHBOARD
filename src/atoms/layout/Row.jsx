import React from "react";
import { css } from '@emotion/css'
import { keyMirror } from "../../utils/helpers";


export const justifyContents = keyMirror('start', 'center', 'end', 'space-between', 'space-around', 'space-evenly');
export const alignItems = keyMirror('top', 'center', 'baseline', 'end', 'flex-start')

/**
 * Row concept copying from antd
 */
export default ({ 
  children,
  justify,
  align,
  gutter = 16,
  RenderAs='div',
  noWrap = false,
  ...props 
}) => {
  let defaultXGutter = 0, defaultYGutter = 0;
  if(Array.isArray(gutter)) {
    [defaultXGutter, defaultYGutter] = gutter;
  }
  if(!isNaN(gutter)) {
    defaultYGutter = gutter;
    defaultXGutter = - 1 * gutter / 2;
  }
  return (
    <RenderAs
      className={css`
        display: flex;
        ${!noWrap && `flex-flow: row wrap;`};
        row-gap: ${defaultYGutter}px;
        margin-left: ${defaultXGutter}px;
        margin-right: ${defaultXGutter}px;
        ${justify && `justify-content: ${justifyContents[justify]};`}
        ${align && `align-items: ${alignItems[align]};`}

        > * {
          padding-left: ${-1 * defaultXGutter}px;
          padding-right: ${-1 * defaultXGutter}px;
        }
      `}
      {...props}
    >
      {children}
    </RenderAs>
  )
}