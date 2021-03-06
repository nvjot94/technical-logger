import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { addTech } from "../../redux/actions/TechActions";
import { connect } from "react-redux";

export const AddTechModal = ({ addTech }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const submit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "please enter first name and last name" });
    } else {
      addTech({
        firstName: `${firstName.charAt(0).toUpperCase() + firstName.slice(1)}`,
        lastName: `${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`
      });
    }
    setfirstName("");
    setlastName("");
  };
  return (
    <div id='tech-modal' className='modal' style={{ width: "40%", height: "50%" }}>
      <div className='row'>
        <div className='modal-content'>
          <h4>New Technician</h4>
        </div>
        <div className='row'>
          <div className='input-field' style={{ width: "90%", marginLeft: "5%" }}>
            <input
              name='firstName'
              type='text'
              value={firstName}
              onChange={e => setfirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field' style={{ width: "90%", marginLeft: "5%" }}>
            <input
              name='lastName'
              type='text'
              value={lastName}
              onChange={e => setlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={submit}
            className='modal-close waves-effect blue waves-green btn-flat'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addTech }
)(AddTechModal);
