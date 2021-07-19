import {Provider} from "react-redux";
import store from "../../../reduxStore/counter_chaifen";
import Total from "../total";
import Num from '../num'

/**
 ** Created By wangchunyan on 2021/7/17
 *  state多了以后，需要手动拆分
 */
function Index(){
    return <Provider store={store}>
        <h3>state多了以后，需要手动拆分</h3>
        <Total/>
        <Num/>
    </Provider>
}
export default Index;