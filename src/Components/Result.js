import React, { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const Result = forwardRef(function Result({ targetTime, remainingTime, onSubmit}, ref) {

    const userLost = remainingTime <= 0;
    const formatRemainginTime = (remainingTime / 1000).toFixed(2); 
    const score = Math.round((1 - remainingTime/(targetTime*1000))*100);

    return createPortal(
        <dialog ref={ref} className='border-none rounded-lg p-8 bg-teal-100 result-mode' onClose={onSubmit}>
            {userLost && <h2 className='font-handjet mb-1 text-5xl uppercase'>You Lost!</h2>}
            {!userLost && <h2 className='font-handjet mb-1 text-5xl uppercase'>Your score: <em className='text-cyan-700 not-italic'>{score}</em></h2>}
            <p className='my-2 text-lg'>Target time was {targetTime} seconds.</p>
            <p className='my-2 text-lg'>You stopped the timer within {formatRemainginTime} seconds left.</p>
            <form className='text-right' method='dialog' onSubmit={onSubmit}>
                <button className='mt-4 py-2 px-4 border-none rounded bg-teal-900 text-teal-200 text-xl cursor-pointer hover:bg-teal-950'>Close</button>
            </form>
        </dialog>,
        document.getElementById('content')
    )
})

export default Result;