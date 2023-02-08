import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./WelcomePage.css";



export default function WelcomePage() {


  const BasicDiv = ({ title, btnText, linkUrl }) => {


    return (
      <div className="divWelcome" >
        <h2 className="text-center responsiveH2Font">{title}</h2>
        <hr style={{ height: '4px' }} />

        <Form className="add">
          <Link to={linkUrl}>
            <Button className="my-2 my-lg-0 formControl welcomeButtons" block>{btnText}</Button>
          </Link>
        </Form>

      </div>

    )
  }


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
