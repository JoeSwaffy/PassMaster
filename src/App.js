import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path ="/dashboard">
              <Dashboard />
            </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
