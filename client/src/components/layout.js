import React from 'react';
import './layout.css';
import Header from './header.js';
import Footer from './footer.js';
import Main from '../pages/main.js'
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login.js';
import MyPage from '../pages/mypage.js';
import Register from '../pages/register.js';
import Ceo from '../pages/ceo.js';

function Layout() {
  return (
      <div id="wrap">
        <BrowserRouter>
          <Header/>
          <div id="cont_cont">
            <div className="container">
              <div className="cont">
              <Route exact path="/" component={Main}/>
              <Switch>
                <Route path="/login/:name" component={Login}/>   
                <Route path="/login" component={Login}/>
                <Route path="/mypage" component={MyPage}/>
                <Route path="/register" component={Register}/>
                <Route path="/ceo" component={Ceo}/>
              </Switch>
              </div>
            </div>
          </div>
          <Footer/>
        </BrowserRouter>   
      </div>
  );
}

export default Layout;