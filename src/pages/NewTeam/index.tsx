import React from 'react';
import { CSSProperties } from 'styled-components';
import Card, { Body, Header } from '../../ui-components/Card';
import Col from '../../ui-components/Col';
import Row from '../../ui-components/Row';
import { Section } from '../../ui-components/Section';
import Title from '../../ui-components/Title';
import theme from '../../styles/theme';

interface IStyle {
  formSubtitle: CSSProperties;
}

const style: IStyle = {
  formSubtitle: {
    color: `${theme.colors.mediumLight}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
};

const NewTeam: React.FC = () => {
  return (
    <Section>
      <Row colgap={24} rowgap={24}>
        <Col span={12}>
          <Card>
            <Header>
              <Title level={2}>Create your team</Title>
            </Header>
            <Body>
              <Title style={style.formSubtitle} level={3}>
                Team Information
              </Title>
            </Body>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};

export default NewTeam;
