import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const PicOfDayArticle = props => {
  // useEffect(() => {

  //   }, []);

  return (
    <div className="container">
      {/* <header >
          <button onClick = {props.eventHandler}>
              {props.number}
          </button>
        <h1> Picture of the day : {props.title}</h1>
      </header>
      <div className="content">
        <div>
          <img className="imgContainer" src={props.hdurl} alt={props.title} />
        </div>
        <p className="date">{props.date}</p>

        <p className="description ">{props.explanation}</p>
      </div> */}

      <Card style={{ width: "69rem" }}>
        <Card.Img variant="top" src={props.hdurl} />
        <Card.Body>
          <Card.Title>NASA picture of the day: {props.title}</Card.Title>
          <p className="date">{props.date}</p>
          <Card.Text>{props.explanation}</Card.Text>
          <a href="https://www.nasa.gov">
            {" "}
            <Button variant="primary">Learn more about space and NASA</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PicOfDayArticle;
