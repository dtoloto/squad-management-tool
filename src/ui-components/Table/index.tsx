import React, { useEffect, useState } from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import IF from '../../components/IF';
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
import { Icon } from '../Icon';
import theme from '../../styles/theme';
import Empty from '../Empty';
import { useTeams } from '../../context/TeamsContext';
import usePrevious from '../../hooks/usePrevious';

interface IProps {
  header: IHead[];
  data: IData[];
}

interface ISort {
  key: string;
  type: 'asc' | 'dsc';
}

const styles = {
  icon: { cursor: 'pointer' },
};

const Table: React.FC<IProps> = ({ header, data }) => {
  const previousData = usePrevious(data);
  const [sortedData, setSortedData] = useState<IData[]>(data);
  const [filter, setFilter] = useState<ISort>();
  const { deleteTeam } = useTeams();
  const history = useHistory();

  useEffect(() => {
    if (previousData && !_.isEqual(previousData, data)) {
      setSortedData(data);
    }
  }, [data]);

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

  const handleDelete = (item: string | number) => {
    deleteTeam(item);
  };

  const handleUpdate = (link: string) => {
    history.push(link);
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
            <TR key={item.key} data-testid="table-content">
              {header.map(head => (
                <TD key={`${item.key}_${head.key}`}>{item[head.dataIndex]}</TD>
              ))}
              <TD style={{ textAlign: 'right', color: theme.colors.secondary }}>
                <Tooltip label="Edit">
                  <Icon
                    data-testid={item.link}
                    style={styles.icon}
                    onClick={() => {
                      handleUpdate(item.link);
                    }}
                  >
                    <MdEdit />
                  </Icon>
                </Tooltip>
                <Tooltip label="Delete">
                  <Icon
                    data-testid={item.key}
                    style={styles.icon}
                    onClick={() => {
                      handleDelete(item.key);
                    }}
                  >
                    <MdDelete />
                  </Icon>
                </Tooltip>
              </TD>
            </TR>
          ))}
        </tbody>
      </Container>
      <IF condition={data.length === 0}>
        <Empty />
      </IF>
    </ResponsiveTable>
  );
};

export default Table;
