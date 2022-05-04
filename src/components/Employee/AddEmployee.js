import React, {useState, useContext} from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";
import NewEmployeeForm from "./NewEmployeeForm";
import { AuthContext } from "../Providers/AuthProvider";


const AddEmployee = (props) => {
    const [newEmployee, setNewEmployee] = useState({
        firstName: "",
        lastName: "",
        department: "",
        salary: ""
        })

    const [auth] = useContext(AuthContext);

        
    const updateForm = (field, value) => {
        setNewEmployee({
            ...newEmployee,
            [field]: value
        })
    }

    const onSubmit = () => {
        console.log("Auth test:" + auth.token);
        const data = newEmployee;
        createNewEmployee(data);
    };

    const createNewEmployee = async (data) => {
        console.log("Test 2");
        try{
            const res = await axios.post(`${apiHostUrl}/employees`, data, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            
            console.log(res.data);
            alert("Success!");
        } catch (err) {
            console.error(err.message);
        }
       

    }


    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
            <h1>Add New Employee</h1>
            </Splash>
            <NewEmployeeForm
                newEmployee={newEmployee}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default AddEmployee;