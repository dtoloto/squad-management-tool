import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../../components/Button';
import Card, { Header, Body } from '../../components/Card';
import Col from '../../components/Col';
import HighlightPlayers from '../../components/HighlightPlayers';
import List from '../../components/List';
import Row from '../../components/Row';
import { Section } from '../../components/Section';
import Table from '../../components/Table';
import Title from '../../components/Title';
import theme from '../../styles/theme';

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

const data = [
  {
    key: '1',
    name: 'Barcelona',
    description: 'ZBarcelona Squad',
    link: '/edit/1',
  },
  {
    key: '2',
    name: 'Real Madrid',
    description: 'AReal Madrid Squad',
    link: '/edit/2',
  },
  {
    key: '3',
    name: 'Corinthians',
    description: 'Corinthians Squad',
    link: '/edit/3',
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
          <HighlightPlayers />
        </Col>
      </Row>
    </Section>
  );
};

export default Home;
