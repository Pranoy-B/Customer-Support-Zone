import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const CardTickets = ({card}) => {
  return (
      <div className="bg-white p-3">
        <div className="flex justify-between items-center">
            <h2 className="font-semibold">{card.title}</h2>
            <button className="bg-green-300 pt-2 pb-2 pr-5 pl-5 rounded-3xl text-black font-bold">{card.status}</button>
        </div>
        <p>{card.description}</p>
        <div className="flex justify-between items-center">
            <div className="flex space-x-2">
                <p>{card.id}</p>
                <h3>{card.priority}</h3>
            </div>
            <div className="flex space-x-2">
                <p>{card.customer}</p>
                <p><FontAwesomeIcon icon={faCalendar} />{card.createdAt}</p>
            </div>
        </div>
      </div>
  );
};

export default CardTickets;
