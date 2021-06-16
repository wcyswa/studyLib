/**
 * create by wangchunyan1 on 2021/6/8
 */
import {Component} from 'react';
import { Router, Route, Switch } from 'react-router'
import routes from './routes-config'
function App3(){
    return (
        <Router history={}>
            <Switch>

                {
                    routes.map((item,index)=>{
                        return <Route path={item.path} key={index} exact={item.exact} render={item.component}/>
                    })
                }
            </Switch>
        </Router>
    );
}

export default App3;
