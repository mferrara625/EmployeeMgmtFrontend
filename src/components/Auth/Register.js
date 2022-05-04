import React, {useState} from "react";
import NewUserForm from "./NewUserForm";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import axios from "axios";
import { apiHostUrl } from "../../config";

const Register = (props) => {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        fName: "",
        lName: "",
        isMember: false,
        licenseNumber: ""
        })
        
    const updateForm = (field, value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = newUser;
        data.username = data.email;
        createUser(data);
    };

    const createUser = async (data) => {
        try{
            const res = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
            console.log(res.data)
            login(data);
        } catch (err) {
            console.error(err.message);
        }
       

    }

    const login = async (data) => {
        try {
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const createCustomer = (data, token) => {

    }

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
            <h1>Register</h1>
            </Splash>
            <NewUserForm
                newUser={newUser}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default Register;