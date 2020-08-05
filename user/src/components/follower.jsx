import React from 'react'
import '../App.css'

function Followers (props) {
    return(
        <div>
{
    props.profile.map(item =>{
    return <div className="follower-card" key={item.id}>
        <div className="parent">
            <div>
            <img src={item.avatar_url}/>
           </div>
           <div>
        <h1>{item.login}</h1> 
    
    <p>{item.login}'s<a href={item.repos_url}> Work</a></p>
    <p>{item.bio}</p>
    </div>
    </div>
        </div>
    })
}

        </div>
    )
}

export default Followers;