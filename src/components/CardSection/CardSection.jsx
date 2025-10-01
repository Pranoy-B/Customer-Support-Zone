import React, { use } from "react";
import CardStatus from "../CardStatus/CardStatus";
import CardTickets from "../CardTickets/CardTickets";



const CardSection = ({ CardPromise }) => {
    const CardData = use(CardPromise)
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-4 pt-10">
      <div className="w-full md:w-3/4 p-2  bg-blue-100 ">
        <div className="font-bold text-xl" >Customer Tickets</div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-100 p-2">
          {
            CardData.map(card=><CardTickets key={card.id} card={card}></CardTickets>)
          }
        </div>
      </div>
    </div>
  );
};

export default CardSection;
