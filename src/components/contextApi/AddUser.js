import React ,{ useContext, useState } from 'react'
import {AppContext} from './context';
function AddUser() {
    const { dispatchUserEvent } = useContext(AppContext);
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ bio, setBio ] = useState('');
    const handleAddUser = () => {
		const user = { id: Math.random(), name, email, bio };
		dispatchUserEvent('ADD_USER', { newUser: user });
	};
    return (
        <>
            <div className="container">
                <h3>Add New User</h3>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1"  className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={e => {setName(e.target.value)}} placeholder="Enter Your Name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                    <input type="text" className="form-control" value={email} onChange={e => {setEmail(e.target.value)}}  placeholder="Enter Your Email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Bio</label>
                    <input type="text" className="form-control" value={bio} onChange={e => {setBio(e.target.value)}} placeholder="Enter Your Bio"/>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-success" onClick={handleAddUser}>Add User</button>
                </div>
               
            </div>
        </>
    )
}

export default AddUser
