import React, { useEffect } from "react";
import LogItem from "./logItem";
import PreLoader from "../layout/PreLoader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs, setCurrent, deleteLog } from "../../redux/actions/LogActions";

import { getTechs } from "../../redux/actions/TechActions";

const Logs = ({ log: { logs, loading, filtered }, getTechs, deleteLog, getLogs, setCurrent }) => {
  useEffect(() => {
    getLogs();
    getTechs();
    //eslint-disable-next-line
  }, []);

  const onClick = log => {
    setCurrent(log);
  };
  const deleteLogs = id => {
    deleteLog(id);
  };

  if (loading || logs === null) {
    return <PreLoader />;
  }
  logs = filtered !== null ? filtered : logs;
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem click={onClick} remove={deleteLogs} log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = state => ({
  log: state.log,
  tech: state.tech.techs
});
Logs.propTypes = {
  log: PropTypes.object.isRequired,
  tech: PropTypes.array.isRequired
};
export default connect(
  mapStateToProps,
  { getLogs, setCurrent, deleteLog, getTechs }
)(Logs);
