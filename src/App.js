import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PicOfDayArticle from "./PicOfDayArticle";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
// import { Button, Card } from "react-bootstrap";

function App() {
  const [pictureInfo, setPictureInfo] = useState([]);
  const [number, setNumber] = useState(0);
  const [error, setError] = useState(null);
  // const [Date, setDate] = useState( Date());

  // const onChangeHandler = date => setDate({ date })



  //   onChange={setDate()}
  //   value={this.state.date}

  function eventHandler(e) {
    setNumber(number + 1);
  }
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=UOC8c0ESjxSF1H2boxVfWffLvP878nf2UcaTok2y"
      )
      .then(response => {
        setPictureInfo(response.data);
      })
      .catch(error => {
        setError("Not Working, the API URL could be broken");
      });
  }, []);
  if (!pictureInfo.hdurl) return <h3>Loading...Please hold on</h3>;
  return (
    <div className="App">
      {error && <p>{error} </p>}

      <PicOfDayArticle
        title={pictureInfo.title}
        date={pictureInfo.date}
        explanation={pictureInfo.explanation}
        hdurl={pictureInfo.hdurl}
        eventHandler={eventHandler}
        number={number}
      />
      {/* <p>{ Date()} </p> */}

    </div>
  );
}

export default App;
