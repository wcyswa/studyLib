/**
 * create by wangchunyan1 on 2021/7/7
 */
import React,{Component} from "react";
import MyContext from "../../context/myContext";
import CounterAgeContext from "../../context/counterAgeContext";
import List from './list/index';
export default class Home extends Component{

    state={
        ageCounter:1,
        list : [
            {
                id:1,
                name:'学生1',
                age:18,
                hobbies:['A','B','V']
            },
            {
                id:2,
                name:'学生2',
                age:18,
                hobbies:['A','V']
            },
            {
                id:3,
                name:'学生3',
                age:18,
                hobbies:['B','V']
            }
        ]
    }

    updateHobbies=(id,hobby)=>{
        const {list} = this.state;
        const res = list.find(item=>{
            return item.id === id;
        })
        res.hobbies.push(hobby);
        this.setState({
            list: [...list]
        })
    }

    updateAgeCounter=(value)=>{
        this.setState({
            ageCounter:value
        })
    }

    render() {
        console.log('context provider 父组件')
        return(
            <CounterAgeContext.Provider value={{
                ageCounter:this.state.ageCounter,
                updateAgeCounter:this.updateAgeCounter
            }}>
                <MyContext.Provider value={{
                    updateHobbies:this.updateHobbies
                }}>
                    <List list={this.state.list}/>
                </MyContext.Provider>
            </CounterAgeContext.Provider>
        )
    }
}
