import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/usersActions'
import { User } from '../components/User'


const UsersPage = ({ dispatch, users, loading, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const renderUsers = () => {
        if (loading) return <p>Loading Users ...</p>
        if (hasErrors) return <p>Unable to display Users.</p>
        return users.map(user => <User key={user.id} user={user}></User>)

    }

    return (
        <section>
            <h1>Users</h1>
            {renderUsers()}
        </section>
    )
}

const mapStateToProps = state => ({
    loading: state.users.loading,
    users: state.users.users,
    hasErrors: state.users.hasErrors,

})

export default connect(mapStateToProps)(UsersPage)