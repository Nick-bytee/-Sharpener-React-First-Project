import React, { useRef, useState } from "react";
import "./Form.css";
import User from "./User";

const Form = () => {
  const [users, setUsers] = useState([]);
  const name = useRef();
  const age = useRef();
  const college = useRef();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (+age.current.value <= 0) {
      return window.alert("Please Enter Valid Age");
    }
    setUsers([
      ...users,
      {
        name: name.current.value,
        age: age.current.value,
        id: Math.random(),
        college: college.current.value,
      },
    ]);
  }

  return (
    <div className="main">
      <div className="form-div">
        <form className="userForm" onSubmit={handleFormSubmit}>
          <label for="name">Name</label>
          <input id="name" type="text" placeholder="Enter Name" ref={name} />
          <label for="age">Age (In Years)</label>
          <input id="age" type="number" placeholder="Enter Age" ref={age} />
          <label for="college">College</label>
          <input
            id="college"
            type="text"
            placeholder="Enter College Name"
            ref={college}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <User data={users} />
    </div>
  );
};

export default Form;
