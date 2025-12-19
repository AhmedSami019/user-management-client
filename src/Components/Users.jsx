import React, { use } from 'react';

const Users = ({userPromise}) => {

    const users = use(userPromise)
    console.log(users);

    return (
        <div>
            
        </div>
    );
};

export default Users;