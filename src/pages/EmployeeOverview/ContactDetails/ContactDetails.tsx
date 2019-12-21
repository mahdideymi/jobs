import React, { FunctionComponent } from 'react';
import { Row, Col } from 'antd';
import './ContactDetails.scss';
const ContactDetails: FunctionComponent = () => {
  return (
    // <div className="ContactDetails">
    <Row type="flex" className="ContactDetails">
      <Col className="Col" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="Col" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="Col" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
      <Col className="Col" span={6}>
        <div className="gutter-box">col-6</div>
      </Col>
    </Row>
    // </div>
  );
};

export { ContactDetails };
