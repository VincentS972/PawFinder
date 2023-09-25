
// const Pet = () => {
//     return (
//       <div className="bg" style={{textAlign:"center"}} >
//         <h1>This is the pet page</h1>
//       </div>
//     );
//   };
//   export default Pet;

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Pet = () => {
  const navigate = useNavigate();
  const [pet, setPet] = useState(undefined);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/pet/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setPet(data);
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

  const display = pet && (
    <div className="bg" style={{ textAlign: "center" }}>
      <div style={{ margin: "auto" }}>
        <h1>{pet.petName}</h1>
        <img src={pet.petPicture} />
        <div>
          <h4>
            {pet.petName} {pet.fosterName}
          </h4>
        </div>

        <a href={`/pet/update/${id}`}>Update</a>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );

  return <div className="bg" >{display}</div>;
};

export default Pet;
  