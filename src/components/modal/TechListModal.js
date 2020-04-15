import React, { useEffect, useState } from "react";
import TechItem from "./techItem";
import { connect } from "react-redux";
import { deleteTech } from "../../redux/actions/TechActions";
export const TechListModal = ({ deleteTech, tech }) => {
  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <div className='row-item'>
          <ul className='collection with-header'>
            <li className='collection-header'>
              <h4 className='center'>Available Technicians</h4>
            </li>
            {tech === null ? (
              <p className='center'>No Technician Is Available...</p>
            ) : (
              tech.map(tech => <TechItem deleteTech={deleteTech} tech={tech} key={tech.id} />)
            )}
          </ul>
        </div>
      </div>

      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect blue waves-green btn-flat'>
          Close
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tech: state.tech.techs
});

export default connect(
  mapStateToProps,
  { deleteTech }
)(TechListModal);
