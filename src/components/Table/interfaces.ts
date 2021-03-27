import React from 'react';

export interface IHead {
  key: string | number;
  title: string | number;
  dataIndex: string | number;
  sort?: boolean;
}

export interface IData {
  key: string | number;
  action?: React.ReactNode;
  [key: string]: string | number | React.ReactNode;
}
