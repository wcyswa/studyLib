import {Provider} from "react-redux";
import store from "../../../reduxStore/counter_chaifen_combineReducer_async";
import InfoList from "../infoList";

/**
 ** Created By wangchunyan on 2021/7/17
 *  state多了以后，使用combineReducer进行拆分,且有异步请求
 */
function Index(){
    return <Provider store={store}>
        <h3>state多了以后，使用combineReducer进行拆分,且有异步请求</h3>
        <InfoList/>
    </Provider>
}
export default Index;