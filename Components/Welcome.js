import React, {Component} from 'react';
import Spinner from 'reactjs-simple-spinner';
import { Link  } from 'react-router-dom';

class Welcome extends Component{

    state = {
        showMessage : true,
        jsData : null,
        respOk: true
    }
    load = () => {
        this.setState({respOk: true});
        this.setState({showMessage :false});
        fetch('https://jsonplaceholder.typicode.com/todos/8').then(res => res.json())
        .then(json=>this.setState({jsData:json.title}))
        .catch(error => {if (error) {this.setState({respOk: false})}});
    }
    restart = () => {
        this.setState({
            showMessage : true,
            jsData : null,
            respOk: true
        })
    }
    render(){
        return (
            <div>
                {(!this.state.showMessage && !this.state.jsData) && <div><br/><Spinner/><br/></div>}
                {(this.state.showMessage && !this.state.jsData) && <h2>
                    Welcome! Click to view JSON loaded data
                </h2>}
                {this.state.jsData && 
                    <div>
                        <h2>The loaded data:</h2>
                        <h2 className="redstyle">
                            {this.state.jsData}
                        </h2>
                    </div>
                }
                {!this.state.respOk && !this.state.jsData && <h2>An error occured! Please try again</h2>}
                {!this.state.jsData &&
                    <div>
                        <button onClick = {this.load}>
                            Load Data
                        </button><br/>
                    </div>
                }
                {this.state.jsData &&
                    <div>
                        <button onClick = {this.restart}>
                            Restart
                        </button><br/>
                    </div>
                }<br/>
                <Link to="/MyLink" className="mylinks"> Home </Link>
            </div>
        ) 
    }   
}  

export {Welcome}; 