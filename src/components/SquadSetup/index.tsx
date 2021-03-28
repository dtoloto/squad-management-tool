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
  const [players, setPlayers] = useState<IPlayer[]>(initialData);

  const handleFormation = ({ value }: any) => {
    setFormation(value);
  };

  const handlePlayers = (playersList: IPlayer[]) => {
    setPlayers(playersList);
  };

  return (
    <Row colgap={48} rowgap={16}>
      <Col span={6} md={12} sm={12} xs={12}>
        <Select
          onChange={handleFormation}
          name="formation"
          label="Formation"
          options={squadFormations}
        />

        <SquadField
          name="squad"
          formation={formation}
          setPlayers={handlePlayers}
          players={players}
        />

        <Button block type="submit">
          Enviar
        </Button>
      </Col>
      <Col span={6} md={12} sm={12} xs={12}>
        <Players currentPlayers={players} />
      </Col>
    </Row>
  );
};

export default SquadSetup;
