import React from 'react';

export interface IHead {
  key: string | number;
  title: string | number;
  dataIndex: string | number;
  sort?: boolean;
}

export interface IData {
  key: string | number;
  link: string;
  [key: string]: string | number | React.ReactNode;
}
