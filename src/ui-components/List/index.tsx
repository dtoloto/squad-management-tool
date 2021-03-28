import React from 'react';
import { Link } from 'react-router-dom';
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
}

const List: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <IF condition={!!data}>
        {data.map(item => (
          <Link key={item.label} to={item.link}>
            <ListItem>
              <Label>{item.label}</Label>
              <Score>{item.score.toFixed(1)}</Score>
            </ListItem>
          </Link>
        ))}
      </IF>
      <IF condition={!data || data.length === 0}>
        <Empty />
      </IF>
    </Container>
  );
};

export default List;
