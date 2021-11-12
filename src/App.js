import './App.css';
import PayrollForm from './components/payroll-form/PayrollForm';
import {
  BrowserRouter as Router,
  Switch, 
    Route , 
    Redirect,
  }from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" component={PayrollForm} exact />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
