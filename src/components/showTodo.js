import React, { useEffect, useState } from "react";
import axios from "axios";
import "./showTodo.css"; // Import the CSS file for styling

const ShowTodo = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9004/showdata"); // Assuming your API endpoint is '/api/data'
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="my-component">
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default ShowTodo;
