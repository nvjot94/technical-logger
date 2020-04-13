import React from "react";

export const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a href='#add-log-modal' className='modal-trigger btn-floating btn-large blue'>
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a href='#tech-list-modal' className='modal-trigger btn-floating green'>
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a href='#tech-modal' className='modal-trigger btn-floating red darken-1'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
