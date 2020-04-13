import React, { useEffect, useState } from "react";
import TechItem from "./techItem";
export const TechListModal = props => {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    const res = await fetch("/techs");
    const tech = await res.json();
    setTech(tech);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getTechs();
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <div className='row-item'>
          <ul className='collection with-header'>
            <li className='collection-header'>
              <h4 className='center'>Available Technicians</h4>
            </li>
            {!loading && tech.length === 0 ? (
              <p className='center'>No Technician Is Available...</p>
            ) : (
              tech.map(tech => <TechItem tech={tech} key={tech.id} />)
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

export default TechListModal;
