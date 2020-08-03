import React from 'react'

function Followers (props) {
    return(
        <div>
{
    props.profile.map(item =>{
    return <div className="follower-card" key={item.id}>
        <p>{item.login}</p> 
        <img src={item.avatar_url}/>
    <p>{item.login}'s<a href={item.repos_url}> Work</a></p>
    <p>{item.bio}</p>
        </div>
    })
}

        </div>
    )
}

export default Followers;