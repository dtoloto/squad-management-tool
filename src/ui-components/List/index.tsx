import React from 'react';
import { useHistory } from 'react-router-dom';
import IF from '../../components/IF';
import Empty from '../Empty';

import { Container, ListItem, Label, Score } from './styles';

interface IListItem {
  label: string;
  score: number;
  link: string;
}

interface IProps {
  data: IListItem[];
  type: 'highest' | 'lowest';
}

const List: React.FC<IProps> = ({ data, type }) => {
  const history = useHistory();

  const handleUpdate = (link: string) => {
    history.push(link);
  };
  return (
    <Container data-testid={type}>
      <IF condition={!!data}>
        {data.map(item => (
          <ListItem
            data-testid={item.label}
            key={item.label}
            onClick={() => {
              handleUpdate(item.link);
            }}
          >
            <Label>{item.label}</Label>
            <Score>{item.score.toFixed(1)}</Score>
          </ListItem>
        ))}
      </IF>
      <IF condition={!data || data.length === 0}>
        <Empty />
      </IF>
    </Container>
  );
};

export default List;
