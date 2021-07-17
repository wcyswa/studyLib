/**
 * create by wangchunyan1 on 2021/7/9
 */
import {Link} from "react-router-dom";
import './index.css';

const Index = () =>{
    return(
        <div className={'box'}>
            <span><Link to={'/home'}> context 测试</Link></span>
            <span><Link to={'/about'}> hooks 测试</Link></span>
            <span><Link to={'/reduxTest'}> redux 测试</Link></span>
            <span><Link to={'/reactRedux'}> redux结合react 测试</Link></span>
        </div>
    )
}
export default Index;
