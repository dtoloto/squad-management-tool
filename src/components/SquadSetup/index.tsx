import React, { useState } from 'react';
import { IPlayer } from '../../interfaces/player';
import Button from '../../ui-components/Button';
import Col from '../../ui-components/Col';
import Row from '../../ui-components/Row';
import Select from '../../ui-components/Select';
import { squadFormations } from '../../utils/squadFormations';
import Players from '../Players';
import SquadField from '../SquadField';

interface IProps {
  initialData?: IPlayer[];
}

const SquadSetup: React.FC<IProps> = ({ initialData }) => {
  const [formation, setFormation] = useState<string>(squadFormations[0].value);
  const [defaultformation, setDefaultFormation] = useState<string>(
    squadFormations[0].value,
  );
  const [players, setPlayers] = useState<IPlayer[]>(initialData);

  const handleDefaultFormation = ({ value }: any) => {
    setDefaultFormation(value);
  };

  const handleFormation = ({ value }: any) => {
    setFormation(value);
  };

  const handlePlayers = (playersList: IPlayer[]) => {
    setPlayers(playersList);
  };

  return (
    <Row colgap={24} rowgap={24}>
      <Col span={6} md={12} sm={12} xs={12}>
        <Select
          onChange={handleFormation}
          name="formation"
          label="Formation"
          options={squadFormations}
          setDefault={handleDefaultFormation}
        />

        <SquadField
          name="squad"
          formation={formation}
          defaultFormation={defaultformation}
          setPlayers={handlePlayers}
          players={players}
        />
      </Col>
      <Col span={6} md={12} sm={12} xs={12}>
        <Players currentPlayers={players} />
      </Col>
      <Col span={6} md={12} sm={12} xs={12}>
        <Button block type="submit">
          Save
        </Button>
      </Col>
    </Row>
  );
};

export default SquadSetup;
