import React, { use, useState, useEffect } from "react";
import CardStatus from "../CardStatus/CardStatus";
import CardTickets from "../CardTickets/CardTickets";



const CardSection = ({ CardPromise, TaskCardToParent, ResolvedToParent}) => {
    const CardData = use(CardPromise)
    const [TaskCard,setTaskCard] = useState([])
    const [removeTickets, setRemoveTickets] = useState([])
    
    
    const removeCardTickets =(p) => {
      const filteredTickets = TaskCard.filter(tcard=>tcard.id !== p.id)
      setTaskCard(filteredTickets)
    }

    useEffect(() => {
    TaskCardToParent(TaskCard)
  }, [TaskCard, TaskCardToParent])


  return (
    <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[0px] pt-10 bg-gray-200 ">
      <div className="w-full md:w-3/4 p-2   ">
        <div className="font-bold text-xl" >Customer Tickets</div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
          {
            CardData.map(card=><CardTickets key={card.id} removeTickets={removeTickets} TaskCard={TaskCard} setTaskCard={setTaskCard} card={card}></CardTickets>)
          }
        </div>
      </div>
      <div className="w-full md:w-1/4 p-2">
          <CardStatus ResolvedToParent={ResolvedToParent} sremoveTickets={removeTickets} setRemoveTickets={setRemoveTickets} removeCardTickets={removeCardTickets} setTaskCard={setTaskCard} TaskCard={TaskCard}></CardStatus>
      </div>


    </div>
  );
};

export default CardSection;
