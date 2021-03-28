import React from 'react';

import { IoCloseOutline } from 'react-icons/io5';
import IF from '../../../components/IF';

import { Container, RemoveButton } from './styles';

interface IProps {
  label: string;
  onRemove?: (params?: string | number) => void;
  closable?: boolean;
}

const Tag: React.FC<IProps> = ({ label, onRemove, closable = false }) => {
  const handleRemove = () => {
    if (onRemove) onRemove(label);
  };

  return (
    <Container>
      <span>{label}</span>
      <IF condition={closable}>
        <RemoveButton onClick={handleRemove}>
          <IoCloseOutline />
        </RemoveButton>
      </IF>
    </Container>
  );
};

export default Tag;
