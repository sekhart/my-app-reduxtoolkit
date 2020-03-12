// Create Redux action types
export const GET_USERS = 'GET GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export const getUsers = () => ({
    type: GET_USERS,
})


export const getUsersSuccess = users => ({
    type: GET_USERS_SUCCESS,
    payload: users,
})


export const getUsersFailure = () => ({
    type: GET_USERS_FAILURE,
})


export function fetchUsers() {
    return async dispatch => {
        dispatch(getUsers())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            dispatch(getUsersSuccess(data))

        } catch (error) {
            dispatch(getUsersFailure())
        }
    }
}