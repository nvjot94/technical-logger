import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../redux/actions/LogActions";
import { stat } from "fs";
export const AddLogModal = ({ addLog, techList }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "please enter a message and a technician" });
    } else {
      addLog({
        message,
        tech,
        attention,
        date: Date.now()
      });
      M.toast({ html: `Log added by ${tech}` });
    }

    setMessage("");
    setAttention(false);
    setTech("");
  };
  return (
    <div id='add-log-modal' className='modal' style={{ width: "75%", height: "75%" }}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              name='message'
              type='text'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name='tech'
                value={tech}
                className='browser-default'
                onChange={e => setTech(e.target.value)}
              >
                <option value='' disabled>
                  Select tech
                </option>
                {techList &&
                  techList.map(tech => {
                    return (
                      <option value={`${tech.firstName} ${tech.lastName}`}>
                        {tech.firstName} {tech.lastName}
                      </option>
                    );
                  })}
              </select>
              <label htmlFor='message' className='active'>
                Log Message
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    value={attention}
                    checked={attention}
                    onChange={e => setAttention(!attention)}
                  />
                  <span>Needs Attention</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-green btn-flat'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  techList: state.tech.techs
});
export default connect(
  mapStateToProps,
  { addLog }
)(AddLogModal);
