import React, { useState, useRef} from 'react';
import Result from './Result.js';

// let timer;

export default function TimeChallenge({title, targetTime}) {
    const timer = useRef();
    const dialogue = useRef();
    const [timeRemain, setTimeRemain] = useState(targetTime * 1000);
    const timerActive = timeRemain > 0 && timeRemain < targetTime * 1000;

    if(timeRemain <= 0 ) {
        clearInterval(timer.current);
        dialogue.current.showModal();
    }

    function handleReset() {
        setTimeRemain(targetTime*1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemain(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }
    
    function handleStop() {
        dialogue.current.showModal();
        clearInterval(timer.current);
    }

    return (
        <>
            <Result ref={dialogue} targetTime={targetTime} remainingTime={timeRemain} onSubmit={handleReset} />
            <section className='w-80 flex flex-col items-center justify-center p-8 my-8 mx-auto bg-gradient-to-tr from-teal-400 to-sky-400 text-slate-900 shadow-newL rounded-md'>
                <h2 className='text-base tracking-wide m-0 text-center uppercase text-slate-800 '>{title}</h2>
                <p className='border-solid border-teal-300 border rounded py-1 px-2 m-2'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart} className='mt-4 py-2 px-4 border-none rounded bg-slate-800 text-slate-100 text-xl cursor-pointer hover:bg-slate-900'>
                        {timerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    {timerActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    )
}