/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-curly-newline */
import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { Container, Label, StyledInput, TitleLabel } from './styles';
import IF from '../../components/IF';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options: {
    id: string;
    value: string;
    label: string;
  }[];
}

export default function RadioInput({ name, options, label, ...rest }: Props) {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find(ref => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find(ref => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find(ref => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      <IF condition={!!label}>
        <TitleLabel>{label}</TitleLabel>
      </IF>
      {options.map(option => (
        <Label htmlFor={option.id} key={option.id}>
          <StyledInput
            ref={(ref: any) => inputRefs.current.push(ref as HTMLInputElement)}
            id={option.id}
            type="radio"
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            {...rest}
          />
          {option.label}
        </Label>
      ))}
    </Container>
  );
}
