import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

  //deletes the current profile from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    if (response.status !== 204) console.log("error");
    navigate("/");
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

      <a href={`/pet/update/${id}`}>Update</a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );

  return <div>{display}</div>;
};

export default PetProfile;