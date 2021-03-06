import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { updateLog } from "../../redux/actions/LogActions";
import PropTypes from "prop-types";

export const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
      console.log(current);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "please enter a message and a technician" });
    } else {
      console.log(message, tech, attention);
      updateLog({ message, attention, tech, id: current.id, date: Date.now() });
      M.toast({ html: `Log updated by ${tech}` });
    }
    setMessage("");
    setAttention(false);
    setTech("");
  };

  return (
    <div id='edit-log-modal' className='modal' style={{ width: "75%", height: "75%" }}>
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
                <option value='John Doe'>John Doe</option>
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
EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});
export default connect(
  mapStateToProps,
  { updateLog }
)(EditLogModal);
