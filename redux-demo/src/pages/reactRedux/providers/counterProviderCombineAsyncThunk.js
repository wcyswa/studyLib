import {Provider} from "react-redux";
import store from "../../../reduxStore/counter_chaifen_combineReducer_async_thunk";
import ThunkInfoList from "../thunkInfoList";

/**
 ** Created By wangchunyan on 2021/7/17
 *  state多了以后，使用combineReducer进行拆分,且有异步请求,通过thunk优化代码内容
 */
function Index(){
    return <Provider store={store}>
        <h3>state多了以后，使用combineReducer进行拆分,且有异步请求,通过thunk优化代码内容</h3>
        <ThunkInfoList/>
    </Provider>
}
export default Index;