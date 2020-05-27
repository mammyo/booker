import React, {Component} from 'react';
import {post} from 'axios';

class CustomerAdd extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            userId: '',
            password: '',
            email: '',
            fileName: '',
        }
    }

    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.addCustomer()
        .then((response) => {
            console.log(response.data);
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange =(e) => {
        let nextState ={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer =() => {
        const url = '/api/users';
        const formData = new FormData();
        formData.append(`image`, this.state.file)
        formData.append(`name`, this.state.file)
        formData.append(`id`, this.state.file)
        formData.append(`email`, this.state.file)
        const config ={
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmimt}>
                <h1>회원가입</h1>
                프로필 이미지:<input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/>
                name: <input type="text" name="userName" vlaue={this.state.userName} onChange={this.handleValueChange}/>
                id: <input type="text" name="userId" vlaue={this.state.userName} onChange={this.handleValueChange}/>
                email:<input type="text" name="email" vlaue={this.state.userName} onChange={this.handleValueChange}/>
                <button type="submit">추가하기</button>
            </form>
        );
    }
}

export default CustomerAdd;