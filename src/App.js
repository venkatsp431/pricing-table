import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

function App() {
  const datas = [
    {
      pricing: "Free",
      price: 0,
      user: ["Single", true],
      storage: ["5GB", true],
      access: ["Community Access"],
      projects: ["Unlimited Private Projects"],
      support: ["Dedicated Phone Support"],
    },
    {
      pricing: "Paid",
      price: 50,
      user: ["Multiple", true],
      storage: ["5GB", true],
      access: ["Community Access", true],
      projects: ["Unlimited Private Projects", true],
      support: ["Dedicated Phone Support"],
    },
    {
      pricing: "Paid",
      price: 100,
      user: ["Dual", true],
      storage: ["5GB", true],
      access: ["Community Access", true],
      projects: ["Unlimited Private Projects"],
      support: ["Dedicated Phone Support"],
    },
  ];
  return (
    <div className="App">
      <Container className="mt-4 pt-4">
        <Row>
          {datas.map((data, idx) => (
            <Col key={idx}>
              <Card className="text-center">
                <Card.Header>
                  <Card.Text className="text-secondary">
                    {data.pricing}
                  </Card.Text>
                  <h3 className="d-inline">${data.price}</h3> /month
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {data.user[1] ? (
                      <CheckOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseOutlined style={{ color: "red" }} />
                    )}{" "}
                    <b>{data.user} User</b>
                  </Card.Text>

                  <Card.Text>
                    {data.storage[1] ? (
                      <CheckOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseOutlined style={{ color: "red" }} />
                    )}{" "}
                    {data.storage} Storage
                  </Card.Text>
                  <Card.Text>
                    {data.access[1] ? (
                      <CheckOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseOutlined style={{ color: "red" }} />
                    )}
                    {data.access}
                  </Card.Text>
                  <Card.Text>
                    {data.projects[1] ? (
                      <CheckOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseOutlined style={{ color: "red" }} />
                    )}
                    {data.projects}
                  </Card.Text>
                  <Card.Text>
                    {data.support[1] ? (
                      <CheckOutlined style={{ color: "green" }} />
                    ) : (
                      <CloseOutlined style={{ color: "red" }} />
                    )}
                    {data.support}
                  </Card.Text>
                  <div className="d-grid">
                    <Button variant="primary" size="lg">
                      Button
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
