import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Index from "./pages/index";

function App() {
  return (
      <>
          <BrowserRouter>
              <Switch>
                  <Route path={'/'} exact component={Index}/>
                  <Route path={'/home'}  component={Home}/>
                  <Route path={'/about'}  component={About}/>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;
