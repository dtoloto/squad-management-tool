import React, { useState } from 'react';
import Button from '../../ui-components/Button';
import Col from '../../ui-components/Col';
import Row from '../../ui-components/Row';
import Select from '../../ui-components/Select';
import { squadFormations } from '../../utils/squadFormations';
import SquadField from '../SquadField';

// import { Container } from './styles';

const SquadSetup: React.FC = () => {
  const [formation, setFormation] = useState<string>(squadFormations[0].value);

  const handleDrag = (e: any) => {
    e.dataTransfer.setData(
      'player',
      JSON.stringify({ id: 123, name: 'Cristiano Ronaldo' }),
    );
  };

  const handleFormation = ({ value }: any) => {
    setFormation(value);
  };

  return (
    <Row colgap={48} rowgap={16}>
      <Col span={6} md={12} sm={12} xs={12}>
        <div draggable onDragStart={handleDrag} id="teste">
          Teste
        </div>

        <Select
          onChange={handleFormation}
          name="formation"
          label="Formation"
          options={squadFormations}
        />

        <SquadField formation={formation} />

        <Button block type="submit">
          Enviar
        </Button>
      </Col>
      <Col span={6} md={12} sm={12} xs={12}>
        <h1>Busca</h1>
      </Col>
    </Row>
  );
};

export default SquadSetup;
