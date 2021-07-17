import {Provider} from "react-redux";
import store from "../../../reduxStore/counter";
import Num from "../num";

/**
 ** Created By wangchunyan on 2021/7/17
 *  connect 应用在类组件和函数组件中，获取store中的数据
 */
function CounterProvider(){
    return <Provider store={store}>
        <h3>connect 应用在类组件和函数组件中，获取store中的数据</h3>
        <Num title={'num值变化'}/>
    </Provider>
}
export default CounterProvider;