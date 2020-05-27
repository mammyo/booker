import React,{Component} from 'react';
import './ceo.css';
import Manage from '../ceo/manage/Manage';
class Ceo extends Component{

    render() {
        return (
            <div className='ceoContainer'>
                <Manage/>
                
                {/* <Switch>
                    <Route exact path="/food" component={Home}/>
                    <Route exact path="/hair" component={Create}/>
                    <Route exact path="/ceomypage" component={Ceomypage}/>
                    <Route exact path="/about" component={About}/>
                </Switch> */}
                
            </div>
        );
    }


}

export default Ceo;