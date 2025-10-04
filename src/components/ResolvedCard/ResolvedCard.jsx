import React from 'react';

const ResolvedCard = ({ resolved }) => {
    return (
        <div>
            <h2 className='font-bold text-xl text-left mb-2'>Resolved Tickets</h2>
            {
                resolved.map(rscard=><div key={rscard.id} className='font-medium bg-white p-3 mb-2' >{rscard.title}</div> ) 
            }
        </div>
    );
};

export default ResolvedCard;