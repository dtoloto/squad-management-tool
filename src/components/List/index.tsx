import React from 'react';
import { Link } from 'react-router-dom';

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
      {data.map(item => (
        <Link key={item.label} to={item.link}>
          <ListItem>
            <Label>{item.label}</Label>
            <Score>{item.score}</Score>
          </ListItem>
        </Link>
      ))}
    </Container>
  );
};

export default List;
