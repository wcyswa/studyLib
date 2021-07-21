/**
 * create by wangchunyan1 on 2021/7/7
 */
import {Component} from "react";
import styles from './index.modules.css';
import MyContext from "../../../context/myContext";

/*
* Provider Consumer 实现
* */
export default class Student1 extends Component{

    static contextType = MyContext;

    componentDidMount() {

    }

    render(){
        const {id, name, age, hobbies} = this.props.student;
        console.log(this.context, '方式')
        const {updateHobbies} = this.context;
        return (
            <ul className={styles.box}>
                <li>{id}</li>
                <li>{name}</li>
                <li>{age}</li>
                <li>{hobbies.join('-')}</li>
                <li><button onClick={()=>{updateHobbies(id, Math.random()*10 +'contextType')}}>修改兴趣</button></li>
            </ul>
        )
    }
}

