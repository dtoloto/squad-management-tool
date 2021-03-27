import React from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';
import IF from '../IF';
import { IData, IHead } from './interfaces';

import {
  ResponsiveTable,
  Container,
  THEAD,
  TH,
  TR,
  TD,
  SortIcon,
} from './styles';

interface IProps {
  header: IHead[];
  data: IData[];
}

const Table: React.FC<IProps> = ({ header, data }) => {
  return (
    <ResponsiveTable>
      <Container>
        <THEAD>
          <TR>
            {header.map(item => (
              <TH key={item.key}>
                {item.title}
                <IF condition={item.sort ? item.sort : false}>
                  <SortIcon>
                    <TiArrowUnsorted />
                  </SortIcon>
                </IF>
              </TH>
            ))}
          </TR>
        </THEAD>
        <tbody>
          {data.map(item => (
            <TR key={item.key}>
              {header.map(head => (
                <TD key={`${item.key}_${head.key}`}>{item[head.dataIndex]}</TD>
              ))}
            </TR>
          ))}
        </tbody>
      </Container>
    </ResponsiveTable>
  );
};

export default Table;
