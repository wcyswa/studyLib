/**
 * create by wangchunyan1 on 2021/7/9
 */
import {Link} from "react-router-dom";

const Index = () =>{
    return(
        <>
            <Link to={'/home'}> context 测试</Link>
            <Link to={'/about'}> hooks 测试</Link>
        </>
    )
}
export default Index;
