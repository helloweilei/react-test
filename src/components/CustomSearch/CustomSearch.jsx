import React, { useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';

const Input = styled.input`
  border: 1px solid #999;
  border-radius: 4px;
  outline: none;
  width: 200px;
  min-height: 32px;
`;

const CustomSearch = () => {
  const [value, setValue] = useState('');

  const searchValue = useDebounce((val) => {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log(`search finished for value: ${val}`);
    }, 1000);
  }, 200);

  const onInput = (e) => {
    setValue(e.target.value);
    searchValue(e.target.value);
  };

  return <Input data-testid="input" value={value} onInput={ onInput }></Input>;
};

export default CustomSearch;