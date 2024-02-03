import React, { useState, useEffect } from 'react';
import { getUser } from '../api/api';
import { useParams } from 'react-router-dom';

const UserDetails = (props) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(userId);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>

    </div>
  );
};

export default UserDetails;
