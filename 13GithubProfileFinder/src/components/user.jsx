import React from 'react'

function User({user}) {
    const {avatar_url, followers, following, public_repos, name , login} = user;
  return (
    <div className='user flex flex-col gap-5'>
      <div className='img-container'>
        <img src={avatar_url} width={400} alt="" />
      </div>
      <div className='name-container'>
        <a target='_blank' href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div className="followers-container">
        <h2 className='text-3xl'>Followers: {followers}</h2>
      </div>
      <div className="following-container">
        <h2 className='text-3xl'>Following: {following}</h2>
      </div>
      <div className="public_repos-container">
        <h2 className='text-3xl'>Public Repos: {public_repos}</h2>
      </div>
    </div>
  )
}

export default User
