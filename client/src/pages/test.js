import {React,Component} from 'react';

class Test extends Component{
    static defaultProps = {
        name: '000'
    };
    render() {
        return (
            <div>
                안녕하세요.
                나는 <b>{ this.props.name }</b> 입니다.
            </div>
        );
    }


}

export default Test;