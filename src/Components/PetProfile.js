import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const PetProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/pets/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProfile(data);
    };
    fetchData();
  }, [id, URL]);

  const editButton = async () => {
    const URL = `${process.env.REACT_APP_BACKEND_URI}/pet/${id}`
    const response = await fetch(URL, {
        method: 'POST'
    })
    navigate(`/pet/update/${id}`);
    if (response.status !==204) console.log('error')
  }

  //deletes the current profile from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    navigate("/pet");
    if (response.status !== 204) console.log("error");
  };

  const display = profile && (
    <div style={{ margin: "auto" }}>
      <h1>{profile.petName}</h1>
      <img src={profile.profilePicture} />
      <p>{profile.fosterName}</p>
      <div>
        <h4>
          {profile.petType} {profile.petGender}
        </h4>
      </div>

      <Button variant='primary' onClick={editButton}>Edit Profile</Button>
      <Button variant='danger' onClick={handleDelete}>Delete Profile</Button>
    </div>
  );

  return <div>{display}</div>;
};

export default PetProfile;