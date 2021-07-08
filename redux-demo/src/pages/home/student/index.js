/**
 * create by wangchunyan1 on 2021/7/7
 */
import {Component} from "react";
import styles from './index.modules.css';
import {Consumer} from "../../../context/myContext";
import CounterAgeContext from "../../../context/counterAgeContext";

/*
* Provider Consumer 实现
* */
export default class Student extends Component{

    componentDidMount() {

    }

    render(){
        const {id, name, age, hobbies} = this.props.student;
        return(
            <>
                <Consumer>
                    {
                        value=>{
                            const {updateHobbies} = value;
                            return (
                                <ul className={styles.box}>
                                    <li>{id}</li>
                                    <li>{name}</li>
                                    <li>{age}</li>
                                    <li>{hobbies.join('-')}</li>
                                    <li><button onClick={()=>{updateHobbies(id, Math.random().toString(16).substring(2,4))}}>修改兴趣</button></li>
                                </ul>
                            )
                        }
                    }
                </Consumer>
                <CounterAgeContext>
                    {
                        value=>{
                            const {ageCounter, updateAgeCounter} = value;
                            return <>
                                <h4>CounterAgeContext:{ageCounter}</h4>
                                <button onClick={()=>{updateAgeCounter(ageCounter+1)}}>增加</button>
                            </>
                        }
                    }
                </CounterAgeContext>
            </>

        )
    }
}

