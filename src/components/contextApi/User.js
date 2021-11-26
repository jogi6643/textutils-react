import React ,{useContext} from 'react'
import {AppContext} from './context';
function User({user}) {
    const { dispatchUserEvent } = useContext(AppContext);
    const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id });
	};
    return (
        <>
         <div className="container">
			<h3>{user.name}</h3>
			<h4>{user.age}</h4>
			<div>
			<small>{user.bio}</small>
			</div>
			<button type="button" className="btn btn-danger"  onClick={handleRemoveUser}>Delete user</button>
		</div>  
        </>
    )
}

export default User
