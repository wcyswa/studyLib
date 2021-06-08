/**
 * create by wangchunyan1 on 2021/6/8
 */
import {Component} from 'react';
export default class App extends Component{
    constructor(props) {
        super(props);// 子类调用父类的构造函数，使得子类去使用父类的属性和方法
    }

    render() {
        return <div>前端数据{this.props.data.title}</div>;
    }
}
