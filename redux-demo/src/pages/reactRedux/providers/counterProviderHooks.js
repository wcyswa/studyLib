import {Provider} from "react-redux";
import store from "../../../reduxStore/counter";
import Total from "../total";

/**
 ** Created By wangchunyan on 2021/7/17
 *  hooks 中使用redux
 */
function CounterProviderHooks(){
    return <Provider store={store}>
        <h3>hooks 中使用redux</h3>
        <Total/>
    </Provider>
}
export default CounterProviderHooks;