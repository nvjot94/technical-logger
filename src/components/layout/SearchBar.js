import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { filterLogs, ClearFilteredLogs } from "../../redux/actions/LogActions";
export const SearchBar = ({ filterLogs, ClearFilteredLogs }) => {
  const text = useRef("");

  // useEffect(() => {
  //   if()
  // });

  const onChange = event => {
    if (text.current.value !== "") {
      filterLogs(text.current.value);
    } else ClearFilteredLogs();
  };
  return (
    <nav style={{ marginBottom: "30px" }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input ref={text} id='search' onChange={onChange} type='search' required />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(
  null,
  { filterLogs, ClearFilteredLogs }
)(SearchBar);
