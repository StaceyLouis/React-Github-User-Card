import React from 'react'
import '../App.css'
function UserCard (props) {
    console.log(props)
    return(
        <div className="profile-wrap">
            <h1>{props.profile.login}</h1>
    <img src={props.profile.avatar_url} />
    <p>{props.profile.bio || 'bios are lame'}</p>
    <p> Public Repos: {props.profile.public_repos}</p>
    <p>Followers: {props.profile.followers}</p>
    <p>Location : {props.profile.location || 'Mars'}</p>
    <p><a href={props.profile.repos_url}> My Work</a></p>
        </div>
    )
}

export default UserCard;