import React, {Component} from 'react'
import {Form, Input, Button, message} from 'antd';
import qs from 'qs';
import {Redirect} from 'react-router'
import request from '../../request';
import "./LoginForm.css";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

class LoginForm extends Component {

    state = {
        isLogin: false
    }

    onFinish = (values: any) => {
        const {password} = values;
        request.post('/api/login', qs.stringify({password: password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((res) => {
            if (res.data) {
                this.setState({
                    isLogin: true
                })
            } else {
                message.error('登录失败')
            }
        });
    };

    onFinishFailed = (errorInfo: any) => {
        message.error('请输入密码')
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {isLogin} = this.state;
        return (
            <div className={'loginBox'}>
                {
                    isLogin ? <Redirect to={'/'} /> :
                        <Form
                            {...layout}
                            name="basic"
                            initialValues={{remember: true}}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="密码"
                                name="password"
                                rules={[{required: true, message: '请输入密码'}]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                }

            </div>
        );
    }
}

export default LoginForm;
