import styled from 'styled-components';

const HeaderBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Title = styled.strong`
    font-size: 20px;
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 10px;
`

const HeaderComponent = () => {
  return (
    <HeaderBar>
      <Title>thought bubbles</Title>
      <Logo src="ThoughtBubblesIcon.png" alt="Thought Bubbles Logo" />
    </HeaderBar>
  )
}

export default HeaderComponent