import React from 'react';
import { toast } from 'react-toastify';

const TaskStatusCard = ({TaskCard,resolved,setResolved, removeCardTickets, setRemoveTickets}) => {
    const handleResolve = (rsCard) =>{
            setResolved([...resolved, rsCard])
            toast("Task Resolved")
        }
    const handleRemove = (stCard) => {
        removeCardTickets(stCard)
        setRemoveTickets(rTickets=>[...rTickets, stCard.id])

    }
    return (
        
        <div>
            {
                TaskCard.map(statusCard => <div key={statusCard.id} className='flex flex-col justify-center items-center my-3 bg-white p-3 space-y-2'><h2 className='w-full font-bold text-left'>{statusCard.title}</h2>
            <button onClick={()=>{handleRemove(statusCard);handleResolve(statusCard)}} className='bg-green-500 w-[280px] text-white font-semibold text-xl rounded-md py-1'>Complete</button></div>  )
            }
        </div>
    );
};

export default TaskStatusCard;