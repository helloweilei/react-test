import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomSearch from './CustomSearch.jsx';

it('should render input element', async () => {
  const { findByTestId } = render(<CustomSearch></CustomSearch>);

  const inputElem = await findByTestId("input");
  expect(inputElem).toBeInTheDocument();

  fireEvent.input(inputElem, { target: {value: 'abc'} });

  expect(inputElem.value).toBe('abc');
});