
// const Foster = () => {
//     return (
//       <div className="bg" style={{ textAlign:"center" }}>
//         <h1>This is the foster page!</h1>
//       </div>
//     );
//   };
//   export default Foster;
  

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Foster = () => {
  const navigate = useNavigate();
  const [foster, setfoster] = useState(undefined);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/foster/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setfoster(data);
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

  const display = foster && (
    <div className="bg" style={{ textAlign: "center" }}>
      <div style={{ margin: "auto" }}>
        <h1>{foster.fosterName}</h1>
        <img src={foster.fosterPicture} />
        <p>{foster.emailAddress}</p>
        <div>
          <h4>
            {foster.firstName} {foster.LastName}
          </h4>
        </div>

        <a href={`/foster/update/${id}`}>Update</a>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );

  return <div>{display}</div>;
};

export default Foster;
  