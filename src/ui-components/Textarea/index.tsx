/* eslint-disable react/require-default-props */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import { Container, Label, StyledTextarea } from './styles';
import IF from '../../components/IF';

interface Props {
  name: string;
  label?: string;
  maxLength?: number;
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  maxLength,
  ...rest
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [length, setLength] = useState<number>(0);

  const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setLength(e.currentTarget.value.length);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef,
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
            <IF condition={!!maxLength}>{` (${length}/${maxLength})`}</IF>
          </Label>
        </IF>
        <StyledTextarea
          onChange={handleChange}
          className={error ? 'error' : ''}
          id={fieldName}
          ref={textareaRef}
          defaultValue={defaultValue}
          maxLength={maxLength}
          {...rest}
        />
      </Container>
    </>
  );
};

export default Textarea;
