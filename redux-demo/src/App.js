import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Index from "./pages/index";
import ReduxTest from './pages/reduxTest';
import ReactRedux from './pages/reactRedux';

function App() {
  return (
      <>
          <BrowserRouter>
              <Switch>
                  <Route path={'/'} exact component={Index}/>
                  <Route path={'/home'}  component={Home}/>
                  <Route path={'/about'}  component={About}/>
                  <Route path={'/reduxTest'}  component={ReduxTest}/>
                  <Route path={'/reactRedux'}  component={ReactRedux}/>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;
