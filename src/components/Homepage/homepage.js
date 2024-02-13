// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./homepage.css";

// const Homepage = ({ setLoginUser }) => {
//   const [tododata, setUser] = useState({
//     text: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...tododata, // ...-spread operator
//       [name]: value,
//     });
//   };

//   const homepage = () => {
//     //const { name, email, password, reEnterPassword } = user;
//     axios.post("http://localhost:9004/homepage", tododata).then((res) => {
//       if (res.data === "save") {
//         alert("successfully saved");
//       } else {
//         alert("..........");
//       }
//     });
//   };

//   return (
//     <div className="homepage">
//       <h3>TO-DO-LIST</h3>
//       <div className="button" onClick={() => setLoginUser({})}>
//         Logout
//       </div>
//       <input
//         type="text"
//         name="text"
//         value={tododata.text}
//         placeholder="Add new item"
//         onChange={handleChange}
//       />
//       <div className="button" onClick={() => homepage()}>
//         Add
//       </div>
//     </div>
//   );
// };
// export default Homepage;

import React from "react";
import "./homepage.css";
import Header from "../header";

const Homepage = ({ setLoginUser }) => {
  return (
    <div>
      <div className="button-logout" onClick={() => setLoginUser({})}>
        Logout
      </div>
      <Header />
    </div>
  );
};

export default Homepage;
