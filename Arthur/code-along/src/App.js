import { useEffect, useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileCard from "./ProfileCard";

function App() {
  const [allProfile, setAllProfile] = useState([
    {
      firstName: "Hannah",
      lastName: "Montana",
      email: "hannah.montana@email.com",
      phone: "+233 024 455 00",
    },
  ]);

  const submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  };
  //       const [data, setData] = useState({
  //         writers: [],
  //         loading: false,
  // });

  // const handleClick = () => {
  //   setData((prevData) =>({
  //     ...prevData,
  //   }));

  //    setTimeout(()=> {
  //         const getWriters = async ()=> {
  //           const res = await fetch("/writers.json");
  //           const data = await res.json();
  //           setData({
  //             writers:data,
  //             loading: false,
  //           });
  //         };
  //         getWriters();
  //       }, 2000);
  // }

  // if(data.loading){
  //   return(
  //     <div className="container">
  //       <h1>Writer Profiles</h1>
  //       <div className="container">
  //       <div className="card action"></div>
  //       <p className="infoText">Loading...</p>
  //       </div>
  //     </div>
  //   )

  // }

  return (
    <div>
      <h1>Writer Profile</h1>
      <div className="container">
        <ProfileForm submit={submit} />
        {allProfile.map((writer, idx) => (
          <ProfileCard key={idx} writer={writer} />
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
