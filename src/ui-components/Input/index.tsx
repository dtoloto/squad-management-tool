/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container, Label, StyledInput } from './styles';
import IF from '../../components/IF';

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  console.log(error);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        <IF condition={!!label}>
          <Label htmlFor={fieldName} className={error ? 'error' : ''}>
            {label}
          </Label>
        </IF>
        <StyledInput
          className={error ? 'error' : ''}
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />
      </Container>
    </>
  );
};

export default Input;
