/**
 * create by wangchunyan1 on 2021/7/9
 *
 */
import {useCallback, useContext, useMemo, useState} from "react";
import CounterAgeContext from "../../../context/counterAgeContext";
import MyName from "./myName";
const AboutMe =()=>{
    const {age, updateAge} = useContext(CounterAgeContext); //  接收的参数必须是context对象本身
    const [username, setUsername] = useState('wcy');
    const [sex, setSex] = useState('未知');
    const newUsername = useMemo(()=>{return username}, [username]);


    const changeUsername = (value) =>{
        setUsername(value);
    }

    const newChangeUsername = useCallback(changeUsername,[sex]);

    return (
        <div>
            {`芳龄：${age} --- 性别：${sex}`}
            <button onClick={()=>{updateAge(age+1)}}>长大一岁</button>
            <button onClick={()=>{setSex(sex.concat('1'))}}>变性</button>
            <button onClick={()=>{setSex(sex)}}>保持变性</button>
            <MyName username={newUsername} changeUsername={newChangeUsername}/>
        </div>
    )
}
export default AboutMe;
