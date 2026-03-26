import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import {FaUser} from 'react-icons/fa';
import { API_BASE_URL } from "../../utils/constants";

import "./index.css";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className='user-details-page'>
      <h1 className='user-details-heading'>User Details</h1>
      <div className='user-bio'>
        <div className="user-bio-header">
          <FaUser style={{ fontSize: "50px", color: "gray" }} />
          <h2>{user.name}</h2>
        </div>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>

      <div className='user-address'>
        <h2 className="heading">Address</h2>
        <p >
          <strong>Street: </strong>{user.address.street}
        </p>
        <p><strong>City: </strong>{user.address.city}</p>
        <p><strong>Suite: </strong>{user.address.suite}</p>
        <p><strong>Zipcode: </strong>{user.address.zipcode}</p>
        <p style={{color: "blue"}}>
          <strong style={{color: "gray"}}>Geo:</strong> Lat: {user.address.geo.lat}, Lng:{" "}
          {user.address.geo.lng}
        </p>
      </div>

      <div className='user-company'>
        <h2 className="heading">Company Details</h2>
        <p>
          <strong>Name:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>BS:</strong> {user.company.bs}
        </p>
      </div>

      <div className='user-website'>

        <p>
            <strong>Website:</strong>{" "}
          <a
            href={`http://${user.website}`}
            target='_blank'
            rel='noopener noreferrer'>
            {user.website}
          </a>
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
    </div>
  );
};
export default UserDetailsPage;
