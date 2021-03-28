/* eslint-disable no-param-reassign */
import { useField } from '@unform/core';
import React, { useEffect, useRef, useState } from 'react';
import IF from '../../components/IF';
import Tag from '../Textarea/Tag';

import { Container, Label, Input } from './styles';

interface IProps {
  name: string;
  initialData?: string[];
  label?: string;
}

const InputTag: React.FC<IProps> = ({ initialData = [], name, label }) => {
  const [tags, setTags] = useState<string[]>(initialData);
  const inputRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  useEffect(() => {
    if (defaultValue) {
      setTags(defaultValue);
      tagRef.current.value = `${[...defaultValue]}`;
    }
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: tagRef,
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

  useEffect(() => {
    if (tagRef.current) tagRef.current.value = `${[...tags]}`;
  }, [tagRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { key } = e;

    if (key === 'Enter' || e.which === 13 || e.keyCode === 13) {
      e.preventDefault();
    }

    if (
      (value.length === 0 && (key === 'Enter' || key === ';')) ||
      value === ';'
    ) {
      return;
    }

    if (value[0] === ';') {
      if (inputRef.current) inputRef.current.value = value.slice(-1, 1);
    }

    if (key === 'Enter' || key === ';') {
      if (inputRef.current) inputRef.current.value = '';

      const findTag = tags.find(tag => tag === value);
      if (findTag) {
        return;
      }

      setTags([...tags, value]);
      if (tagRef.current) tagRef.current.value = `${[...tags, value]}`;
    }

    if (value.length === 0 && key === 'Backspace') {
      const items = tags;
      items.pop();
      if (tagRef.current) tagRef.current.value = `${[...items]}`;
      setTags([...items]);
    }
  };

  const handleRemove = (tag?: string | number) => {
    const filtered = tags.filter(item => item !== tag);
    setTags(filtered);
    if (tagRef.current) tagRef.current.value = `${[...filtered]}`;
  };

  return (
    <>
      <IF condition={!!label}>
        <Label htmlFor={fieldName}>{label}</Label>
      </IF>
      <Container htmlFor={fieldName}>
        {tags.map(tag => (
          <Tag key={tag} label={tag} closable onRemove={handleRemove} />
        ))}
        <input ref={tagRef} style={{ display: 'none' }} />
        <Input onKeyDown={handleKeyDown} id={fieldName} ref={inputRef} />
      </Container>
    </>
  );
};

export default InputTag;
