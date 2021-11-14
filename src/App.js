import './App.css';
import PayrollForm from './components/payroll-form/PayrollForm';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch, 
    Route , 
  }from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
    
        <Route exact path="/" component={Home} />
        <Route path="/add" component={PayrollForm} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
