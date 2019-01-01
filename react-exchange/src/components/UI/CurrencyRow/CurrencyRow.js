import React from 'react';
import { Row, Col, Card } from 'antd';
import Rate from '../../../models/Rate';

export default function CurrencyRow(props) {
  const { rate } = props;
  return (
    <Card>
      <Row>
        <Col span={6} offset={6}>
          {rate.label}
        </Col>
        <Col span={6} offset={6}>
          ${rate.value}
        </Col>
      </Row>
    </Card>
  );
}

CurrencyRow.propTypes = {
  rate: Rate.propTypeStructure.isRequired,
};
