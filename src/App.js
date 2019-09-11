import React,{ useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { get } from "https";


const nasaApi = "https://lambda-github-api-server.herokuapp.com";





function App() {

const [error, setError] = useState(null);

const [infos, setInfos] = useState({
   info: []
});



useEffect(() => {



  axios.get("https://lambda-github-api-server.herokuapp.com")

 
  .then(res => {
    console.log(res.data.explanation)

    setInfos({

     info: res.explanation,

    });

  })

}, [])
  // .then(response => {
  //   console.log(response.data);
  //   const art = response.data.articles;
  //   console.log(art);
  //   for( content in art){
  //     const contentArr = art[content];
  //     console.log(contentArr);
  //     contentArr.forEach(element => {
  //         const newArr = cardMaker(element);
  //         containCards.appendChild(newArr);
  //     });
  //   }
  // })
  // .catch(error => {
  //  console.error(error)
  // });
  




  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
