import { Container } from "react-bootstrap";
import BasicDiv from "../../components/BasicDiv/BasicDiv";
import "./WelcomePage.css";


export default function WelcomePage() {





  return (
    <>
      <Container className="vertical-center mb-4">

        <BasicDiv
          title="Add a New Table"
          btnText="+Add"
          linkUrl="/startTable"
        />

        <BasicDiv
          title="View All Tables"
          btnText="View"
          linkUrl="/viewTables"
        />

      </Container>
    </>
  );
};
