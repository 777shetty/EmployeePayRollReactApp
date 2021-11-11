import React ,{useState, useEffect}from 'react';
import profile1 from '../../assets/profile-images/Ellipse-3.png';
import profile2 from '../../assets/profile-images/Ellipse 1.png';
import profile3 from '../../assets/profile-images/Ellipse-8.png';
import profile4 from '../../assets/profile-images/Ellipse-7.png';
import './payroll-form.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import {useParams,Link,withRouter} from "react-router-dom";

const PayrollForm=(props)=>{
    let initialValue={
        name:'',
        profileArray: [
            {url:'../../assets/profile-images/Ellipse-3.png'},
            {url:'../../assets/profile-images/Ellipse 1.png'},
            {url:'../../assets/profile-images/Ellipse-8.png'},
            {url:'../../assets/profile-images/Ellipse-7.png'},
        ],
        allDepartment: [
            "HR","sales","Finance","Engineers","Others"
        ],
        departMentValue: [],
        gender:'',
        salary:'',
        day:'1',
        month:'Jan',
        year:'2021',
        startDate:'',
        notes:'',
        id:'',
        profileUrl:'',
        isUpdate:false,
        error:{
            department:'',
            name:'',
            gender:'',
            salary:'',
            profileUrl:'',
            startDate:''

        }
    }
    const[formValue,setForm]=useState={initialValue};
    const changeValue=  (event)=>{
        setForm({...formValue,[event.target.name]:event.target.value})

    }
    const onCheckChange=(name)=>{
        let index =formValue.departMentValue.indexOf(name);
        let checkArray =[...formValue.departMentValue]
        if(index> -1)
        checkArray.splice(index,1);
        else
        checkArray.push(name);
        setForm({...formValue,departMentValue:checkArray});
    }
    const getChecked=(name)=>{
    return formValue.departMentValue && formValue.departMentValue.includes(name);
    }
    const validData=async()=>{
let isError=false;
let error ={
    department:'',
            name:'',
            gender:'',
            salary:'',
            profileUrl:'',
            startDate:''

}
if(formValue.name.length<1){
error.name='name is required feild'
isError=true;
    }
    if(formValue.gender.length<1){
        error.gender='gender is required feild'
        isError=true;
    
    }
    if(formValue.salary.length<1){
        error.salary='salary is required feild'
        isError=true;
    }
    if(formValue.profileUrl.length<1){
        error.profileUrl='profileUrl is required feild'
        isError=true;
    }
    if(formValue.departMentValue.length<1){
        error.departMentValue='departmentvalue is required feild'
        isError=true;
    }
    await setForm({...formValue,error:error})
    return isError;
  }
  const save=async(event)=>{
      event.preventDefault();
      }
      const reset =()=>{
          setForm({...initialValue,id:formValue.id,isUpdate:formValue.isUpdate});
          console.log(formValue);

      }
      return(
          <div className="payroll-main">
              <Toolbar/>
              <div className="content">
                  <form className="form" action ="#" on onSubmit={save}>
                      <div className="form-head">EmployeePayroll Form</div>
                      <div className="row">
                          <label className="label-text" htmlFor="name">Name</label>
                          <input className="input" type="text"id="name" value ={formValue.name}onChange={changeValue}placeholder="YourName..."/>      
                      </div>
                      <div className="error">{formValue.error.name}</div>
                      <div className="row">
                          <label className="label-text" htmlfor="profileUrl">Profile Image</label>
                           <div className="profile-radio-button">
                               <label>
                               <input  type="radio" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse-3.png'}id="name" value ={formValue.name} name="profilUrl" value="../../assets/profile-images/Ellipse-3.png"onChange={changeValue}/> 
                                   <img className="profile" src={profile1}/>
                                   </label>
                                   <label>
                               <input  type="radio" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse 1.png'}id="name" value ={formValue.name} name="profilUrl" value="../../assets/profile-images/Ellipse 1.png"onChange={changeValue}/> 
                                   <img className="profile" src={profile2}/>
                                   </label>
                                   <label>
                               <input  type="radio" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse-8.png'}id="name" value ={formValue.name} name="profilUrl" value="../../assets/profile-images/Ellipse-8.png"onChange={changeValue}/> 
                                   <img className="profile" src={profile3}/>
                                   </label>
                                   <label>
                               <input  type="radio" checked={formValue.profileUrl=='../../assets/profile-images/Ellipse-7.png'}id="name" value ={formValue.name} name="profilUrl" value="../../assets/profile-images/Ellipse-7.png"onChange={changeValue}/> 
                                   <img className="profile" src={profile4}/>
                                   </label>
                                   </div>
                                    </div>
                                    <div className= "error">{formValue.error.profileUrl}</div>
                                    <div className="row">
                                        <label className="label-text" htmlFor="gender">Gender</label>
                                        <div>
                                        <input  type="radio" id="male" onChange={changeValue} name="gender" value="male"/>
                                        <label className="text" htmlFor="male"> Male</label>
                                        <input  type="radio" id="female" onChange={changeValue} name="gender" value="female"/>
                                        <label className="text" htmlFor="female"> Female</label>
                                            </div>
                                            <div>
                                                <div className="error"> {formValue.error.gender}</div>
                                                <div className="row">
                                                <label className="text" htmlFor="department"> Department</label>
                                                <div>
                                                    {formValue.allDepartment.map(item=>(
                                                        <span key={item}>
                                                            <input className="checkbox" type="checkbox" id="female" onChange={()=>onCheckChange(item)} name={item} 
                                                            defaultChecked={()=> getChecked(item)}value ={item}/>
                                                            <label className="text" htmlFor={item}>{item}</label>


                                                        </span>
                                                    ))}
                                                </div>
                                                </div>
                                                <div className="error"> {formValue.error.department}</div>
                                                <div className="row">
                                                <label className="text" htmlFor="salary"> Salary</label>
                                                <input className="input" type="number" onchange={changeValue} id ="salary" value={formValue.salary} name="salary" placeholder="Salary"/>
                                                </div>
                                                <div className="error"> {formValue.error.salary}</div>
                                                <div className="row"> <label className="label-text" htmlFor="startDate">StartDate</label>
                                                </div>
                                                <select onChange={changeValue} id="day" name="day">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    </select>
                                                    <select onChange={changeValue} id="month" name="month">
                                                    <option value="jan">Jan</option>
                                                    <option value="feb">Feb</option>
                                                    </select>
                                                    <select onChange={changeValue} id="year" name="year">
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    </select>
                                                    </div>
                                                    </div>
                                                    <div className="eror">{formValue.error.startDate}</div>
                                                    <div className="row">
                                                        <label className="label-text"htmlfor="notes">Notes</label>
                                                       <textarea onchange={changeValue} id="notes" value={formValue.notes} className="input" name="notes" placeholder=""
                                                       style={{height:'100'}}></textarea>
                                                       </div>
                                                       <div className="buttonParent">
                                                           <a routerLink=""className="resetButton button cancelButton">Cancel</a>
                                                           <div className="submit-reset">
                                                               <button type="submit" className="button submitButton" id="submitButton">{formValue.isUpdate?'Update' :'Submit'}</button>
                                                               <button type="button" onclick={reset} className="resetButton Button">Reset</button>

                                                     </div>
                                                 </div>

                                        </form>
                                </div>
                         </div>

      )
      
}
