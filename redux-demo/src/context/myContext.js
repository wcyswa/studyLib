/**
 * create by wangchunyan1 on 2021/7/8
 */

import {createContext} from "react";
const context = createContext();
context.displayName ='my first context practice'
const {Provider,Consumer} = context;
export {Provider, Consumer};
export default context;
