import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../api/api'; // Adjust the import path

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUser(id);
        setUser(userData);
        setLoading(false);
        console.log(setUser);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Name: {user.first_name}</p>
    </div>
  );
};

export default UserDetails;
