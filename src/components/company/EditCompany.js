import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
function EditCompany() {
    
    const { id } = useParams();
    useEffect(() => {
      fetch("https://www.mecallapi.com/api/users/"+id)
        .then(res => res.json())
        .then(
          (result) => {
            setFname(result.user.fname)
            setLname(result.user.lname)
            setUsername(result.user.username)
            setEmail(result.user.email)
            setAvatar(result.user.avatar)
          }
        )
    }, [id])
    const handleSubmit = event => {
        event.preventDefault();
        var data = {
          'id': id,
          'fname': fname,
          'lname': lname,
          'username': username,
          'email': email,
          'avatar': avatar,
        }
        fetch('https://www.mecallapi.com/api/users/update', {
          method: 'PUT',
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
              window.location.href = '/company';
            }
          }
        )
      }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');
    return (
        <>
        <div className="container">
            <h3>Edit Member</h3>
            <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="form-label">First Name</label>
                <input type="text" className="form-control"  value={fname}  name="firstName"   onChange={(e) => setFname(e.target.value)} placeholder="Enter Your Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name</label>
                <input type="text" className="form-control"   value={lname}  onChange={(e) => setLname(e.target.value)} placeholder="Enter Your Last Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">UserName</label>
                <input type="text" className="form-control" value={username}  onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your UserName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                <input type="text" className="form-control"      value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/>
            </div>
            <div className="mb-3">
                <button type="sumbit" className="btn btn-success">Edit Member</button>
            </div>
        </form>
        </div>
    </>
    )
}

export default EditCompany
