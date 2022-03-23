
// import './App.css';
// import writers from "./writers";
import { useEffect, useState } from 'react';
import { ProfileCard } from './ProfileCard';

function App() {
      const [writers, setWriters] = useState([]);

      useEffect(()=> {
        const getWriters = async ()=> {
          const res = await fetch("/writers.json");
          const data = await res.json();
          setWriters(data);
        };
        getWriters();
      }, []);

  return (
    <div >
      <h1>Writer Profile</h1>
      <div className="container">
        {writers.map((writer) => (
          <ProfileCard writer={writer} />



        ))}

      </div>
    </div>
  );
};

export default App;
