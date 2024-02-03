import React, { useEffect, useState } from 'react';
import { getUsers, getUser, deleteUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const List = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError('Error fetching users. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
            console.log(`User with ID ${userId} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting user with ID ${userId}:`, error);
        }
    };

    const handleUserClick = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
            console.log(`User with ID ${userId} navigate successfully.`);
            navigate(`/user-details/${userId}`);
        } catch (error) {
            console.error(`Error deleting user with ID ${userId}:`, error);
        }
    };

    return (
        <div className="task-items">
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {!loading && users.length === 0 && <h3>No users found.</h3>}
            {!loading &&
                users.map((user) => (
                    <div className="item type1" key={user.id}>
                        <div className="user">
                            <img src={user.avatar} alt="User Avatar" className="owner-img" />
                            <div>
                                <span>{user.first_name} {user.last_name}</span><br />
                                <small>{user.email}</small>
                            </div>
                        </div>
                        <div className="task">
                            <button className="delete" onClick={() => handleDeleteUser(user.id)}>
                                Delete User
                            </button>
                            <button className="edit" onClick={() => handleUserClick(user.id, navigate)}>
                                Edit User
                            </button>
                            <button className="admin">Activate Account</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default List;
