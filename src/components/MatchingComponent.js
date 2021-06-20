import {
    useHistory
  } from "react-router-dom";
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { sendAndReceiveRelatedThoughts } from '../api';
import { ClipLoader } from "react-spinners";

const MatchingComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MatchingComponent = ({thoughtText, setRelatedThoughts}) => {
    let history = useHistory();
  
    useEffect(() => {
      if (!thoughtText) {
        return;
      }

      sendAndReceiveRelatedThoughts(thoughtText)
        .then((data) => {
          console.log(data);
          setRelatedThoughts(data.data.thoughts); // Note that setting related thoughts re-renders the parent component
          history.push('/matched');
        });
    }, [history, setRelatedThoughts, thoughtText]); // The empty array prevents re-rendering after setting the related thoughts
  
    return (
      <MatchingComponentContainer>
        <h1>Waiting for matches...</h1>
        <ClipLoader color={'#000000'} loading={true} size={150} />
      </MatchingComponentContainer>
    )
}

export default MatchingComponent