import React from 'react';

interface IProps {
  condition: boolean;
  children: React.ReactNode;
}

const IF: React.FC<IProps> = ({ children, condition }) => {
  return <>{condition && children}</>;
};

export default IF;
