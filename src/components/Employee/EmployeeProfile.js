import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import BorderCard from "../common/BorderCard";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeProfile = (props) => {

    const [auth] = useContext(AuthContext);
    const params = useParams();
    const [employee, setEmployee] = useState({
        id: params.id
    })

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            console.log("test 1: " + params.id);
        try{
            const {data: response} = await axios.get(`${apiHostUrl}/employees/${employee.id}`, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            setData(response);
            console.log("res" + data.id);
            
        } catch (error) {
            console.error(error.message);
        }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
            <h1>Employee Profile</h1>
            </Splash>
            <BorderCard> <b>First:</b> &nbsp;{data.firstName} &nbsp;&nbsp; <b>Last:</b> &nbsp;{data.lastName} &nbsp;&nbsp; <b>Department:</b> &nbsp;{data.department} &nbsp;&nbsp; <b>Salary:</b> &nbsp;${data.salary} </BorderCard>
      
          
        </Container>
    )

}

export default EmployeeProfile;