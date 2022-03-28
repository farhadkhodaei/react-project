import React, {Component} from 'react';
import { Link  } from 'react-router-dom';

class MyLink extends Component{

    render(){
        return (
            <div>
                <br/>
                <br/>
                <Link to="/Welcome" className="mylinks">Welcome </Link>
            </div>
        ) 
    }   
}  

export {MyLink}; 