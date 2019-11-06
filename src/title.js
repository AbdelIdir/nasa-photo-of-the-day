import React from "react";
import styled from 'styled-components';


// const bigPadding = '4px';

// const StyledItemDisplay = styled.div`
//   padding: ${bigPadding};
//   margin: 2px;
//   border: 2px solid grey;
//   border-radius: 4px;

//   span {
//     color: ${props => props.name.length % 2 === 0 ? 'blue' : 'red'};
//     margin-right: 5px;
//     font-weight: ${props => props.bold ? 'bold' : 'initial'};
//     &:hover {
//       color: green;
//       font-weight: bold;
//     }
//   }
// `

const TitleStyle = styled.div`

border: 5px solid red;

h1 {
    color: blue;
    h1:hover:before { content:" hmmmm"};
    &:hover {
        color: green;
        before: {content:"Reply!"}
    }`



 




function Title(props) {
  const { anH1 } = props;
  return (
    <TitleStyle>
      <h1>{anH1}</h1>
    </TitleStyle>
  );
}

export default Title;
