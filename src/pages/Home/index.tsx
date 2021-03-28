import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../../ui-components/Button';
import Card, { Header, Body } from '../../ui-components/Card';
import Col from '../../ui-components/Col';
import HighlightPlayers from '../../components/HighlightPlayers';
import List from '../../ui-components/List';
import Row from '../../ui-components/Row';
import { Section } from '../../ui-components/Section';
import Table from '../../ui-components/Table';
import Title from '../../ui-components/Title';
import theme from '../../styles/theme';
import { useTeams } from '../../context/TeamsContext';
import { IData } from '../../ui-components/Table/interfaces';
import {
  IFeaturedPlayer,
  mostPickedPlayer,
  lessPickedPlayer,
} from '../../utils/teamsData';

const header = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    sort: true,
  },
  {
    key: 'description',
    dataIndex: 'description',
    title: 'Description',
    sort: true,
  },
];

const list = [
  {
    label: 'Barcelona',
    score: 29.9,
    link: '/',
  },
  {
    label: 'Real Madrid',
    score: 29.9,
    link: '/',
  },
  {
    label: 'Inter de Milão',
    score: 29.9,
    link: '/',
  },
  {
    label: 'Milan',
    score: 29.9,
    link: '/',
  },
  {
    label: 'PSG',
    score: 29.9,
    link: '/',
  },
];

const style = {
  titleList: {
    color: `${theme.colors.mediumDark}`,
    marginBottom: '.8rem',
    fontSize: '1rem',
  },
  teamsCard: {
    minHeight: '100%',
  },
};

const Home: React.FC = () => {
  const { teams } = useTeams();
  const [data, setData] = useState<IData[]>([]);
  const [lessPicked, setLessPicked] = useState<IFeaturedPlayer>();
  const [mostPicked, setMostPicked] = useState<IFeaturedPlayer>();

  useEffect(() => {
    setData(
      teams.map(team => ({ ...team, key: team.id, link: `/edit/${team.id}` })),
    );
    setMostPicked(mostPickedPlayer(teams));
    setLessPicked(lessPickedPlayer(teams));
  }, [teams]);

  return (
    <Section>
      <Row colgap={24} rowgap={24}>
        <Col span={6} md={12} sm={12} xs={12}>
          <Card style={style.teamsCard}>
            <Header>
              <Title level={2}>My Teams</Title>
              <Button link="/new">
                <FaPlus />
              </Button>
            </Header>
            <Body>
              <Table header={header} data={data} />
            </Body>
          </Card>
        </Col>
        <Col span={6} md={12} sm={12} xs={12}>
          <Card style={{ marginBottom: 24 }}>
            <Header>
              <Title level={2}>Top 5</Title>
            </Header>
            <Body>
              <Row colgap={16} rowgap={16}>
                <Col span={6} sm={12} xs={12}>
                  <Title level={3} style={style.titleList}>
                    Highest avg age
                  </Title>
                  <List data={list} />
                </Col>
                <Col span={6} sm={12} xs={12}>
                  <Title level={3} style={style.titleList}>
                    Lowest avg age
                  </Title>
                  <List data={list} />
                </Col>
              </Row>
            </Body>
          </Card>
          <HighlightPlayers
            mostPickedPlayer={mostPicked}
            lessPickedPlayer={lessPicked}
          />
        </Col>
      </Row>
    </Section>
  );
};

export default Home;
