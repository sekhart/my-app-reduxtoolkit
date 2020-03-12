import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => (
    <nav>
        <section>
            <Link to="/"><strong>Dashboard</strong></Link>
            <Link to="/posts"><strong>Posts</strong></Link>
            <Link to="/users"><strong>Users</strong></Link>
        </section>
    </nav>
)