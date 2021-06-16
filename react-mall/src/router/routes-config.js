class Home extends React.Component {

    render() {
        return <div>Home</div>
    }
}
class Detail extends React.Component{

    render(){
        return <div>detail</div>
    }
}

class Index extends React.Component {

    render() {
        return <div>index</div>
    }
}

const routes =[
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path: '/detail',
        exact: true,
        component:Detail,
    },
    {
        path: '/detail/:a/:b',
        exact: true,
        component: Detail
    }
]

export default routes;
