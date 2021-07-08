/**
 * create by wangchunyan1 on 2021/7/8
 */
import {createContext} from "react";
const CounterAgeContext = createContext();
const {Provider,Consumer} = CounterAgeContext;
export {Provider, Consumer};
export default CounterAgeContext;
