import React, { useRef } from 'react';
import { CSSProperties } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Card, { Body, Header } from '../../ui-components/Card';
import Col from '../../ui-components/Col';
import Row from '../../ui-components/Row';
import { Section } from '../../ui-components/Section';
import Title from '../../ui-components/Title';
import theme from '../../styles/theme';
import TeamForm from '../../components/TeamForm';
import { teamSchema } from '../../validations/team/index';
import getValidationErrors from '../../utils/getValidationErrors';
import { teamTypes } from '../../utils/teamType';
import SquadSetup from '../../components/SquadSetup';
import { squadFormations } from '../../utils/squadFormations';

interface IStyle {
  [key: string]: CSSProperties;
}

const style: IStyle = {
  formSubtitle: {
    color: `${theme.colors.mediumLight}`,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '2rem',
  },
  cardBody: {
    maxWidth: '1000px',
    margin: 'auto',
  },
};

const NewTeam: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (formData: any) => {
    console.log(formData);
    try {
      formRef.current?.setErrors({});
      await teamSchema.validate(formData, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Section>
      <Row colgap={24} rowgap={24}>
        <Col span={12} md={12} sm={12} xs={12}>
          <Card>
            <Header>
              <Title level={2}>Create your team</Title>
            </Header>
            <Body style={style.cardBody}>
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={{
                  type: teamTypes[1].id,
                  formation: squadFormations[0].value,
                }}
              >
                <Title style={style.formSubtitle} level={3}>
                  Team Information
                </Title>
                <TeamForm />
                <Title style={style.formSubtitle} level={3}>
                  Configure Squad
                </Title>
                <SquadSetup />
              </Form>
            </Body>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};

export default NewTeam;
