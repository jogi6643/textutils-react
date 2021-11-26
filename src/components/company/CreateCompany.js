import React, { useState } from "react";
function CreateCompany() {
    const handleSubmit = event => {
        event.preventDefault();
        var data = {
          'fname': fname,
          'lname': lname,
          'username': username,
          'email': email,
          'avatar': avatar,
        }
        fetch('https://www.mecallapi.com/api/users/create', {
          method: 'POST',
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
            <h3>Add New User</h3>
            <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="form-label">First Name</label>
                <input type="text" className="form-control"  name="firstName"   onChange={(e) => setFname(e.target.value)} placeholder="Enter Your Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Last Name</label>
                <input type="text" className="form-control"  onChange={(e) => setLname(e.target.value)} placeholder="Enter Your Last Name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">UserName</label>
                <input type="text" className="form-control"  onChange={(e) => setUsername(e.target.value)} placeholder="Enter Your UserName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Email</label>
                <input type="text" className="form-control"  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email"/>
            </div>
            <div className="mb-3">
                <button type="sumbit" className="btn btn-success">Add Member</button>
            </div>
        </form>
        </div>
    </>
    )
}

export default CreateCompany
