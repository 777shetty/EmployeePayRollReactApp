import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import addIcon from '../../assets/icons/add-24px.svg';
import './Home.scss';
import EmployeeService from '../../Services/EmployeeService';
import Display from '../display/Display';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchExpand: false,
        employeeArray: [],
        AllEmployeeArray: [],
      };
      this.employeeService = new EmployeeService();
    }
    
    openSearch = () => {
      this.setState({ searchExpand: true });
    };
    componentDidMount() {
      this.getAllEmployee();
    }
  
    getAllEmployee = () => {
      this.employeeService
        .getAllEmployee()
        .then((data) => {
          console.log("data after get ", data.data);
          this.setState({
            employeeArray: data.data,
            AllEmployeeArray: data.data,
          });
        })
        .catch((err) => {
          console.log("err after ", err);
        });
    };
    search = async (event) => {
      let search = event.target.value;
  
      await this.setState({ employeeArray: this.state.AllEmployeeArray });
      let empArray = this.state.employeeArray;
      if (search.trim().length > 0)
        empArray = empArray.filter(
          (element) =>
            element.name.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
  
      this.setState({ employeeArray: empArray });
    };
  
    render() {
      return (
        <div>
          <header className='header row center'>
                  <div className="logo">
                      <img src={logo} alt="" />
                      <div>
                          <span className="emp-text">EMPLOYEE</span> <br />
                          <span className="emp-text emp-payroll">PAYROLL</span>
                      </div>
                  </div>
              </header>
          <div className="column content">
          <div className="emp-detail">
              <div className="detail-text">
                Employee Details <div className="count"></div>
              </div>
                <Link to="/add" className="add-button" >
                  <img src={addIcon} alt="" /> Add User
                </Link>
                </div>
            <div className="table-main">
              <Display
                employeeArray={this.state.employeeArray}
                getAllEmployee={this.getAllEmployee}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  