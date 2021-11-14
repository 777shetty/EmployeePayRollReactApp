import React from "react";
import './Display.scss';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import profile from '../../assets/profile-images/Ellipse -3.png';

const Display = (props) => {
    return (
        <table id="display" className="table">
            <tbody>
                <tr key={-1}>
                    <th></th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Actions</th>
                </tr>
                {
                    props.employeeArray && props.employeeArray.map((element, index) => (
                        <tr key={index}>
                           
                            <td><img className="profile" alt="" src={profile} /></td>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.department && element.department.map(dept => (
                                <div className="dept-label">{dept}</div>
                            ))}</td>
                            <td>{element.salary}</td>
                            <td>{element.startDate}</td>
                            <td>
                                <img alt="delete" src={deleteIcon} />
                                <img alt="edit" src={editIcon} />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Display;