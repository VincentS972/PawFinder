import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const FosterProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/foster/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProfile(data);
    };
    fetchData();
  }, [id, URL]);

  const editButton = async () => {
    const URL = `${process.env.REACT_APP_BACKEND_URI}/foster/${id}`
    const response = await fetch(URL, {
        method: 'POST'
    })
    navigate(`/foster/update/${id}`);
    if (response.status !==204) console.log('error')
  }

  //deletes the current profile from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    if (response.status !== 204) console.log("error");
    navigate("/foster");
  };

  const display = profile && (
    <div style={{ margin: "auto" }}>
      <h1>{profile.userName}</h1>
      <img src={profile.profilePicture} />
      <p>{profile.emailAddress}</p>
      <div>
        <h4>
          {profile.firstName} {profile.lastName}
        </h4>
      </div>

      <Button variant='primary' onClick={editButton}>Edit Profile</Button>
      <Button variant='danger' onClick={handleDelete}>Delete Profile</Button>
    </div>
  );

  return <div className="wrapper">{display}</div>;
};

export default FosterProfile;