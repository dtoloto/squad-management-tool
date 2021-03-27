import React from 'react';
import Col from '../../ui-components/Col';
import Input from '../../ui-components/Input';
import Row from '../../ui-components/Row';
import Textarea from '../../ui-components/Textarea';

const TeamForm: React.FC = () => {
  return (
    <Row colgap={48} rowgap={16}>
      <Col span={6} md={12} sm={12} xs={12}>
        <Input name="name" label="Team name" placeholder="Insert team name" />
        <Textarea name="description" label="Description" />
      </Col>
      <Col span={6} md={12} sm={12} xs={12}>
        <Input
          name="website"
          label="Team website"
          placeholder="http://myteam.com"
        />
      </Col>
    </Row>
  );
};

export default TeamForm;
