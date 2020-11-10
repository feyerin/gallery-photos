import './App.css';
import LoginPage from './login/containers/loginPage';
import AdminPanelPage from './adminPanel/containers/adminPanelPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from './login/containers/page';

function App() {
  return (
    <Router>
       <div className="App">
        <Switch>
          <Route path="/login">
              <Page/>
          </Route>
          <Route path="/">
              <AdminPanelPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
