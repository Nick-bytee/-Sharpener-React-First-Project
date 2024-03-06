import React, { useState } from "react";
import "./Form.css";
import User from "./User";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    if (+age <= 0) {
      return window.alert("Please Enter Valid Age");
    }
    setUsers([...users, { name: name, age: age, id: Math.random() }]);
  }

  return (
    <div className="main">
      <div className="form-div">
        <form className="userForm" onSubmit={handleFormSubmit}>
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <h4>Age (In Years)</h4>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <User data={users} />
    </div>
  );
};

export default Form;
