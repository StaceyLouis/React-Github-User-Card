import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/userCard'
 import Followers from './components/follower'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      profile:[],
      follower: []
    }
   
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Staceylouis')
    .then(res =>{
      this.setState({
        profile: res.data
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  componentDidUpdate(prevState, prevProps){
    if(this.state.profile !== prevState.profile){
      axios.get(`https://api.github.com/users/Staceylouis/followers`)
      .then(res => {
        this.setState({
          follower: res.data
        })
      })
    }
  }
  
  render(){
    return(
      <div>
        <h1>Github User Card </h1>
        <UserCard  profile ={this.state.profile}/>
        <Followers profile={this.state.follower}/>
      
      </div>
    )
  }
}



export default App;
