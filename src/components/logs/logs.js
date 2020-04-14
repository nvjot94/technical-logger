import React, { useEffect } from "react";
import LogItem from "./logItem";
import PreLoader from "../layout/PreLoader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs, setCurrent } from "../../redux/actions/LogActions";
const Logs = ({ log: { logs, loading }, getLogs, setCurrent }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  const onClick = log => {
    setCurrent(log);
  };

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem click={onClick} log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  log: state.log
});
Logs.propTypes = {
  log: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { getLogs, setCurrent }
)(Logs);
