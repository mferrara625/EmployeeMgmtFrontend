import React from 'react';
import BorderCard from "../common/BorderCard";
import Container from '../common/Container';

const Employee = (props) => {
    const {id, firstName, lastName, department, salary} = props.employee;

    console.log(props.employee);

    const onSelect = () => {
        props.onSelect(id);
    }

    return (
        <BorderCard onClick={onSelect} style={{flexDirection: "column", alignItems: "center"}}>
            <h2>{firstName + " " + lastName}</h2>
            <div style={{flexDirection: "column"}}>
                <p>Department: {department}</p>
                <p>Salary: {salary}</p>
            </div>
        </BorderCard>
    )
}

export default Employee;