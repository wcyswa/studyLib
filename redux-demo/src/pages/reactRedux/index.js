/**
 ** Created By wangchunyan on 2021/7/17
 * redux 结合react 使用
 */
import React, {useState} from "react";
import CounterProvider from './providers/counterProvider';
import CounterProviderHooks from './providers/counterProviderHooks';
import CounterProviderChaiFen from './providers/counterProviderChaiFen'
import CounterProviderCombine from './providers/counterProviderCombine'
import CounterProviderCombineAsync from './providers/counterProviderCombineAsync'
import CounterProviderCombineAsyncThunk from './providers/counterProviderCombineAsyncThunk'
import './index.css'

const tabList=[{
        tab:1,
        title:'connect'
    },
    {
        tab:2,
        title:'hooks useSelector'
    },
    {
        tab:3,
        title:'手动拆分state'
    },
    {
        tab:4,
        title:'combineReducer拆分state'
    },
    {
        tab:5,
        title:'异步请求数据'
    },
    {
        tab:6,
        title:'异步请求数据-thunk'
    }
]

export default function Index(){
    const [activeTab,setActiveTab] = useState(1);

    const renderTabCom=(activeTab)=>{
        switch (activeTab){
            case 1:
                return <CounterProvider/>
            case 2:
                return <CounterProviderHooks/>
            case 3:
                return <CounterProviderChaiFen/>
            case 4:
                return <CounterProviderCombine/>
            case 5:
                return <CounterProviderCombineAsync/>
            case 6:
                return <CounterProviderCombineAsyncThunk/>
            default:
                return <div>暂无</div>
        }
    }

    return <>
        <h2>redux 结合react 使用</h2>
        {
            tabList.map(item=>{
                return <span className={item.tab === activeTab ? 'active':'normal'} key={item.tab} onClick={()=>{setActiveTab(item.tab)}}>
                    {item.title}
                </span>
            })
        }
        {
            renderTabCom(activeTab)
        }
    </>
};
