import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class header extends Component{

    render(){
        return(
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div className="header-menu">
                            <a href="login.html">고객센터</a>
                            <a href="login.html">로그인</a>
                            <a href="login.html">회원가입</a>
                        </div>
                        <div className="header-tit">
                            <h1><Link to="/">Booker</Link></h1>
                        </div>
                        <div className="header-icon">
                        </div>
                        <div className="herder-nav">
                            <div className="dropdown">
                                <button className="dropbtn">우리가게 관리</button>
                                <div className="dropdown-content">
                                    <a href="!#">메뉴 관리</a>
                                    <a href="!#">메뉴 품절</a>
                                    <a href="!#">정보 수정요청</a>
                                    <a href="!#">영업 임시중지</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">광고관리</button>
                                <div className="dropdown-content">
                                    <a href="!#">메뉴 관리</a>
                                    <a href="!#">메뉴 품절</a>
                                    <a href="!#">정보 수정요청</a>
                                    <a href="!#">영업 임시중지</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">사장님꿀팁</button>
                                <div className="dropdown-content">
                                    <a href="!#">메뉴 관리</a>
                                    <a href="!#">메뉴 품절</a>
                                    <a href="!#">정보 수정요청</a>
                                    <a href="!#">영업 임시중지</a>
                                </div>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn">제휴혜택</button>
                                <div className="dropdown-content">
                                    <a href="!#">메뉴 관리</a>
                                    <a href="!#">메뉴 품절</a>
                                    <a href="!#">정보 수정요청</a>
                                    <a href="!#">영업 임시중지</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;
