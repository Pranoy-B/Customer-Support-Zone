import React, { useState, useEffect } from 'react';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';
import ResolvedCard from '../ResolvedCard/ResolvedCard';

const CardStatus = ({TaskCard, setTaskCard, removeCardTickets, setRemoveTickets, removeTickets, ResolvedToParent }) => {
    const [resolved,setResolved] = useState([])

    useEffect(()=>{
        ResolvedToParent(resolved)
    }, [resolved, ResolvedToParent])

    return (
        <div className='mt-[8px]'>
            <div className=' font-bold text-xl'>Task Status</div>
            {
                TaskCard.length ===0? (<p>select a ticked to add to Task Status</p>) : <TaskStatusCard removeTickets={removeTickets} setRemoveTickets={setRemoveTickets} resolved={resolved} setResolved={setResolved} TaskCard={TaskCard} setTaskCard={setTaskCard} removeCardTickets={removeCardTickets}></TaskStatusCard>
            }

            {/* <TaskStatusCard TaskCard={TaskCard} setTaskCard={setTaskCard}></TaskStatusCard> */}


            <ResolvedCard resolved={resolved}></ResolvedCard>

            {/* <div className='text-center'>Select a ticket to add to Task status</div>
            <div className='text-center'>no resolved tasks yet</div> */}
        </div>
    );
};

export default CardStatus;