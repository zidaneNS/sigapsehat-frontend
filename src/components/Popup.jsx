import React from 'react';
import "../css/Popup.css";

const Popup = ({ input, setIsOK, addSympthom }) => {
  return (
      <div className="cookie-card">
        <span className="title">Click Yes or No</span>
        <p className="description">Apakah anda mengalami {input}</p>
        <div className="actions">
          <button 
            className="accept"
            onClick={() => {
              setIsOK(true);
              addSympthom(input);
            }}
            >
            Yes
          </button>
          <button 
            className="accept"
            onClick={() => setIsOK(false)}
            >
            No
          </button>
        </div>
      </div>
  );
}

export default Popup;
