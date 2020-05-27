import React from 'react';
import queryString from 'query-string';
import { TextField } from "@material-ui/core"

const loginContainer = {
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

const Login = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    const detail = query.detail === 'true';

    return (
        <div style ={loginContainer}>
            <h2>{match.params.name}</h2>
            {detail && 1}
            <div style={center}>
                <h2>로그인</h2>
                <TextField label="Id" />
                <br/>
                <TextField label="Password" />
            </div>
        </div>
    );
};

export default Login;