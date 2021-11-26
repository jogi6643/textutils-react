import React ,{useContext} from 'react'
import {AppContext} from './context';
import User from './User';
function UserList() {
    const {users} = useContext(AppContext);
    return (
        <>
           <h3>Available Users</h3>
            {users.map(user => <User key={user.id} user={user} />)}
        </>
    )
}

export default UserList
