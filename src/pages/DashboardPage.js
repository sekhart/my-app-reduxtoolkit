import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
    <section>
        <h1>Dashboard</h1>
        <p>This is the dashboard.</p>
        <div class='container-body'>
            <Link to="/posts" className="button">View Posts</Link> &nbsp;&nbsp;
            <Link to="/users" className="button">View Users</Link>
        </div>
    </section>
)

export default DashboardPage