import { render, screen } from '@testing-library/react';
import EnterThoughtComponent from './EnterThoughtComponent';

test('should contain the form to enter a thought', () => {
    render(<EnterThoughtComponent thoughtText={'test thought'} />);

    const titleElement = screen.getByText("What's on your mind?")
    expect(titleElement).toBeInTheDocument();

    const formElement = screen.getByLabelText('thought-input')
    expect(formElement).toBeInTheDocument();

    const sendButton = screen.getByTestId('send-thought-button')
    expect(sendButton).toBeInTheDocument();
  });
  