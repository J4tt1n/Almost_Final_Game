import './App.css';
import Player from './Components/Player.js';
import TimeChallenge from './Components/TimerChallenge.js';

function App() {
  return (
    <div 
      className='max-w-5xl mx-auto my-8 p-8 rounded-3xl shadow-newL font-semibold'
      style={{ background: 'radial-gradient(#0b201d, #021619)' }}
    >
      <h1 className='font-handjet uppercase text-center text-white text-6xl font-medium m-0'>The <em className='text-cyan-400 not-italic'>almost</em> final countdown</h1>
      <p className='text-xl m-0 text-center text-teal-100'>Stop the timer once you estimate that time is (almost) up</p>
      <Player />
      <div className='max-w-4xl my-12 mx-0 flex flex-wrap gap-8'>
        <TimeChallenge title="Easy" targetTime={1} />
        <TimeChallenge title="Medium" targetTime={5} />
        <TimeChallenge title="Hard" targetTime={10} />
        <TimeChallenge title="Pros Only" targetTime={15} />
      </div>
    </div>
  );
}

export default App;
