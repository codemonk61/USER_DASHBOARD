import React from 'react';
import Breakpointer from '../../atom/layout/Breakpointer';


const Div = ({ RenderAs='div', children, ...props }) => (<RenderAs {...props}>{children}</RenderAs>)
export default Breakpointer(Div);