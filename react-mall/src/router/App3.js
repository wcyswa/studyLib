/**
 * create by wangchunyan1 on 2021/6/8
 */
import {Component} from 'react';
import { Route } from 'react-router'
import routes from './routes-config'
function App(){
    return (
        <Layout>
            <Switch>

                {
                    routes.map((item,index)=>{
                        return <Route path={item.path} key={index} exact={item.exact} render={item.component}/>
                    })
                }
            </Switch>
        </Layout>
    );
}

export default App;
