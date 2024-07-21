import React, { useState, useRef } from 'react';

export default function Player() {

    const inputName = useRef();
    const [playerName, setPlayerName] = useState(null);

    function handleClick() {
        setPlayerName(inputName.current.value);
        inputName.current.value = '';
    }

    return (
        <section className='text-center'>
            <h2 className='text-teal-500 my-4 text-2xl'>Welcome {playerName ?? 'unknown entity'}</h2>
            <p className='flex justify-center align-middle'>
                <input 
                    ref={inputName}
                    type='text' 
                    style={{'font':'inherit', 'color': '#d1f0ec', 'border':'1px solid #54a399'}} 
                    className='border border-solid border-teal-500 bg-teal-950 rounded rounded-r-none p-1' 
                />
                <button
                    onClick={handleClick}
                    style={{'backgroundColor': '#54a399', 'color': '#061e1', 'border': '1px solid #54a399'}}
                    className='cursor-pointer px-4 py-2 rounded-r text-teal-950' 
                >Set Name</button>
            </p>
        </section>
    )
}