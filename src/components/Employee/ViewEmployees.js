import React, {useState, useContext, useEffect} from "react";
import axios from "axios";
import Container from "../common/Container";
import Splash from "../common/Splash";
import RegSplash from "../../assets/regSplash.jpg";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHostUrl } from "../../config";
import BorderCard from "../common/BorderCard";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";

const ViewEmployees = (props) => {

    const [auth] = useContext(AuthContext);
    const navigate = useNavigate();

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
            
        } catch (error) {
            console.error(error.message);
        }
        }
        fetchData();
    }, []);

    const displayEmployees = () => {
        console.log(data);

        return data.map(dat => {
            console.log(dat.id);
            return <Employee employee = {dat} key = {dat.id} onSelect={onSelect}/>
        })

    }

    const onSelect = (id) => {
        navigate(`/employees/${id}`);
    }

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: "20vh",
                color: "#F1F1F1",
                textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000'}}>
            <h1>Employees</h1>
            </Splash>
            { data == null ?
                <p>LOADING...</p>
                :
                displayEmployees()
            }
        </Container>
    )

}

export default ViewEmployees;