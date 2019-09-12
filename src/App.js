import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { get } from "https";
import Image from "./image";
import Credit from "./credit";
import Title from "./title";
import Text from "./text";


const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

function App() {
  const [error, setError] = useState(null);

  const [infos, setInfos] = useState({
    image: [],
    credit: [],
    title: [],
    text: []
  });


  

  useEffect(() => {
    axios
      .get(nasaApi)

      .then(res => {
        console.log(res.data);

        setInfos({
          image: res.data.hdurl,
          credit: res.data.copyright,
          title: res.data.title,
          text: res.data.explanation
        });
  
      })
      .catch(error => {
        setError("Not Working")
       });
    
  }, []);
 
  return (
    <div className="App">

    {error && <p>{error} </p>}

       {/* !{infos.image} ? <h3>Loading...</h3>:  */}
      
      <Image picture = {infos.image} />
      <Credit copyright =  {`Image Credits: ${infos.credit}`} />
      <Title anH1 = {infos.title} />
      <Text longText = {infos.text} /> 

      <p>
        Project of : -Abdel-
      </p>
      
    </div>
  );
}

export default App;
