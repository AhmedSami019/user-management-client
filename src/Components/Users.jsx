import React, { use } from 'react';

const Users = ({userPromise}) => {

    const users = use(userPromise)
    // console.log(users);
    
    // event handler 
    const handleAddUser = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const user = {name, email}
        console.log(user);

        fetch("http://localhost:3000/users", {
            method: 'POST', 
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>

            <form onSubmit={handleAddUser}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" value="Add user" />
            </form>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;