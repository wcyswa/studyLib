import React, {Component} from "react";
import {Button,message} from 'antd';
import axios from 'axios';
import {Redirect} from 'react-router'
import './styles.css'

export default class Home extends Component {

    state = {
        isLogin: false,
        isLoaded: false,
    };

    componentDidMount(): void {
        axios.get('/api/isLogin').then((res) => {
            console.log(res)
            let state = res.data?.data;
            console.log(state, '状态')
            this.setState({
                isLogin: state,
                isLoaded: true
            })
            console.log(res, '接口返回')
        })
    }

    loginOut(){
        axios.get('/api/logOut').then((res)=>{
            if(res.data?.data){
                message.success('登出成功')
            }
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {isLogin, isLoaded} = this.state;
        return (
            <div className={'box'}>
                {
                    isLoaded ?
                        isLogin ?
                            <div>
                                <h3>welcome</h3>
                                <div className={'handleBox'}>
                                    <Button type={"primary"} onClick={this.loginOut.bind(this)}>登出</Button>
                                    <Button type={"primary"}>爬取</Button>
                                    <Button type={"primary"}>展示</Button>
                                </div>

                            </div>
                            :
                            <Redirect to={'/login'} />
                        :
                        <div>加载中。。。</div>
                }
            </div>
        )
    }
}
