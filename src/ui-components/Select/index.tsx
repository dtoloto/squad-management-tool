import React, { useRef, useEffect } from 'react';
import { OptionTypeBase, Props as SelectProps } from 'react-select';
import { useField } from '@unform/core';
import { CSSProperties } from 'styled-components';
import { StyledSelect, Container, Label } from './styles';
import IF from '../../components/IF';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
  style?: CSSProperties;
  options?: any[];
  setDefault?: (params: any) => void;
}

const Select: React.FC<Props> = ({
  name,
  style,
  label,
  options = [],
  setDefault,
  ...rest
}) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    if (defaultValue && setDefault) {
      setDefault({ value: defaultValue });
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <IF condition={!!label}>
        <Label htmlFor={fieldName}>{label}</Label>
      </IF>
      <Container style={style}>
        <StyledSelect
          defaultValue={options.find(item => item.value === defaultValue)}
          ref={selectRef}
          classNamePrefix="react-select"
          options={options}
          {...rest}
        />
      </Container>
    </>
  );
};

export default Select;
