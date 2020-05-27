import React, {Component, Fragment} from 'react';
import './main.css'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Mytest from '../pages/mytest.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = theme =>({
    root: {

    },
    table:{
        minwidth: 1080
    },
    progress: {
        margin: theme.spacing.unit * 2
    }
})

class Main extends Component {

    state = {
        customers: "",
        completed: 50,
    }

    componentDidMount(){
        this.timer = setInterval(this.progress, 20);
        this.callApi()
            .then(res => this.setState({customers: res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({completed: completed >= 100 ? 0 : completed + 1});
    }

    render(){
        const {classes}=this.props;
        return (
            <Fragment>
                <div className="column col1">
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>이미지</TableCell>
                                <TableCell>업체명</TableCell>
                                <TableCell>업종</TableCell>
                                <TableCell>상세설명</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.customers ? this.state.customers.map(c => {
                                    return(<Mytest key={c.id} id={c.id} image={c.image} name={c.name} semiCartegory={c.semiCartegory} explaination={c.explaination}/> );
                                }) :
                                    <TableRow>
                                        <TableCell colSpan="5" align="center">
                                            <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                                        </TableCell>
                                    </TableRow>
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div className="column col2">
                    <Link to="/login" className="loginbox">Booker Login</Link>
                    <div className="loginbox-bottom">
                        <a href="!#">아이디</a>/
                        <Link to="/mypage">비밀번호 찾기</Link>
                        <br/>
                        <Link to="/register">회원가입</Link>
                    </div>
                    <Link to="/ceo" className="loginbox">사업자 등록</Link>
                </div>
            </Fragment> 
        );
    }
}

export default withStyles(styles)(Main);