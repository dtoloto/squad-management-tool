import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { CSSProperties } from 'styled-components';
import IF from '../../components/IF';
import useDebounce from '../../hooks/useDebounce';

import { Input, Container, Label } from './styles';

interface IProps {
  label?: string;
  value: string;
  onChange: (params?: any) => void;
  style?: CSSProperties;
  placeholder?: string;
}

const SearchBar: React.FC<IProps> = ({
  value,
  onChange,
  style,
  placeholder,
  label,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  const handleChange = (event: any) => {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  };

  return (
    <>
      <IF condition={!!label}>
        <Label>{label}</Label>
      </IF>
      <Container style={style}>
        <FiSearch />
        <Input
          value={displayValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </Container>
    </>
  );
};

export default SearchBar;
