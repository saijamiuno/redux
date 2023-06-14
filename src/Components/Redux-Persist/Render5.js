import React from "react";
import { Row, Col, Card } from "antd";
import { useSelector } from "react-redux";
export default function Render5() {
  const { selectedFruit } = useSelector((state) => state.persistFriuts);

  return (
    <div>
      <Col span={24}>
        <Row>
          <Col span={20}>
            <Card
              style={{ textAlign: "left", backgroundColor: "#cbf0f8" }}
              bodyStyle={{ textAlign: "left" }}
              title="Render 5.js"
            >
              <h1>Selected fruit {selectedFruit}</h1>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
}