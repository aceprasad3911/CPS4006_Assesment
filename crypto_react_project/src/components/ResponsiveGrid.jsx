import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ResponsiveGrid = () => (
  <Container>
    <Row>
      <Col xs={12} md={6} lg={4}></Col>
      <Col xs={12} md={6} lg={4}></Col>
      <Col xs={12} md={6} lg={4}></Col>
    </Row>
  </Container>
);

export default ResponsiveGrid;