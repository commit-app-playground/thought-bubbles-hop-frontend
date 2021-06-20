import {
    useHistory
  } from "react-router-dom";
import styled from 'styled-components';
import React from 'react';
import Carousel from "nuka-carousel";

const MatchedComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RestartButton = styled.button`
    margin-top: 15px;
    width: 200px;
    height: 50px;
`;

const ThoughtBox = styled.div`
  height: 150px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`

const ThoughtContent = styled.p`
  vertical-align: middle;
  text-align: center;
  margin-left: 80px;
  margin-right: 80px;
`

const MatchedComponent = ({relatedThoughts}) => {
    const history = useHistory();

    const thoughtElements = relatedThoughts.map((thought, index) =>
      <ThoughtBox key={'thought-' + index}>
        <ThoughtContent>{thought.text}</ThoughtContent>
      </ThoughtBox>
    );
  
    const restart = () => {
      history.push('/');
    }
  
    return (
      <MatchedComponentContainer>
        <h1>Matched {relatedThoughts.length} {relatedThoughts.length === 1 ? 'thought' : 'thoughts'}</h1>
        <Carousel width={'700px'}>
          {thoughtElements}
        </Carousel>

        <RestartButton onClick={restart}>Again?</RestartButton>
      </MatchedComponentContainer>
    )
  }

  export default MatchedComponent