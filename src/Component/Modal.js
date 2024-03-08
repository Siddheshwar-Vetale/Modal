import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ open, onSubmit, onclose, defaultValue }) => {
  const [details, setdetails] = useState(
    defaultValue || {
      name: " ",
      address: " ",
    }
  );
  if (!open) return null;
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setdetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();         
    
    onSubmit(details);

    onclose();
  };

  return (
    <div className="modalContainer">
      <form>
        
        <h2>
          Name:
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={onChangeHandler}
          ></input>
        </h2>

        <h2>
          Address:
          <textarea
            type="text"
            name="address"
            value={details.address}
            onChange={onChangeHandler}
          ></textarea>
        </h2>
        <div className="divButton">
          <button type="submit" className="modalButton" onClick={handleSubmit}>
            Submit
          </button>
          <button className="modalButton" onClick={onclose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
