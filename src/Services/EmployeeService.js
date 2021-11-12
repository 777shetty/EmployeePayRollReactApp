import config from "../config/config";
import axios from 'axios';
/*const axios = require('axios').default;*/

export default class EmployeeService {
  baseUrl = config.baseUrl;
  addEmployee(data) {
    return axios.post(`${this.baseUrl}employee`, data);
  }
} 
