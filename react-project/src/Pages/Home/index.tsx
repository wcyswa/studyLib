import React, {Component} from "react";
import {Button, message} from 'antd';
import request from '../../request';
import {Redirect} from 'react-router'
import './styles.css'

export default class Home extends Component {

    state = {
        isLogin: false,
        isLoaded: false,
    };

    componentDidMount(): void {
        request.get('/api/isLogin').then((res) => {
            let state = res.data;
            this.setState({
                isLogin: state,
                isLoaded: true
            });
        })
    }

    loginOut() {
        request.get('/api/loginOut').then((res) => {
            if (res.data) {
                message.success('登出成功')
                this.setState({
                    isLogin: false
                })
            }
        })
    }

    getData() {
        request.get('/api/getData').then(res => {
            if (res.data) {
                this.showData();
                message.success('获取成功');
            }
        })
    }

    showData() {
        request.get('/api/showData').then(res => {
            console.log(res, '范德萨')
            if (res.data) {
                let r: any[] = [];
                console.log(...Object.values(res.data), '数组展开')
                r.push(...Object.values(res.data));
                console.log(r, 'value值', r.values())
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
                                    <Button type={"primary"} onClick={this.getData.bind(this)}>爬取</Button>
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
