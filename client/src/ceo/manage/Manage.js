import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Manage.css';
import { Route, Switch } from 'react-router-dom';
import ContainedButtons from '../module/containerbutton/ContainedButtons';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Hair from '../ceopages/Hair';
import Billiyard from '../ceopages/Billiyard';
import Food from '../ceopages/Food';

// function addbutton(abc) {
//     return abc
// }


function Manage() {

  ;

    return (
        <div>
        <div className='managecontainer'>
        <button className='button'><Link to="/ceo/hair">헤어샾</Link></button>
        <button className='button'><Link to="/ceo/food">음식점</Link></button>
        <button className='button'><Link to="/ceo/billiyard">당구장</Link></button>
        <button className='button'>+</button>
        {/* <button onclick="myFunction()">Click me</button> */}
        </div>



        <div className= 'managecontainer2'>
            <Switch>
                    <Route exact path="/ceo/hair" component={Hair}/>
                    <Route exact path="/ceo/food" component={Food}/>
                    <Route exact path="/ceo/billiyard" component={Billiyard}/>
                    
            </Switch>
        </div>
        </div>


        
    
            
    );
}
{/* <button id="button1" onclick="button1_click();">버튼1</button>
<script>
function button1_click() {
	alert("버튼1을 누르셨습니다.");
}
</script> */}
      
  
  export default Manage;