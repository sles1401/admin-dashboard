import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Users</h2>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.ID_PENGGUNA} className="list-group-item">
                        {user.NAMA_LENGKAP}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
