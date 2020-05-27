import React, {Component, Fragment} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Mytest extends Component{

    handleCreate =(data)=>{
        console.log(data);
    }

    state = {id:null, title:null};

    // componentDidMount(){
    //     const url = "http://localhost:8080/api/board";
    //     fetch(url)
    //         .then(response =>{
    //             console.log(response);
    //             return response.json();
    //         })
    //         .then(responseData => {
    //             console.log(responseData);
    //             this.setState({
    //                 id: responseData[0].boardIdx,
    //                 title: responseData[0].title
    //             })
    //         });
    // }
    render(){
        return(
            <Fragment>

                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"></img></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.semiCartegory}</TableCell>
                    <TableCell>{this.props.explaination}</TableCell>
                </TableRow>
            </Fragment>
        );
    }
}

// class CustomerProfile extends Component{
//     render(){
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends Component{
//     render(){
//         return(
//             <div>
//                 <p>{this.props.birthday}</p>
//             </div>
//         )
//     }
// }

export default Mytest;