import React, { useState } from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
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
import Tooltip from '../Tooltip';

interface IProps {
  header: IHead[];
  data: IData[];
}

interface ISort {
  key: string;
  type: 'asc' | 'dsc';
}

const Table: React.FC<IProps> = ({ header, data }) => {
  const [sortedData, setSortedData] = useState<IData[]>(data);
  const [filter, setFilter] = useState<ISort>();

  const handleSort = async (key: string) => {
    data.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];
      if (!aValue || !bValue) {
        return 0;
      }
      if (aValue < bValue) {
        return -1;
      }
      if (aValue > bValue) {
        return 1;
      }
      return 0;
    });

    if (!filter?.key || filter?.key !== key) {
      setFilter({ key, type: 'asc' });
      setSortedData([...data]);
    } else if (filter?.key === key && filter?.type === 'asc') {
      setFilter({ key, type: 'dsc' });
      setSortedData([...data.reverse()]);
    } else {
      setFilter({ key, type: 'asc' });
      setSortedData([...data]);
    }
  };

  return (
    <ResponsiveTable>
      <Container>
        <THEAD>
          <TR>
            {header.map(item => (
              <TH key={item.key}>
                {item.title}
                <IF condition={item.sort ? item.sort : false}>
                  <SortIcon
                    onClick={() => {
                      handleSort(`${item.key}`);
                    }}
                  >
                    <TiArrowUnsorted />
                  </SortIcon>
                </IF>
              </TH>
            ))}
          </TR>
        </THEAD>
        <tbody>
          {sortedData.map(item => (
            <TR key={item.key}>
              {header.map(head => (
                <TD key={`${item.key}_${head.key}`}>{item[head.dataIndex]}</TD>
              ))}
              <TD>
                <Tooltip label="Edit">
                  <MdEdit />
                </Tooltip>
              </TD>
            </TR>
          ))}
        </tbody>
      </Container>
    </ResponsiveTable>
  );
};

export default Table;
