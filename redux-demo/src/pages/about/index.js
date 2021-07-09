/**
 * create by wangchunyan1 on 2021/7/9
 */
import CounterAgeContext,{Provider} from '../../context/counterAgeContext';
import AboutMe from "./aboutMe";
import {useState} from "react";
const About =()=>{
    const [age, setAge] = useState(18);
    const updateAge=(value)=>{
        setAge(value);
    }
    return(
        <>
            <Provider value={{age,updateAge}}>
                <AboutMe/>
            </Provider>
        </>
    )
}

export default About;
