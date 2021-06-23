import { useHistory } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const ThoughtInput = styled.textarea`
  width: 550px;
  height: 150px;
  max-width: 80%;
`;

const EnterThoughtForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendThoughtButton = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 50px;
`;

const EnterThoughtComponent = ({ thoughtText, setThoughtText }) => {
  const history = useHistory();

  const sendThought = () => {
    history.push("/matching");
  };

  return (
    <EnterThoughtForm key="enter-thought-form">
      <h1>What's on your mind?</h1>
      <ThoughtInput
        type="text"
        aria-label="thought-input"
        key="thought-input"
        onChange={(e) => setThoughtText(e.target.value)}
      />
      <SendThoughtButton onClick={sendThought} disabled={!thoughtText.trim()} data-testid="send-thought-button">
        Send it!
      </SendThoughtButton>
    </EnterThoughtForm>
  );
};

export default EnterThoughtComponent;
