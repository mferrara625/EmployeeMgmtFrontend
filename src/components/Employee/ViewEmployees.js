import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import BorderCard from "../common/BorderCard";

const ViewEmployees = (props) => {

    const [auth] = useContext(AuthContext);
    let list = "";

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () =>{
        try{
            const {data: response} = await axios.get(`${apiHostUrl}/employees`, {
                headers : {
                Authorization: `Bearer ${auth.token}`
            }
        });
            setData(response);
            console.log(response);
            for(let i = 0; i < response.length; i++){
                list += <BorderCard>{response[i].firstName} {response[i].lastName} {response[i].department} {response[i].salary}</BorderCard>
                console.log(response[i].lastName);
            }
            
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
            <h1>Employees</h1>
            </Splash>
            {data.map((data) => (
        <p key={data.id}> <BorderCard> <b>First:</b> &nbsp;{data.firstName} &nbsp;&nbsp; <b>Last:</b> &nbsp;{data.lastName} &nbsp;&nbsp; <b>Department:</b> &nbsp;{data.department} &nbsp;&nbsp; <b>Salary:</b> &nbsp;${data.salary} </BorderCard></p>
      ))}
          
        </Container>
    )

}

export default ViewEmployees;