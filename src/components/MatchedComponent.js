import {
    useHistory
  } from "react-router-dom";
import styled from 'styled-components';
import React from 'react'; 

const MatchedComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const RestartButton = styled.button`
    margin-top: 15px;
    width: 200px;
    height: 50px;
`;


const MatchedComponent = ({relatedThoughts}) => {
    let history = useHistory();

    const thoughtElements = relatedThoughts.map((thought, index) =>
      <li key={'thought-' + index}>{thought.text}</li>
    );
  
    const restart = () => {
      history.push('/');
    }
  
    return (
      <MatchedComponentContainer>
        <h1>Matched {relatedThoughts.length} thoughts</h1>
        <ul>
          {thoughtElements}
        </ul>
  
        <RestartButton onClick={restart}>Again?</RestartButton>
      </MatchedComponentContainer>
    )
  }

  export default MatchedComponent