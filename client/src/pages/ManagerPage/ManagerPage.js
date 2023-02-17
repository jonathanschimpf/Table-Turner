import { Container, Col, Row } from "react-bootstrap";
import BasicDiv from "../../components/BasicDiv/BasicDiv";
import "../ViewAllTables/ViewAllTables"
import "../WelcomePage/WelcomePage.css";

function ManagerComp() {

  const rowClass = "mb-4"

  return (
    <>
      <Container className="vertical-center">

        <div className="mt-4">

          <Row className={rowClass}>
            <Col>
              <BasicDiv
                title="Add New Table"
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


          <Row className={rowClass}>
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

        </div>

      </Container>

    </>
  );

};

export default ManagerComp;