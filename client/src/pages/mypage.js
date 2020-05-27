import React,{Component} from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

const mypageContainer = {
    float: "left",
    width: "1120px", 
    height:"1140px", 
    margin: "30px 30px 30px 0",
    
}

class MyPage extends Component{
    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })

    render() {
        return (
            <div style={mypageContainer}>
                <Calendar
                    onChange={this.onDateChange}
                    value={this.state.date}
                />
            </div>
        );
    }


}

export default MyPage;