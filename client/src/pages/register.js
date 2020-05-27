import React, {Component} from 'react';
import { TextField, Button } from "@material-ui/core"
import CustomerAdd from '../components/CustomerAdd.js';

const regiContainer ={
    float: "left",
    width: "1120px", 
    height:"1140px", 
    margin: "30px 30px 30px 0",
}

const center = {
    position:"absolute", 
    top:"50%", left:"50%",
    transform: "translate(-50%, -50%)",
}

class Register extends Component{
    render(){
        return(
            <div style={regiContainer}>
                회원가입
                <CustomerAdd/>
                <div style={center}>
                    
                    <br/><br/>
                    아이디<br/><TextField label="Id" /><Button variant="contained" color="secondary">중복확인</Button>
                    <br/><br/>
                    비밀번호<br/><TextField label="Password" />
                    <br/><br/>
                    비밀번호확인<br/><TextField label="re:Password" />
                    <br/><br/>
                    이메일<br/><TextField label="email" />
                </div>
            </div>
        );
    }
}

export default Register;