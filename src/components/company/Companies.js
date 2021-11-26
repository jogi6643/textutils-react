import React,{ useEffect, useState }  from "react";
import {Link} from 'react-router-dom'
function Companies() {
    
  const [users, setUsers] = useState([]);
  useEffect(() => {
    UsersGet()
  },[])
  
  const UsersGet = () => {
    fetch("https://www.mecallapi.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
          setUsers(result)
        }
      )
  }

  const UpdateUser = id => {
    window.location = '/editcompany/'+id
  }
  const UserDelete = id => {
    var data = {
      'id': id
    }
    fetch('https://www.mecallapi.com/api/users/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          UsersGet();
        }
      }
    )
  }

  return (
    <div>
      <div className="container">
          <h1 className="text-center">Companies Employeis List <Link className="nav-link" to="/createcompany">Add New Member</Link></h1>
        <table className="table table-light">
          <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td colSpan="2" className="table-active">
                {user.fname} {user.lname}
              </td>
              <td>{user.username}</td>
              <td>
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" onClick={() => UpdateUser(user.id)} className="btn btn-success">Edit</button>
                    <button type="button" onClick={() => UserDelete(user.id)} className="btn btn-danger">Delete</button>
                    </div>
                </td>
            </tr>
               ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Companies;
