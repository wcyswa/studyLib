import {Provider} from "react-redux";
import store from "../../../reduxStore/counter_chaifen_combineReducer";
import Total from "../total";
import Num from '../num'

/**
 ** Created By wangchunyan on 2021/7/17
 *  state多了以后，使用combineReducer进行拆分
 */
function Index(){
    return <Provider store={store}>
        <h3>state多了以后，使用combineReducer进行拆分</h3>
        <Total/>
        <Num/>
    </Provider>
}
export default Index;