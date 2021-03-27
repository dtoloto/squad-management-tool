import React from 'react';
import Col from '../../ui-components/Col';
import Input from '../../ui-components/Input';
import Row from '../../ui-components/Row';

// import { Container } from './styles';

const TeamForm: React.FC = () => {
  return (
    <Row colgap={48} rowgap={16}>
      <Col span={6} md={12} sm={12} xs={12}>
        <Input name="name" label="Team Name" placeholder="Insert team name" />
      </Col>
    </Row>
  );
};

export default TeamForm;
