import React from 'react'
// import { Link } from 'react-router-dom'

export const User = ({ user }) => (
    <article className="userCls">
        <h2>{user.name}</h2>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
    </article>
)