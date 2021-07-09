/**
 * create by wangchunyan1 on 2021/7/9
 *
 */
import {memo} from "react";
import './index.css'
const MyName =({username,changeUsername})=>{
    console.log(username, '发送')
    return (
        <div>
            {`芳名${username}`}
            <button onClick={()=>{changeUsername(username.concat(Math.random().toString(16).substring(2,3)))}}>改名</button>

            <div className={'main'}>
                <p className={'p'}>我是什么颜色色</p>
                <p className={' colorB colorA'}>我是什么颜色色fsdf</p>
            </div>
        </div>
    )
}
export default memo(MyName);
