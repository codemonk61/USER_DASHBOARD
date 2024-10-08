import React from 'react';
import BreakPointers from '../atoms/layout/BreakPointers';



const Div = ({ RenderAs='div', children, ...props }) => (<RenderAs {...props}>{children}</RenderAs>)
export default BreakPointers(Div);