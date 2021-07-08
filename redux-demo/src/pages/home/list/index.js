/**
 * create by wangchunyan1 on 2021/7/7
 */
import React from 'react';
import Student from "../student";
import Student1 from "../student1";
import './index.css'

export default class List extends React.Component{
    render(){
        const {list} = this.props;
        return(
            <div className='box'>
                <div>
                    <h3>Consumer</h3>
                    {
                        list.map(item=>{
                            return <Student key={item.id} student={item}/>
                        })
                    }
                </div>

                <div>
                    <h3>contextType</h3>
                    {
                        list.map(item=>{
                            return <Student1 key={item.id} student={item}/>
                        })
                    }
                </div>

            </div>
        )
    }
};
