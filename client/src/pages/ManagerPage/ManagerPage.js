import { Container, Col, Row } from "react-bootstrap";
import BasicDiv from "../../components/BasicDiv/BasicDiv";
import "../ViewAllTables/ViewAllTables"
import "../WelcomePage/WelcomePage.css";

function ManagerComp() {

  return (
    <>
      <Container className="vertical-center">

        <Row>
          <Col>
            <BasicDiv
              title="Add a New Table"
              btnText="+Add"
              linkUrl="/startTable"
            />
          </Col>

          <Col>
            <BasicDiv
              title="View All Tables"
              btnText="View"
              linkUrl="/viewRestaurant"
            />
          </Col>
        </Row>


        <Row>
          <Col>
            <BasicDiv
              title="Update Menu"
              btnText="Update"
              linkUrl="/importMenu"
            />
          </Col>
          <Col>
            <BasicDiv
              title="View Kitchen"
              btnText="View"
              linkUrl="/kitchen"
            />
          </Col>
        </Row>
      </Container>

    </>
  );

};

export default ManagerComp;