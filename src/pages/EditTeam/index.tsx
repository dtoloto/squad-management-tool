import React, { useEffect, useRef, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { RouteComponentProps, useHistory } from 'react-router';
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
import { useTeams } from '../../context/TeamsContext';
import { TeamData } from '../../context/interfaces';
import IF from '../../components/IF';

interface IStyle {
  [key: string]: CSSProperties;
}

interface MatchParams {
  id: string;
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

const EditTeam: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const formRef = useRef<FormHandles>(null);
  const [team, setTeam] = useState<TeamData>();
  const { updateTeam, getTeam } = useTeams();
  const history = useHistory();

  useEffect(() => {
    const item = getTeam(Number(match.params.id));
    if (!item) {
      history.push('/');
    }
    setTeam(item);
  }, []);

  const handleSubmit = async (formData: any) => {
    const {
      name,
      description,
      tags,
      type,
      website,
      formation,
      squad,
    } = formData;

    try {
      formRef.current?.setErrors({});
      await teamSchema.validate(formData, {
        abortEarly: false,
      });
      updateTeam({
        id: team.id,
        name,
        description,
        tags: tags.split(','),
        website,
        type,
        formation,
        players: squad,
      });
      history.push('/');
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <IF condition={!!team}>
      <Section>
        <Row colgap={24} rowgap={24}>
          <Col span={12} md={12} sm={12} xs={12}>
            <Card>
              <Header>
                <Title level={2}>Update your team</Title>
              </Header>
              <Body style={style.cardBody}>
                <Form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initialData={{
                    name: team?.name,
                    type: team?.type,
                    description: team?.description,
                    formation: team?.formation,
                    squad: team?.players,
                    website: team?.website,
                    tags: team?.tags,
                  }}
                >
                  <Title style={style.formSubtitle} level={3}>
                    Team Information
                  </Title>
                  <TeamForm />
                  <br />
                  <br />
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
    </IF>
  );
};

export default EditTeam;
