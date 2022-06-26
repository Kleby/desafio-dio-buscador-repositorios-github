import React from 'react'

export default function RepositoryItem({name, linkToRepo, full_name }) {
  return (
    <div>
        <h2>{name}</h2>
        <h4>Full name: </h4>
        <a 
          href={linkToRepo} 
          target="_blank"
          rel='noreferrer'
        >{full_name}
        </a>
    </div>
  )
}
