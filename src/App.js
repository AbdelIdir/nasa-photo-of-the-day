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

  function eventHandler(e) {
    setNumber(number + 1);
  }
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setPictureInfo(response.data);
      })
      .catch(error => {
        setError("Not Working, the API URL could be broken");
      });
  }, []);

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
    </div>
  );
}

export default App;
