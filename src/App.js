import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { get } from "https";
import Image from "./image";
import Credit from "./credit";
import Title from "./title";
import Text from "./text";

const nasaApi = "https://lambda-github-api-server.herokuapp.com";

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
      .get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo")

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
        console.log("There is an error");
       });
    
  }, []);
 
  return (
    <div className="App">
      
      {/* !{infos.image} ? <h3>Loading...</h3>: */}
      
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
