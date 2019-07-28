import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



class App extends React.Component{
    constructor(props){
        super(props) 
        this.state={ lat:null, lon:null, errorMessage:''}  
        
    }
    getBody(){
        if(!this.state.lat&&!this.state.lon&&!this.state.errorMessage){
            return <Spinner />
        }
        if(!this.state.lat&&!this.state.lon&&this.state.errorMessage){
            return <div>ErrorMessage:{this.state.errorMessage}</div>
        }
        return <SeasonDisplay latLong={this.state}/>
    }
    render(){
        return (
            <div>
                {this.getBody()}
            </div>
        )
        
    }
    componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
             position=>{
                 this.setState({lat:position.coords.latitude,lon:position.coords.longitude})
             },
             err=>{
                 this.setState({errorMessage:err.message})
             }
         )
    }
    componentDidUpdate(){
        console.log('this is called only when render is called again')
    }
}

ReactDom.render(
    <App/>, document.querySelector('#root')
)