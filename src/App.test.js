import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter/i);
  expect(linkElement).toBeInTheDocument();
});

test('Entered element in the input box should be a capital letter and maxlength of the entered element should be 1', async () => {
  render(<App />);

  userEvent.type(screen.getByLabelText("Enter an alphabet :"), "d")
  // eslint-disable-next-line no-undef
  await waitFor(() => {
     expect(screen.getByLabelText("Enter an alphabet :")).toHaveValue("D");
     // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
     expect(screen.getByLabelText("Enter an alphabet :")).not.toHaveValue("d");

     // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
     expect(screen.getByLabelText("Enter an alphabet :").value).toHaveLength(1)

  });
  

});

