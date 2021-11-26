import React ,{useState} from 'react'
import AddUser from './AddUser';
import UserList from './UserList';
import { AppContext } from './context';

function Handle() {
    const [users,setUsers] = useState([]);
    const dispatchUserEvent = (actionType , payload)=>{
    
        switch (actionType) {
			case 'ADD_USER':
				setUsers([ ...users, payload.newUser ]);
				return;
			case 'REMOVE_USER':
				setUsers(users.filter(user => user.id !== payload.userId));
				return;
			default:
				return;
		}
    }
    return (
        <>
            <div className="container">
                <AppContext.Provider value={{users, dispatchUserEvent }}>
                    <AddUser />
                    <UserList />
                </AppContext.Provider>
            </div>
        </>
    )
}

export default Handle
