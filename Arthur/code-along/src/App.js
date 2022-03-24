import { useEffect, useState } from 'react';
import  ProfileCard  from './ProfileCard';

function App() {
      const [data, setData] = useState({
        writers: [],
        loading: false,
});

const handleClick = () => {
  setData((prevData) =>({
    ...prevData,
  }));
  
   setTimeout(()=> {
        const getWriters = async ()=> {
          const res = await fetch("/writers.json");
          const data = await res.json();
          setData({
            writers:data,
            loading: false,
          });
        };
        getWriters();
      }, 2000);
}

if(data.loading){
  return(
    <div className="container">
      <h1>Writer Profiles</h1>
      <div className="container">
      <div className="card action"></div>
      <p className="infoText">Loading...</p>
      </div>
    </div>
  )


}

  return (
    <div >
      <h1>Writer Profile</h1>
      <div className="container">
        {data.writers.length=== 0 ? (
          <div className="card action">
            <p className='infoText'>Oops...no writer profile found</p>
            <button className="actionBtn" onClick={{handleClick}}>
            Get Writers
            </button>
          </div>
        ):(
          data.writers.map((writer) => 
          <ProfileCard key={writer.id} writer={writer}/>
          )
        


        )};

      </div>
    </div>
  );
};

export default App;
